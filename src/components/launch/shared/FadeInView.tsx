"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInView({ children, className, delay = 0 }: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
