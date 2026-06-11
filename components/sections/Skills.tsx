"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-sage-50">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sage-500 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            What I bring
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-sage-900">
            Skills &amp; Credentials
          </h2>
          <div className="mt-4 w-16 h-1 bg-sage-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Technical focus + Soft skills */}
          <div className="space-y-10">
            {/* Technical focus areas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="inline-block bg-sage-700 text-white font-bold text-xl mb-6 px-4 py-1.5 rounded-full">
                Technical Focus
              </h3>
              <div className="space-y-4">
                {[
                  { area: "Fullstack Web Development", detail: "React, Next.js, Laravel, Express, Golang" },
                  { area: "Data Science & Machine Learning", detail: "Python, Scikit-learn, TensorFlow, PyTorch" },
                  { area: "Backend Development", detail: "REST APIs, Node.js, PHP, Golang" },
                  { area: "Teaching & Mentoring", detail: "Bootcamps, workshops, 1-on-1 mentoring" },
                  { area: "AI & Deep Learning", detail: "NLP, Computer Vision, OpenCV, YOLOv8" },
                ].map((item, i) => (
                  <motion.div
                    key={item.area}
                    className="p-4 rounded-2xl bg-white border border-sage-200 hover:border-sage-400 hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  >
                    <p className="font-semibold text-sage-800 text-sm mb-1">{item.area}</p>
                    <p className="text-xs text-slate-400">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h3 className="inline-block bg-sage-700 text-white font-bold text-xl mb-6 px-4 py-1.5 rounded-full">
                Soft Skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {profile.softSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-sage-200 hover:border-sage-400 hover:shadow-md transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  >
                    <p className="font-semibold text-sage-800">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Certificates + Education + Languages */}
          <div className="space-y-10">
            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="inline-block bg-sage-700 text-white font-bold text-xl mb-5 px-4 py-1.5 rounded-full">
                Certificates
              </h3>
              <div className="space-y-3">
                {profile.certificates.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-sage-200 hover:border-sage-400 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center shrink-0 group-hover:bg-sage-200 transition-colors">
                      <Award size={16} className="text-sage-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sage-800 text-sm">{cert.title}</p>
                      <p className="text-slate-400 text-xs">{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h3 className="inline-block bg-sage-700 text-white font-bold text-xl mb-5 px-4 py-1.5 rounded-full">
                Education
              </h3>
              <div className="space-y-4">
                {profile.education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="p-5 rounded-2xl bg-white border border-sage-200 hover:border-sage-400 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-bold text-sage-800 text-sm">{edu.institution}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{edu.degree}</p>
                        <p className="text-sage-500 text-xs mt-1">{edu.location}</p>
                      </div>
                      <span className="shrink-0 text-xs text-sage-600 font-medium bg-sage-100 border border-sage-200 px-2.5 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    {edu.gpa && (
                      <div className="mt-3 pt-3 border-t border-sage-100 flex items-center gap-2">
                        <span className="text-xs text-slate-400">GPA</span>
                        <span className="text-sm font-bold text-sage-700">{edu.gpa}</span>
                        <span className="text-xs text-slate-300">/ 4.00</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="inline-block bg-sage-700 text-white font-bold text-xl mb-5 px-4 py-1.5 rounded-full">
                Languages
              </h3>
              <div className="space-y-3">
                {profile.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-sage-200 hover:border-sage-400 hover:shadow-md transition-all"
                  >
                    <div>
                      <p className="font-semibold text-sage-800 text-sm">{lang.name}</p>
                      <p className="text-sage-500 text-xs">{lang.level}</p>
                    </div>
                    {lang.score && (
                      <span className="text-xs font-medium text-sage-600 bg-sage-100 border border-sage-200 px-2.5 py-1 rounded-full">
                        {lang.score}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
