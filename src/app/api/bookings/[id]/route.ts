import { NextResponse } from "next/server";
import type { BookingStatus } from "@/entities/booking/model/types";
import { updateBookingStatus } from "@/shared/lib/bookings-store";

export const runtime = "nodejs";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  let body: { status?: BookingStatus };

  try {
    body = (await request.json()) as { status?: BookingStatus };
  } catch {
    return NextResponse.json({ error: "Некорректный JSON" }, { status: 400 });
  }

  if (!body.status || !["pending_payment", "paid", "cancelled"].includes(body.status)) {
    return NextResponse.json({ error: "Неверный статус" }, { status: 400 });
  }

  const updated = await updateBookingStatus(id, body.status);
  if (!updated) {
    return NextResponse.json({ error: "Запись не найдена" }, { status: 404 });
  }

  return NextResponse.json(updated);
}
