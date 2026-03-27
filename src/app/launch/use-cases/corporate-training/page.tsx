import UseCaseSubPage from "@/components/launch/use-cases/UseCaseSubPage";
import { useCases } from "@/data/use-cases";

const useCase = useCases.find((uc) => uc.slug === "corporate-training")!;

export const metadata = {
  title: `${useCase.title} — Dubio`,
  description: useCase.description,
};

export default function CorporateTrainingPage() {
  return <UseCaseSubPage useCase={useCase} />;
}
