"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function ContactBanner() {
  return (
    <section id="contact" className="bg-sage-100 py-20">
      <motion.div
        className="max-w-3xl mx-auto px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-sage-900 mb-6"
          animate={{
            x: [0, -4, 4, -4, 4, -2, 2, 0],
            textShadow: [
              "0 0 0px rgba(119,136,115,0)",
              "0 0 16px rgba(119,136,115,0.9)",
              "0 0 0px rgba(119,136,115,0)",
            ],
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        >
          Let&apos;s work together !
        </motion.h2>
        <p className="text-slate-600 text-base mb-8">Got a project? Contact me.</p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-sage-700 text-sage-700 text-sm font-semibold hover:bg-sage-700 hover:text-white transition-colors"
          >
            <LinkedinIcon size={15} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-sage-700 text-sage-700 text-sm font-semibold hover:bg-sage-700 hover:text-white transition-colors"
          >
            <GithubIcon size={15} /> GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-sage-700 text-sage-700 text-sm font-semibold hover:bg-sage-700 hover:text-white transition-colors"
          >
            <Mail size={15} /> Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}
