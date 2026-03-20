"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import PageHero from "@/components/launch/shared/PageHero";
import AccordionItem from "@/components/launch/shared/AccordionItem";
import FadeInView from "@/components/launch/shared/FadeInView";
import { faqs, faqCategories } from "@/data/faq";

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch = search === "" ||
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const groupedFAQs = useMemo(() => {
    const groups: Record<string, typeof faqs> = {};
    filteredFAQs.forEach((faq) => {
      if (!groups[faq.category]) groups[faq.category] = [];
      groups[faq.category].push(faq);
    });
    return groups;
  }, [filteredFAQs]);

  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Dubio. Can't find your answer? Contact us."
      />

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="relative mb-8">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#7C3AED]/50 focus:outline-none focus:ring-1 focus:ring-[#7C3AED]/50 transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["All", ...faqCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-colors font-[family-name:var(--font-syne)] ${
                  activeCategory === cat
                    ? "bg-[#7C3AED] text-white"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion sections */}
          {Object.keys(groupedFAQs).length === 0 ? (
            <p className="text-center text-white/40 py-12">No questions match your search.</p>
          ) : (
            Object.entries(groupedFAQs).map(([category, items]) => (
              <FadeInView key={category} className="mb-10">
                <h3 className="text-lg font-semibold text-white/80 mb-4 font-[family-name:var(--font-syne)]">
                  {category}
                </h3>
                <div className="film-frame p-2">
                  {items.map((faq) => (
                    <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </FadeInView>
            ))
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 film-frame p-10"
          >
            <h3 className="text-2xl font-[family-name:var(--font-instrument-serif)] italic launch-gradient-text mb-3">
              Still Have Questions?
            </h3>
            <p className="text-white/50 mb-6">Our team is here to help.</p>
            <Link
              href="/launch/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-sm transition-colors font-[family-name:var(--font-syne)]"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
