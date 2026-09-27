"use client";
import Image from "next/image";

import Link from "next/link";
import { trainer } from "@/entities/trainer/model/data";

export function TrainerSection() {
  return (
    <section className="section trainer-section">
      <div className="trainer-layout">
        <div
          className="trainer-portrait"
          onContextMenu={(e) => e.preventDefault()}
        >
          {trainer.photoSrc ? (
            <Image
              src={trainer.photoSrc}
              alt={trainer.name}
              fill
              draggable={false}
              className="trainer-photo"
              sizes="(max-width: 900px) 100vw, 420px"
              priority
            />
          ) : (
            <div className="trainer-photo-empty">
              <span className="trainer-initial">
                {trainer.name[0]}
              </span>

              <strong>Фото тренера</strong>
              <small>public/trainer/portrait.png</small>
            </div>
          )}
        </div>

        <div className="trainer-copy">
          <span className="eyebrow">ТРЕНЕР</span>

          <h2>{trainer.name}</h2>

          <p className="trainer-role">
            {trainer.role}
          </p>

          <p className="trainer-lead">
            {trainer.shortBio}
          </p>

          <div className="trainer-facts">
            {trainer.facts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>

          {trainer.story.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="trainer-story"
            >
              {paragraph}
            </p>
          ))}

          <div className="trainer-columns">


            <div>
              <h3>Образование</h3>

              <ul>
                {trainer.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/*<div className="trainer-actions">
            <Link className="btn primary" href="/booking">
              Записаться на сеанс →
            </Link>
            <Link className="btn secondary" href="/admin">
              Заявки пациентов
            </Link>
          </div> */}

        </div>
      </div>
    </section>
  );
}