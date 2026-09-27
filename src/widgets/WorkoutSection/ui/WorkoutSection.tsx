import Link from "next/link";

export function WorkoutSection() {
  return (
    <section className="section results-promo">
      <div className="results-promo-head">
        <div>

          <h2>
            Движение меняется
            <br />
            шаг за шагом
          </h2>
        </div>

        <div className="results-promo-text">
          <p>
            Индивидуальная работа с осанкой, стопами и движением
            помогает выстроить более осознанный подход к своему телу.
          </p>

          <Link className="btn primary" href="/results">
            Посмотреть результаты →
          </Link>
        </div>
      </div>

      <div className="results-promo-grid">
        <article className="results-promo-item">
          <span>01</span>

          <div>
            <h3>Персональная программа</h3>

            <p>
              Подбираем упражнения и нагрузку с учётом
              индивидуальных особенностей и целей.
            </p>
          </div>
        </article>

        <article className="results-promo-item">
          <span>02</span>

          <div>
            <h3>Работа с движением</h3>

            <p>
              Фокусируемся на качестве выполнения,
              мобильности и формировании правильных привычек.
            </p>
          </div>
        </article>

        <article className="results-promo-item">
          <span>03</span>

          <div>
            <h3>Контроль динамики</h3>

            <p>
              Отслеживаем изменения и при необходимости
              корректируем программу занятий.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}