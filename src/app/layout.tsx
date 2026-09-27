import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/widgets/Header/ui/Header";
import { Footer } from "@/widgets/Footer/ui/Footer";
import "@/shared/styles/globals.css";
import "@/widgets/Header/ui/style.css";
import "@/widgets/Hero/ui/style.css";
import "@/widgets/PostureSection/ui/style.css";
import "@/widgets/ZoneSelection/ui/style.css";
import "@/widgets/FlatfootSection/ui/style.css";
import "@/widgets/WorkoutSection/ui/style.css";
import "@/widgets/ProgressSection/ui/style.css";
import "@/widgets/Footer/ui/style.css";
import "@/widgets/ResultsSection/ui/style.css";
import "@/widgets/ScheduleSection/ui/style.css";
import "@/widgets/TrainerSection/ui/style.css";
import "@/widgets/BookingForm/ui/style.css";
import "@/widgets/BookingsAdmin/ui/style.css";
import "@/shared/ui/PageIntro/style.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MoveCare — суставы и стопы",
  description: "Тренировки и восстановление для здорового движения.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={manrope.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
