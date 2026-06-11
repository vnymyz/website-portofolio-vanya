import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="bg-sage-100 text-slate-700 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
