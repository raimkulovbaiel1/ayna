import type { Metadata } from "next";
import { PageIntro } from "@/shared/ui/PageIntro/PageIntro";
import { TrainerSection } from "@/widgets/TrainerSection/ui/TrainerSection";

export const metadata: Metadata = {
  title: "Тренер Байэл — MoveCare",
  description: "Автобиография тренера по фитнесу и восстановлению движения.",
};

export default function TrainerPage() {
  return (
    <>
      <PageIntro
        eyebrow=""
        title={
          <>
            специалист по осанке
            <br />
            <em>тренер Аяна</em>
          </>
        }
        text="Опыт, подход к лечению и путь в фитнесе — коротко и по делу. "
      />
      <TrainerSection />
    </>
  );
}
