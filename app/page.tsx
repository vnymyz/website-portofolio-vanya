"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, PawPrint } from "lucide-react";
import SplashScreen from "@/components/SplashScreen";
import BubbleNav from "@/components/BubbleNav";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ContactBanner from "@/components/sections/ContactBanner";

const SECTIONS = ["about", "experience", "techstack", "skills", "projects", "contact"];
const SPLASH_DURATION = 3200;

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (sessionStorage.getItem("hasVisited")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sessionStorage only readable client-side
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading !== false) return;

    // Scrollspy: the active section is the last one whose top has
    // crossed a line 30% down the viewport. Works for sections of
    // any height, including short ones at the bottom of the page.
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.3;
      let current = SECTIONS[0];

      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }

      // At the very bottom of the page the last section + footer may
      // together be shorter than the viewport, so its top never crosses
      // the threshold — force it active once the page is fully scrolled.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;
      if (atBottom) {
        current = SECTIONS[SECTIONS.length - 1];
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <>
      <SplashScreen isVisible={isLoading === true} duration={SPLASH_DURATION} />

      {isLoading === false && (
        <>
          <BubbleNav activeSection={activeSection} />

          {/* Top-left social icons */}
          <div className="fixed left-5 top-5 z-40 flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-sage-300 text-sage-600 shadow-md transition-all hover:bg-sage-700 hover:border-sage-700 hover:text-white hover:shadow-lg hover:shadow-sage-400/40"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-sage-300 text-sage-600 shadow-md transition-all hover:bg-sage-700 hover:border-sage-700 hover:text-white hover:shadow-lg hover:shadow-sage-400/40"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-sage-300 text-sage-600 shadow-md transition-all hover:bg-sage-700 hover:border-sage-700 hover:text-white hover:shadow-lg hover:shadow-sage-400/40"
            >
              <Mail size={15} />
            </a>
          </div>

          <main>
            <About />
            <Experience />
            <TechStack />
            <Skills />
            <Projects />
            <ContactBanner />
          </main>

          <footer className="relative bg-sage-900 text-sage-400 py-6 text-center text-sm">
            <p>
              © 2026{" "}
              <span className="text-sage-200 font-semibold">Vanya</span>
              . All rights reserved.
            </p>

            {/* Fun Facts easter egg link */}
            <motion.div
              className="absolute right-6 top-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.15, rotate: -8 }}
              whileTap={{ scale: 0.92 }}
            >
              <Link
                href="/fun-facts"
                aria-label="Secret: Fun Facts about me"
                title="Psst... wanna know a secret?"
                className="block text-sage-500 hover:text-sage-200 transition-colors"
              >
                <PawPrint size={20} />
              </Link>
            </motion.div>
          </footer>
        </>
      )}
    </>
  );
}
