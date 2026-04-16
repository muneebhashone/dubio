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
            className="mt-3 mb-8 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-6 py-4 sm:px-8"
          >
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-6 text-center sm:text-left">
                <div className="flex flex-col items-center">
                  <span className="text-lg sm:text-xl font-bold text-white font-[family-name:var(--font-syne)]">4,000+</span>
                  <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Videos Dubbed</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col items-center">
                  <span className="text-lg sm:text-xl font-bold text-white font-[family-name:var(--font-syne)]">200+</span>
                  <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Creators</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col items-center">
                  <span className="text-lg sm:text-xl font-bold text-white font-[family-name:var(--font-syne)]">50+</span>
                  <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Languages</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* YouTube */}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors" title="YouTube">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </span>
                {/* Instagram */}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors" title="Instagram">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </span>
                {/* TikTok */}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors" title="TikTok">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
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
