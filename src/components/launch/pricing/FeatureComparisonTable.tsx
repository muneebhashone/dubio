"use client";

import { Check, X } from "lucide-react";
import { comparisonFeatures } from "@/data/pricing";
import FadeInView from "@/components/launch/shared/FadeInView";

export default function FeatureComparisonTable() {
  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check size={16} className="text-[#7C3AED] mx-auto" />
      ) : (
        <X size={16} className="text-white/20 mx-auto" />
      );
    }
    return <span className="text-white/70 text-sm">{value}</span>;
  };

  return (
    <FadeInView>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-white/40 text-sm font-normal w-1/4">Feature</th>
              <th className="text-center py-4 px-4 text-white text-sm font-semibold font-[family-name:var(--font-syne)]">Free</th>
              <th className="text-center py-4 px-4 text-[#7C3AED] text-sm font-semibold font-[family-name:var(--font-syne)]">Pro</th>
              <th className="text-center py-4 px-4 text-white text-sm font-semibold font-[family-name:var(--font-syne)]">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((group) => (
              <>
                <tr key={group.category}>
                  <td colSpan={4} className="pt-6 pb-2 px-4">
                    <span className="text-[#7C3AED] text-xs font-semibold tracking-widest uppercase font-[family-name:var(--font-syne)]">
                      {group.category}
                    </span>
                  </td>
                </tr>
                {group.features.map((feature) => (
                  <tr key={feature.name} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white/60 text-sm">{feature.name}</td>
                    <td className="py-3 px-4 text-center">{renderValue(feature.free)}</td>
                    <td className="py-3 px-4 text-center">{renderValue(feature.pro)}</td>
                    <td className="py-3 px-4 text-center">{renderValue(feature.enterprise)}</td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </FadeInView>
  );
}
