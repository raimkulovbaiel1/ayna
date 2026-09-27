export type BookingStatus = "pending_payment" | "paid" | "cancelled";

export type Booking = {
  id: string;
  createdAt: string;
  patientName: string;
  phone: string;
  comment: string;
  serviceId: string;
  serviceName: string;
  price: string;
  unit: string;
  date: string;
  time: string;
  status: BookingStatus;
};

export type BookingInput = {
  patientName: string;
  phone: string;
  comment?: string;
  serviceId: string;
  date: string;
  time: string;
  status: BookingStatus;
};
