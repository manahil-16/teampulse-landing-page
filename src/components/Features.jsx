const FEATURES = [
  { emoji: "📊", title: "Analytics", copy: "Track team performance with live charts and reports." },
  { emoji: "📅", title: "Project Tracking", copy: "Monitor deadlines and project milestones." },
  { emoji: "👥", title: "Team Collaboration", copy: "Work together through shared tasks and updates." },
  { emoji: "🤖", title: "AI Insights", copy: "Receive smart recommendations to improve productivity." },
  { emoji: "🔒", title: "Secure Cloud Storage", copy: "Keep your team data protected and accessible." },
  { emoji: "📈", title: "Performance Reports", copy: "Generate detailed reports with one click." },
];

function FeatureCard({ emoji, title, copy }) {
  return (
    <div className="feature-card">
      <div className="feature-emoji">{emoji}</div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Features</span>
          <h2>Everything your team needs to stay on track</h2>
          <p>One dashboard for the metrics, projects, and updates that used to live in five different tools.</p>
        </div>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
