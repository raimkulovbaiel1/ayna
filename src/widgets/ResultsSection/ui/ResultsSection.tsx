import Image from "next/image";
import { resultCases, treatmentSteps } from "@/entities/result/model/data";

function PhotoSlot({
  src,
  description,
  hint,
}: {
  src: string | null;
  description: string;
  hint: string;
}) {
  return (
    <div className="photo-card">
      <figure className="photo-slot">
        {src ? (
          <Image
            src={src}
            alt={description}
            fill
            className="photo-slot-img"
            sizes="(max-width: 900px) 50vw, 280px"
          />
        ) : (
          <div className="photo-slot-empty">
            <strong>Добавьте фото</strong>
            <small>{hint}</small>
          </div>
        )}
      </figure>

      <p className="photo-description">
        {description}
      </p>
    </div>
  );
}

export function ResultsSection() {
  return (
    <>
      <section className="section method-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">КАК МЫ ЛЕЧИМ</span>
            <h2>
              Понятный путь
              <br />
              к свободному движению
            </h2>
          </div>
          <p>Четыре шага без лишней сложности — от первой диагностики до устойчивого результата.</p>
        </div>
        <ol className="method-list">
          {treatmentSteps.map((step) => (
            <li key={step.number} className="method-item">
              <span className="method-num">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section results-gallery">
        <div className="section-head">
          <div>
            <span className="eyebrow">Результаты нашей работы</span>
          </div>
        </div>
        <div className="cases-list">
          {resultCases.map((item, index) => (
            <article
              key={item.id}
              className="case-row"
              style={{ animationDelay: `${0.08 * index}s` }}
            >
              <div className="case-meta">
                <span className="case-zone">{item.zone}</span>
                {/* <h3>{item.title}</h3> */}
                <p>{item.duration}</p>
                <small>{item.note}</small>
              </div>
              <div className="case-photos">
                <PhotoSlot
                  src={item.beforeSrc}
                  description={item.beforeDescription}
                  hint={`/results/case-${item.id}-before.jpg`}
                />

                <div className="case-arrow" aria-hidden>
                  →
                </div>

                <PhotoSlot
                  src={item.afterSrc}
                  description={item.afterDescription}
                  hint={`/results/case-${item.id}-after.jpg`}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
