"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Database as DatabaseIcon, BarChart3, Brain, Wrench } from "lucide-react";
import { profile } from "@/data/profile";

const categoryStyle: Record<string, { badge: string; header: string; icon: typeof Code2 }> = {
  "Programming Languages": {
    badge: "bg-sage-700 text-white",
    header: "text-sage-700",
    icon: Code2,
  },
  Frontend: {
    badge: "bg-sage-500 text-white",
    header: "text-sage-600",
    icon: Layout,
  },
  Backend: {
    badge: "bg-sage-800 text-white",
    header: "text-sage-800",
    icon: Server,
  },
  Database: {
    badge: "bg-sage-300 text-sage-900",
    header: "text-sage-700",
    icon: DatabaseIcon,
  },
  "Data Analysis & Visualization": {
    badge: "bg-sage-200 text-sage-900 border border-sage-400",
    header: "text-sage-600",
    icon: BarChart3,
  },
  "Machine Learning & AI": {
    badge: "bg-sage-400 text-sage-900",
    header: "text-sage-700",
    icon: Brain,
  },
  "Tools & Platforms": {
    badge: "bg-white text-sage-700 border border-sage-300",
    header: "text-sage-500",
    icon: Wrench,
  },
};

const defaultStyle = {
  badge: "bg-sage-100 text-sage-800",
  header: "text-sage-700",
  icon: Code2,
};

export default function TechStack() {
  return (
    <section id="techstack" className="min-h-screen bg-white py-24">
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
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-sage-900">
            Tech Stack
          </h2>
          <div className="mt-4 w-16 h-1 bg-sage-400 rounded-full" />
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {profile.techStack.map((cat, i) => {
            const style = categoryStyle[cat.category] ?? defaultStyle;
            const Icon = style.icon;

            return (
              <motion.div
                key={cat.category}
                className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h3
                  className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider mb-4 ${style.header}`}
                >
                  <Icon size={18} />
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full ${style.badge}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
