"use client";

import { motion } from "framer-motion";

interface PricingToggleProps {
  isYearly: boolean;
  onToggle: () => void;
}

export default function PricingToggle({ isYearly, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span className={`text-sm font-[family-name:var(--font-syne)] transition-colors ${!isYearly ? "text-white" : "text-white/40"}`}>
        Monthly
      </span>
      <button
        onClick={onToggle}
        className="relative w-14 h-7 rounded-full bg-white/10 border border-white/10 transition-colors hover:bg-white/15"
      >
        <motion.div
          animate={{ x: isYearly ? 28 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-0.5 w-6 h-6 rounded-full bg-[#7C3AED]"
        />
      </button>
      <span className={`text-sm font-[family-name:var(--font-syne)] transition-colors ${isYearly ? "text-white" : "text-white/40"}`}>
        Yearly
        <span className="ml-2 text-xs text-[#F59E0B]">Save 20%</span>
      </span>
    </div>
  );
}
