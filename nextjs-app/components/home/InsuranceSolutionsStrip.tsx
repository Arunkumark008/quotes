"use client";
import Link from "next/link";
import Animate from "@/components/Animate";
import { useLang } from "@/lib/i18n";

/* ── Circular filled SVG icons — dark green, matching reference ── */
const IconLife = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

const IconCritical = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

const IconDisability = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const IconBusiness = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="16"/>
    <line x1="10" y1="14" x2="14" y2="14"/>
  </svg>
);

export default function InsuranceSolutionsStrip() {
  const { t } = useLang();

  const cards = [
    { Icon: IconLife,       title: t.strip1Title, desc: t.strip1Desc, href: "/services/term-life" },
    { Icon: IconCritical,   title: t.strip2Title, desc: t.strip2Desc, href: "/services/critical-illness" },
    { Icon: IconDisability, title: t.strip3Title, desc: t.strip3Desc, href: "/services/disability" },
    { Icon: IconBusiness,   title: t.strip4Title, desc: t.strip4Desc, href: "/services/whole-life" },
  ];

  return (
    <section className="strip-section">
      <div className="container">

        {/* Heading — centered, matches reference */}
        <Animate className="strip-heading-wrap">
          <h2 className="strip-heading">
            {t.stripH2a}{" "}
            <span style={{ color: "var(--green)" }}>{t.stripH2b}</span>
          </h2>
          <p className="strip-sub">{t.stripSub}</p>
        </Animate>

        {/* 4-card row */}
        <div className="strip-grid">
          {cards.map(({ Icon, title, desc, href }, i) => (
            <Animate key={title} delay={i * 0.08}>
              <Link href={href} className="strip-card-link">
                <div className="strip-card">
                  {/* Circular icon badge */}
                  <div className="strip-icon">
                    <Icon />
                  </div>
                  <h3 className="strip-card-title">{title}</h3>
                  <p className="strip-card-desc">{desc}</p>
                  <span className="strip-card-cta">{t.stripLearn}</span>
                </div>
              </Link>
            </Animate>
          ))}
        </div>

      </div>

      <style>{`
        /* Section */
        .strip-section {
          background: #fff;
          padding: 64px 0 56px;
          border-bottom: 1px solid #e8eaed;
        }

        /* Heading block */
        .strip-heading-wrap {
          text-align: center;
          margin-bottom: 48px;
        }
        .strip-heading {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: var(--dark);
          line-height: 1.2;
          margin: 0 0 14px;
        }
        .strip-sub {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto;
        }

        /* 4-col grid */
        .strip-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .strip-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .strip-grid { grid-template-columns: 1fr; }
        }

        /* Card */
        .strip-card-link {
          text-decoration: none;
          display: block;
          height: 100%;
        }
        .strip-card {
          background: #fff;
          border: 1px solid #e8eaed;
          border-radius: 16px;
          padding: 32px 24px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          height: 100%;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }
        .strip-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          transform: translateY(-4px);
          border-color: rgba(74,164,97,0.4);
        }

        /* Circular icon — large, light green bg, dark green icon */
        .strip-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(74,164,97,0.12);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 4px;
          transition: background 0.25s;
        }
        .strip-card:hover .strip-icon {
          background: rgba(74,164,97,0.2);
        }

        /* Title */
        .strip-card-title {
          font-size: 16px;
          font-weight: 800;
          color: var(--dark);
          margin: 0;
          line-height: 1.3;
          transition: color 0.2s;
        }
        .strip-card:hover .strip-card-title { color: var(--green); }

        /* Desc */
        .strip-card-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }

        /* Learn More link */
        .strip-card-cta {
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          text-decoration: none;
          margin-top: 4px;
          transition: gap 0.2s;
        }
        .strip-card:hover .strip-card-cta {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}
