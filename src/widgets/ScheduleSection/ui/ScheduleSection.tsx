import Link from "next/link";
import { pricePlans, weekSchedule } from "@/entities/schedule/model/data";

export function ScheduleSection() {
  return (
    <>
     <section className="section schedule-section">
  <div className="section-head">
    <div>
      <span className="eyebrow">ГРАФИК</span>
      <h2>По записи</h2>
    </div>
    <p>Недельное расписание групповых занятий и индивидуальных приёмов</p>
  </div>

  <div className="calendar-week">
    {weekSchedule.map((slot, index) => (
      <div className="calendar-day" key={`${slot.day}-${slot.time}-${index}`}>
        <div className="calendar-day-name">{slot.day}</div>
        <div className="calendar-time">{slot.time}</div>
      </div>
    ))}
  </div>
</section>

      <section className="section pricing-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">СТОИМОСТЬ</span>
            <h2>
              Цена сеанса
              <br />
              и курсов
            </h2>
          </div>
          <p>Выберите формат под задачу — от разовой встречи до месячного сопровождения.</p>
        </div>
        <div className="price-grid">
          {pricePlans.map((plan) => (
            <article
              key={plan.id}
              className={`price-plan${plan.featured ? " featured" : ""}`}
            >
              <span className="price-name">{plan.name}</span>
              <div className="price-value">
                <strong>{plan.price}</strong>
                <span>{plan.unit}</span>
              </div>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            
            {/* <Link className={`btn ${plan.featured ? "primary" : "secondary"}`} href={`/booking?plan=${plan.id}`}>
                Записаться
              </Link>*/}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
