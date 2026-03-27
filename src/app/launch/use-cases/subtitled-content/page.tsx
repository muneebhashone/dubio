import UseCaseSubPage from "@/components/launch/use-cases/UseCaseSubPage";
import { useCases } from "@/data/use-cases";

const useCase = useCases.find((uc) => uc.slug === "subtitled-content")!;

export const metadata = {
  title: `${useCase.title} — Dubio`,
  description: useCase.description,
};

export default function SubtitledContentPage() {
  return <UseCaseSubPage useCase={useCase} />;
}
