export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">Real-time team analytics</span>
          <h1 style={{ marginTop: "0.75rem" }}>Empower Your Team with Real-Time Analytics</h1>
          <p className="lead">
            Monitor productivity, track projects, and gain actionable insights with one
            powerful dashboard.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Watch Demo</button>
          </div>
        </div>

        {/* Dashboard preview illustration for the right side of the hero */}
        <div className="dash-preview" aria-hidden="true">
          <div className="dash-chrome"><span></span><span></span><span></span></div>
          <div className="dash-body">
            <div className="dash-metrics-row">
              <div className="dash-metric">
                <div className="m-label">Active Projects</div>
                <div className="m-value">48</div>
              </div>
              <div className="dash-metric">
                <div className="m-label">Team Productivity</div>
                <div className="m-value up">+24%</div>
              </div>
            </div>
            <div className="dash-charts-row">
              <div className="dash-bars">
                <div className="bar" style={{ height: "40%" }}></div>
                <div className="bar" style={{ height: "70%" }}></div>
                <div className="bar" style={{ height: "55%" }}></div>
                <div className="bar" style={{ height: "90%" }}></div>
                <div className="bar" style={{ height: "65%" }}></div>
                <div className="bar" style={{ height: "80%" }}></div>
              </div>
              <div className="dash-pie">
                <svg viewBox="0 0 42 42" width="70" height="70">
                  <circle r="15.9" cx="21" cy="21" fill="transparent" stroke="#E2E8F0" strokeWidth="6" />
                  <circle r="15.9" cx="21" cy="21" fill="transparent" stroke="#4F46E5" strokeWidth="6"
                    strokeDasharray="62 100" strokeDashoffset="25" transform="rotate(-90 21 21)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
