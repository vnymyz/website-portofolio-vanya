"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Gamepad2, Soup, Sparkles, PawPrint, Camera, Heart } from "lucide-react";
import { SteamIcon, InstagramIcon } from "@/components/icons";
import { profile } from "@/data/profile";

const sectionHeading = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function FunFactsPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-sage-100 via-sage-300 to-sage-600">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-sage-300 opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-sage-500 opacity-20 blur-3xl pointer-events-none" />

      {/* Back button */}
      <Link
        href="/"
        onClick={() => sessionStorage.removeItem("hasVisited")}
        className="fixed top-5 left-5 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sage-300 text-sage-700 text-sm font-semibold shadow-md hover:border-sage-500 hover:text-sage-900 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-sage-900 mb-3">
            Fun Facts About Me
          </h1>
        </motion.div>

        {/* 1. Game Library */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeading}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-sage-700 text-white flex items-center justify-center">
              <Gamepad2 size={20} />
            </div>
            <h2 className="text-2xl font-extrabold text-sage-900">Game Library</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur rounded-3xl py-14 shadow-xl border border-sage-200">
            <SteamIcon size={64} />
            <p className="text-sage-700 text-sm font-medium">Steam library coming soon</p>
          </div>
        </motion.section>

        {/* 2. My 2 Cats */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeading}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-sage-700 text-white flex items-center justify-center">
              <PawPrint size={20} />
            </div>
            <h2 className="text-2xl font-extrabold text-sage-900">My 2 Cats I Love</h2>
          </div>
          <div className="flex items-center justify-center gap-4 sm:gap-10">
            {(() => {
              const [cat1, cat2] = profile.funFacts.cats;
              return (
                <>
                  <div className="flex-1 max-w-[220px] sm:max-w-xs">
                    <div className="relative aspect-square rounded-3xl overflow-hidden ring-4 ring-white shadow-xl">
                      <Image src={cat1.photo} alt={cat1.name} fill sizes="280px" className="object-cover" />
                    </div>
                    <p className="mt-3 text-center font-bold text-sage-900 text-lg">{cat1.name}</p>
                  </div>

                  <Heart className="text-sage-700 fill-sage-700 shrink-0" size={32} />

                  <div className="flex-1 max-w-[220px] sm:max-w-xs">
                    <div className="relative aspect-square rounded-3xl overflow-hidden ring-4 ring-white shadow-xl">
                      <Image src={cat2.photo} alt={cat2.name} fill sizes="280px" className="object-cover" />
                    </div>
                    <p className="mt-3 text-center font-bold text-sage-900 text-lg">{cat2.name}</p>
                  </div>
                </>
              );
            })()}
          </div>
        </motion.section>

        {/* 3. Some Moments */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeading}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-sage-700 text-white flex items-center justify-center">
              <Camera size={20} />
            </div>
            <h2 className="text-2xl font-extrabold text-sage-900">Some Moments</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur rounded-3xl py-14 shadow-xl border border-sage-200">
            <InstagramIcon size={64} />
            <p className="text-sage-700 text-sm font-medium">Instagram feed coming soon</p>
          </div>
        </motion.section>

        {/* 4. Favorite Food */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeading}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-sage-700 text-white flex items-center justify-center">
              <Soup size={20} />
            </div>
            <h2 className="text-2xl font-extrabold text-sage-900">Favorite Food &amp; Drinks</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {profile.funFacts.favoriteFoods.map((f) => (
              <span
                key={f}
                className="text-sm bg-white/80 backdrop-blur text-sage-800 px-4 py-2 rounded-full font-medium border border-sage-200 shadow-sm"
              >
                {f}
              </span>
            ))}
          </div>
        </motion.section>

        {/* 5. Hobbies */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeading}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-sage-700 text-white flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <h2 className="text-2xl font-extrabold text-sage-900">Hobbies</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {profile.funFacts.hobbies.map((h) => (
              <span
                key={h}
                className="text-sm bg-sage-700 text-white px-4 py-2 rounded-full font-medium"
              >
                {h}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
