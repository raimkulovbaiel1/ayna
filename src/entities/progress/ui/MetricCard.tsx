type Props = {title:string; value:string; suffix?:string; description:string};

export function MetricCard({title,value,suffix,description}: Props) {
  return <div className="metric"><span>{title}</span><strong>{value}{suffix && <span>{suffix}</span>}</strong><small>{description}</small></div>;
}
