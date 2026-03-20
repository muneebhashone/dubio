"use client";

import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  index: number;
}

export default function TeamCard({ name, role, bio, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="film-frame p-6 text-center"
    >
      {/* Avatar placeholder */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED]/30 to-[#7C3AED]/10 mx-auto mb-4 flex items-center justify-center">
        <span className="text-2xl font-bold text-[#7C3AED] font-[family-name:var(--font-syne)]">
          {name.split(" ").map((n) => n[0]).join("")}
        </span>
      </div>
      <h3 className="text-white font-semibold font-[family-name:var(--font-syne)]">{name}</h3>
      <p className="text-[#7C3AED] text-sm mb-3">{role}</p>
      <p className="text-white/40 text-sm leading-relaxed">{bio}</p>
    </motion.div>
  );
}
