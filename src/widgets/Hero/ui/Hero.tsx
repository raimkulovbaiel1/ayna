import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <div className="eyebrow">ЗДОРОВЬЕ • ДВИЖЕНИЕ • ВОССТАНОВЛЕНИЕ</div>
        <h1>Двигайтесь свободно.<br /><em>Живите активнее.</em></h1>
        <p>Персональные и групповые тренировки </p>
        <div className="hero-actions">
          <Link className="btn primary" href="#posture">Коррекция осанки <span>→</span></Link>
        </div>
        <div className="trust">
          <div className="avatars"><i>А</i><i>Д</i><i>Н</i><i>+</i></div>
          <div><strong>2 500+</strong><small>пользователей тренируются регулярно</small></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="circle" />
        <div className="person-card">
          <div className="person-glow" /><div className="person"> 
            <img src="" alt="logo hero" /></div>
          <div className="mini-label">Ваш прогресс</div><strong>18 тренировок</strong>
        </div>
      </div>
    </section>
  );
}
