import type { Metadata } from "next";
import { Suspense } from "react";
import { PageIntro } from "@/shared/ui/PageIntro/PageIntro";
import { BookingForm } from "@/widgets/BookingForm/ui/BookingForm";

export const metadata: Metadata = {
  title: "Запись на приём — MoveCare",
  description: "Заполните данные, выберите услугу, дату и время, затем оплатите по QR.",
};

export default function BookingPage() {
  return (
    <>
      <PageIntro
        eyebrow="ОНЛАЙН-ЗАПИСЬ"
        title={
          <>
            Запишитесь
            <br />
            <em>на сеанс</em>
          </>
        }
        text="Укажите данные пациента, выберите услугу и удобное время. После этого откроется оплата по QR тренера."
      />
      <Suspense fallback={<section className="section">Загрузка формы…</section>}>
        <BookingForm />
      </Suspense>
    </>
  );
}
