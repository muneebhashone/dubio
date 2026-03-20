"use client";

import { motion } from "framer-motion";
import { Video, GraduationCap, Podcast, Building2 } from "lucide-react";
import { useRef, useState } from "react";

const useCases = [
  {
    icon: Video,
    title: "Content Creators",
    description: "Grow your YouTube, TikTok, and Instagram audience by publishing in multiple languages with your own voice.",
    stat: "10x",
    statLabel: "audience reach",
    image: "/launch/use-creator.png",
    imageAlt: "Abstract social video and sparkles suggesting multi-platform creator growth",
  },
  {
    icon: GraduationCap,
    title: "Educators",
    description: "Make your courses and lectures accessible to students worldwide without re-recording a single frame.",
    stat: "50+",
    statLabel: "language options",
    image: "/launch/use-educator.png",
    imageAlt: "Abstract learning scene with book and soft light suggesting accessible education",
  },
  {
    icon: Podcast,
    title: "Podcasters",
    description: "Expand your listener base globally — dub episodes into new languages while keeping your personality.",
    stat: "100%",
    statLabel: "voice match",
    image: "/launch/use-podcast.png",
    imageAlt: "Abstract microphone and waveforms suggesting podcast dubbing",
  },
  {
    icon: Building2,
    title: "Businesses",
    description: "Localize training videos, product demos, and marketing content at scale without hiring voice actors.",
    stat: "90%",
    statLabel: "cost savings",
    image: "/launch/use-business.png",
    imageAlt: "Abstract glass panels and charts suggesting enterprise video localization",
  },
];

// Magnetic card component
function MagneticCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const handleLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transform, transition: "transform 0.3s ease-out" }}
    >
      {children}
    </div>
  );
}

export default function UseCases() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#7C3AED] font-[family-name:var(--font-syne)] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Who It&apos;s For
          </p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-white text-3xl sm:text-4xl md:text-5xl italic">
            Built for Every Creator
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <MagneticCard className="film-frame overflow-hidden h-full flex flex-col p-0">
                <div className="relative aspect-video w-full shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={uc.image}
                    alt={uc.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                    <uc.icon className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div className="text-right">
                    <div className="text-[#F59E0B] font-[family-name:var(--font-syne)] font-bold text-2xl leading-none">
                      {uc.stat}
                    </div>
                    <div className="text-white/25 text-[10px] uppercase tracking-wider mt-1 font-[family-name:var(--font-syne)]">
                      {uc.statLabel}
                    </div>
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-syne)] text-white font-semibold text-lg mb-2">
                  {uc.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {uc.description}
                </p>
                </div>
              </MagneticCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
