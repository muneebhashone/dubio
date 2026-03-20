"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Upload, Languages, Play } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Upload,
    title: "Upload or Paste",
    description: "Drop a video file or paste a YouTube link.",
    detail: "MP4, MOV, or any YouTube URL",
  },
  {
    icon: Languages,
    title: "Pick Language & Voice",
    description: "Select from 50+ languages. Clone your voice or choose a new one.",
    detail: "AI preserves your unique vocal identity",
  },
  {
    icon: Play,
    title: "Download & Share",
    description: "Get your dubbed video with synced lips and natural speech.",
    detail: "Ready in minutes, not days",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#7C3AED] font-[family-name:var(--font-syne)] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            How It Works
          </p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-white text-3xl sm:text-4xl md:text-5xl italic">
            Three Steps. That&apos;s It.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-white/5">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#7C3AED] to-[#F59E0B] rounded-full"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative flex items-start gap-6 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#110e2e] border-2 border-[#7C3AED]/40 flex items-center justify-center">
                  <span className="text-[#7C3AED] font-bold font-[family-name:var(--font-syne)] text-lg">
                    {i + 1}
                  </span>
                </div>
              </div>

              <div className={`film-frame p-6 sm:p-8 flex-1 md:max-w-[45%] ${i % 2 === 0 ? "" : "md:text-right"}`}>
                <div className={`flex items-center gap-3 mb-3 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-syne)] text-white font-semibold text-xl">
                    {step.title}
                  </h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-2">
                  {step.description}
                </p>
                <p className="text-[#7C3AED]/50 text-xs font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
