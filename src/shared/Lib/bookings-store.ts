import { promises as fs } from "fs";
import path from "path";
import type { Booking } from "@/entities/booking/model/types";

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "bookings.json");

async function ensureStore() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, "[]", "utf8");
  }
}

export async function readBookings(): Promise<Booking[]> {
  await ensureStore();
  const raw = await fs.readFile(filePath, "utf8");
  try {
    const parsed = JSON.parse(raw) as Booking[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function writeBookings(bookings: Booking[]) {
  await ensureStore();
  await fs.writeFile(filePath, JSON.stringify(bookings, null, 2), "utf8");
}

export async function addBooking(booking: Booking) {
  const list = await readBookings();
  list.unshift(booking);
  await writeBookings(list);
  return booking;
}

export async function updateBookingStatus(id: string, status: Booking["status"]) {
  const list = await readBookings();
  const index = list.findIndex((item) => item.id === id);
  if (index === -1) return null;
  list[index] = { ...list[index], status };
  await writeBookings(list);
  return list[index];
}
