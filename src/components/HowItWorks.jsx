const STEPS = [
  { num: "1️⃣", title: "Create an account" },
  { num: "2️⃣", title: "Invite your team" },
  { num: "3️⃣", title: "Start tracking projects" },
  { num: "4️⃣", title: "View insights instantly" },
];

export default function HowItWorks() {
  return (
    <section className="how" id="solutions">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Up and running in minutes</h2>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.title} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <div className="step-card">
                <div className="step-num">{s.num}</div>
                <div>{s.title}</div>
              </div>
              {i < STEPS.length - 1 && <div className="step-arrow">↓</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
