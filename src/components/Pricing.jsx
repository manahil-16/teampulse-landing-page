const TIERS = [
  {
    name: "Starter",
    price: "Free",
    note: null,
    features: ["Basic analytics", "Up to 5 team members", "Community support"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    note: "/month",
    features: ["Advanced reports", "Unlimited projects", "Priority support", "AI insights"],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    note: null,
    features: ["Unlimited users", "Premium support", "Custom integrations", "Dedicated account manager"],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Plans for teams of every size</h2>
        </div>
        <div className="price-grid">
          {TIERS.map((t) => (
            <div className={`price-card ${t.featured ? "featured" : ""}`} key={t.name}>
              {t.featured && <span className="badge">Most popular</span>}
              <span className="tier-name">{t.name}</span>
              <div className="tier-price">{t.price}{t.note && <span>{t.note}</span>}</div>
              <ul>
                {t.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <button className={`btn ${t.featured ? "btn-primary" : "btn-outline"} btn-block`}>{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
