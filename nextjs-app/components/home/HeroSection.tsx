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

export default function HeroSection() {
  const { t }         = useLang();
  const { openModal } = useModal();

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">

          {/* ── LEFT: copy ─────────────────────────── */}
          <motion.div initial="hidden" animate="show" className="hero-copy">

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
              <Link href="/about" className="hero-learn-btn">
                {t.heroCta2}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
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
                loading="eager"
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
        .hero-learn-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 24px; border-radius: 50px;
          border: 2px solid var(--border); color: var(--dark);
          font-size: 14px; font-weight: 700; background: #fff;
          text-decoration: none; transition: all 0.2s ease;
        }
        .hero-learn-btn:hover { 
          border-color: var(--green);
          color: var(--green);
          transform: translateY(-2px);
        }
        .hero-learn-btn svg {
          transition: transform 0.2s;
        }
        .hero-learn-btn:hover svg {
          transform: translateX(3px);
        }

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
          .hero-ctas button, .hero-ctas .hero-learn-btn {
            width: 100%; justify-content: center; text-align: center;
          }
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
