"use client";

import { Code2, Layout, Server, Database as DatabaseIcon, BarChart3, Brain, Wrench } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { profile as profileEn } from "@/data/profile";
import { useI18n } from "@/lib/i18n";

// Keyed by the English category name; translated entries are matched by index.
const categoryStyle: Record<string, { badge: string; header: string; icon: typeof Code2 }> = {
  "Programming Languages": {
    badge: "bg-sage-900 text-white",
    header: "text-sage-800",
    icon: Code2,
  },
  Frontend: {
    badge: "bg-sage-300 text-sage-900",
    header: "text-sage-700",
    icon: Layout,
  },
  Backend: {
    badge: "bg-sage-800 text-white",
    header: "text-sage-800",
    icon: Server,
  },
  Database: {
    badge: "bg-sage-200 text-sage-900 border border-sage-400",
    header: "text-sage-700",
    icon: DatabaseIcon,
  },
  "Data Analysis & Visualization": {
    badge: "bg-sage-100 text-sage-900 border border-sage-400",
    header: "text-sage-700",
    icon: BarChart3,
  },
  "Machine Learning & AI": {
    badge: "bg-sage-400 text-sage-900",
    header: "text-sage-700",
    icon: Brain,
  },
  "Tools & Platforms": {
    badge: "bg-white text-sage-800 border border-sage-300",
    header: "text-sage-700",
    icon: Wrench,
  },
};

const defaultStyle = {
  badge: "bg-sage-100 text-sage-800",
  header: "text-sage-700",
  icon: Code2,
};

export default function TechStack() {
  const { t, profile } = useI18n();

  return (
    <section id="techstack" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader eyebrow={t("techstack.eyebrow")} title={t("techstack.title")} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {profile.techStack.map((cat, i) => {
            const englishName = profileEn.techStack[i].category;
            const style = categoryStyle[englishName] ?? defaultStyle;
            const Icon = style.icon;

            return (
              <div
                key={englishName}
                className="glass-card rounded-xl p-6 border border-sage-300 hover:shadow-md transition-shadow"
              >
                <h3 className={`flex items-center gap-2 font-bold text-base mb-4 ${style.header}`}>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
