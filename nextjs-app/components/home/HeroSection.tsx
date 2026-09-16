"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { useModal } from "@/lib/modal";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});

const fadeLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

const ShieldCheck = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const DollarFree = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
  </svg>
);
const Carriers = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
  </svg>
);
const StarRating = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default function HeroSection() {
  const { t }         = useLang();
  const { openModal } = useModal();

  const trustItems = [
    { Icon: ShieldCheck, text: t.trust1 },
    { Icon: DollarFree,  text: t.trust2 },
    { Icon: Carriers,    text: t.trust3 },
    { Icon: StarRating,  text: t.trust4 },
  ];

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">

          {/* ── LEFT: copy ─────────────────────────── */}
          <motion.div initial="hidden" animate="show" className="hero-copy">

            {/* AMF badge */}
            <motion.div variants={fadeUp(0)} style={{ marginBottom: "24px" }}>
              <span className="hero-badge">
                <span className="hero-badge-dot" />
                {t.heroLabel}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUp(0.08)} className="hero-h1">
              {t.heroH1a}<br />
              <span style={{ color: "var(--green)" }}>{t.heroH1b}</span><br />
              <span className="hero-h1-sub">{t.heroH1c}</span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp(0.15)} className="hero-sub">
              {t.heroSub}{" "}
              <strong style={{ color: "var(--green)", fontWeight: 800 }}>{t.heroFree}</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp(0.22)} className="hero-ctas">
              <button onClick={openModal} className="btn-primary">{t.heroCta1}</button>
              <Link href="/about" className="hero-learn-more">{t.heroCta2}</Link>
            </motion.div>

            {/* Trust — SVG icons, no emoji */}
            <motion.div variants={fadeUp(0.3)} className="hero-trust">
              {trustItems.map(({ Icon, text }) => (
                <div key={text} className="hero-trust-item">
                  <span className="hero-trust-icon"><Icon /></span>
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: QS form only ─────────────────── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeLeft(0.18)}
            className="hero-form-col"
          >
            {/* overflow:hidden wrapper kills any scrollbar the iframe tries to show */}
            <div style={{ overflow: "hidden", borderRadius: "16px", lineHeight: 0 }}>
              <iframe
                src="https://form.questionscout.com/616e35ca63bd79140f61b3ef"
                className="qs-iframe"
                title="Get a Free Life Insurance Quote"
                frameBorder="0"
                scrolling="no"
                allow="clipboard-write"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .hero-section { background: #f4f6f8; position: relative; }
        .hero-container { padding-top: 60px; padding-bottom: 60px; }

        .hero-grid {
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: 48px;
          align-items: flex-start;
        }
        .hero-copy { display: flex; flex-direction: column; }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 16px; border-radius: 50px;
          background: rgba(74,164,97,0.1); border: 1px solid rgba(74,164,97,0.3);
          font-size: 11px; font-weight: 800; letter-spacing: 1.4px;
          text-transform: uppercase; color: var(--green);
        }
        .hero-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--green); flex-shrink: 0;
          animation: pulseGlow 2.5s ease-in-out infinite;
        }

        .hero-h1 {
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          font-weight: 900; line-height: 1.08;
          letter-spacing: -0.03em; color: var(--dark);
          margin-bottom: 20px;
          font-family: var(--font-sora), sans-serif;
        }
        .hero-h1-sub {
          font-size: 0.68em; font-weight: 700;
          color: #6b7280; letter-spacing: -0.01em;
        }

        .hero-sub {
          font-size: 16px; color: #4b5563;
          line-height: 1.8; margin-bottom: 32px; max-width: 460px;
        }

        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 36px; }
        .hero-learn-more {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border-radius: 50px;
          border: 1.5px solid #d1d5db; color: #374151;
          font-size: 14px; font-weight: 600; background: #fff;
          text-decoration: none; transition: border-color 0.2s, color 0.2s;
        }
        .hero-learn-more:hover { border-color: var(--green); color: var(--green); }

        .hero-trust { display: flex; flex-wrap: wrap; gap: 18px; }
        .hero-trust-item {
          display: flex; align-items: center; gap: 7px;
          font-size: 12.5px; font-weight: 700; color: #374151;
        }
        .hero-trust-icon { color: var(--green); display: flex; align-items: center; }

        .hero-form-col { width: 100%; }
        .qs-iframe {
          width: 100%; height: 640px; border: none;
          border-radius: 16px; display: block; background: #fff;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          /* Form FIRST on mobile */
          .hero-form-col { order: -1; }
          .hero-copy     { order: 1; }
          .qs-iframe { height: 600px; }
        }
        @media (max-width: 600px) {
          .hero-container { padding-top: 20px !important; padding-bottom: 32px !important; }
          .hero-h1 { font-size: clamp(1.8rem, 8vw, 2.4rem) !important; }
          .hero-ctas { flex-direction: column; gap: 10px; }
          .hero-ctas button, .hero-ctas .hero-learn-more {
            width: 100%; justify-content: center; text-align: center;
          }
          .hero-trust { gap: 10px; }
          /* Full viewport width, no border-radius, no scrollbar */
          .hero-form-col {
            margin-left: -20px;
            margin-right: -20px;
            width: calc(100% + 40px);
          }
          .qs-iframe {
            height: 580px;
            border-radius: 0;
            overflow: hidden;
          }
          /* Kill any scrollbar on iframe wrapper too */
          .hero-form-col > div {
            border-radius: 0 !important;
            overflow: hidden !important;
          }
        }
      `}</style>
    </section>
  );
}
