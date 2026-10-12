"use client";

import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, ChevronDown, Brain, Code, Download } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const CV_PATH = "/cv/vanya-mayazura-cv.pdf";

export default function About() {
  const { t, profile } = useI18n();
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

  const glowX = useTransform(rotateY, [-12, 12], ["20%", "80%"]);
  const glowY = useTransform(rotateX, [-12, 12], ["80%", "20%"]);
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.55), transparent 25%)`;

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-24"
    >
      {/* Background image */}
      <Image
        src="/images/green-herosection.webp"
        alt=""
        fill
        sizes="100vw"
        quality={65}
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-sage-100/80 via-sage-300/70 to-sage-600/80 -z-10" />

      {/* Background blobs */}
      <div className="absolute top-16 right-16 w-80 h-80 rounded-full bg-sage-300 opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-12 w-56 h-56 rounded-full bg-sage-500 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sage-200 opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-x-16 lg:gap-y-4 items-center">
          {/* Name + intro */}
          <motion.div
            className="order-1 lg:col-span-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sage-900 font-semibold tracking-[0.3em] uppercase text-xs mb-4">
              {t("about.hello")}
            </p>

            {/* Pixel-wipe reveal — same left-to-right clip-path technique as
                the splash screen's heart loader, so the name carries that
                motif forward onto the page. */}
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-sage-900 leading-[1.15]"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
            >
              Vanya Mayazura Puspitaningrum
            </motion.h1>
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="flex justify-center order-2 lg:col-span-2 lg:row-span-2 lg:self-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative [perspective:1000px]">
              {/* Undershadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 md:w-72 h-10 md:h-12 rounded-full bg-sage-900/50 blur-2xl pointer-events-none" />

              {/* Avatar */}
              <motion.div
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-white shadow-2xl shadow-sage-900/40"
                style={{ rotateX, rotateY }}
                whileHover={{ scale: 1.03 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Image
                  src="/images/about-profile-new.webp"
                  alt={profile.name}
                  width={384}
                  height={384}
                  preload
                  sizes="(min-width: 768px) 384px, (min-width: 640px) 288px, 224px"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                  style={{ background: glowBackground }}
                />
              </motion.div>

              {/* Availability dot — sits on the wrapper, not the avatar, which clips overflow */}
              {profile.availableForWork && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-[8%] right-[8%] z-10 flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                >
                  <span className="animate-online-pulse absolute inset-0 rounded-full bg-online" />
                  <span className="relative h-full w-full rounded-full bg-online ring-4 ring-white" />
                </span>
              )}

              {/* Floating badge top-right */}
              <motion.div
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-white rounded-2xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 shadow-lg border border-sage-200 text-xs sm:text-base font-semibold text-sage-800 flex items-center gap-1.5 sm:gap-2 transform-gpu will-change-transform"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", times: [0, 0.5, 1] }}
              >
                <Brain className="text-sage-700 w-4 h-4 sm:w-5 sm:h-5" />
                Data Science & AI
              </motion.div>

              {/* Floating badge bottom-left */}
              <motion.div
                className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 bg-white rounded-2xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 shadow-lg border border-sage-200 text-xs sm:text-base font-semibold text-sage-800 flex items-center gap-1.5 sm:gap-2 transform-gpu will-change-transform"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", times: [0, 0.5, 1] }}
              >
                <Code className="text-sage-700 w-4 h-4 sm:w-5 sm:h-5" />
                Full-stack Dev
              </motion.div>
            </div>
          </motion.div>

          {/* Location + bio */}
          <motion.div
            className="order-3 lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sage-800 font-medium text-sm mb-8">
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                {profile.location}
              </span>
              {profile.availableForWork && (
                <span className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-online" />
                  {profile.availabilityLabel}
                </span>
              )}
            </div>

            <div className="relative mb-8 max-w-[58ch] rounded-r-xl overflow-hidden border border-sage-300 bg-gradient-to-r from-sage-100 via-sage-100 to-sage-100/20">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-sage-900" />
              <p className="text-sage-900 text-lg leading-relaxed font-medium text-left pl-8 pr-6 py-4">
                {profile.bio}
              </p>
            </div>

            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:inline-flex w-fit mx-auto md:mx-0 items-center gap-2 px-5 py-2.5 rounded-full bg-sage-700 text-white text-sm font-semibold hover:bg-sage-900 transition-colors"
            >
              <Download size={16} /> {t("about.cv")}
            </a>
          </motion.div>
        </div>

        {/* Scroll CTA */}
        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-1 text-sage-900 font-semibold text-sm group hover:text-sage-700 transition-colors mt-12 sm:mt-24 mx-auto"
        >
          {t("about.explore")}
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
