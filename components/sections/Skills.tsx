"use client";

import SectionHeader from "@/components/SectionHeader";
import { useI18n } from "@/lib/i18n";

const groupLabel =
  "inline-block bg-sage-700 text-white text-sm font-bold px-4 py-1.5 rounded-full";

export default function Skills() {
  const { t, profile } = useI18n();

  return (
    <section id="skills" className="py-24 bg-sage-50">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader eyebrow={t("skills.eyebrow")} title={t("skills.title")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* LEFT: Technical focus + Soft skills */}
          <div className="space-y-10 lg:pr-12">
            <div>
              <h3 className={`${groupLabel} mb-6`}>{t("skills.technicalFocus")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.technicalFocus.map((item) => (
                  <div
                    key={item.area}
                    className="p-4 rounded-xl bg-white border border-sage-200 hover:border-sage-400 transition-colors"
                  >
                    <p className="font-semibold text-sage-800 text-sm mb-1">{item.area}</p>
                    <p className="text-xs text-sage-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={`${groupLabel} mb-6`}>{t("skills.softSkills")}</h3>
              <div className="flex flex-wrap gap-2">
                {profile.softSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-sage-100 text-sage-800 border border-sage-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Certificates + Education + Languages */}
          <div className="space-y-10 lg:border-l lg:border-sage-300 lg:pl-12">
            <div>
              <h3 className={`${groupLabel} mb-5`}>{t("skills.certificates")}</h3>
              <ul className="space-y-3">
                {profile.certificates.map((cert) => (
                  <li key={cert.title} className="flex items-start gap-2.5">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-sage-400" />
                    <span className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                      <span className="font-semibold text-sage-800 text-sm">{cert.title}</span>
                      <span className="text-sage-600 text-xs">{cert.issuer} · {cert.year}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={`${groupLabel} mb-5`}>{t("skills.education")}</h3>
              <ul className="space-y-4">
                {profile.education.map((edu) => (
                  <li key={edu.institution} className="flex items-start gap-2.5">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-sage-400" />
                    <div className="flex items-start justify-between gap-2 flex-1">
                      <div>
                        <p className="font-bold text-sage-800 text-sm">{edu.institution}</p>
                        <p className="text-sage-700 text-xs mt-0.5">
                          {edu.degree}
                          {edu.gpa && (
                            <span className="text-sage-600">
                              {" "}· {t("skills.gpa")} {edu.gpa}/4.00
                            </span>
                          )}
                        </p>
                        <p className="text-sage-600 text-xs mt-0.5">{edu.location}</p>
                      </div>
                      <span className="shrink-0 text-xs text-sage-600 font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={`${groupLabel} mb-5`}>{t("skills.languages")}</h3>
              <ul className="space-y-3">
                {profile.languages.map((lang) => (
                  <li key={lang.name} className="flex items-start gap-2.5">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-sage-400" />
                    <div className="flex items-center justify-between gap-2 flex-1">
                      <div>
                        <p className="font-semibold text-sage-800 text-sm">{lang.name}</p>
                        <p className="text-sage-600 text-xs">{lang.level}</p>
                      </div>
                      {lang.score && (
                        <span className="text-xs font-medium text-sage-600">{lang.score}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
