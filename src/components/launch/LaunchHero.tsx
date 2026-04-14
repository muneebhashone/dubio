"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductDemoPreview from "./ProductDemoPreview";

// ─── Language-morphing headline ───
const translations = [
  { text: "Your Voice", lang: "English" },
  { text: "Tu Voz", lang: "Spanish" },
  { text: "あなたの声", lang: "Japanese" },
  { text: "Votre Voix", lang: "French" },
  { text: "صوتك", lang: "Arabic" },
  { text: "Sua Voz", lang: "Portuguese" },
  { text: "Deine Stimme", lang: "German" },
  { text: "너의 목소리", lang: "Korean" },
  { text: "La Tua Voce", lang: "Italian" },
  { text: "आपकी आवाज़", lang: "Hindi" },
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

function useScrambleText(texts: string[], interval = 4000) {
  const [display, setDisplay] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsScrambling(true);
      const nextIndex = (index + 1) % texts.length;
      const target = texts[nextIndex];
      const maxLen = Math.max(display.length, target.length);
      let iteration = 0;
      const totalIterations = 14;

      const scramble = setInterval(() => {
        iteration++;
        const progress = iteration / totalIterations;
        let result = "";

        for (let i = 0; i < maxLen; i++) {
          if (i < target.length) {
            if (progress > (i / maxLen) * 0.8 + 0.2) {
              result += target[i];
            } else {
              result += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
        }

        setDisplay(result);

        if (iteration >= totalIterations) {
          clearInterval(scramble);
          setDisplay(target);
          setIndex(nextIndex);
          setIsScrambling(false);
        }
      }, 40);
    }, interval);

    return () => clearInterval(timer);
  }, [index, display, texts, interval]);

  return { display, isScrambling };
}

// ─── Main Hero ───
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function LaunchHero() {
  const { display, isScrambling } = useScrambleText(
    translations.map((t) => t.text),
    3500
  );

  const currentLang =
    translations.find((t) => t.text === display)?.lang || "";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#7C3AED]/8 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-[128px] pointer-events-none" />

      {/* Grain texture */}
      <div className="absolute inset-0 launch-grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] text-xs font-semibold uppercase tracking-[0.25em] font-[family-name:var(--font-syne)]">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              AI Dubbing Platform For Global Content
            </span>
          </motion.div>

          {/* Scrambling headline */}
          <motion.div variants={fadeUp} className="mb-6">
            <h1 className="font-[family-name:var(--font-instrument-serif)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-white">
              <span className={`inline-block min-w-[200px] ${isScrambling ? "scramble-cursor" : ""}`}>
                <span className={isScrambling ? "text-[#F59E0B]" : "text-white"}>
                  {display}
                </span>
              </span>
              <span className="text-white/30">.</span>
              <br />
              <span className="italic text-white/80">Every Language.</span>
            </h1>
            <motion.p
              key={currentLang}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#7C3AED]/60 text-sm mt-3 font-[family-name:var(--font-syne)] h-5"
            >
              {currentLang}
            </motion.p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-white/45 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {/* Clone your voice. Dub your videos into 50+ languages in seconds.
            The AI preserves your tone, your emotion, your identity. */}
            Dub your video into 50+ languages in seconds - with perfect lip-sync and exact voice, tone & emotion fully preserved.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={process.env.NEXT_PUBLIC_APP_URL || "https://app.dubio.ai"}
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#F59E0B] text-black font-bold text-base overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] font-[family-name:var(--font-syne)]"
            >
              <span className="relative z-10">Start Dubbing Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B] bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 font-semibold text-base transition-all font-[family-name:var(--font-syne)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-white/45 text-sm sm:text-base max-w-2xl mx-auto mb-12 leading-relaxed mt-1"
          >
            5 free minutes - No credit card required - Cancel anytime
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-3 mb-8 mx-auto max-w-3xl border-y border-white/12 bg-white/[0.02] px-4 py-3 sm:px-5"
          >
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
              <p className="text-center text-xs sm:text-sm text-white/70 font-[family-name:var(--font-syne)] tracking-wide">
                4,000+ videos dubbed · 200+ creators · 50+ languages
              </p>

              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[10px] font-semibold text-white/80">
                  YT
                </span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[10px] font-semibold text-white/80">
                  IG
                </span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[10px] font-semibold text-white/80">
                  TT
                </span>
              </div>
            </div>
          </motion.div>

          <ProductDemoPreview />
        </motion.div>
      </div>
    </section>
  );
}
