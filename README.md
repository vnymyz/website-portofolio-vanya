# Vanya Mayazura Puspitaningrum — Portfolio Website

Personal portfolio SPA built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (custom sage green palette)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Plus Jakarta Sans (body, via `next/font`), Press Start 2P (splash screen)
- **Hosting:** Vercel (recommended)

## Color Palette

| Token      | Hex       | Usage                      |
| ---------- | --------- | -------------------------- |
| `sage-100` | `#F1F3E0` | Page background            |
| `sage-300` | `#D2DCB6` | Borders, dividers          |
| `sage-500` | `#A1BC98` | Secondary accent           |
| `sage-700` | `#778873` | Primary accent, buttons    |
| `sage-900` | `#3d4a3a` | Dark backgrounds, headings |

## Prerequisites

- Node.js 20+ and npm
- A Steam Web API key + SteamID64 (for the Game Library section — see [Environment Variables](#environment-variables))

## Getting Started

```bash
git clone <repo-url>
cd portfolio-vanya
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Environment Variables

The Game Library section on `/fun-facts` pulls live data from Steam via a server-side API route. Create a `.env.local` file in the project root:

```bash
STEAM_API_KEY=your_steam_web_api_key
STEAM_ID=your_steamid64
```

- Get an API key at [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey) (any domain name works, e.g. your Vercel domain)
- Find your SteamID64 by pasting your profile URL into [steamid.io](https://steamid.io/)

`.env.local` is gitignored. For production, add both variables in Vercel → Project Settings → Environment Variables.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # run eslint
```

## Structure

- `data/profile.ts` — single source of truth for all content (bio, experience, tech stack, skills, projects, fun facts, social links)
- `app/page.tsx` — main SPA page: splash screen, scrollspy, section order, social icons, footer with Fun Facts easter-egg link
- `app/fun-facts/page.tsx` — hidden Fun Facts page (Steam game library, cats, moments, favorite food, hobbies)
- `app/api/steam/route.ts` — server-side route that fetches your Steam profile, owned games, and recently played games
- `app/layout.tsx` — fonts (Plus Jakarta Sans for body, Press Start 2P for splash) + metadata
- `app/globals.css` — sage green color tokens + custom animations
- `app/icon.tsx` — generated favicon (green glowing "V")
- `next.config.ts` — `images.remotePatterns` allowlist for external image hosts (Unsplash, pravatar, placehold.co, Steam CDN)
- `public/images/` — your photos (avatar, cats, etc.)
- `public/gifs/` — hobby GIFs shown on the Fun Facts page
- `components/SplashScreen.tsx` — pixel-heart loading screen ("Welcome to Vanya's Portfolio")
- `components/BubbleNav.tsx` — fixed right-side bubble nav with active-section highlight
- `components/icons.tsx` — custom SVG icons (GitHub, LinkedIn, Steam, Instagram)
- `components/sections/`
  - `About.tsx` — intro, bio, avatar with 3D hover tilt (section 1)
  - `Experience.tsx` — work history timeline (section 2)
  - `TechStack.tsx` — tech/tools badges (section 3)
  - `Skills.tsx` — soft + hard skills (section 4)
  - `Projects.tsx` — project cards (section 5)
  - `ContactBanner.tsx` — "Let's work together" CTA with social links (section 6)

## Adding Projects

Edit `data/profile.ts` and add to the `projects` array:

```ts
projects: [
  {
    title: "My Project",
    description: "What it does and why it matters.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://your-live-demo.com",
    github: "https://github.com/vnymyz/repo-name",
  },
];
```

## Adding Your Photo

Replace the Unsplash placeholder image in `components/sections/About.tsx`:

```tsx
<Image
  src="/images/photo.jpg" // place your photo in public/images/
  alt={profile.name}
  width={384}
  height={384}
  className="w-full h-full object-cover"
  priority
/>
```

## Adding Hobby GIFs

The Fun Facts page renders a card per hobby with a GIF and "# Name" caption. Edit `data/profile.ts` → `funFacts.hobbies`:

```ts
hobbies: [
  { name: "Gaming", gif: "/gifs/sweaty-speedrunner.gif" },
  { name: "Swimming", gif: "/gifs/underwater-hello-im-under-water.gif" },
];
```

Drop the GIF files in `public/gifs/`.

## Editing the Favorite Food Menu

`data/profile.ts` → `funFacts.favoriteFoods` is a restaurant-menu-style breakdown:

```ts
favoriteFoods: {
  topPick: "My Mom's Cooking", // highlighted "#1 Pick" banner
  mains: [...],
  vegetables: [...],
  snacks: [...],
  desserts: [...],
  drinks: [...],
};
```

Each category becomes a column in `app/fun-facts/page.tsx`.

## Easter egg

Click the paw print icon in the footer to navigate to `/fun-facts`.

## Status / TODO

- [ ] Add actual projects to `data/profile.ts` → `projects` array
- [ ] Replace Unsplash placeholder avatar with a real photo
- [ ] Replace Unsplash placeholder cat photos with real photos
- [x] Deploy to Vercel — [vanya-mp.vercel.app](https://vanya-mp.vercel.app)
- [x] Steam library integration on Fun Facts page (profile, top games, recently played)
- [ ] (Optional) Dark mode toggle
- [ ] (Optional) Contact form
- [ ] (Idea) Instagram feed integration on Fun Facts page

## Deployment

```bash
npx vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com) for automatic deployments.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
