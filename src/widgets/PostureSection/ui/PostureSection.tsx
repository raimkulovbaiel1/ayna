import Link from "next/link";
import { postureFocus } from "@/entities/posture/model/data";

export function PostureSection() {
  return (
    <section className="section posture" id="posture">
      <div className="posture-copy">
        <span className="eyebrow">НАПРАВЛЕНИЕ РАБОТЫ</span>
        <h2>
          Коррекция осанки
          <br />
          и стоп
        </h2>
        <p>
          Помогаем выровнять положение тела и стоп — мягко, системно и с понятным
          контролем прогресса.
        </p>
        <p className="posture-work-label">Работаем с:</p>
        <ul className="posture-list">
          {postureFocus.map((item) => (
            <li key={item}>
              <b>✓</b>
              {item}
            </li>
          ))}
        </ul>
        <div className="posture-actions">
          <Link className="btn primary" href="/booking">
            Записаться на сеанс →
          </Link>
          <Link className="btn secondary" href="/results">
            Смотреть результаты
          </Link>
        </div>
      </div>

      <div className="posture-panel" aria-hidden>
        <div className="posture-figure">🧍</div>
        <div className="posture-tags">
          <span>Осанка</span>
          <span>Стопы</span>
          <span>Баланс</span>
        </div>
      </div>
    </section>
  );
}
