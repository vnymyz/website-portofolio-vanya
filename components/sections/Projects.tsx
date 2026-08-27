"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, FolderOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { profile } from "@/data/profile";

const PROJECTS_PER_PAGE = 3;

export default function Projects() {
  const hasProjects = profile.projects.length > 0;
  const [page, setPage] = useState(0);

  const pageCount = Math.ceil(profile.projects.length / PROJECTS_PER_PAGE);
  const visibleProjects = profile.projects.slice(
    page * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE
  );

  const goToPage = (next: number) => {
    setPage(Math.max(0, Math.min(next, pageCount - 1)));
  };

  return (
    <section id="projects" className="min-h-screen bg-white py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sage-700 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            What I&apos;ve built
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-sage-900">
            Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-sage-400 rounded-full" />
        </motion.div>

        {hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {visibleProjects.map((project, i) => (
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
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                  <p className="text-sage-700 text-sm leading-relaxed mb-4">
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
        ) : null}

        {hasProjects && pageCount > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 0}
              aria-label="Previous page"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-sage-300 text-sage-700 hover:border-sage-500 hover:bg-sage-100 transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={page === i ? "true" : undefined}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    page === i
                      ? "bg-sage-700 text-white"
                      : "text-sage-700 border border-sage-300 hover:border-sage-500 hover:bg-sage-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === pageCount - 1}
              aria-label="Next page"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-sage-300 text-sage-700 hover:border-sage-500 hover:bg-sage-100 transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {!hasProjects && (
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
            <p className="text-sage-600 text-sm max-w-sm leading-relaxed">
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
