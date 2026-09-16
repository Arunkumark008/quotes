"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useModal } from "@/lib/modal";

const infoCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: "Call Us",
    lines: ["514-662-0403"],
    note: "New quotes inquiries only",
    href: "tel:+15146620403",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    title: "Email Us",
    lines: ["info@quotes-lifeinsurance.com"],
    href: "mailto:info@quotes-lifeinsurance.com",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Business Hours",
    lines: ["Mon – Fri: 9AM – 8PM EST", "Saturday: 10AM – 4PM EST"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Our Office",
    lines: ["4900 Jean-Talon Ouest", "Unit 200, Montréal, QC H4P 1W9"],
  },
];

export default function ContactPage() {
  const { openModal } = useModal();

  return (
    <>
      <Header />
      <main>

        {/* ── Hero / Breadcrumb ─────────────────────────── */}
        <section className="contact-hero">
          <div className="container">
            <Breadcrumb crumbs={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]} />

            <h1 className="contact-h1">Contact Us</h1>
            <p className="contact-sub">
              We&apos;re here to help you protect what matters most. Reach out for a free consultation — no fees, no pressure.
            </p>

            {/* CTA — opens the same modal as homepage */}
            <button onClick={openModal} className="contact-cta-btn">
              Get My Free Quote →
            </button>
          </div>
        </section>

        {/* ── 4 Info Cards ─────────────────────────────── */}
        <section className="contact-cards-section">
          <div className="container contact-cards-grid">
            {infoCards.map((c) => (
              <div key={c.title} className="contact-card">
                <div className="contact-card-icon">{c.icon}</div>
                <h3 className="contact-card-title">{c.title}</h3>
                <div className="contact-card-lines">
                  {c.lines.map((l) =>
                    c.href ? (
                      <a key={l} href={c.href} className="contact-card-link">{l}</a>
                    ) : (
                      <p key={l} className="contact-card-text">{l}</p>
                    )
                  )}
                </div>
                {c.note && <p className="contact-card-note">{c.note}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ── Map ──────────────────────────────────────── */}
        <section className="contact-map-section">
          <div className="container">
            <div className="contact-map-header">
              <div>
                <h2 className="contact-map-h2">Find Our Office</h2>
                <p className="contact-map-sub">DCW Financial Inc. — 4900 Jean-Talon Ouest, Unit 200, Montréal, QC</p>
              </div>
              <span className="contact-amf-pill">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                AMF Lic. #179631
              </span>
            </div>
            <div className="contact-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.8!2d-73.6580!3d45.4940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918e6b6b6b6b7%3A0x0!2s4900+Jean-Talon+Ouest%2C+Montreal%2C+QC+H4P+1W9!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%" height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Quotes Life Insurance Office"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* ── Hero ── */
        .contact-hero {
          background: var(--dark);
          padding: 56px 0 52px;
          text-align: center;
        }

        .contact-h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          font-family: var(--font-sora), sans-serif;
          letter-spacing: -0.025em;
          margin-bottom: 14px;
        }
        .contact-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.55);
          max-width: 480px;
          margin: 0 auto 28px;
          line-height: 1.7;
        }

        /* CTA button */
        .contact-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green);
          color: #fff;
          font-weight: 800;
          font-size: 14px;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 4px 20px rgba(74,164,97,0.35);
        }
        .contact-cta-btn:hover {
          background: var(--green-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(74,164,97,0.4);
        }

        /* ── Cards ── */
        .contact-cards-section {
          background: #fff;
          padding: 64px 0 56px;
        }
        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .contact-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .contact-cards-grid { grid-template-columns: 1fr; }
        }

        .contact-card {
          background: #f8f9fb;
          border: 1px solid #e8eaed;
          border-radius: 16px;
          padding: 32px 20px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
        }
        .contact-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.07);
          transform: translateY(-4px);
          border-color: rgba(74,164,97,0.35);
        }

        /* Icon circle — green */
        .contact-card-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(74,164,97,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 4px;
          transition: background 0.25s;
        }
        .contact-card:hover .contact-card-icon {
          background: rgba(74,164,97,0.18);
        }

        .contact-card-title {
          font-size: 15px;
          font-weight: 800;
          color: var(--dark);
          margin: 0;
        }
        .contact-card-lines { display: flex; flex-direction: column; gap: 3px; }
        .contact-card-link {
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .contact-card-link:hover { opacity: 0.75; }
        .contact-card-text {
          font-size: 13px;
          color: #6b7280;
          margin: 0;
          line-height: 1.6;
        }
        .contact-card-note {
          font-size: 11px;
          color: #9ca3af;
          font-style: italic;
          margin: 0;
        }

        /* ── Map ── */
        .contact-map-section {
          background: #f4f6f8;
          padding: 64px 0;
        }
        .contact-map-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }
        .contact-map-h2 {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 4px;
        }
        .contact-map-sub {
          font-size: 13px;
          color: #6b7280;
        }
        .contact-amf-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: var(--green);
          background: rgba(74,164,97,0.1);
          border: 1px solid rgba(74,164,97,0.25);
          border-radius: 50px;
          padding: 6px 14px;
          white-space: nowrap;
        }
        .contact-map-wrap {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
      `}</style>
    </>
  );
}
