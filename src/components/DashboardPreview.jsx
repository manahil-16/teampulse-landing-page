const METRICS = [
  { label: "Total Projects", value: "48" },
  { label: "Tasks Completed", value: "1,248" },
  { label: "Team Members", value: "120" },
  { label: "Revenue Growth", value: "+24%", up: true },
];

const BARS = [40, 65, 50, 85, 60, 75, 90, 55];

const PIE_SLICES = [
  { name: "Design", pct: 35, color: "#4F46E5" },
  { name: "Development", pct: 45, color: "#818CF8" },
  { name: "QA", pct: 20, color: "#C7D2FE" },
];

const PROGRESS = [
  { name: "Onboarding", pct: 90 },
  { name: "Sprint 12", pct: 65 },
  { name: "Q3 Roadmap", pct: 40 },
];

// Builds cumulative dash-offsets so each pie slice starts where the last ended.
function buildPie(slices) {
  let cumulative = 0;
  return slices.map((s) => {
    const dash = `${s.pct} ${100 - s.pct}`;
    const offset = 25 - cumulative; // start at 12 o'clock, go clockwise
    cumulative += s.pct;
    return { ...s, dash, offset };
  });
}

export default function DashboardPreview() {
  const pie = buildPie(PIE_SLICES);

  return (
    <section className="dashboard-section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Live preview</span>
          <h2>See Your Team in Action</h2>
          <p>A look at what a real TeamPulse dashboard shows the moment your team connects it.</p>
        </div>

        <div className="big-dash" aria-hidden="true">
          <div className="big-dash-metrics">
            {METRICS.map((m) => (
              <div className="big-metric" key={m.label}>
                <div className="m-label">{m.label}</div>
                <div className={`m-value ${m.up ? "up" : ""}`}>{m.value}</div>
              </div>
            ))}
          </div>

          <div className="big-dash-viz">
            <div className="viz-card">
              <div className="viz-title">📊 Tasks completed per week</div>
              <div className="big-bars">
                {BARS.map((h, i) => (
                  <div className="bar" style={{ height: `${h}%` }} key={i}></div>
                ))}
              </div>
            </div>

            <div className="viz-card">
              <div className="viz-title">🥧 Work by category</div>
              <div className="pie-wrap">
                <svg viewBox="0 0 42 42" width="90" height="90">
                  {pie.map((s) => (
                    <circle
                      key={s.name}
                      r="15.9" cx="21" cy="21" fill="transparent"
                      stroke={s.color} strokeWidth="8"
                      strokeDasharray={s.dash}
                      strokeDashoffset={s.offset}
                      transform="rotate(-90 21 21)"
                    />
                  ))}
                </svg>
                <div className="pie-legend">
                  {pie.map((s) => (
                    <span key={s.name}>
                      <span className="swatch" style={{ background: s.color }}></span>
                      {s.name} — {s.pct}%
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="progress-list">
            <div className="viz-title" style={{ marginBottom: "0.25rem" }}>📈 Milestone progress</div>
            {PROGRESS.map((p) => (
              <div className="progress-row" key={p.name}>
                <span className="p-name">{p.name}</span>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${p.pct}%` }}></div>
                </div>
                <span>{p.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
