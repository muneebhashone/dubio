"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export default function GlassCard({ children, hover = true, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "film-frame p-6",
        hover && "transition-all duration-400 cursor-default",
        className
      )}
    >
      {children}
    </div>
  );
}
