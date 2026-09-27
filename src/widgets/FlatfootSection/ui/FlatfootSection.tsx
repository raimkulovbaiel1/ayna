
const benefits = ["Быстрый тест состояния стоп","Персональный комплекс упражнений","Контроль прогресса по неделям"];

export function FlatfootSection() {
  return (
    <section className="section flat" id="flatfoot">
      <div className="flat-copy">
        <span className="eyebrow">ПЛОСКОСТОПИЕ</span>
        <h2>Забота о стопах<br />каждый день</h2>
        <p>Мягкая программа для укрепления мышц стопы, развития баланса и поддержания естественного свода.</p>
        <ul>{benefits.map(item => <li key={item}><b>✓</b>{item}</li>)}</ul>
      </div>
      <div className="foot-panel">
        <div className="foot-illustration">🦶</div>
        <div className="foot-score"><span>Состояние стоп</span><strong>Хорошая динамика</strong><div className="progress"><i /></div></div>
      </div>
    </section>
  );
}
