"use client";

import { motion } from "framer-motion";
import { Video, GraduationCap, Mic, Building2, Globe, DollarSign, UserX, Clock, Lock, AlertTriangle, RefreshCw, BarChart, Archive, Calendar, Check, Subtitles, Users, Layers, Languages } from "lucide-react";
import PageHero from "@/components/launch/shared/PageHero";
import SectionHeader from "@/components/launch/shared/SectionHeader";
import GlassCard from "@/components/launch/shared/GlassCard";
import FadeInView from "@/components/launch/shared/FadeInView";
import type { UseCase } from "@/data/use-cases";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Video, GraduationCap, Mic, Building2, Globe, DollarSign, UserX, Clock, Lock, AlertTriangle, RefreshCw, BarChart, Archive, Calendar, Subtitles, Users, Layers, Languages,
};

export default function UseCaseSubPage({ useCase }: { useCase: UseCase }) {
  return (
    <>
      <PageHero
        eyebrow={useCase.hero.eyebrow}
        title={useCase.hero.title}
        subtitle={useCase.hero.subtitle}
      />

      {/* Pain Points */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Problem" title="Challenges You Face" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCase.painPoints.map((point, i) => {
              const Icon = iconMap[point.icon] || Globe;
              return (
                <FadeInView key={point.title} delay={i * 0.1}>
                  <GlassCard>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1 font-[family-name:var(--font-syne)]">{point.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Solution" title="How Dubio Helps" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCase.solutions.map((solution, i) => (
              <FadeInView key={solution.title} delay={i * 0.1}>
                <GlassCard>
                  <div className="flex gap-3">
                    <Check size={18} className="text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-semibold mb-1 font-[family-name:var(--font-syne)]">{solution.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How It Works" title="Your Workflow" />
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED] to-[#7C3AED]/10 hidden md:block" />
            <div className="space-y-8">
              {useCase.workflow.map((step, i) => (
                <FadeInView key={step.step} delay={i * 0.15}>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-[#7C3AED] font-bold font-[family-name:var(--font-syne)]">{step.step}</span>
                    </div>
                    <div className="film-frame p-6 flex-1">
                      <h4 className="text-white font-semibold mb-1 font-[family-name:var(--font-syne)]">{step.title}</h4>
                      <p className="text-white/50 text-sm">{step.description}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCase.stats.map((stat, i) => (
              <FadeInView key={stat.label} delay={i * 0.1}>
                <div className="text-center film-frame p-6">
                  <span className="block text-3xl font-bold text-[#F59E0B] font-[family-name:var(--font-instrument-serif)] italic mb-1">
                    {stat.value}
                  </span>
                  <span className="text-white/40 text-sm">{stat.label}</span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="film-frame p-10 text-center">
              <div className="text-[#7C3AED] text-5xl mb-6 font-[family-name:var(--font-instrument-serif)]">&ldquo;</div>
              <p className="text-white/80 text-lg italic leading-relaxed mb-6">
                {useCase.testimonial.quote}
              </p>
              <div>
                <p className="text-white font-semibold font-[family-name:var(--font-syne)]">{useCase.testimonial.name}</p>
                <p className="text-white/40 text-sm">{useCase.testimonial.role}</p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-[family-name:var(--font-instrument-serif)] italic launch-gradient-text mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 mb-8">Start dubbing your videos for free today.</p>
            <a
              href="https://app.dubio.ai"
              className="inline-flex items-center px-8 py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-sm transition-colors font-[family-name:var(--font-syne)]"
            >
              Start Dubbing Free
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
