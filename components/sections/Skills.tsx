"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-sage-50">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sage-700 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            What I bring
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-sage-900">
            Skills &amp; Credentials
          </h2>
          <div className="mt-4 w-16 h-1 bg-sage-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* LEFT: Technical focus + Soft skills */}
          <div className="space-y-10 lg:pr-12">
            {/* Technical focus areas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="inline-block bg-sage-700 text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
                Technical Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
                  >
                    <p className="font-semibold text-sage-800 text-sm mb-1">{item.area}</p>
                    <p className="text-xs text-sage-600">{item.detail}</p>
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
              <h3 className="inline-block bg-sage-700 text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.softSkills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-sage-100 text-sage-800 border border-sage-200"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Certificates + Education + Languages */}
          <div className="space-y-10 lg:border-l lg:border-sage-300 lg:pl-12">
            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="inline-block bg-sage-700 text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
                Certificates
              </h3>
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
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h3 className="inline-block bg-sage-700 text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
                Education
              </h3>
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
                              {" "}· GPA {edu.gpa}/4.00
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
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="inline-block bg-sage-700 text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
                Languages
              </h3>
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
                        <span className="text-xs font-medium text-sage-600">
                          {lang.score}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
