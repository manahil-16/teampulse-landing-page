const TESTIMONIALS = [
  { quote: "TeamPulse helped us improve productivity by 35%.", name: "Sarah Johnson" },
  { quote: "Simple, fast, and incredibly useful.", name: "Michael Lee" },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>What teams are saying</h2>
        </div>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="quote">"{t.quote}"</p>
              <cite>— {t.name}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
