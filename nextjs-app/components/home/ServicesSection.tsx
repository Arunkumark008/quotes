import Link from "next/link";
import Animate from "@/components/Animate";

/* ── Brand SVG icons — each one is a clean single-path icon
   styled in the green theme, no emoji, no AI-generated art  */
const IconTermLife = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconWholeLife = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconUniversalLife = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

const IconCriticalIllness = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const IconDisability = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v6m0 0l-3 5m3-5l3 5" />
    <path d="M9 13H7a2 2 0 00-1.9 2.6l1.4 4.2A2 2 0 008.4 21h7.2a2 2 0 001.9-1.4l.5-1.6" />
  </svg>
);

const IconBusiness = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

const services = [
  {
    Icon: IconTermLife,
    title: "Term Life Insurance",
    tag: "Most Popular",
    desc: "Affordable coverage for a set term. Lock in low rates while your family needs protection most.",
    href: "/services/term-life",
    accent: "green",   // green icon bg
  },
  {
    Icon: IconWholeLife,
    title: "Whole Life Insurance",
    tag: "Permanent",
    desc: "Lifetime coverage that builds guaranteed cash value. Never expires, never changes in cost.",
    href: "/services/whole-life",
    accent: "green",
  },
  {
    Icon: IconUniversalLife,
    title: "Universal Life Insurance",
    tag: "Flexible",
    desc: "Adjustable premiums + a tax-sheltered investment account. Coverage and wealth in one policy.",
    href: "/services/universal-life",
    accent: "green",
  },
  {
    Icon: IconCriticalIllness,
    title: "Critical Illness Coverage",
    tag: "Lump-Sum Payout",
    desc: "Tax-free cash if you're diagnosed with cancer, heart attack, stroke or 25+ covered conditions.",
    href: "/services/critical-illness",
    accent: "green",
  },
  {
    Icon: IconDisability,
    title: "Disability Insurance",
    tag: "Income Protection",
    desc: "Replace up to 70% of your income if illness or injury stops you from working.",
    href: "/services/disability",
    accent: "green",
  },
  {
    Icon: IconBusiness,
    title: "Business Protection",
    tag: "For Owners",
    desc: "Key-person insurance, buy-sell agreements, and corporate coverage for entrepreneurs.",
    href: "/services/whole-life",
    accent: "green",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding services-section">
      <div className="container">

        <Animate className="text-center" style={{ marginBottom: "56px" }}>
          <span className="section-label light">Our Services</span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 800, color: "#fff", marginTop: "8px", lineHeight: 1.2,
          }}>
            Explore Our{" "}
            <span style={{ color: "var(--green)" }}>Insurance Products</span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.5)", marginTop: "12px",
            fontSize: "15px", maxWidth: "480px", margin: "12px auto 0",
          }}>
            Tailored policies from 20+ top Canadian carriers — we find the right fit for your life and budget.
          </p>
        </Animate>

        <div className="services-grid">
          {services.map((s, i) => (
            <Animate key={s.title} delay={i * 0.07}>
              <Link href={s.href} className="service-card-link">
                <div className={`service-card service-card--${s.accent}`}>

                  {/* Icon badge */}
                  <div className={`service-icon service-icon--${s.accent}`}>
                    <s.Icon />
                  </div>

                  {/* Tag pill */}
                  <span className={`service-tag service-tag--${s.accent}`}>
                    {s.tag}
                  </span>

                  {/* Title */}
                  <h3 className="service-title">{s.title}</h3>

                  {/* Description */}
                  <p className="service-desc">{s.desc}</p>

                  {/* CTA */}
                  <span className="service-cta">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>

                </div>
              </Link>
            </Animate>
          ))}
        </div>


      </div>

      <style>{`
        /* ── Section background ── */
        .services-section {
          background: var(--dark);
        }

        /* ── Grid ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
        }

        /* ── Card link reset ── */
        .service-card-link {
          text-decoration: none;
          display: block;
          height: 100%;
        }

        /* ── Card base ── */
        .service-card {
          border-radius: 16px;
          padding: 28px 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .service-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.06);
        }

        /* Green accent card hover */
        .service-card--green:hover {
          border-color: rgba(74,164,97,0.45);
        }
        /* Legacy plum class — now uses green */
        .service-card--plum:hover {
          border-color: rgba(74,164,97,0.45);
        }

        /* Subtle top-left glow dot on hover */
        .service-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 60px; height: 60px;
          border-radius: 0 0 60px 0;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .service-card--green::before { background: rgba(74,164,97,0.12); }
        .service-card--plum::before  { background: rgba(74,164,97,0.12); }
        .service-card:hover::before  { opacity: 1; }

        /* ── Icon badge ── */
        .service-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 4px;
        }
        .service-icon--green {
          background: rgba(74,164,97,0.15);
          color: var(--green);
        }
        .service-icon--plum {
          background: rgba(74,164,97,0.15);
          color: var(--green);
        }

        /* ── Tag pill ── */
        .service-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
          align-self: flex-start;
        }
        .service-tag--green {
          background: rgba(74,164,97,0.15);
          color: var(--green);
        }
        .service-tag--plum {
          background: rgba(74,164,97,0.15);
          color: var(--green);
        }

        /* ── Title ── */
        .service-title {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          line-height: 1.35;
          transition: color 0.2s;
          margin: 0;
        }
        .service-card:hover .service-title { color: var(--green); }
        .service-card--plum:hover .service-title { color: var(--green); }

        /* ── Description ── */
        .service-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.48);
          line-height: 1.7;
          flex: 1;
          margin: 0;
        }

        /* ── CTA link ── */
        .service-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          margin-top: 4px;
          transition: gap 0.2s;
        }
        .service-card--plum .service-cta { color: var(--green); }
        .service-card:hover .service-cta { gap: 8px; }
      `}</style>
    </section>
  );
}
