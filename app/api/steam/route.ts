const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

type SteamPlayer = {
  personaname: string;
  avatarfull: string;
  profileurl: string;
  personastate: number;
};

type SteamGame = {
  appid: number;
  name: string;
  playtime_forever: number;
  playtime_2weeks?: number;
  rtime_last_played?: number;
};

export async function GET() {
  if (!STEAM_API_KEY || !STEAM_ID) {
    return Response.json(
      { error: "Steam API not configured" },
      { status: 500 }
    );
  }

  const [summaryRes, gamesRes] = await Promise.all([
    fetch(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${STEAM_ID}`
    ),
    fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=1&include_played_free_games=1`
    ),
  ]);

  const summaryData = await summaryRes.json();
  const gamesData = await gamesRes.json();

  const player: SteamPlayer | undefined = summaryData?.response?.players?.[0];
  const games: SteamGame[] = gamesData?.response?.games ?? [];

  const topGames = games
    .sort((a, b) => b.playtime_forever - a.playtime_forever)
    .slice(0, 9)
    .map((g) => ({
      appid: g.appid,
      name: g.name,
      playtimeHours: Math.round(g.playtime_forever / 60),
      header: `https://cdn.cloudflare.steamstatic.com/steam/apps/${g.appid}/header.jpg`,
    }));

  const recentGames = games
    .filter((g) => g.rtime_last_played)
    .sort((a, b) => (b.rtime_last_played ?? 0) - (a.rtime_last_played ?? 0))
    .slice(0, 3)
    .map((g) => ({
      appid: g.appid,
      name: g.name,
      playtimeHours: Math.round(g.playtime_forever / 60),
      playtime2WeeksHours: Math.round((g.playtime_2weeks ?? 0) / 60),
      header: `https://cdn.cloudflare.steamstatic.com/steam/apps/${g.appid}/header.jpg`,
    }));

  return Response.json({
    player: player
      ? {
          name: player.personaname,
          avatar: player.avatarfull,
          profileUrl: player.profileurl,
          online: player.personastate !== 0,
        }
      : null,
    gameCount: games.length,
    topGames,
    recentGames,
  });
}
