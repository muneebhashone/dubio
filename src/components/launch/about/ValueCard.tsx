"use client";

import { motion } from "framer-motion";
import { Lightbulb, Heart, Gem, Shield } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Lightbulb,
  Heart,
  Gem,
  Shield,
};

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function ValueCard({ icon, title, description, index }: ValueCardProps) {
  const Icon = iconMap[icon] || Lightbulb;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="film-frame p-6"
    >
      <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4">
        <Icon size={24} className="text-[#7C3AED]" />
      </div>
      <h3 className="text-white font-semibold mb-2 font-[family-name:var(--font-syne)]">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
