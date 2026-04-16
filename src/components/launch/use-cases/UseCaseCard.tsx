"use client";

import { motion } from "framer-motion";
import { Video, Subtitles, Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { UseCase } from "@/data/use-cases";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Video,
  Subtitles,
  Globe,
  Users,
};

const imageMap: Record<
  string,
  { src: string; alt: string; width: number; height: number }
> = {
  "creator-dashboard": {
    src: "/images/creator4.png",
    alt: "YouTube Creator Dashboard",
    width: 1293,
    height: 755,
  },
  "subtitled-content": {
    src: "/images/creator3.png",
    alt: "Subtitled Content",
    width: 533,
    height: 291,
  },
  "multi-language-distribution": {
    src: "/images/creator1.png",
    alt: "Multi-Language Distribution",
    width: 493,
    height: 285,
  },
  "corporate-training": {
    src: "/images/creator2.png",
    alt: "Corporate Training",
    width: 523,
    height: 299,
  },
};

interface UseCaseCardProps {
  useCase: UseCase;
  index: number;
}

function MagneticCard({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [transform, setTransform] = useState(
    "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );

  const handleMouse = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 8;
    const rotateX = -(y / rect.height - 0.5) * 8;

    setTransform(
      `perspective(800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const handleLeave = () => {
    setTransform(
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseLeave={handleLeave}
      onMouseMove={handleMouse}
      className={className}
      style={{ transform, transition: "transform 0.3s ease-out" }}
    >
      {children}
    </Link>
  );
}

export default function UseCaseCard({ useCase, index }: UseCaseCardProps) {
  const Icon = iconMap[useCase.icon] || Video;
  const image = imageMap[useCase.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <MagneticCard
        className={`film-frame group flex h-full flex-col overflow-hidden ${
          index === 0
            ? "p-4"
            : index === 2
              ? "py-4 pl-4"
              : index === 3
                ? "py-0"
                : "py-4"
        }`}
        href={`/launch/use-cases/${useCase.slug}`}
      >
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full object-cover"
          />
        ) : null}

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7C3AED]/10">
              <Icon size={24} className="text-[#7C3AED]" />
            </div>
            <div className="text-right">
              <div className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F59E0B] leading-none">
                {useCase.stat}
              </div>
              <div className="mt-1 text-[10px] text-white/25 uppercase tracking-wider font-[family-name:var(--font-syne)]">
                {useCase.statLabel}
              </div>
            </div>
          </div>

          <h3 className="mb-2 font-[family-name:var(--font-syne)] font-semibold text-lg text-white">
            {useCase.title}
          </h3>

          <p className="text-sm text-white/40 leading-relaxed">
            {useCase.description}
          </p>

          <span className="mt-6 font-[family-name:var(--font-syne)] font-semibold text-[#7C3AED] text-sm transition-colors group-hover:text-[#a78bfa]">
            Learn More &rarr;
          </span>
        </div>
      </MagneticCard>
    </motion.div>
  );
}
