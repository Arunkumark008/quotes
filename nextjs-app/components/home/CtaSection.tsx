"use client";
import Animate from "@/components/Animate";
import { useModal } from "@/lib/modal";
import { useLang } from "@/lib/i18n";

export default function CtaSection() {
  const { openModal } = useModal();
  const { t } = useLang();

  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <Animate className="cta-content">

          {/* Label */}
          <span className="cta-eyebrow">Free Consultation</span>

          {/* Heading */}
          <h2 className="cta-heading">
            {t.ctaH2}
          </h2>

          {/* Sub */}
          <p className="cta-sub">{t.ctaSub}</p>

          {/* Buttons */}
          <div className="cta-btns">
            <button onClick={openModal} className="cta-btn-main">
              {t.ctaBtn}
            </button>
          </div>

          {/* Trust line */}
          <p className="cta-trust">
            {t.ctaTrust}
          </p>

        </Animate>
      </div>

      <style>{`
        .cta-section {
          background: var(--green);
          position: relative;
          padding: 80px 0;
          overflow: hidden;
        }
        /* Subtle decorative circle */
        .cta-section::before {
          content: "";
          position: absolute;
          right: -120px; top: -120px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          pointer-events: none;
        }
        .cta-section::after {
          content: "";
          position: absolute;
          left: -80px; bottom: -80px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          pointer-events: none;
        }

        .cta-inner {
          position: relative;
          z-index: 1;
        }
        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 620px;
          margin: 0 auto;
        }

        /* Eyebrow */
        .cta-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          padding: 5px 16px;
          margin-bottom: 20px;
        }

        /* Heading */
        .cta-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.025em;
          font-family: var(--font-sora), sans-serif;
          margin-bottom: 16px;
        }

        /* Sub */
        .cta-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.78);
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 36px;
        }

        /* Buttons */
        .cta-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 28px;
        }
        .cta-btn-main {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: var(--green);
          font-weight: 800;
          font-size: 14px;
          padding: 15px 36px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }
        .cta-btn-main:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.2);
        }
        .cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 14px 28px;
          border-radius: 50px;
          border: 2px solid rgba(255,255,255,0.4);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .cta-btn-ghost:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.7);
        }

        /* Trust */
        .cta-trust {
          font-size: 11.5px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.3px;
        }

        @media (max-width: 500px) {
          .cta-btns { flex-direction: column; width: 100%; }
          .cta-btn-main, .cta-btn-ghost { width: 100%; justify-content: center; }
          .cta-section { padding: 56px 0; }
        }
      `}</style>
    </section>
  );
}
