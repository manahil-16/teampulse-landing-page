const LOGOS = ["Google", "Microsoft", "Spotify", "Airbnb", "Slack"];

// Text-only "logos" for a visual-inspiration mockup — avoids using real
// trademarked logo marks while still conveying the trusted-by concept.
export default function TrustedBy() {
  return (
    <section className="trusted">
      <div className="wrap">
        <span className="eyebrow">Trusted by teams at</span>
        <div className="logo-row">
          {LOGOS.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
