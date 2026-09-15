"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  ExternalLink,
  GitCommit,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

const REPOS_PER_PAGE = 4;

type GithubRepo = {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  updatedAt: string;
};

type RecentCommit = {
  message: string;
  repo: string;
  date: string;
  url: string;
};

function timeAgo(dateStr: string) {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (days < 1) return "today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} mo ago`;
  return `${Math.floor(months / 12)} yr ago`;
}

type ContributionDay = { date: string; count: number };
type ContributionWeek = { days: ContributionDay[] };
type Contributions = { totalContributions: number; weeks: ContributionWeek[] };

type GithubData = {
  profile: {
    login: string;
    name: string | null;
    avatar: string;
    bio: string | null;
    profileUrl: string;
    publicRepos: number;
    followers: number;
    following: number;
  };
  topRepos: GithubRepo[];
  contributions: Contributions | null;
  recentCommits: RecentCommit[];
};

function levelColor(count: number) {
  if (count === 0) return "bg-sage-100";
  if (count <= 3) return "bg-sage-300";
  if (count <= 6) return "bg-sage-500";
  if (count <= 9) return "bg-sage-700";
  return "bg-sage-900";
}

export default function GithubActivity() {
  const [github, setGithub] = useState<GithubData | null>(null);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("GitHub fetch failed");
        return res.json();
      })
      .then(setGithub)
      .catch((err) => {
        if (err.name !== "AbortError") setError(true);
      });
    return () => controller.abort();
  }, []);

  const pageCount = github
    ? Math.ceil(github.topRepos.length / REPOS_PER_PAGE)
    : 0;
  const visibleRepos = github
    ? github.topRepos.slice(
        page * REPOS_PER_PAGE,
        page * REPOS_PER_PAGE + REPOS_PER_PAGE,
      )
    : [];

  const goToPage = (next: number) => {
    setPage(Math.max(0, Math.min(next, pageCount - 1)));
  };

  return (
    <section id="github" className="bg-sage-50 py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sage-700 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            What I&apos;ve been building
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-sage-900">
            GitHub Activity
          </h2>
          <div className="mt-4 w-16 h-1 bg-sage-400 rounded-full" />
        </motion.div>

        {error && (
          <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-3xl py-14 shadow-sm border border-sage-200">
            <GithubIcon size={48} />
            <p className="text-sage-700 text-sm font-medium">
              GitHub activity unavailable right now
            </p>
          </div>
        )}

        {!error && !github && (
          <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-3xl py-14 shadow-sm border border-sage-200">
            <span className="animate-pulse">
              <GithubIcon size={48} />
            </span>
            <p className="text-sage-700 text-sm font-medium">
              Loading GitHub activity…
            </p>
          </div>
        )}

        {github && (
          <div className="glass-card rounded-3xl p-6 sm:p-10">
            <a
              href={github.profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 mb-8 group"
            >
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-sage-200 shrink-0">
                <Image
                  src={github.profile.avatar}
                  alt={github.profile.login}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-xl font-bold text-sage-900 group-hover:text-sage-700 transition-colors truncate">
                  {github.profile.name ?? github.profile.login}
                </p>
                {github.profile.bio && (
                  <p className="text-sage-600 text-sm truncate">
                    {github.profile.bio}
                  </p>
                )}
                <p className="text-sage-600 text-xs flex items-center gap-1 mt-1">
                  <BookOpen size={12} />
                  {github.profile.publicRepos} public repos
                </p>
              </div>
            </a>

            {github.contributions && (
              <div className="mb-8">
                <p className="text-sage-700 text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                  {github.contributions.totalContributions.toLocaleString()}{" "}
                  Contributions in the Last Year
                </p>
                <div className="flex items-stretch">
                  <div className="overflow-x-auto pb-1">
                    <div className="flex gap-[3px] w-fit">
                      {github.contributions.weeks.map((week, wi) => (
                        <div key={wi} className="flex flex-col gap-[3px]">
                          {week.days.map((day) => (
                            <div
                              key={day.date}
                              title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                              className={`w-[10px] h-[10px] rounded-sm ${levelColor(day.count)}`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:block relative w-80 self-stretch shrink-0 rounded-xl overflow-hidden ml-15">
                    <Image
                      src="/images/catbutter.gif"
                      alt="A cat"
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Recently Updated repos */}
            <p className="text-sage-700 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Recently Updated
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {visibleRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1.5 rounded-2xl border border-sage-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sage-400/40 hover:border-sage-400"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sage-900 text-sm font-semibold group-hover:text-sage-700 transition-colors truncate">
                      {repo.name}
                    </p>
                    <ExternalLink
                      size={14}
                      className="text-sage-400 shrink-0"
                    />
                  </div>
                  {repo.description && (
                    <p className="text-sage-600 text-xs line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  {repo.language && (
                    <span className="text-xs text-sage-600 flex items-center gap-1 mt-1">
                      <span className="w-2 h-2 rounded-full bg-sage-400" />
                      {repo.language}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {pageCount > 1 && (
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 0}
                  aria-label="Previous page"
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-sage-300 text-sage-700 hover:border-sage-500 hover:bg-sage-100 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronLeft size={14} />
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: pageCount }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToPage(i)}
                      aria-label={`Go to page ${i + 1}`}
                      aria-current={page === i ? "true" : undefined}
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                        page === i
                          ? "bg-sage-700 text-white"
                          : "text-sage-700 border border-sage-300 hover:border-sage-500 hover:bg-sage-100"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === pageCount - 1}
                  aria-label="Next page"
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-sage-300 text-sage-700 hover:border-sage-500 hover:bg-sage-100 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            )}

            {/* Recently Committed — short brief, no expand */}
            {github.recentCommits.length > 0 && (
              <div className="mt-10 pt-8 border-t border-sage-200">
                <p className="text-sage-700 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                  Recently Committed
                </p>
                <ul className="space-y-3">
                  {github.recentCommits.map((commit, i) => (
                    <li key={i}>
                      <a
                        href={commit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-2.5 hover:text-sage-900"
                      >
                        <GitCommit
                          size={14}
                          className="text-sage-400 shrink-0 mt-0.5"
                        />
                        <div className="min-w-0">
                          <p className="text-sage-800 text-sm truncate group-hover:text-sage-900 transition-colors">
                            {commit.message}
                          </p>
                          <p className="text-sage-500 text-xs mt-0.5">
                            {commit.repo} · {timeAgo(commit.date)}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
