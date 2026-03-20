import PageHero from "@/components/launch/shared/PageHero";
import SectionHeader from "@/components/launch/shared/SectionHeader";
import GlassCard from "@/components/launch/shared/GlassCard";
import FadeInView from "@/components/launch/shared/FadeInView";
import ValueCard from "@/components/launch/about/ValueCard";
import TeamCard from "@/components/launch/about/TeamCard";
import { Upload, Languages, Mic, MonitorPlay } from "lucide-react";

export const metadata = {
  title: "About — Dubio",
  description: "Breaking language barriers in content creation with AI-powered video dubbing technology.",
};

const values = [
  { icon: "Lightbulb", title: "Innovation", description: "We push the boundaries of AI to create the most natural-sounding voice cloning and dubbing technology available." },
  { icon: "Heart", title: "Accessibility", description: "We believe great content shouldn't be limited by language. Everyone deserves access to knowledge and entertainment." },
  { icon: "Gem", title: "Quality", description: "We never compromise on output quality. Every dubbed video should sound and look as natural as the original." },
  { icon: "Shield", title: "Privacy", description: "Your content is yours. We use industry-leading encryption and never use your data for training without explicit consent." },
];

const team = [
  { name: "Jordan Mitchell", role: "CEO & Co-Founder", bio: "Former ML engineer at Google with a passion for breaking language barriers through technology." },
  { name: "Priya Sharma", role: "CTO & Co-Founder", bio: "PhD in Speech Synthesis from MIT. Built voice cloning systems used by millions worldwide." },
  { name: "Carlos Mendez", role: "Head of Product", bio: "Product leader with 10+ years building creator tools at YouTube and Spotify." },
  { name: "Aisha Okafor", role: "Head of AI Research", bio: "Leading researcher in neural TTS and voice cloning. Previously at DeepMind." },
  { name: "Liam O'Brien", role: "Head of Engineering", bio: "Scaled infrastructure at Cloudflare. Obsessed with low-latency, high-reliability systems." },
  { name: "Yuki Tanaka", role: "Head of Design", bio: "Award-winning designer focused on making complex AI technology feel simple and approachable." },
];

const pipelineSteps = [
  { icon: Upload, title: "Upload", description: "Your video enters our secure processing pipeline" },
  { icon: Mic, title: "Transcribe & Clone", description: "AI transcribes audio and creates a voice clone" },
  { icon: Languages, title: "Translate & Generate", description: "Content is translated and new speech is synthesized in your voice" },
  { icon: MonitorPlay, title: "Sync & Deliver", description: "Lip sync is applied and your dubbed video is ready" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Dubio"
        title="Breaking Language Barriers in Content"
        subtitle="We're building the future of multilingual content creation, powered by AI that preserves what makes your voice unique."
      />

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-[family-name:var(--font-instrument-serif)] italic">
              <span className="launch-gradient-text">Every voice deserves to be heard globally.</span>{" "}
              We&apos;re on a mission to eliminate language barriers so creators, educators, and businesses can connect with anyone, anywhere, in their own voice.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard key={value.title} {...value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Technology" title="The AI Pipeline" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeInView key={step.title} delay={index * 0.1}>
                  <GlassCard className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-[#7C3AED]" />
                    </div>
                    <h3 className="text-white font-semibold mb-2 font-[family-name:var(--font-syne)]">{step.title}</h3>
                    <p className="text-white/50 text-sm">{step.description}</p>
                  </GlassCard>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Team" title="The People Behind Dubio" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <TeamCard key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Trust & Security" title="Your Content is Safe" />
          <FadeInView>
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-2xl font-bold text-[#F59E0B] font-[family-name:var(--font-instrument-serif)] italic mb-2">AES-256</p>
                  <p className="text-white/50 text-sm">Encryption at rest</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#F59E0B] font-[family-name:var(--font-instrument-serif)] italic mb-2">TLS 1.3</p>
                  <p className="text-white/50 text-sm">Encryption in transit</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#F59E0B] font-[family-name:var(--font-instrument-serif)] italic mb-2">SOC 2</p>
                  <p className="text-white/50 text-sm">Compliance ready</p>
                </div>
              </div>
              <p className="text-white/40 text-sm text-center mt-6">
                We never use your content for AI training without explicit consent. Your videos are processed in isolated environments and can be deleted at any time.
              </p>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl font-[family-name:var(--font-instrument-serif)] italic launch-gradient-text mb-4">
              Try Dubio Free
            </h2>
            <p className="text-white/60 mb-8">Join thousands of creators already dubbing their content worldwide.</p>
            <a
              href="https://app.dubio.ai"
              className="inline-flex items-center px-8 py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-sm transition-colors font-[family-name:var(--font-syne)]"
            >
              Get Started for Free
            </a>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
