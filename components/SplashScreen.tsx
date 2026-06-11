"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });

interface Props {
  isVisible: boolean;
  /** Total splash duration in ms — hearts fill sequentially across this. */
  duration?: number;
}

// 8x7 pixel-art heart
const HEART_PATTERN = [
  [0, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
];

// Hearts appear once the loader fades in, then fill one by one (1, 2, 3)
// so the 3rd heart finishes right as the splash duration ends.
const HEARTS_VISIBLE_AT = 0.7;

function PixelHeart({ index, segment }: { index: number; segment: number }) {
  return (
    <motion.div
      className="relative"
      style={{ width: 54, height: 47 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.2, delay: index * 0.2, ease: "easeInOut" }}
    >
      {/* empty outline layer */}
      <div
        className="absolute inset-0 grid gap-[2px]"
        style={{ gridTemplateColumns: "repeat(8, 5px)" }}
      >
        {HEART_PATTERN.flat().map((px, i) => (
          <div
            key={i}
            className={`w-[5px] h-[5px] ${px ? "bg-sage-200" : "bg-transparent"}`}
          />
        ))}
      </div>

      {/* filled layer, reveals left-to-right once it's this heart's turn */}
      <motion.div
        className="absolute inset-0 grid gap-[2px]"
        style={{ gridTemplateColumns: "repeat(8, 5px)" }}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: segment, delay: HEARTS_VISIBLE_AT + index * segment, ease: "easeInOut" }}
      >
        {HEART_PATTERN.flat().map((px, i) => (
          <div
            key={i}
            className={`w-[5px] h-[5px] ${px ? "bg-sage-600" : "bg-transparent"}`}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function SplashScreen({ isVisible, duration = 3200 }: Props) {
  const segment = Math.max((duration / 1000 - HEARTS_VISIBLE_AT) / 3, 0.1);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-sage-100"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-sage-300 opacity-30 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-sage-500 opacity-20 blur-3xl" />

          <div className="relative z-10 text-center">
            <motion.h1
              className={`${pixelFont.className} text-xs md:text-sm text-sage-900 leading-loose`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Welcome to Vanya&apos;s
            </motion.h1>
            <motion.h1
              className={`${pixelFont.className} text-xs md:text-sm text-sage-900 leading-loose`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Portfolio
            </motion.h1>

            {/* Pixel heart loader */}
            <motion.div
              className="flex justify-center gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <PixelHeart index={0} segment={segment} />
              <PixelHeart index={1} segment={segment} />
              <PixelHeart index={2} segment={segment} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
