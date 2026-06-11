"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Code2, FolderOpen, Zap, Mail } from "lucide-react";

const navItems = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "techstack", label: "Tech Stack", icon: Code2 },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

interface Props {
  activeSection: string;
}

export default function BubbleNav({ activeSection }: Props) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = activeSection === id;
        return (
          <div key={id} className="relative group flex items-center justify-end">
            {/* Tooltip */}
            <span className="absolute right-14 whitespace-nowrap text-xs font-semibold text-sage-700 bg-white border border-sage-300 px-2.5 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
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
  );
}
