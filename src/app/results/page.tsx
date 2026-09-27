import type { Metadata } from "next";
import { PageIntro } from "@/shared/ui/PageIntro/PageIntro";
import { ResultsSection } from "@/widgets/ResultsSection/ui/ResultsSection";

export const metadata: Metadata = {
  title: "Результаты лечения — MoveCare",
  description: "Как мы лечим и результаты до / после. Добавьте свои фото в public/results/.",
};

export default function ResultsPage() {
  return (
    <>
      <PageIntro
        eyebrow="РЕЗУЛЬТАТЫ ЛЕЧЕНИЯ"
        title={
          <>
            Реальные изменения.
            <br />
          </>
        }
        text="Раздел про метод работы и визуальные результаты. "
      />
      <ResultsSection />
    </>
  );
}
