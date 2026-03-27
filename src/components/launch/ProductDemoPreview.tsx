"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Volume2, Subtitles } from "lucide-react";

export default function ProductDemoPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-4xl mx-auto mt-12 sm:mt-16"
    >
      <div className="film-frame overflow-hidden p-0">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="flex-1 mx-3 h-5 rounded bg-white/5 flex items-center justify-center">
            <span className="text-white/15 text-[10px] font-[family-name:var(--font-syne)]">app.dubio.ai</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
          {/* Before - Original */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                <Volume2 className="w-3 h-3" />
                Original — Chinese
              </span>
            </div>
            <div className="relative aspect-video bg-[#0c0928] rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white/20 ml-0.5" />
                </div>
                <span className="text-white/15 text-[10px] font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  Original Video
                </span>
              </div>
              {/* Decorative waveform */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-center gap-[3px] h-6">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full bg-white/10"
                    style={{ height: `${Math.max(15, Math.sin(i * 0.8) * 50 + 50)}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Divider with arrow */}
          <div className="hidden md:flex items-center justify-center px-2">
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-8 h-8 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4 text-[#7C3AED]" />
            </motion.div>
          </div>
          {/* Mobile divider */}
          <div className="flex md:hidden items-center justify-center py-2">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-8 h-8 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center rotate-90"
            >
              <ArrowRight className="w-4 h-4 text-[#7C3AED]" />
            </motion.div>
          </div>

          {/* After - Dubbed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/5 text-[10px] text-[#F59E0B]/70 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                <Subtitles className="w-3 h-3" />
                Dubbed — English
              </span>
            </div>
            <div className="relative aspect-video bg-[#0c0928] rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#F59E0B]/5 flex items-center justify-center">
                  <Play className="w-5 h-5 text-[#F59E0B]/30 ml-0.5" />
                </div>
                <span className="text-[#F59E0B]/20 text-[10px] font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  Dubbed Video
                </span>
              </div>
              {/* Subtitle overlay */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-black/60 rounded px-3 py-1.5 text-center">
                  <span className="text-white/60 text-[10px] sm:text-xs">Hello, welcome to our channel</span>
                </div>
              </div>
              {/* Decorative waveform */}
              <div className="absolute bottom-10 left-3 right-3 flex items-end justify-center gap-[3px] h-6">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full bg-[#F59E0B]/15"
                    style={{ height: `${Math.max(15, Math.cos(i * 0.8) * 50 + 50)}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
