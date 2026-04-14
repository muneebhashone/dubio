"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Mic, ScanFace, Globe, Subtitles, Youtube, UsersRound } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Cloning",
    description:
      "Capture your unique vocal fingerprint and clone it in any language. Preserve your exact tone, emotion, and personality — no one will know it's dubbed.",
    accent: "#7C3AED",
    accentRgb: "124, 58, 237",
    tag: "CORE",
    // Waveform pattern: array of relative heights (0-1)
    wave: [.3,.5,.8,.6,.9,.4,.7,.5,.3,.6,.8,.5,.4,.7,.9,.6,.3,.5,.7,.4],
  },
  {
    icon: ScanFace,
    title: "Lip Sync",
    description:
      "Natural-looking lip movements perfectly matched to the new audio. Your face, your expressions, your energy — now in any language.",
    accent: "#6366F1",
    accentRgb: "99, 102, 241",
    tag: "AI",
    wave: [.4,.6,.5,.8,.7,.3,.5,.9,.6,.4,.7,.5,.8,.3,.6,.4,.7,.5,.3,.6],
  },
  {
    icon: Globe,
    title: "50+ Languages",
    description:
      "Dub your content into Spanish, Japanese, Hindi, Arabic, and 50+ more with native-quality  results. Reach every audience on the planet — no limits.",
    accent: "#10B981",
    accentRgb: "16, 185, 129",
    tag: "SCALE",
    wave: [.5,.7,.4,.6,.8,.5,.3,.7,.6,.9,.4,.5,.7,.8,.3,.6,.5,.4,.7,.5],
  },
  {
    icon: Subtitles,
    title: "Auto Subtitles",
    description:
      "Generate pixel-perfect, timed subtitles in both the orignal and target languages. Burn-in or export as SRT — ready for any platform.",
    accent: "#F59E0B",
    accentRgb: "245, 158, 11",
    tag: "AUTO",
    wave: [.6,.4,.7,.5,.3,.8,.6,.4,.7,.5,.9,.3,.6,.4,.8,.5,.7,.3,.5,.6],
  },
  {
    icon: Youtube,
    title: "YouTube Integration",
    description:
      "Paste a YouTube URL and dub directly — no download, no re-upload. Seamless from start to finish. Get your dubbed version in minutes.",
    accent: "#EF4444",
    accentRgb: "239, 68, 68",
    tag: "IMPORT",
    wave: [.7,.5,.3,.6,.8,.4,.7,.5,.6,.3,.8,.7,.4,.5,.6,.9,.3,.7,.5,.4],
  },
  {
    icon: UsersRound,
    title: "Multi-Speaker",
    description:
      "Automatically detect and dub multiple speakers in one video. Each person keeps their own cloned voice — perfect for interviews, podcasts, and learn videos.",
    accent: "#EC4899",
    accentRgb: "236, 72, 153",
    tag: "PRO",
    wave: [.3,.8,.5,.7,.4,.6,.9,.3,.5,.7,.4,.8,.6,.3,.7,.5,.4,.6,.8,.5],
  },
];

