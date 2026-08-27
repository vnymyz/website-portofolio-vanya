"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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

const markVisited = () => sessionStorage.setItem("hasVisited", "true");

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [activeSection, setActiveSection] = useState("about");
  const splashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("hasVisited")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sessionStorage only readable client-side
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    splashTimer.current = setTimeout(() => {
      setIsLoading(false);
      markVisited();
    }, SPLASH_DURATION);
    return () => {
      if (splashTimer.current) clearTimeout(splashTimer.current);
    };
  }, []);

  useEffect(() => {
    if (isLoading !== false) return;

    // Scrollspy via IntersectionObserver — no per-scroll-frame layout reads.
    // A thin band 30% down the viewport marks a section "active" the
    // moment it crosses into it.
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        // A single callback can batch multiple intersecting entries (e.g.
        // after a fast scroll), and entry order isn't guaranteed to match
        // document order — pick the one that's furthest down the page so
        // the highlighted nav item is always deterministic.
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) return;
        const winner = intersecting.reduce((furthest, e) =>
          SECTIONS.indexOf(e.target.id) > SECTIONS.indexOf(furthest.target.id)
            ? e
            : furthest
        );
        setActiveSection(winner.target.id);
      },
      { rootMargin: "-30% 0px -69% 0px", threshold: 0 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    // If the last section + footer together are shorter than the
    // viewport, the band above never crosses it — force it active
    // once the footer scrolls into view.
    const footerEl = document.querySelector("footer");
    const footerObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActiveSection(SECTIONS[SECTIONS.length - 1]);
        }
      },
      { threshold: 0 }
    );
    if (footerEl) footerObserver.observe(footerEl);

    return () => {
      sectionObserver.disconnect();
      footerObserver.disconnect();
    };
  }, [isLoading]);

  return (
    <>
      <SplashScreen
        isVisible={isLoading === true}
        duration={SPLASH_DURATION}
        onSkip={() => {
          if (splashTimer.current) clearTimeout(splashTimer.current);
          setIsLoading(false);
          markVisited();
        }}
      />

      {isLoading === false && (
        <>
          <BubbleNav activeSection={activeSection} onNavigate={setActiveSection} />

          {/* Top-left social icons */}
          <div className="fixed left-3 top-3 sm:left-5 sm:top-5 z-40 flex items-center gap-3">
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

          <footer className="relative bg-sage-900 text-sage-400 py-6 px-4 pb-20 md:pb-6 text-center text-sm">
            <p>
              © 2026{" "}
              <span className="text-sage-200 font-semibold">Vanya</span>
              . All rights reserved.
            </p>

            {/* Fun Facts link */}
            <Link
              href="/fun-facts"
              className="mt-6 inline-flex items-center gap-1.5 text-sage-400 hover:text-sage-200 transition-colors text-xs font-semibold"
            >
              <PawPrint size={14} />
              Fun facts about me
            </Link>
          </footer>
        </>
      )}
    </>
  );
}
