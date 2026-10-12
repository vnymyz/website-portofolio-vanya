"use client";

import { Globe, Workflow, BarChart3, Brain, GraduationCap, BookOpen, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useI18n } from "@/lib/i18n";

const serviceIcon = {
  web: Globe,
  automation: Workflow,
  data: BarChart3,
  ai: Brain,
  kids: GraduationCap,
  learn: BookOpen,
} as const;

export default function Services() {
  const { t, profile } = useI18n();

  return (
    <section id="services" className="bg-sage-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.services.map((service) => {
            const Icon = serviceIcon[service.id as keyof typeof serviceIcon] ?? Globe;
            return (
              <div
                key={service.id}
                className="glass-card rounded-xl p-6 shadow-sm flex flex-col md:[&:last-child:nth-child(odd)]:col-span-2"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-sage-700 text-white flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-sage-900 text-lg">{service.title}</h3>
                </div>

                <p className="text-sage-700 text-sm leading-relaxed mb-4">{service.summary}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-sage-800 leading-relaxed"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-sage-700" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