// ── Waveform visualization per card ──
function CardWaveform({ wave, accent, alive }: { wave: number[]; accent: string; alive: boolean }) {
  return (
    <div className="flex items-end gap-[2px] h-8">
      {wave.map((h, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full transition-all"
          style={{
            height: alive ? `${h * 100}%` : `${h * 30}%`,
            background: alive ? accent : "rgba(255,255,255,0.06)",
            opacity: alive ? 0.6 + h * 0.4 : 0.3,
            transitionDuration: `${300 + i * 30}ms`,
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        />
      ))}
    </div>
  );
}

// ── Single feature card with spotlight + wake-up ──
function FeatureCard({
  feature,
  isActive,
  size = "desktop",
}: {
  feature: (typeof features)[number];
  isActive?: boolean;
  size?: "desktop" | "mobile";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const alive = isHovered || !!isActive;

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const Icon = feature.icon;
  const isDesktop = size === "desktop";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl border overflow-hidden cursor-default transition-all duration-500 ${
        isDesktop ? "w-[420px] lg:w-[460px] h-[340px] lg:h-[360px] flex-shrink-0" : "w-full"
      } ${
        alive
          ? "border-white/10 bg-[#110e2e]"
          : "border-white/[0.04] bg-[#0c0928]"
      }`}
      style={{
        boxShadow: alive
          ? `0 0 60px rgba(${feature.accentRgb}, 0.08), inset 0 1px 0 rgba(${feature.accentRgb}, 0.1)`
          : "none",
      }}
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${feature.accentRgb}, 0.06), transparent 60%)`,
        }}
      />

      {/* Top border glow trace */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-700 pointer-events-none"
        style={{
          opacity: alive ? 1 : 0,
          background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)`,
        }}
      />

      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col justify-between ${isDesktop ? "p-8" : "p-6"}`}>
        {/* Top row */}
        <div className="flex items-start justify-between">
          {/* Icon with halo */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500"
              style={{
                background: feature.accent,
                opacity: alive ? 0.2 : 0,
              }}
            />
            <div
              className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500"
              style={{
                background: alive ? `rgba(${feature.accentRgb}, 0.12)` : "rgba(255,255,255,0.03)",
                transform: alive ? "scale(1.05)" : "scale(1)",
              }}
            >
              <Icon
                className="w-7 h-7 transition-colors duration-500"
                style={{ color: alive ? feature.accent : "rgba(255,255,255,0.2)" }}
              />
            </div>
          </div>

          {/* Tag + status */}
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded transition-all duration-500"
              style={{
                color: alive ? feature.accent : "rgba(255,255,255,0.15)",
                background: alive ? `rgba(${feature.accentRgb}, 0.08)` : "transparent",
                border: `1px solid ${alive ? `rgba(${feature.accentRgb}, 0.15)` : "rgba(255,255,255,0.04)"}`,
              }}
            >
              {feature.tag}
            </span>
            {/* Live dot */}
            <div
              className="w-1.5 h-1.5 rounded-full transition-all duration-500"
              style={{
                background: alive ? feature.accent : "rgba(255,255,255,0.1)",
                boxShadow: alive ? `0 0 8px ${feature.accent}` : "none",
              }}
            />
          </div>
        </div>

        {/* Middle: waveform */}
        <div className={`${isDesktop ? "my-6" : "my-4"}`}>
          <CardWaveform wave={feature.wave} accent={feature.accent} alive={alive} />
        </div>

        {/* Bottom: title + description */}
        <div>
          <h3
            className="font-[family-name:var(--font-syne)] font-semibold text-xl mb-2 transition-colors duration-500"
            style={{ color: alive ? "#ffffff" : "rgba(255,255,255,0.4)" }}
          >
            {feature.title}
          </h3>
          <p
            className="text-sm leading-relaxed transition-colors duration-500"
            style={{ color: alive ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.2)" }}
          >
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Desktop: horizontal scroll reel ──
function DesktopReel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);
  const activeIndex = Math.min(
    features.length - 1,
    Math.floor(progress * features.length)
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative hidden md:block"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-8 mb-10 w-full">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[#7C3AED] font-[family-name:var(--font-syne)] font-semibold text-sm uppercase tracking-[0.2em] mb-2">
                Features
              </p>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-white text-4xl md:text-5xl italic">
                The Toolkit
              </h2>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-white/20 text-sm font-[family-name:var(--font-syne)]">
              <span className="uppercase tracking-[0.2em]">Scroll to explore</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
              </svg>
            </div>
          </div>
          <p className="mt-3 text-white/40 text-sm sm:text-base max-w-2xl font-[family-name:var(--font-syne)]">
            Everything you need to dub videos professionally — with your voice, perfect lip-sync, and zero extra work.
          </p>
        </div>

        {/* Film strip sprocket holes */}
        <div className="absolute top-0 left-0 right-0 h-6 flex items-center justify-center gap-[60px] opacity-[0.03]">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-4 h-3 rounded-sm bg-white" />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-6 flex items-center justify-center gap-[60px] opacity-[0.03]">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-4 h-3 rounded-sm bg-white" />
          ))}
        </div>

        {/* Horizontal reel */}
        <motion.div style={{ x }} className="flex gap-6 px-8">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} isActive={i === activeIndex} />
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === activeIndex ? "2rem" : "0.5rem",
                background: i === activeIndex ? f.accent : "rgba(255,255,255,0.06)",
                boxShadow:
                  i === activeIndex ? `0 0 10px rgba(${f.accentRgb}, 0.4)` : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Mobile: vertical stack ──
function MobileStack() {
  return (
    <section id="features-mobile" className="py-24 relative md:hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#7C3AED] font-[family-name:var(--font-syne)] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Features
          </p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-white text-3xl sm:text-4xl italic">
            The Toolkit
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease: "easeOut" as const }}
            >
              <FeatureCard feature={f} size="mobile" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FeatureReel() {
  return (
    <>
      <DesktopReel />
      <MobileStack />
    </>
  );
}
