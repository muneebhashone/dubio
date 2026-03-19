"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    badge: null,
    glowColor: "#F59E0B",
    features: [
      "5 minutes of dubbing / month",
      "3 target languages",
      "720p export quality",
      "YouTube URL import",
      "Community support",
    ],
    cta: "Start Free",
    ctaStyle: "bg-[#F59E0B] hover:bg-[#D97706] text-black shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.35)]",
    ctaHref: process.env.NEXT_PUBLIC_APP_URL || "https://app.dubio.ai",
  },
  {
    name: "Pro",
    price: "$29",
    priceDetail: "/mo",
    badge: "Coming Soon",
    glowColor: "#7C3AED",
    features: [
      "Unlimited dubbing minutes",
      "50+ languages",
      "4K export quality",
      "Voice cloning & lip sync",
      "Multi-speaker detection",
      "Priority support",
    ],
    cta: "Join Waitlist",
    ctaStyle: "border border-[#7C3AED]/40 text-white hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]/60",
    ctaHref: "#final-cta",
  },
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
            Start Free, Scale When Ready
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.2,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="film-frame p-8 flex flex-col relative group"
              style={{
                boxShadow: `inset 0 1px 0 ${plan.glowColor}15`,
              }}
            >
              {/* Animated border glow on hover */}
              <div
                className="absolute inset-0 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 40px ${plan.glowColor}15, inset 0 0 40px ${plan.glowColor}05`,
                }}
              />

              {plan.badge && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED]/15 text-[#a78bfa] text-xs font-semibold font-[family-name:var(--font-syne)]">
                  <Sparkles className="w-3 h-3" />
                  {plan.badge}
                </span>
              )}

              <h3 className="font-[family-name:var(--font-syne)] text-white/60 font-medium text-sm uppercase tracking-wider mb-3">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-[family-name:var(--font-syne)] text-white text-4xl font-bold">
                  {plan.price}
                </span>
                {plan.priceDetail && (
                  <span className="text-white/30 text-sm">{plan.priceDetail}</span>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/50 text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: plan.glowColor }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 font-[family-name:var(--font-syne)] ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
