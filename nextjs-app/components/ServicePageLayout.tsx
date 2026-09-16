"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useModal } from "@/lib/modal";

export interface ServicePageProps {
  title: string;
  titleFr: string;
  tagline: string;
  icon: string;       // kept in data shape but no longer rendered
  color: string;
  description: string;
  highlights: { heading: string; text: string }[];
  bestFor: string[];
  faqs: { q: string; a: string }[];
}

/* ── Per-service SVG icons ─────────────────────────────── */
const ServiceIcons: Record<string, React.ReactElement> = {
  "Term Life Insurance": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  "Whole Life Insurance": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  "Universal Life Insurance": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
    </svg>
  ),
  "Critical Illness Coverage": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  "Disability Insurance": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
    </svg>
  ),
};

const otherServices = [
  { label: "Term Life Insurance",       href: "/services/term-life" },
  { label: "Whole Life Insurance",      href: "/services/whole-life" },
  { label: "Universal Life Insurance",  href: "/services/universal-life" },
  { label: "Critical Illness Coverage", href: "/services/critical-illness" },
  { label: "Disability Insurance",      href: "/services/disability" },
];

/* Highlight icons — each point gets a distinct SVG */
const HighlightIcons = [
  // Check shield
  <svg key="0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
  </svg>,
  // Clock
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>,
  // Refresh / convert
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/>
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
  </svg>,
  // Lock
  <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>,
  // Star
  <svg key="4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>,
  // Arrow right
  <svg key="5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/>
  </svg>,
];

