"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Soup, Sparkles, PawPrint, Heart, Clock } from "lucide-react";
import { SteamIcon } from "@/components/icons";
import FoodCarousel from "@/components/FoodCarousel";
import { profile } from "@/data/profile";

type SteamGame = {
  appid: number;
  name: string;
  playtimeHours: number;
  header: string;
};

type SteamRecentGame = {
  appid: number;
  name: string;
  playtimeHours: number;
  playtime2WeeksHours: number;
  header: string;
};

type SteamData = {
  player: { name: string; avatar: string; profileUrl: string; online: boolean } | null;
  gameCount: number;
  topGames: SteamGame[];
  recentGames: SteamRecentGame[];
};

const sectionHeading = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function FunFactsPage() {
  const [steam, setSteam] = useState<SteamData | null>(null);
  const [steamError, setSteamError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/steam", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Steam fetch failed");
        return res.json();
      })
      .then(setSteam)
      .catch((err) => {
        if (err.name !== "AbortError") setSteamError(true);
      });
    return () => controller.abort();
  }, []);

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
              <SteamIcon size={28} />
            </div>
            <h2 className="text-2xl font-extrabold text-sage-900">Game Library</h2>
          </div>
          {steamError && (
            <div className="flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur rounded-3xl py-14 shadow-xl border border-sage-200">
              <SteamIcon size={64} />
              <p className="text-sage-700 text-sm font-medium">Steam library unavailable right now</p>
            </div>
          )}

          {!steamError && !steam && (
            <div className="flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur rounded-3xl py-14 shadow-xl border border-sage-200">
              <SteamIcon size={64} className="animate-pulse" />
              <p className="text-sage-700 text-sm font-medium">Loading Steam library…</p>
            </div>
          )}

          {steam && (
            <div className="bg-white/85 backdrop-blur rounded-3xl shadow-xl border border-sage-200 px-6 py-8 sm:px-10 sm:py-10">
              {steam.player && (
                <a
                  href={steam.player.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 mb-8 group"
                >
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-sage-200 shrink-0">
                    <Image src={steam.player.avatar} alt={steam.player.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-serif text-xl font-bold text-sage-900 group-hover:text-sage-700 transition-colors">
                      {steam.player.name}
                    </p>
                    <p className="text-sage-600 text-sm flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${steam.player.online ? "bg-green-500" : "bg-sage-400"}`} />
                      {steam.player.online ? "Online" : "Offline"} · {steam.gameCount} games owned
                    </p>
                  </div>
                </a>
              )}

              {steam.recentGames.length > 0 && (
                <div className="mb-8">
                  <p className="text-sage-700 text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                    Recently Played
                  </p>
                  <div className="flex flex-col gap-3">
                    {steam.recentGames.map((game) => (
                      <div
                        key={game.appid}
                        className="group flex gap-4 rounded-2xl overflow-hidden border border-sage-200 bg-sage-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sage-400/40 hover:border-sage-400"
                      >
                        <div className="relative w-32 sm:w-44 self-stretch min-h-[70px] shrink-0 overflow-hidden">
                          <Image
                            src={game.header}
                            alt={game.name}
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="py-3 pr-4 flex-1 min-w-0">
                          <p className="text-sage-900 text-base font-semibold group-hover:text-sage-700 transition-colors truncate">
                            {game.name}
                          </p>
                          <div className="mt-2 flex items-center justify-between gap-2 text-xs">
                            <span className="text-sage-500 uppercase tracking-wide font-semibold">
                              Total played
                            </span>
                            <span className="text-sage-800 font-medium">
                              {game.playtimeHours.toLocaleString()} hrs
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-sage-700 text-xs tracking-[0.3em] uppercase font-semibold mb-5">
                Most Played
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {steam.topGames.map((game) => (
                  <div
                    key={game.appid}
                    className="group rounded-2xl overflow-hidden border border-sage-200 bg-sage-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sage-400/40 hover:border-sage-400"
                  >
                    <div className="relative w-full aspect-[460/215] overflow-hidden">
                      <Image
                        src={game.header}
                        alt={game.name}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="px-3 py-2">
                      <p className="text-sage-900 text-sm font-semibold truncate group-hover:text-sage-700 transition-colors">{game.name}</p>
                      <p className="text-sage-600 text-xs flex items-center gap-1 mt-0.5">
                        <Clock size={12} />
                        {game.playtimeHours.toLocaleString()} hrs
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-10">
            {(() => {
              const [cat1, cat2] = profile.funFacts.cats;
              return (
                <>
                  <div className="flex-1 max-w-[140px] sm:max-w-xs">
                    <div className="relative aspect-square rounded-3xl overflow-hidden ring-4 ring-white shadow-xl">
                      <Image src={cat1.photo} alt={cat1.name} fill sizes="280px" className="object-cover" />
                    </div>
                    <p className="mt-3 text-center font-bold text-sage-900 text-sm sm:text-lg">{cat1.name}</p>
                  </div>

                  <Heart className="text-sage-700 fill-sage-700 shrink-0 w-6 h-6 sm:w-8 sm:h-8" />

                  <div className="flex-1 max-w-[140px] sm:max-w-xs">
                    <div className="relative aspect-square rounded-3xl overflow-hidden ring-4 ring-white shadow-xl">
                      <Image src={cat2.photo} alt={cat2.name} fill sizes="280px" className="object-cover" />
                    </div>
                    <p className="mt-3 text-center font-bold text-sage-900 text-sm sm:text-lg">{cat2.name}</p>
                  </div>
                </>
              );
            })()}
          </div>
        </motion.section>

        {/* 3. Favorite Food */}
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

          <FoodCarousel />
        </motion.section>

        {/* 4. Hobbies */}
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {profile.funFacts.hobbies.map((h) => (
              <div
                key={h.name}
                className="group relative w-full aspect-video rounded-3xl overflow-hidden bg-sage-200 border border-sage-200 shadow-sm"
              >
                <Image src={h.gif} alt={`${h.name} hobby`} fill unoptimized className="object-cover" />
                <div className="absolute inset-0 transition-shadow duration-300 group-hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,0.45)]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent pt-8 pb-3">
                  <p className="font-serif text-lg font-bold text-white text-center">
                    # {h.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
