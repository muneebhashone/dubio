"use client";

import { Check, X } from "lucide-react";
import { serviceComparisonFeatures, services } from "@/data/pricing";
import FadeInView from "@/components/launch/shared/FadeInView";

export default function FeatureComparisonTable() {
  const renderValue = (value: boolean) => {
    return value ? (
      <Check size={16} className="text-[#7C3AED] mx-auto" />
    ) : (
      <X size={16} className="text-white/20 mx-auto" />
    );
  };

  return (
    <FadeInView>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-white/40 text-sm font-normal w-1/4">Feature</th>
              {services.map((service) => (
                <th key={service.name} className="text-center py-4 px-4">
                  <div className="text-white text-sm font-semibold font-[family-name:var(--font-syne)]">
                    {service.name}
                  </div>
                  <div className="text-[#F59E0B] text-xs mt-1 font-[family-name:var(--font-syne)]">
                    {service.pricePerMinute}/min
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {serviceComparisonFeatures.map((feature) => (
              <tr key={feature.name} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="py-3 px-4 text-white/60 text-sm">{feature.name}</td>
                <td className="py-3 px-4 text-center">{renderValue(feature.dubbing)}</td>
                <td className="py-3 px-4 text-center">{renderValue(feature.transcription)}</td>
                <td className="py-3 px-4 text-center">{renderValue(feature.bundle)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeInView>
  );
}
