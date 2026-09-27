import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text: string;
};

export function PageIntro({ eyebrow, title, text }: Props) {
  return (
    <section className="page-intro">
      <div className="page-intro-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
