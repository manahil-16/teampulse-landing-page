const STATS = [
  { num: "120+", label: "Active Teams" },
  { num: "25K+", label: "Tasks Completed" },
  { num: "98%", label: "Customer Satisfaction" },
  { num: "50+", label: "Countries" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
