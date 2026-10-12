import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { siteUrl } from "@/lib/site";
import LanguageToggle from "@/components/LanguageToggle";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
  display: "swap",
});

const description =
  "Software Engineer Instructor, Full-stack Developer & Data Science Educator based in Bekasi, Indonesia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vanya Mayazura | Software Engineer & Data Science Educator",
    template: "%s | Vanya Mayazura",
  },
  description,
  keywords: [
    "Vanya Mayazura",
    "Portfolio",
    "Software Engineer",
    "Full-stack Developer",
    "Data Science",
    "Indonesia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Vanya Mayazura",
    title: "Vanya Mayazura | Software Engineer & Data Science Educator",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanya Mayazura | Software Engineer & Data Science Educator",
    description,
  },
};

// Runs before first paint: returning visitors skip the splash, so hide it in
// CSS instead of flashing it until React hydrates.
const visitedScript =
  'try{if(sessionStorage.getItem("hasVisited"))document.documentElement.dataset.visited="1"}catch(e){}';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: visitedScript }} />
      </head>
      <body className="bg-sage-100 text-sage-800 antialiased overflow-x-hidden">
        <MotionConfig reducedMotion="user">
          <LanguageToggle />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
