import LaunchHeader from "@/components/launch/LaunchHeader";
import LaunchHero from "@/components/launch/LaunchHero";
import SocialProofBar from "@/components/launch/SocialProofBar";
import HowItWorks from "@/components/launch/HowItWorks";
import FeatureReel from "@/components/launch/FeatureReel";
import LiveTranslation from "@/components/launch/LiveTranslation";
import DemoSection from "@/components/launch/DemoSection";
import UseCases from "@/components/launch/UseCases";
import PricingTeaser from "@/components/launch/PricingTeaser";
import FinalCTA from "@/components/launch/FinalCTA";
import LaunchFooter from "@/components/launch/LaunchFooter";

export const metadata = {
  title: "Dubio — AI Video Dubbing Platform",
  description:
    "Clone your voice and dub your videos into 50+ languages in seconds. Powered by AI that preserves your tone, emotion, and identity.",
};

export default function LaunchPage() {
  return (
    <div className="min-h-screen bg-[#0a0724] text-white overflow-x-clip">
      <LaunchHeader />
      <LaunchHero />
      <SocialProofBar />
      <HowItWorks />
      <FeatureReel />
      <LiveTranslation />
      <DemoSection />
      <UseCases />
      <PricingTeaser />
      <FinalCTA />
      <LaunchFooter />
    </div>
  );
}
