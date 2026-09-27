import { NextResponse } from "next/server";
import { pricePlans } from "@/entities/schedule/model/data";
import { bookingTimes } from "@/entities/booking/model/slots";
import type { Booking, BookingInput } from "@/entities/booking/model/types";
import { addBooking, readBookings } from "@/shared/lib/bookings-store";

export const runtime = "nodejs";

function isValidInput(body: Partial<BookingInput>): body is BookingInput {
  return Boolean(
    body.patientName?.trim() &&
      body.phone?.trim() &&
      body.serviceId &&
      body.date &&
      body.time &&
      (body.status === "pending_payment" || body.status === "paid"),
  );
}

export async function GET() {
  const bookings = await readBookings();
  return NextResponse.json(bookings);
}

export async function POST(request: Request) {
  let body: Partial<BookingInput>;

  try {
    body = (await request.json()) as Partial<BookingInput>;
  } catch {
    return NextResponse.json({ error: "Некорректный JSON" }, { status: 400 });
  }

  if (!isValidInput(body)) {
    return NextResponse.json({ error: "Заполните все обязательные поля" }, { status: 400 });
  }

  const plan = pricePlans.find((item) => item.id === body.serviceId);
  if (!plan) {
    return NextResponse.json({ error: "Услуга не найдена" }, { status: 400 });
  }

  if (!bookingTimes.includes(body.time as (typeof bookingTimes)[number])) {
    return NextResponse.json({ error: "Это время недоступно" }, { status: 400 });
  }

  const booking: Booking = {
    id: `bk_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    patientName: body.patientName.trim(),
    phone: body.phone.trim(),
    comment: body.comment?.trim() ?? "",
    serviceId: plan.id,
    serviceName: plan.name,
    price: plan.price,
    unit: plan.unit,
    date: body.date,
    time: body.time,
    status: body.status,
  };

  await addBooking(booking);
  return NextResponse.json(booking, { status: 201 });
}
