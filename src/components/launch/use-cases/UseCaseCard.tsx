"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Video, GraduationCap, Mic, Building2 } from "lucide-react";
import type { UseCase } from "@/data/use-cases";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Video,
  GraduationCap,
  Mic,
  Building2,
};

interface UseCaseCardProps {
  useCase: UseCase;
  index: number;
}

export default function UseCaseCard({ useCase, index }: UseCaseCardProps) {
  const Icon = iconMap[useCase.icon] || Video;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/launch/use-cases/${useCase.slug}`}
        className="film-frame p-8 group block"
      >
        <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-5">
          <Icon size={24} className="text-[#7C3AED]" />
        </div>

        <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-syne)]">
          {useCase.title}
        </h3>

        <p className="text-white/50 text-sm mb-6 leading-relaxed">
          {useCase.description}
        </p>

        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-3xl font-bold text-[#F59E0B] font-[family-name:var(--font-instrument-serif)] italic">
            {useCase.stat}
          </span>
          <span className="text-white/40 text-sm">{useCase.statLabel}</span>
        </div>

        <span className="text-[#7C3AED] text-sm font-semibold group-hover:text-[#a78bfa] transition-colors font-[family-name:var(--font-syne)]">
          Learn More &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
