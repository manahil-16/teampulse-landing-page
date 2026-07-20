export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <div className="footer-brand">
            <span className="brand-dot" aria-hidden="true"></span>
            TeamPulse
          </div>
          <p style={{ maxWidth: 260, fontSize: "0.85rem" }}>
            Real-time analytics and productivity tracking for teams of every size.
          </p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#contact">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">© 2026 TeamPulse. Built as a frontend practice project.</div>
    </footer>
  );
}
