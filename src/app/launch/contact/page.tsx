"use client";

import { useState } from "react";
import { Mail, MessageSquare, Handshake, HeadphonesIcon } from "lucide-react";
import PageHero from "@/components/launch/shared/PageHero";
import ContactForm from "@/components/launch/shared/ContactForm";
import FadeInView from "@/components/launch/shared/FadeInView";

const contactTypes = [
  { id: "general", label: "General", icon: MessageSquare, subject: "General Inquiry" },
  { id: "sales", label: "Sales", icon: Handshake, subject: "Sales Inquiry" },
  { id: "support", label: "Support", icon: HeadphonesIcon, subject: "Support Request" },
  { id: "partnership", label: "Partnership", icon: Mail, subject: "Partnership Inquiry" },
];

export default function ContactPage() {
  const [activeType, setActiveType] = useState("general");
  const selectedType = contactTypes.find((t) => t.id === activeType)!;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Have a question, feedback, or want to explore a partnership? We'd love to hear from you."
      />

      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            {/* Type selector tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {contactTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all font-[family-name:var(--font-syne)] text-sm ${
                      activeType === type.id
                        ? "bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-white"
                        : "bg-white/5 border border-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
                    }`}
                  >
                    <Icon size={20} />
                    {type.label}
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <div className="film-frame p-8">
              <ContactForm key={activeType} defaultSubject={selectedType.subject} />
            </div>

            {/* Direct contact info */}
            <div className="mt-12 text-center">
              <p className="text-white/40 text-sm mb-2">Or reach us directly at</p>
              <a href="mailto:hello@dubio.ai" className="text-[#7C3AED] hover:text-[#a78bfa] transition-colors font-[family-name:var(--font-syne)]">
                hello@dubio.ai
              </a>
              <p className="text-white/30 text-xs mt-4">We typically respond within 24 hours.</p>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
