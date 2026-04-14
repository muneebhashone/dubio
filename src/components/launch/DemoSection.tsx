"use client";

import { motion } from "framer-motion";

export default function DemoSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ clipPath: "inset(0 50% 0 50%)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-12"
        >
          <p className="text-[#7C3AED] font-[family-name:var(--font-syne)] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Product Demo
          </p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-white text-3xl sm:text-4xl md:text-5xl italic">
            See Dubio in Action
          </h2>
          <p className="mt-4 text-white/40 text-sm sm:text-base max-w-2xl mx-auto font-[family-name:var(--font-syne)]">
            Watch your video transform instantly. Perfect lip-sync, voice cloning, and multi-language dubbing — all in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="film-frame overflow-hidden shadow-2xl shadow-purple-900/20">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0a22] border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-3 h-6 rounded-md bg-white/5 flex items-center justify-center">
                <span className="text-white/25 text-xs font-mono">app.dubio.ai</span>
              </div>
            </div>
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              poster="/images/youtubeplayer.png"
              playsInline
              style={{ colorScheme: "dark" }}
            >
              <source src="/images/dubiovideos.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
