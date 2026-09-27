"use client";

import { useCallback, useEffect, useState } from "react";
import type { Booking } from "@/entities/booking/model/types";
import { formatBookingDate } from "@/entities/booking/model/slots";

const statusLabel: Record<Booking["status"], string> = {
  paid: "Оплачено",
  pending_payment: "Ждёт оплаты",
  cancelled: "Отменено",
};

export function BookingsAdmin() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/bookings", { cache: "no-store" });
      if (!response.ok) throw new Error("Не удалось загрузить заявки");
      const data = (await response.json()) as Booking[];
      setBookings(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function setStatus(id: string, status: Booking["status"]) {
    const response = await fetch(`/api/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (response.ok) await load();
  }

  return (
    <section className="section admin-section">
      <div className="section-head">
        <div>
          <span className="eyebrow">ДЛЯ ТРЕНЕРА</span>
          <h2>
            Кто записался
            <br />
            и на какую услугу
          </h2>
        </div>
        <button className="btn secondary" type="button" onClick={() => void load()}>
          Обновить
        </button>
      </div>

      {loading ? <p className="admin-muted">Загружаем заявки…</p> : null}
      {error ? <p className="admin-error">{error}</p> : null}

      {!loading && !error && bookings.length === 0 ? (
        <p className="admin-muted">Пока нет записей. Как только пациент оплатит — заявка появится здесь.</p>
      ) : null}

      <div className="admin-list">
        {bookings.map((item) => (
          <article key={item.id} className="admin-card">
            <div className="admin-card-top">
              <div>
                <strong>{item.patientName}</strong>
                <a href={`tel:${item.phone}`}>{item.phone}</a>
              </div>
              <span className={`admin-status status-${item.status}`}>
                {statusLabel[item.status]}
              </span>
            </div>

            <dl className="admin-meta">
              <div>
                <dt>Услуга</dt>
                <dd>{item.serviceName}</dd>
              </div>
              <div>
                <dt>День</dt>
                <dd>{formatBookingDate(item.date)}</dd>
              </div>
              <div>
                <dt>Время</dt>
                <dd>{item.time}</dd>
              </div>
              <div>
                <dt>Сумма</dt>
                <dd>
                  {item.price} {item.unit}
                </dd>
              </div>
            </dl>

            {item.comment ? <p className="admin-comment">{item.comment}</p> : null}

            <div className="admin-card-actions">
              {item.status !== "paid" ? (
                <button className="btn primary" type="button" onClick={() => void setStatus(item.id, "paid")}>
                  Отметить оплаченным
                </button>
              ) : null}
              {item.status !== "cancelled" ? (
                <button
                  className="btn secondary"
                  type="button"
                  onClick={() => void setStatus(item.id, "cancelled")}
                >
                  Отменить
                </button>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