export default function ServicePageLayout({ data }: { data: ServicePageProps }) {
  const { openModal } = useModal();
  const ServiceIcon = ServiceIcons[data.title] ?? ServiceIcons["Term Life Insurance"];

  return (
    <>
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────── */}
        <section className="sp-hero">
          <div className="container">
            <Breadcrumb crumbs={[
              { label: "Home",     href: "/" },
              { label: "Services", href: "/services" },
              { label: data.title },
            ]} />
            <div className="sp-hero-body" style={{ marginTop: "28px" }}>
              {/* Icon badge */}
              <div className="sp-hero-icon">
                {ServiceIcon}
              </div>
              <h1 className="sp-hero-h1">{data.title}</h1>
              <p className="sp-hero-tagline">{data.tagline}</p>
              <div className="sp-hero-actions">
                <button onClick={openModal} className="sp-hero-cta">
                  Get My Free Quote →
                </button>
                <a href="tel:+15146620403" className="sp-hero-call">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  514-662-0403
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main ─────────────────────────────────── */}
        <section className="sp-main">
          <div className="container">
            <div className="sp-layout">

              {/* ── Left ─────────────────────────────── */}
              <div className="sp-left">

                {/* Overview */}
                <p className="sp-overview">{data.description}</p>

                {/* Highlights */}
                <div className="sp-highlights">
                  <h2 className="sp-section-h2">Key Benefits</h2>
                  <div className="sp-highlights-grid">
                    {data.highlights.map((h, i) => (
                      <div key={i} className="sp-highlight-card">
                        <div className="sp-highlight-icon">
                          {HighlightIcons[i % HighlightIcons.length]}
                        </div>
                        <h3 className="sp-highlight-h3">{h.heading}</h3>
                        <p className="sp-highlight-p">{h.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best for */}
                <div className="sp-bestfor">
                  <h2 className="sp-section-h2">Who Is This Best For?</h2>
                  <div className="sp-bestfor-list">
                    {data.bestFor.map((b) => (
                      <div key={b} className="sp-bestfor-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--green)" }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <div className="sp-faqs">
                  <h2 className="sp-section-h2">Frequently Asked Questions</h2>
                  {data.faqs.map((faq, i) => (
                    <div key={i} className="sp-faq">
                      <div className="sp-faq-q">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--green)" }}>
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                          <line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                        {faq.q}
                      </div>
                      <p className="sp-faq-a">{faq.a}</p>
                    </div>
                  ))}
                </div>

              </div>

              {/* ── Right sidebar ────────────────────── */}
              <aside className="sp-sidebar">

                {/* Quote CTA card */}
                <div className="sp-cta-card">
                  <span className="sp-cta-label">Free — No Obligation</span>
                  <h3 className="sp-cta-h3">Get Your Free Quote</h3>
                  <p className="sp-cta-sub">
                    Compare {data.title} rates from 20+ top Canadian carriers in minutes.
                  </p>
                  <button onClick={openModal} className="sp-cta-btn">
                    Get My Free Quote →
                  </button>
                  <p className="sp-cta-note">AMF Licensed · Lic. #179631</p>
                </div>

                {/* Call card */}
                <div className="sp-call-card">
                  <p className="sp-call-label">Prefer to speak to an advisor?</p>
                  <a href="tel:+15146620403" className="sp-call-number">514-662-0403</a>
                  <p className="sp-call-hours">Mon–Fri 9AM–8PM · Sat 10AM–4PM</p>
                </div>

                {/* Other services */}
                <div className="sp-other">
                  <p className="sp-other-heading">Other Services</p>
                  <ul className="sp-other-list">
                    {otherServices.filter(s => s.label !== data.title).map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="sp-other-link">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--green)" }}>
                            <polyline points="9 18 15 12 9 6"/>
                          </svg>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </aside>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* ── Hero ── */
        .sp-hero {
          background: var(--dark);
          padding: 52px 0 48px;
        }

        .sp-hero-body { max-width: 600px; }

        /* Clean square icon badge — no emoji */
        .sp-hero-icon {
          width: 64px; height: 64px;
          border-radius: 16px;
          background: rgba(74,164,97,0.15);
          color: var(--green);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          border: 1px solid rgba(74,164,97,0.25);
        }

        .sp-hero-h1 {
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 900; color: #fff; line-height: 1.08;
          letter-spacing: -0.03em;
          font-family: var(--font-sora), sans-serif;
          margin-bottom: 12px;
        }
        .sp-hero-tagline {
          font-size: 16px; color: rgba(255,255,255,0.55);
          line-height: 1.7; margin-bottom: 28px; max-width: 500px;
        }
        .sp-hero-actions {
          display: flex; gap: 12px; flex-wrap: wrap; align-items: center;
        }
        .sp-hero-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green); color: #fff;
          font-weight: 800; font-size: 14px;
          padding: 13px 28px; border-radius: 50px;
          border: none; cursor: pointer; font-family: inherit;
          transition: background 0.2s, transform 0.2s;
        }
        .sp-hero-cta:hover { background: var(--green-dark); transform: translateY(-1px); }
        .sp-hero-call {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.6);
          text-decoration: none; transition: color 0.15s;
        }
        .sp-hero-call:hover { color: #fff; }

        /* ── Main layout ── */
        .sp-main { background: #fff; padding: 72px 0 80px; }
        .sp-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 56px;
          align-items: start;
        }

        /* ── Left content ── */
        .sp-overview {
          font-size: 16px; color: var(--body);
          line-height: 1.85; margin-bottom: 52px;
          padding-bottom: 52px;
          border-bottom: 1px solid var(--border);
        }
        .sp-section-h2 {
          font-size: 1.25rem; font-weight: 800;
          color: var(--dark); margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        /* Highlights grid */
        .sp-highlights { margin-bottom: 52px; padding-bottom: 52px; border-bottom: 1px solid var(--border); }
        .sp-highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .sp-highlight-card {
          padding: 24px 20px;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--bg-soft);
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .sp-highlight-card:hover {
          border-color: rgba(74,164,97,0.35);
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          transform: translateY(-2px);
        }
        .sp-highlight-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(74,164,97,0.1); color: var(--green);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
        }
        .sp-highlight-h3 {
          font-size: 14px; font-weight: 700; color: var(--dark);
          margin-bottom: 8px; line-height: 1.35;
        }
        .sp-highlight-p {
          font-size: 13px; color: var(--muted); line-height: 1.7;
        }

        /* Best for */
        .sp-bestfor { margin-bottom: 52px; padding-bottom: 52px; border-bottom: 1px solid var(--border); }
        .sp-bestfor-list {
          display: flex; flex-wrap: wrap; gap: 10px;
        }
        .sp-bestfor-item {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 13px; font-weight: 600; color: var(--dark);
          background: #fff; border: 1px solid var(--border);
          border-radius: 50px; padding: 8px 16px;
          transition: border-color 0.2s, color 0.2s;
        }
        .sp-bestfor-item:hover { border-color: var(--green); color: var(--green); }

        /* FAQs */
        .sp-faqs {}
        .sp-faq {
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
        }
        .sp-faq:last-child { border-bottom: none; }
        .sp-faq-q {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 15px; font-weight: 700; color: var(--dark);
          margin-bottom: 10px; line-height: 1.4;
        }
        .sp-faq-a {
          font-size: 14px; color: var(--body); line-height: 1.8;
          padding-left: 26px;
        }

        /* ── Sidebar ── */
        .sp-sidebar {
          position: sticky; top: 88px;
          display: flex; flex-direction: column; gap: 14px;
        }

        /* CTA card */
        .sp-cta-card {
          background: var(--dark);
          border-radius: 18px;
          padding: 28px 24px;
          display: flex; flex-direction: column; align-items: flex-start;
        }
        .sp-cta-label {
          font-size: 10px; font-weight: 800;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: var(--green); margin-bottom: 10px;
        }
        .sp-cta-h3 {
          font-size: 18px; font-weight: 800; color: #fff;
          line-height: 1.25; margin-bottom: 10px;
        }
        .sp-cta-sub {
          font-size: 13px; color: rgba(255,255,255,0.55);
          line-height: 1.65; margin-bottom: 20px;
        }
        .sp-cta-btn {
          width: 100%; display: flex; justify-content: center;
          align-items: center; gap: 8px;
          background: var(--green); color: #fff;
          font-weight: 800; font-size: 14px;
          padding: 13px 20px; border-radius: 50px;
          border: none; cursor: pointer; font-family: inherit;
          transition: background 0.2s, transform 0.2s;
          margin-bottom: 10px;
        }
        .sp-cta-btn:hover { background: var(--green-dark); transform: translateY(-1px); }
        .sp-cta-note {
          font-size: 11px; color: rgba(255,255,255,0.3);
          width: 100%; text-align: center;
        }

        /* Call card */
        .sp-call-card {
          background: var(--bg-soft);
          border: 1px solid var(--border);
          border-radius: 14px; padding: 18px 20px;
        }
        .sp-call-label { font-size: 12px; color: var(--muted); margin-bottom: 6px; }
        .sp-call-number {
          font-size: 18px; font-weight: 800; color: var(--dark);
          text-decoration: none; display: block; margin-bottom: 4px;
          transition: color 0.15s;
        }
        .sp-call-number:hover { color: var(--green); }
        .sp-call-hours { font-size: 11px; color: var(--muted); }

        /* Other services */
        .sp-other {
          background: #fff; border: 1px solid var(--border);
          border-radius: 14px; padding: 18px 20px;
        }
        .sp-other-heading {
          font-size: 10px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 1.5px;
          color: var(--muted); margin-bottom: 12px;
        }
        .sp-other-list { list-style: none; display: flex; flex-direction: column; gap: 2px; }
        .sp-other-link {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 10px; font-size: 13px; font-weight: 600;
          color: var(--body); text-decoration: none;
          border-radius: 8px; transition: background 0.15s, color 0.15s;
        }
        .sp-other-link:hover { background: var(--bg-soft); color: var(--green); }

        /* ── MOBILE FIRST ── */
        @media (max-width: 900px) {
          .sp-layout {
            grid-template-columns: 1fr;
          }
          .sp-sidebar {
            position: static;
          }
          .sp-highlights-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .sp-main { padding: 48px 0 56px; }
          .sp-hero { padding: 36px 0 32px; }
          .sp-hero-h1 { font-size: 1.9rem; }
          .sp-hero-actions { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </>
  );
}
