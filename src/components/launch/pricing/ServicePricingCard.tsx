"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { PaygService } from "@/data/pricing";

interface ServicePricingCardProps {
  service: PaygService;
  index: number;
}

export default function ServicePricingCard({ service, index }: ServicePricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`film-frame p-8 relative flex flex-col ${
        service.popular ? "border-[#7C3AED]/40 ring-1 ring-[#7C3AED]/20" : ""
      }`}
    >
      {service.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-[#7C3AED] text-white font-[family-name:var(--font-syne)]">
            Best Value
          </span>
        </div>
      )}

      <div className="mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4">
          <service.icon className="w-5 h-5 text-[#7C3AED]" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-syne)]">
          {service.name}
        </h3>
        <p className="text-white/50 text-sm">{service.description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white font-[family-name:var(--font-instrument-serif)] italic">
            {service.pricePerMinute}
          </span>
          <span className="text-white/40 text-sm">/min</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {service.includes.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check size={16} className="text-[#7C3AED] flex-shrink-0 mt-0.5" />
            <span className="text-white/70 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={process.env.NEXT_PUBLIC_APP_URL || "https://app.dubio.ai"}
        className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm transition-colors font-[family-name:var(--font-syne)] ${
          service.popular
            ? "bg-[#F59E0B] hover:bg-[#D97706] text-black"
            : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
        }`}
      >
        Start Free
      </a>
    </motion.div>
  );
}
