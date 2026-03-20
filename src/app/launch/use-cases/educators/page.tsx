import UseCaseSubPage from "@/components/launch/use-cases/UseCaseSubPage";
import { useCases } from "@/data/use-cases";

const useCase = useCases.find((uc) => uc.slug === "educators")!;

export const metadata = {
  title: `${useCase.title} — Dubio`,
  description: useCase.description,
};

export default function EducatorsPage() {
  return <UseCaseSubPage useCase={useCase} />;
}
