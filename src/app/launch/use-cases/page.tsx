import PageHero from "@/components/launch/shared/PageHero";
import UseCaseCard from "@/components/launch/use-cases/UseCaseCard";
import { useCases } from "@/data/use-cases";

export const metadata = {
  title: "Use Cases — Dubio",
  description: "Discover how creators, educators, podcasters, and businesses use Dubio to reach global audiences.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use Cases"
        title="Built for Every Creator"
        subtitle="Whether you're a YouTuber, educator, podcaster, or enterprise — Dubio helps you reach a global audience."
      />

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={useCase.slug} useCase={useCase} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
