"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
}

// The one scroll reveal per section lives here — cards below render static.
export default function SectionHeader({ eyebrow, title }: Props) {
  return (
    <motion.div
      className="mb-12 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-sage-700 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-sage-900">
        {title}
      </h2>
      <div className="mt-4 w-16 h-1 bg-sage-400 rounded-full" />
    </motion.div>
  );
}
