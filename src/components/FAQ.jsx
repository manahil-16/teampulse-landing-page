import { useState } from "react";

const FAQS = [
  { q: "Can I use it for free?", a: "Yes, the Starter plan is free." },
  { q: "Is my data secure?", a: "Yes, we use enterprise-grade security." },
  { q: "Can I cancel anytime?", a: "Yes, there are no long-term contracts." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="contact">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className="faq-item" key={item.q}>
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  {item.q}
                  <span className={`faq-icon ${isOpen ? "open" : ""}`}>+</span>
                </button>
                <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
