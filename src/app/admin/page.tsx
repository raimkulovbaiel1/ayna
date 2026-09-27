import type { Metadata } from "next";
import { PageIntro } from "@/shared/ui/PageIntro/PageIntro";
import { BookingsAdmin } from "@/widgets/BookingsAdmin/ui/BookingsAdmin";

export const metadata: Metadata = {
  title: "Заявки пациентов — MoveCare",
  description: "Список записей: кто записался, на какой день, услугу и сумму.",
};

export default function AdminBookingsPage() {
  return (
    <>
      <PageIntro
        eyebrow="КАБИНЕТ ТРЕНЕРА"
        title={
          <>
            Заявки
            <br />
            <em>на приём</em>
          </>
        }
        text="Здесь Байэл видит все записи: имя, телефон, услугу, день, время и статус оплаты."
      />
      <BookingsAdmin />
    </>
  );
}
