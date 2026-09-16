"use client";
import Animate from "@/components/Animate";
import { useLang } from "@/lib/i18n";

/* ── SVG Icons — green stroke, brand style ── */
const IconFree = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

const IconIndependent = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const IconLicensed = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconFamily = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const IconCanada = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const IconFast = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ICONS = [IconFree, IconIndependent, IconLicensed, IconFamily, IconCanada, IconFast];

export default function WhyUsSection() {
  const { t } = useLang();

  const reasons = [
    { Icon: ICONS[0], title: t.why1Title, desc: t.why1Desc },
    { Icon: ICONS[1], title: t.why2Title, desc: t.why2Desc },
    { Icon: ICONS[2], title: t.why3Title, desc: t.why3Desc },
    { Icon: ICONS[3], title: t.why4Title, desc: t.why4Desc },
    { Icon: ICONS[4], title: t.why5Title, desc: t.why5Desc },
    { Icon: ICONS[5], title: t.why6Title, desc: t.why6Desc },
  ];

  return (
    <section className="section-padding why-section">
      <div className="container">

        {/* Heading — left aligned */}
        <Animate style={{ maxWidth: "580px", marginBottom: "52px" }}>
          <span className="section-label">{t.whyLabel}</span>
          <h2 className="why-heading">
            {t.whyH2a}{" "}
            <span style={{ color: "var(--green)" }}>{t.whyH2b}</span>
          </h2>
        </Animate>

        {/* Cards grid */}
        <div className="why-grid">
          {reasons.map(({ Icon, title, desc }, i) => (
            <Animate key={title} delay={i * 0.07}>
              <div className="why-card">
                {/* Icon badge */}
                <div className="why-icon">
                  <Icon />
                </div>
                <h3 className="why-title">{title}</h3>
                <p className="why-desc">{desc}</p>
              </div>
            </Animate>
          ))}
        </div>

      </div>

      <style>{`
        .why-section {
          background: #f8f9fb;
        }

        .why-heading {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800;
          margin-top: 8px;
          line-height: 1.2;
          color: var(--dark);
        }

        /* 3-col desktop, 2-col tablet, 1-col mobile */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr; }
        }

        /* Card — uniform white, no purple alternating bg */
        .why-card {
          background: #fff;
          border: 1px solid #e8eaed;
          border-radius: 16px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }
        .why-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.07);
          transform: translateY(-4px);
          border-color: rgba(74,164,97,0.35);
        }

        /* Icon badge — green */
        .why-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(74,164,97,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.25s;
        }
        .why-card:hover .why-icon {
          background: rgba(74,164,97,0.18);
        }

        /* Title */
        .why-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--dark);
          margin: 0;
          line-height: 1.3;
          transition: color 0.2s;
        }
        .why-card:hover .why-title {
          color: var(--green);
        }

        /* Description */
        .why-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.7;
          margin: 0;
          flex: 1;
        }
      `}</style>
    </section>
  );
}
