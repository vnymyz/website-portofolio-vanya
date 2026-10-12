"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { setLanguage, useI18n, type Lang } from "@/lib/i18n";

const options: { value: Lang; label: string }[] = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
];

export default function LanguageToggle() {
  const { lang, t } = useI18n();

  // Keep <html lang> in step with the visible language (screen readers, hyphenation).
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className="fixed right-3 top-3 sm:right-5 sm:top-5 z-40 max-w-[calc(100vw-1.5rem)] flex items-center rounded-full border border-sage-300 bg-white p-0.5 shadow-md"
    >
      {options.map(({ value, label }) => {
        const active = lang === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setLanguage(value)}
            aria-pressed={active}
            aria-label={t(value === "en" ? "lang.switchToEn" : "lang.switchToId")}
            className={`relative h-7 min-w-8 rounded-full px-2 text-[11px] font-bold transition-colors duration-300 sm:h-8 sm:min-w-9 sm:px-2.5 sm:text-xs ${
              active ? "text-white" : "text-sage-700 hover:text-sage-900"
            }`}
          >
            {/* One shared pill: it slides from one option to the other. */}
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-sage-700"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
