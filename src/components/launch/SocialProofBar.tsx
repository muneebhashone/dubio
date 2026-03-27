"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Clapperboard, Users, type LucideIcon } from "lucide-react";

const metrics: { value: number; suffix: string; label: string; icon: LucideIcon }[] = [
  { value: 50, suffix: "+", label: "Languages", icon: Globe },
  { value: 10000, suffix: "+", label: "Videos Dubbed", icon: Clapperboard },
  { value: 500, suffix: "+", label: "Creators", icon: Users },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  const display = count >= 1000
    ? new Intl.NumberFormat().format(count)
    : count.toString();

  return (
    <span ref={ref} className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl md:text-6xl font-bold tabular-nums text-white">
      {display}{suffix}
    </span>
  );
}

export default function SocialProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative py-20 sm:py-28"
    >
      {/* Horizontal line accents */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="film-frame flex flex-col items-center gap-4 py-8 px-6"
            >
              <div className="w-11 h-11 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                <m.icon className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <AnimatedCounter target={m.value} suffix={m.suffix} />
              <span className="text-white/30 text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-syne)]">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
