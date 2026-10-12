"use client";

import { useId, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import {
  Globe,
  Workflow,
  BarChart3,
  Brain,
  GraduationCap,
  BookOpen,
  Check,
  ChevronDown,
} from "lucide-react";
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

const CLASS_IDS = ["kids", "learn"];
const EASE = [0.22, 1, 0.36, 1] as const;

type Service = ReturnType<typeof useI18n>["profile"]["services"][number];

function ServiceCard({
  service,
  variant,
  open,
  onToggle,
  buildLabel,
}: {
  service: Service;
  variant: "business" | "class";
  open: boolean;
  onToggle: () => void;
  buildLabel: string;
}) {
  const panelId = useId();
  const Icon = serviceIcon[service.id as keyof typeof serviceIcon] ?? Globe;
  const business = variant === "business";

  return (
    <motion.div
      layout
      transition={{ duration: 0.4, ease: EASE }}
      className={`rounded-xl ${open ? "md:col-span-2" : ""} ${
        business ? "glass-card shadow-sm" : "border border-sage-200 bg-white/70"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className={`flex w-full items-center gap-3 text-left ${business ? "p-5" : "p-4"}`}
      >
        <span
          className={`flex shrink-0 items-center justify-center rounded-xl ${
            business
              ? "h-11 w-11 bg-sage-700 text-white"
              : "h-9 w-9 border border-sage-300 text-sage-700"
          }`}
        >
          <Icon size={business ? 22 : 18} aria-hidden="true" />
        </span>

        <span
          className={`min-w-0 flex-1 font-bold text-sage-900 ${business ? "text-lg" : "text-base"}`}
        >
          {service.title}
        </span>

        <ChevronDown
          size={20}
          aria-hidden="true"
          className={`shrink-0 text-sage-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Always in the DOM (SEO, translation); `inert` keeps it out of the
          tab order and the accessibility tree while collapsed. */}
      <motion.div
        id={panelId}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="overflow-hidden"
        inert={!open}
      >
        <div className={business ? "px-5 pb-5" : "px-4 pb-4"}>
          <p className="mb-4 text-sm leading-relaxed text-sage-700">{service.summary}</p>
          {business && (
            <p className="mb-3 text-sm font-bold text-sage-900">{buildLabel}</p>
          )}
          <ul
            className={`gap-x-8 gap-y-2 ${
              open ? "md:grid md:grid-cols-2" : "space-y-2"
            }`}
          >
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-sage-800"
              >
                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-sage-700"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const { t, profile } = useI18n();
  const [openBusiness, setOpenBusiness] = useState<string | null>(null);
  const [openClass, setOpenClass] = useState<string | null>(null);

  const business = profile.services.filter((s) => !CLASS_IDS.includes(s.id));
  const classes = profile.services.filter((s) => CLASS_IDS.includes(s.id));

  return (
    <section id="services" className="bg-sage-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} />

        <LayoutGroup id="services-business">
          <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
            {business.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                variant="business"
                open={openBusiness === service.id}
                onToggle={() =>
                  setOpenBusiness((current) => (current === service.id ? null : service.id))
                }
                buildLabel={t("services.canBuild")}
              />
            ))}
          </div>
        </LayoutGroup>

        <p className="mb-4 mt-12 text-sm font-bold text-sage-900">{t("services.classes")}</p>

        <LayoutGroup id="services-classes">
          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
            {classes.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                variant="class"
                open={openClass === service.id}
                onToggle={() =>
                  setOpenClass((current) => (current === service.id ? null : service.id))
                }
                buildLabel={t("services.canBuild")}
              />
            ))}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
