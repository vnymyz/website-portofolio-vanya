// Canonical origin for metadata, sitemap and share cards. Set
// NEXT_PUBLIC_SITE_URL to your custom domain; on Vercel it falls back to the
// production URL, and locally to localhost.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";
