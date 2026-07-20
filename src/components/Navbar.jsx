import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="wrap">
        <a href="#" className="nav-brand">
          <span className="brand-dot" aria-hidden="true"></span>
          TeamPulse
        </a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#solutions" onClick={() => setOpen(false)}>Solutions</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <div className="nav-actions-mobile">
           
          </div>
        </div>

        <div className="nav-actions">
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Get Started</button>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
