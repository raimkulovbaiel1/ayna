/** Свободные слоты для записи */
export const bookingTimes = [
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "16:00",
  "18:00",
  "18:30",
  "19:00",
] as const;

/** Путь к QR для оплаты — положите файл сюда */
export const paymentQrSrc = "/trainer/payment-qr.png";

export function getAvailableDates(daysAhead = 21): string[] {
  const dates: string[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 1; i <= daysAhead; i += 1) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    // воскресенье пропускаем
    if (d.getDay() === 0) continue;
    dates.push(d.toISOString().slice(0, 10));
  }

  return dates;
}

export function formatBookingDate(isoDate: string): string {
  const d = new Date(`${isoDate}T12:00:00`);
  return d.toLocaleDateString("ru-RU", {
    weekday: "short",
    day: "numeric",
    month: "long",
  });
}
