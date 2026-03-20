import { pricingFAQs } from "@/data/pricing";
import SectionHeader from "@/components/launch/shared/SectionHeader";
import AccordionItem from "@/components/launch/shared/AccordionItem";
import FadeInView from "@/components/launch/shared/FadeInView";

export default function PricingFAQ() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Pricing Questions" />
        <FadeInView>
          <div className="divide-y divide-white/5">
            {pricingFAQs.map((faq) => (
              <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
