"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, ChevronDown, Brain, Code } from "lucide-react";
import { profile } from "@/data/profile";

export default function About() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 200,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 15,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-24 bg-gradient-to-br from-sage-100 via-sage-300 to-sage-600"
    >
      {/* Background blobs */}
      <div className="absolute top-16 right-16 w-80 h-80 rounded-full bg-sage-300 opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-12 w-56 h-56 rounded-full bg-sage-500 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sage-200 opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* LEFT: Avatar */}
          <motion.div
            className="flex justify-center order-2 lg:order-2 lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative [perspective:1000px]">
              {/* Avatar — dummy photo, replace src with your real photo */}
              <motion.div
                className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-white shadow-2xl shadow-sage-900/40"
                style={{ rotateX, rotateY }}
                whileHover={{ scale: 1.03 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80"
                  alt={profile.name}
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>

              {/* Floating badge top-right */}
              <motion.div
                className="absolute -top-2 -right-2 bg-white rounded-2xl px-4 py-2.5 shadow-lg border border-sage-200 text-base font-semibold text-sage-800 flex items-center gap-2 transform-gpu will-change-transform"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", times: [0, 0.5, 1] }}
              >
                <Brain size={20} className="text-sage-700" /> Data Science & AI
              </motion.div>

              {/* Floating badge bottom-left */}
              <motion.div
                className="absolute -bottom-2 -left-2 bg-white rounded-2xl px-4 py-2.5 shadow-lg border border-sage-200 text-base font-semibold text-sage-800 flex items-center gap-2 transform-gpu will-change-transform"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", times: [0, 0.5, 1] }}
              >
                <Code size={20} className="text-sage-700" /> Full-stack Dev
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Intro + bio */}
          <motion.div
            className="order-1 lg:order-1 lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sage-900 font-semibold tracking-[0.25em] uppercase text-xs mb-4">
              Hello, I&apos;m
            </p>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-sage-900 leading-[1.15] mb-6">
              Vanya Mayazura Puspitaningrum
            </h1>

            <div className="flex items-center gap-2 text-sage-800 font-medium text-sm mb-6">
              <MapPin size={14} />
              <span>{profile.location}</span>
            </div>

            <p className="text-slate-800 text-base leading-relaxed mb-4 max-w-2xl border-l-2 border-sage-700 pl-4">
              {profile.bio}
            </p>

            <p className="text-slate-700 text-sm leading-relaxed mb-8 max-w-2xl pl-4">
              Currently a{" "}
              <span className="text-sage-700 font-semibold">
                Software Engineer Instructor
              </span>{" "}
              at Haltev IT Learning Center, teaching Fullstack Web
              Development, Data Science, and AI — and always{" "}
              <span className="text-sage-700 font-semibold">
                happy to grow
              </span>{" "}
              along the way.
            </p>
          </motion.div>
        </div>

        {/* Scroll CTA */}
        <button
          onClick={() =>
            document
              .getElementById("experience")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-1 text-sage-900 font-semibold text-sm group hover:text-sage-700 transition-colors mt-24 mx-auto"
        >
          Explore my work
          <motion.span
            animate={{ y: 6 }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.9, ease: "easeInOut" }}
          >
            <ChevronDown size={28} strokeWidth={1.5} />
          </motion.span>
        </button>
      </div>
    </section>
  );
}
