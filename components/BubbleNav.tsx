"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Code2, FolderOpen, Zap, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const navItems = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "techstack", label: "Tech Stack", icon: Code2 },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "github", label: "GitHub", icon: GithubIcon },
  { id: "contact", label: "Contact", icon: Mail },
];

interface Props {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function BubbleNav({ activeSection, onNavigate }: Props) {
  const scrollTo = (id: string) => {
    // Set active immediately on click — the scroll-position observer only
    // fires on a threshold *change*, so it can miss this when the target
    // section was already overlapping the detection band before the click
    // (happens near the bottom of the page, where sections are short).
    onNavigate(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop: floating right-side bubbles */}
      <motion.nav
        className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <div key={id} className="relative group flex items-center justify-end">
              {/* Tooltip */}
              <span className="absolute right-14 whitespace-nowrap text-xs font-semibold text-sage-700 bg-white border border-sage-300 px-2.5 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none">
                {label}
              </span>

              {/* Bubble */}
              <motion.button
                onClick={() => scrollTo(id)}
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 border ${
                  isActive
                    ? "bg-sage-700 border-sage-700 text-white shadow-sage-400/40 shadow-lg"
                    : "bg-white border-sage-300 text-sage-600 hover:border-sage-500"
                }`}
              >
                <Icon size={16} />
              </motion.button>
            </div>
          );
        })}
      </motion.nav>

      {/* Mobile: fixed bottom icon bar */}
      <motion.nav
        className="md:hidden fixed bottom-0 inset-x-0 z-40 flex items-center justify-around bg-white/95 backdrop-blur border-t border-sage-200 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-label={label}
              aria-current={isActive ? "true" : undefined}
              className="flex flex-col items-center justify-center gap-0.5 py-2.5 flex-1 min-w-0"
            >
              <Icon
                size={18}
                className={isActive ? "text-sage-700" : "text-sage-400"}
              />
              <span
                className={`text-[10px] font-medium truncate max-w-full px-0.5 ${
                  isActive ? "text-sage-700" : "text-sage-400"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </motion.nav>
    </>
  );
}
