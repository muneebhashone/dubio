"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

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

// ─── Interactive waveform (canvas) ───
function InteractiveWaveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    const barCount = Math.floor(rect.width / 8);
    const barWidth = 3;
    const gap = (rect.width - barCount * barWidth) / (barCount - 1);
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const time = Date.now() / 1000;

    for (let i = 0; i < barCount; i++) {
      const x = i * (barWidth + gap);
      const centerY = rect.height / 2;

      // Base wave
      const wave1 = Math.sin(time * 1.5 + i * 0.15) * 0.3;
      const wave2 = Math.sin(time * 0.8 + i * 0.08) * 0.2;
      const wave3 = Math.sin(time * 2.2 + i * 0.22) * 0.15;
      let amplitude = 0.15 + (wave1 + wave2 + wave3 + 0.65) * 0.35;

      // Mouse influence — ripple effect
      const dx = x - mx;
      const dy = centerY - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.max(0, 1 - dist / 200);
      amplitude += influence * 0.6 * Math.sin(time * 4 - dist * 0.02);

      const barHeight = Math.max(4, amplitude * rect.height * 0.45);

      // Gradient per bar
      const gradient = ctx.createLinearGradient(x, centerY - barHeight, x, centerY + barHeight);
      const alpha = 0.06 + influence * 0.25;
      gradient.addColorStop(0, `rgba(124, 58, 237, ${alpha})`);
      gradient.addColorStop(0.5, `rgba(167, 139, 250, ${alpha + 0.05})`);
      gradient.addColorStop(1, `rgba(124, 58, 237, ${alpha})`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(x, centerY - barHeight, barWidth, barHeight * 2, 2);
      ctx.fill();
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "all", zIndex: 0 }}
    />
  );
}

// ─── Parallax layer ───
function ParallaxLayer({
  children,
  speed = 0.05,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      ref.current.style.transform = `translate(${x * speed * 50}px, ${y * speed * 50}px)`;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [speed]);

  return (
    <div ref={ref} className={`transition-transform duration-300 ease-out ${className}`}>
      {children}
    </div>
  );
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
      {/* Interactive waveform background */}
      <InteractiveWaveform />

      {/* Radial glow orbs */}
      <ParallaxLayer speed={0.03} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-[#F59E0B]/5 rounded-full blur-[100px]" />
      </ParallaxLayer>

      {/* Grain texture */}
      <div className="absolute inset-0 launch-grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] text-xs font-semibold uppercase tracking-[0.25em] font-[family-name:var(--font-syne)]">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              AI Video Dubbing Platform
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
            Clone your voice. Dub your videos into 50+ languages in seconds.
            The AI preserves your tone, your emotion, your identity.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ParallaxLayer speed={0.02}>
              <a
                href={process.env.NEXT_PUBLIC_APP_URL || "https://app.dubio.ai"}
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#F59E0B] text-black font-bold text-base overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] font-[family-name:var(--font-syne)]"
              >
                <span className="relative z-10">Start Dubbing Free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B] bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />
              </a>
            </ParallaxLayer>
            <ParallaxLayer speed={0.015}>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 font-semibold text-base transition-all font-[family-name:var(--font-syne)]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </a>
            </ParallaxLayer>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-20 flex flex-col items-center gap-2 text-white/20"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-[family-name:var(--font-syne)]">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
            >
              <div className="w-1 h-2 rounded-full bg-white/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
