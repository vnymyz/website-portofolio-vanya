import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { MotionConfig } from "framer-motion";
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
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vanya MP",
  description:
    "Software Engineer Instructor, Full-stack Developer & Data Science Educator based in Bekasi, Indonesia.",
  keywords: [
    "Vanya Mayazura",
    "Portfolio",
    "Software Engineer",
    "Full-stack Developer",
    "Data Science",
    "Indonesia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-sage-100 text-sage-800 antialiased overflow-x-hidden">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
