"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { pricePlans } from "@/entities/schedule/model/data";
import {
  bookingTimes,
  formatBookingDate,
  getAvailableDates,
  paymentQrSrc,
} from "@/entities/booking/model/slots";
import type { Booking } from "@/entities/booking/model/types";

type Step = "form" | "payment" | "done";

export function BookingForm() {
  const searchParams = useSearchParams();
  const presetPlan = searchParams.get("plan") ?? "single";

  const dates = useMemo(() => getAvailableDates(), []);
  const [step, setStep] = useState<Step>("form");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrFailed, setQrFailed] = useState(false);
  const [booking, setBooking] = useState<Booking | null>(null);

  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [serviceId, setServiceId] = useState(
    pricePlans.some((p) => p.id === presetPlan) ? presetPlan : "single",
  );
  const [date, setDate] = useState(dates[0] ?? "");
  const [time, setTime] = useState<string>(bookingTimes[0]);

  const selectedPlan = pricePlans.find((p) => p.id === serviceId) ?? pricePlans[0];

  function validateForm() {
    if (!patientName.trim() || !phone.trim() || !serviceId || !date || !time) {
      setError("Заполните имя, телефон, услугу, дату и время.");
      return false;
    }
    setError("");
    return true;
  }

  function goToPayment(event: FormEvent) {
    event.preventDefault();
    if (!validateForm()) return;
    setStep("payment");
  }

  async function confirmPayment() {
    if (!validateForm()) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName,
          phone,
          comment,
          serviceId,
          date,
          time,
          status: "paid",
        }),
      });

      const data = (await response.json()) as Booking & { error?: string };
      if (!response.ok) {
        throw new Error(data.error || "Не удалось сохранить запись");
      }

      setBooking(data);
      setStep("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка сети");
    } finally {
      setLoading(false);
    }
  }

  if (step === "done" && booking) {
    return (
      <section className="section booking-section">
        <div className="booking-success">
          <span className="eyebrow">ГОТОВО</span>
          <h2>Вы записаны</h2>
          <p>
            {booking.patientName}, ждём вас {formatBookingDate(booking.date)} в {booking.time}.
            Услуга: {booking.serviceName} — {booking.price} {booking.unit}.
          </p>
          <p className="booking-hint">
            Тренер уже видит заявку в разделе «Заявки». Если нужно перенести визит — напишите
            Байэлу.
          </p>
        </div>
      </section>
    );
  }

  if (step === "payment") {
    return (
      <section className="section booking-section">
        <div className="booking-panel payment-panel">
          <div>
            <span className="eyebrow">ОПЛАТА</span>
            <h2>Оплатите услугу</h2>
            <p className="booking-lead">
              Отсканируйте QR тренера, переведите сумму и нажмите «Оплатить».
            </p>

            <dl className="booking-summary">
              <div>
                <dt>Пациент</dt>
                <dd>{patientName}</dd>
              </div>
              <div>
                <dt>Телефон</dt>
                <dd>{phone}</dd>
              </div>
              <div>
                <dt>Услуга</dt>
                <dd>{selectedPlan.name}</dd>
              </div>
              <div>
                <dt>Дата и время</dt>
                <dd>
                  {formatBookingDate(date)} · {time}
                </dd>
              </div>
              <div>
                <dt>К оплате</dt>
                <dd className="booking-price">
                  {selectedPlan.price} {selectedPlan.unit}
                </dd>
              </div>
            </dl>

            {error ? <p className="booking-error">{error}</p> : null}

            <div className="booking-actions">
              <button className="btn secondary" type="button" onClick={() => setStep("form")}>
                ← Назад
              </button>
              <button
                className="btn primary"
                type="button"
                disabled={loading}
                onClick={confirmPayment}
              >
                {loading ? "Сохраняем…" : "Оплатить"}
              </button>
            </div>
          </div>

          <div className="booking-qr">
            {!qrFailed ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={paymentQrSrc}
                alt="QR для оплаты тренеру"
                width={260}
                height={260}
                className="booking-qr-img"
                onError={() => setQrFailed(true)}
              />
            ) : (
              <div className="booking-qr-empty">
                <strong>QR тренера</strong>
                <small>
                  Положите файл
                  <br />
                  public/trainer/payment-qr.png
                </small>
              </div>
            )}
            <p>Сумма: {selectedPlan.price} {selectedPlan.unit}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section booking-section">
      <form className="booking-panel" onSubmit={goToPayment}>
        <div>
          <span className="eyebrow">ЗАПИСЬ</span>
          <h2>Данные пациента</h2>
          <p className="booking-lead">
            Выберите услугу, удобный день и время — дальше откроется оплата.
          </p>
        </div>

        <div className="booking-grid">
          <label className="booking-field">
            <span>Имя и фамилия</span>
            <input
              required
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Например, Айгуль Н."
            />
          </label>

          <label className="booking-field">
            <span>Телефон</span>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+996 ___ ___ ___"
            />
          </label>

          <label className="booking-field booking-field-full">
            <span>Услуга</span>
            <select value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
              {pricePlans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name} — {plan.price} {plan.unit}
                </option>
              ))}
            </select>
          </label>

          <label className="booking-field">
            <span>Дата</span>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              {dates.map((item) => (
                <option key={item} value={item}>
                  {formatBookingDate(item)}
                </option>
              ))}
            </select>
          </label>

          <label className="booking-field">
            <span>Время</span>
            <select value={time} onChange={(e) => setTime(e.target.value)}>
              {bookingTimes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="booking-field booking-field-full">
            <span>Комментарий (необязательно)</span>
            <textarea
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Что беспокоит, зона тела, пожелания…"
            />
          </label>
        </div>

        {error ? <p className="booking-error">{error}</p> : null}

        <div className="booking-actions">
          <div className="booking-total">
            К оплате: <strong>{selectedPlan.price} {selectedPlan.unit}</strong>
          </div>
          <button className="btn primary" type="submit">
            Перейти к оплате →
          </button>
        </div>
      </form>
    </section>
  );
}
