const GITHUB_USERNAME = "vnymyz";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const CONTRIBUTIONS_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

// Always fetch live — same reasoning as /api/steam: caching would risk
// baking a rate-limit or outage error in and serving it to everyone.
export const dynamic = "force-dynamic";

type GithubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type GithubRepo = {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
};

type GithubCommit = {
  sha: string;
  commit: { message: string; author: { date: string } };
};

// Unauthenticated GitHub REST calls are capped at 60 req/hour per IP —
// easy to exhaust since one page load fires several of these. Using the
// token (already required for the contribution calendar) raises that to
// 5000/hour and avoids spurious rate-limit failures.
function githubHeaders() {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (GITHUB_TOKEN) headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  return headers;
}

async function fetchRepoCommits(fullName: string) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${fullName}/commits?per_page=3`,
      { headers: githubHeaders() }
    );
    if (!res.ok) return [];
    const commits: GithubCommit[] = await res.json();
    return commits.map((c) => ({
      message: c.commit.message.split("\n")[0],
      repo: fullName.split("/")[1],
      date: c.commit.author.date,
      url: `https://github.com/${fullName}/commit/${c.sha}`,
    }));
  } catch {
    return [];
  }
}

// Combines the most recent commits across a handful of the most-recently-
// updated repos into one feed, since GitHub's public events feed omits
// activity from private repos.
async function fetchRecentCommits(repos: GithubRepo[]) {
  const candidates = repos.filter((r) => !r.fork).slice(0, 5);
  const perRepo = await Promise.all(candidates.map((r) => fetchRepoCommits(r.full_name)));
  return perRepo
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
}

async function fetchContributions() {
  if (!GITHUB_TOKEN) return null;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: CONTRIBUTIONS_QUERY,
      variables: { username: GITHUB_USERNAME },
    }),
  });

  if (res.status === 401) {
    // Visible only in server logs (Vercel function logs / your terminal) —
    // never sent to visitors. The token has expired or was revoked.
    console.error("[github] Renew GitHub token — GITHUB_TOKEN is expired or invalid");
    return null;
  }

  if (!res.ok) return null;

  const json = await res.json();
  if (json.errors) {
    console.error("[github] GraphQL error:", json.errors);
    return null;
  }

  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) return null;

  return {
    totalContributions: calendar.totalContributions as number,
    weeks: calendar.weeks.map((w: { contributionDays: { date: string; contributionCount: number }[] }) => ({
      days: w.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount,
      })),
    })),
  };
}

export async function GET() {
  try {
    const headers = githubHeaders();

    const [userRes, reposRes, contributions] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=20`,
        { headers }
      ),
      fetchContributions(),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return Response.json(
        { error: "Could not reach GitHub" },
        { status: 502 }
      );
    }

    const user: GithubUser = await userRes.json();
    const repos: GithubRepo[] = await reposRes.json();
    const recentCommits = await fetchRecentCommits(repos);

    const topRepos = repos
      .filter((r) => !r.fork)
      .slice(0, 12)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        language: r.language,
        stars: r.stargazers_count,
        updatedAt: r.updated_at,
      }));

    return Response.json({
      profile: {
        login: user.login,
        name: user.name,
        avatar: user.avatar_url,
        bio: user.bio,
        profileUrl: user.html_url,
        publicRepos: user.public_repos,
        followers: user.followers,
        following: user.following,
      },
      topRepos,
      contributions,
      recentCommits,
    });
  } catch {
    return Response.json(
      { error: "Could not reach GitHub" },
      { status: 502 }
    );
  }
}
