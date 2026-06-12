"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, FolderOpen } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function Projects() {
  const hasProjects = profile.projects.length > 0;

  return (
    <section id="projects" className="min-h-screen bg-white py-24">
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
            What I&apos;ve built
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-sage-900">
            Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-sage-400 rounded-full" />
        </motion.div>

        {hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {profile.projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                {/* Thumbnail */}
                {project.image ? (
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="h-44 bg-gradient-to-br from-sage-200 to-sage-400 flex items-center justify-center">
                    <FolderOpen size={40} className="text-sage-600" />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="font-bold text-sage-900 text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium bg-sage-100 text-sage-700 border border-sage-200 px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-sage-700 hover:text-sage-900 transition-colors"
                      >
                        <GithubIcon size={14} /> Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-sage-700 hover:text-sage-900 transition-colors"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <motion.div
            className="flex flex-col items-center justify-center py-32 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 rounded-full bg-sage-100 flex items-center justify-center mb-6">
              <FolderOpen size={40} className="text-sage-400" />
            </div>
            <h3 className="text-sage-700 font-bold text-xl mb-2">
              Projects Coming Soon
            </h3>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              I&apos;m currently curating my best work. Check back soon — or
              visit my GitHub to see what I&apos;ve been building.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-2 px-6 py-3 rounded-full border-2 border-sage-700 text-sage-700 text-sm font-semibold hover:bg-sage-700 hover:text-white transition-colors"
            >
              <GithubIcon size={16} /> Visit GitHub
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
