import type { Metadata } from "next";
import { PageIntro } from "@/shared/ui/PageIntro/PageIntro";
import { ScheduleSection } from "@/widgets/ScheduleSection/ui/ScheduleSection";

export const metadata: Metadata = {
  title: "Расписание и цены — MoveCare",
  description: "График занятий и стоимость сеансов лечения в MoveCare.",
};

export default function SchedulePage() {
  return (
    <>
      <PageIntro
        eyebrow="РАСПИСАНИЕ И ЦЕНЫ"
        title={
          <>
            График занятий
            <br />
            <em>и стоимость сеанса</em>
          </>
        }
        text="Выберите удобное время и формат: разовый приём, курс лечения или месячный абонемент."
      />
      <ScheduleSection />
    </>
  );
}
