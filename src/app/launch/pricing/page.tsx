"use client";

import { useState } from "react";
import PageHero from "@/components/launch/shared/PageHero";
import SectionHeader from "@/components/launch/shared/SectionHeader";
import PricingToggle from "@/components/launch/pricing/PricingToggle";
import PricingCard from "@/components/launch/pricing/PricingCard";
import FeatureComparisonTable from "@/components/launch/pricing/FeatureComparisonTable";
import PricingFAQ from "@/components/launch/pricing/PricingFAQ";
import FadeInView from "@/components/launch/shared/FadeInView";
import { plans } from "@/data/pricing";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple Pricing, Powerful Dubbing"
        subtitle="Start free, upgrade when you need more. No hidden fees, no surprises."
      />

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} isYearly={isYearly} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Compare" title="Full Feature Comparison" />
          <FeatureComparisonTable />
        </div>
      </section>

      <PricingFAQ />

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl font-[family-name:var(--font-instrument-serif)] italic launch-gradient-text mb-4">
              Ready to Go Global?
            </h2>
            <p className="text-white/60 mb-8">Start dubbing your videos for free. No credit card required.</p>
            <a
              href="https://app.dubio.ai"
              className="inline-flex items-center px-8 py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-sm transition-colors font-[family-name:var(--font-syne)]"
            >
              Start Dubbing Free
            </a>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
