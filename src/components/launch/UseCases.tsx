"use client";

import { motion } from "framer-motion";
import { Video, Subtitles, Globe, Users, Star, Quote } from "lucide-react";
import { useRef, useState } from "react";
import {
  CreatorDashboardMockup,
  SubtitledContentMockup,
  DistributionMockup,
  CorporateTrainingMockup,
} from "./UseCaseMockups";

const useCases = [
  {
    icon: Video,
    title: "YouTube Creator Dashboard",
    description: "Manage multi-language versions of your videos from one dashboard. See views, engagement, and performance across every language in real time.",
    stat: "10x",
    statLabel: "audience reach",
    scenario: "One video. Ten languages. Zero re-recording.",
    mockup: <CreatorDashboardMockup />,
  },
  {
    icon: Subtitles,
    title: "Subtitled Content",
    description: "Generate accurate, perfectly synced subtitles in 50+ languages automatically. Switch languages instantly and boost watch time worldwide.",
    stat: "50+",
    statLabel: "languages",
    scenario: "Every word, perfectly timed, in any language.",
    mockup: <SubtitledContentMockup />,
  },
  {
    icon: Globe,
    title: "Multi-Language Distribution",
    description: "Publish your dubbed videos to YouTube, TikTok, Instagram, and more - all from one upload. Expland your reach 3x without extra work.",
    stat: "3x",
    statLabel: "platform reach",
    scenario: "Publish everywhere. In every language. At once.",
    mockup: <DistributionMockup />,
  },
  {
    icon: Users,
    title: "Corporate Training",
    description: "Roll out training videos to global teams in their native language. Track engagement by region and language with zero extra production.",
    stat: "90%",
    statLabel: "cost savings",
    scenario: "Scale training globally in minutes.",
    mockup: <CorporateTrainingMockup />,
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
          <p className="mt-4 text-white/40 text-sm sm:text-base max-w-2xl mx-auto font-[family-name:var(--font-syne)]">
            From solo YouTubers to global brands — Dubio helps you reach audiences in any language while keeping your authentic voice. 
          </p>
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
                {uc.mockup}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <p className="text-[#F59E0B]/60 text-xs italic font-[family-name:var(--font-instrument-serif)] mb-4">
                    {uc.scenario}
                  </p>
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
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <p className="text-center text-[#7C3AED] font-[family-name:var(--font-syne)] font-semibold text-sm uppercase tracking-[0.2em] mb-10">
            What Creators Say
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Sarah Chen",
                role: "YouTube Creator • 1.2M subs",
                avatar: "SC",
                quote: "Dubio helped me reach my Chinese-speaking audience without re-recording a single video. My engagement tripled in two weeks.",
                stars: 5,
              },
              {
                name: "Marco Rivera",
                role: "Podcast Host • Top 50 Tech",
                avatar: "MR",
                quote: "The voice cloning is unreal — my Spanish episodes sound exactly like me. Listeners can't tell the difference.",
                stars: 5,
              },
              {
                name: "Priya Sharma",
                role: "L&D Director • Fortune 500",
                avatar: "PS",
                quote: "We rolled out training in 12 languages in a single afternoon. What used to take months now takes minutes.",
                stars: 5,
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="film-frame p-6 h-full flex flex-col">
                  <Quote className="w-5 h-5 text-[#7C3AED]/30 mb-4" />
                  <p className="text-white/60 text-sm leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mt-4 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED]/40 to-[#F59E0B]/30 flex items-center justify-center text-white text-xs font-bold font-[family-name:var(--font-syne)]">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold font-[family-name:var(--font-syne)]">
                        {t.name}
                      </p>
                      <p className="text-white/30 text-[11px] font-[family-name:var(--font-syne)]">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
