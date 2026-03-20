"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Top-to-bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/10 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-4 font-[family-name:var(--font-syne)]">
            {eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl font-normal leading-tight mb-6 font-[family-name:var(--font-instrument-serif)] italic launch-gradient-text">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
