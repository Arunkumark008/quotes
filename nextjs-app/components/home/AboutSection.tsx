"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: "easeOut" } },
});

const stats = [
  { value: "40K+", label: "Families Protected" },
  { value: "20+",  label: "Carrier Partners"   },
  { value: "25+",  label: "Years Experience"    },
  { value: "4.9★", label: "Google Rating"       },
];

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    text: "AMF Licensed & Regulated",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    text: "100% Free Advice — Always",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    text: "Truly Independent Broker",
  },
];

export default function AboutSection() {
  const { t } = useLang();

  return (
    <section className="about-section">
      <div className="container about-container">

        {/* ── Stats row — full width, 4 across ── */}
        <motion.div
          className="about-stats"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stats.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp(i * 0.07)} className="about-stat">
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Two-col: copy left, pillars right ── */}
        <div className="about-body">

          {/* Left — copy */}
          <motion.div
            className="about-copy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.span variants={fadeUp(0)} className="section-label">{t.aboutLabel}</motion.span>

            <motion.h2 variants={fadeUp(0.07)} className="about-h2">
              {t.aboutH2a}{" "}
              <span style={{ color: "var(--green)" }}>{t.aboutH2b}</span>
            </motion.h2>

            <motion.p variants={fadeUp(0.12)} className="about-p">{t.aboutP1}</motion.p>
            <motion.p variants={fadeUp(0.16)} className="about-p">{t.aboutP2}</motion.p>

            <motion.div variants={fadeUp(0.2)}>
              <Link href="/about" className="btn-primary">{t.aboutCta}</Link>
            </motion.div>
          </motion.div>

          {/* Right — pillars + AMF badge */}
          <motion.div
            className="about-right"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Pillar cards */}
            {pillars.map((p, i) => (
              <motion.div key={p.text} variants={fadeUp(i * 0.08)} className="about-pillar">
                <span className="about-pillar-icon">{p.icon}</span>
                <span className="about-pillar-text">{p.text}</span>
              </motion.div>
            ))}

            {/* AMF badge */}
            <motion.div variants={fadeUp(0.24)} className="about-amf">
              <div className="about-amf-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <div>
                <p className="about-amf-title">{t.aboutAmf}</p>
                <p className="about-amf-sub">{t.aboutAmfSub}</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .about-section {
          background: #fff;
          padding: 80px 0;
        }
        .about-container {
          display: flex;
          flex-direction: column;
          gap: 56px;
        }

        /* ── Stats row ── */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }
        .about-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 28px 16px;
          background: #fff;
          text-align: center;
          transition: background 0.2s;
        }
        .about-stat:hover { background: var(--bg-soft); }
        .about-stat-value {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: var(--green);
          line-height: 1;
          font-family: var(--font-sora), sans-serif;
        }
        .about-stat-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--muted);
        }

        /* ── Body two-col ── */
        .about-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        /* ── Copy ── */
        .about-copy {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .about-h2 {
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 800;
          line-height: 1.18;
          color: var(--dark);
          margin: 8px 0 18px;
        }
        .about-p {
          font-size: 15px;
          color: var(--body);
          line-height: 1.8;
          margin-bottom: 14px;
        }

        /* ── Right col ── */
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* Pillar rows */
        .about-pillar {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--bg-soft);
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .about-pillar:hover {
          border-color: rgba(74,164,97,0.35);
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
          transform: translateX(4px);
        }
        .about-pillar-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(74,164,97,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .about-pillar:hover .about-pillar-icon {
          background: rgba(74,164,97,0.18);
        }
        .about-pillar-text {
          font-size: 14px;
          font-weight: 700;
          color: var(--dark);
        }

        /* AMF badge */
        .about-amf {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px 20px;
          border-radius: 12px;
          background: rgba(74,164,97,0.05);
          border: 1px solid rgba(74,164,97,0.2);
          margin-top: 4px;
        }
        .about-amf-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(74,164,97,0.12);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .about-amf-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          margin-bottom: 3px;
        }
        .about-amf-sub {
          font-size: 12px;
          color: var(--muted);
        }

        /* ── MOBILE FIRST ── */
        @media (max-width: 768px) {
          .about-section { padding: 56px 0; }
          .about-container { gap: 40px; }

          /* Stats: 2×2 on mobile */
          .about-stats { grid-template-columns: repeat(2, 1fr); }
          .about-stat { padding: 22px 12px; }

          /* Stack body */
          .about-body {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-pillar:hover { transform: none; }
        }

        @media (max-width: 400px) {
          .about-stat-value { font-size: 1.6rem; }
          .about-section { padding: 44px 0; }
        }
      `}</style>
    </section>
  );
}
