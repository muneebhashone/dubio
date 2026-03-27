"use client";

import { motion } from "framer-motion";
import { Check, Gift, Sparkles, Mic, FileText, Layers, ArrowRight } from "lucide-react";

const servicePreview = [
  { name: "Dubbing", price: "$0.25", icon: Mic },
  { name: "Transcription", price: "$0.10", icon: FileText },
  { name: "Dubbing + Transcription", price: "$0.30", icon: Layers },
];

const freeFeatures = [
  "5 free minutes",
  "All services included",
  "No credit card required",
  "50+ languages",
  "Voice cloning",
];

export default function PricingTeaser() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-white text-3xl sm:text-4xl md:text-5xl italic">
            Simple Per-Minute Pricing
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free to Start card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="film-frame p-8 flex flex-col relative group"
            style={{
              boxShadow: "inset 0 1px 0 rgba(245, 158, 11, 0.08)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: "0 0 40px rgba(245, 158, 11, 0.06), inset 0 0 40px rgba(245, 158, 11, 0.02)",
              }}
            />

            <div className="flex items-center gap-3 mb-3">
              <Gift className="w-5 h-5 text-[#F59E0B]" />
              <h3 className="font-[family-name:var(--font-syne)] text-white/60 font-medium text-sm uppercase tracking-wider">
                Free to Start
              </h3>
            </div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-[family-name:var(--font-syne)] text-white text-4xl font-bold">
                5
              </span>
              <span className="text-white/30 text-sm">free minutes</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-white/50 text-sm">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#F59E0B]" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={process.env.NEXT_PUBLIC_APP_URL || "https://app.dubio.ai"}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 font-[family-name:var(--font-syne)] bg-[#F59E0B] hover:bg-[#D97706] text-black shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.35)]"
            >
              Start Free
            </a>
          </motion.div>

          {/* Pay As You Go card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="film-frame p-8 flex flex-col relative group"
            style={{
              boxShadow: "inset 0 1px 0 rgba(124, 58, 237, 0.08)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: "0 0 40px rgba(124, 58, 237, 0.06), inset 0 0 40px rgba(124, 58, 237, 0.02)",
              }}
            />

            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-[#7C3AED]" />
              <h3 className="font-[family-name:var(--font-syne)] text-white/60 font-medium text-sm uppercase tracking-wider">
                Pay As You Go
              </h3>
            </div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-[family-name:var(--font-syne)] text-white text-4xl font-bold">
                From $0.10
              </span>
              <span className="text-white/30 text-sm">/min</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {servicePreview.map((s) => (
                <li key={s.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3 text-white/50">
                    <s.icon className="w-4 h-4 flex-shrink-0 text-[#7C3AED]" />
                    {s.name}
                  </div>
                  <span className="text-white/70 font-[family-name:var(--font-syne)] font-medium">
                    {s.price}<span className="text-white/30">/min</span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/launch/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 font-[family-name:var(--font-syne)] border border-[#7C3AED]/40 text-white hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]/60"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
