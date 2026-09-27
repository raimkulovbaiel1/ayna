import { progressBars, progressDays, progressStats } from "@/entities/progress/model/data";
import { MetricCard } from "@/entities/progress/ui/MetricCard";

export function ProgressSection() {
  return (
    <section className="section progress-section" id="progress">
      <div className="section-head"><div><span className="eyebrow">ВАША СТАТИСТИКА</span><h2>Прогресс за неделю</h2></div><span className="week">16–22 сентября 2026</span></div>
      <div className="dashboard">
        {progressStats.map(x => <MetricCard key={x.title} {...x} />)}
        <div className="chart"><div className="bars">{progressBars.map((height,i)=><i key={i} style={{height}} />)}</div><div className="days">{progressDays.map(day=><span key={day}>{day}</span>)}</div></div>
      </div>
    </section>
  );
}
