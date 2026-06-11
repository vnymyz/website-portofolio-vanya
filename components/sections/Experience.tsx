"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";

const typeColor: Record<string, string> = {
  "Full-time": "bg-sage-700 text-white",
  "Part-time": "bg-sage-200 text-sage-800",
  Internship: "bg-sage-300 text-sage-900",
};

const COLLAPSED_COUNT = 2;

export default function Experience() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggle = (i: number) =>
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section id="experience" className="min-h-screen bg-sage-50 py-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sage-500 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            My journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-sage-900">
            Experience
          </h2>
          <div className="mt-4 w-16 h-1 bg-sage-400 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-0.5 bg-sage-300" />

          <div className="space-y-10">
            {profile.experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                className="relative pl-16 md:pl-24"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 md:left-5 top-5 w-5 h-5 rounded-full border-2 border-sage-300 flex items-center justify-center ${
                    exp.current ? "bg-sage-700 border-sage-700" : "bg-white"
                  }`}
                >
                  {exp.current && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-sage-900 text-base md:text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-sage-600 font-semibold text-sm">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          typeColor[exp.type] ?? "bg-sage-100 text-sage-700"
                        }`}
                      >
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights
                      .slice(0, COLLAPSED_COUNT)
                      .map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-slate-500 text-sm"
                        >
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-sage-400" />
                          {h}
                        </li>
                      ))}
                  </ul>

                  <AnimatePresence initial={false}>
                    {expanded[i] && exp.highlights.length > COLLAPSED_COUNT && (
                      <motion.ul
                        className="space-y-2 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {exp.highlights.slice(COLLAPSED_COUNT).map((h, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-slate-500 text-sm pt-2"
                          >
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-sage-400" />
                            {h}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {exp.highlights.length > COLLAPSED_COUNT && (
                    <button
                      onClick={() => toggle(i)}
                      className="mt-3 flex items-center gap-1 text-xs font-semibold text-sage-700 hover:text-sage-900 transition-colors"
                    >
                      {expanded[i] ? "Show less" : `Show ${exp.highlights.length - COLLAPSED_COUNT} more`}
                      <motion.span
                        animate={{ rotate: expanded[i] ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom cap */}
          <div className="absolute left-[18px] md:left-[29px] -bottom-1 w-3 h-3 rounded-full bg-sage-300 border-2 border-sage-400" />
        </div>
      </div>
    </section>
  );
}
