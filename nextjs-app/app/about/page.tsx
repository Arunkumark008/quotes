"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useModal } from "@/lib/modal";
import Breadcrumb from "@/components/Breadcrumb";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: "easeOut" } },
});

const carriers = [
  "Manulife","Beneva","iA Financial","Foresters",
  "Canada Protection Plan","Humania","Empire Life","Desjardins",
  "Ivari","Assumption Life","Edge Benefits","UV Insurance",
];

const insuranceItems = [
  "Term & permanent life insurance",
  "Critical illness coverage",
  "Disability insurance",
  "Health & dental plans",
  "Business protection",
];

const investmentItems = [
  "RRSP, TFSA & non-registered strategies",
  "Education & estate planning",
  "Legacy & beneficiary structuring",
  "Tax-aware investment strategies",
];

const founders = [
  {
    initials: "DL",
    name: "Denesh Logeswaran",
    role: "Co-Founder & Director",
    badge: "AMF Lic. #179631",
    color: "var(--green)",
    bio: "A builder and mentor to a growing team of licensed agents across Canada, Denesh focuses on practical, tax-aware protection strategies for families and entrepreneurs.",
  },
  {
    initials: "LM",
    name: "Lucia Medina",
    role: "Co-Founder & Director of Service",
    badge: "Client Advocate",
    color: "var(--plum)",
    bio: "Known for her client advocacy and meticulous service standards, Lucia leads service operations to ensure prompt follow-through and proactive policy maintenance.",
  },
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function AboutPage() {
  const { openModal } = useModal();

  return (
    <>
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────── */}
        <section className="about-hero">
          <div className="container">
            <Breadcrumb crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us" },
            ]} />
            <motion.h1
              className="about-hero-h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
            >
              A Family Built on<br/>
              <span style={{ color: "var(--green)" }}>Trust & Transparency</span>
            </motion.h1>
            <motion.p
              className="about-hero-sub"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22,1,0.36,1] }}
            >
              DCW Financial Inc. — a client-first, independent life insurance brokerage serving Canadian families since 1998.
            </motion.p>
          </div>
        </section>

        {/* ── Who We Are ──────────────────────────── */}
        <section className="ab-section ab-white">
          <div className="container ab-two-col">

            <motion.div
              className="ab-copy"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.span variants={fadeUp(0)} className="section-label">About DCW Financial</motion.span>
              <motion.h2 variants={fadeUp(0.06)} className="ab-h2">
                Independent Advice.<br/>
                <span style={{ color: "var(--green)" }}>Your Best Interest.</span>
              </motion.h2>
              <motion.p variants={fadeUp(0.1)} className="ab-p">
                DCW Financial Inc. is led by co-founders <strong>Denesh Logeswaran</strong> and <strong>Lucia Medina</strong>. We operate as independent advisors contracted through <strong>Experior Financial Group Inc. (MGA)</strong> — giving us access to 20+ leading Canadian carriers without being tied to any one of them.
              </motion.p>
              <motion.p variants={fadeUp(0.14)} className="ab-p">
                That independence means every recommendation we make is based purely on what's best for you — not commission targets or quotas.
              </motion.p>

              <motion.div variants={fadeUp(0.18)} className="ab-amf-block">
                <div className="ab-amf-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <div>
                  <p className="ab-amf-title">AMF Licensed & Regulated</p>
                  <p className="ab-amf-sub">Licence #179631 · Firm Registration #608808</p>
                  <a href="https://lautorite.qc.ca" target="_blank" rel="noopener noreferrer" className="ab-amf-link">Verify on AMF ↗</a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp(0.22)} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button onClick={openModal} className="btn-primary">Get a Free Quote →</button>
                <Link href="/contact" className="ab-ghost-btn">Contact Us</Link>
              </motion.div>
            </motion.div>

            {/* Carriers card */}
            <motion.div
              className="ab-carriers-card"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.h3 variants={fadeUp(0)} className="ab-card-h3">Our Carrier Access</motion.h3>
              <motion.p variants={fadeUp(0.05)} className="ab-card-sub">
                We work with <strong>20+ reputable Canadian insurers</strong> including:
              </motion.p>
              <motion.div variants={fadeUp(0.1)} className="ab-carrier-pills">
                {carriers.map((c) => (
                  <span key={c} className="ab-carrier-pill">{c}</span>
                ))}
              </motion.div>
              <motion.p variants={fadeUp(0.15)} className="ab-disclosure">
                DCW Financial Inc. is independently owned. Experior Financial Group Inc. is our contracted MGA and is not an insurer. Carrier availability may vary by province.
              </motion.p>
            </motion.div>

          </div>
        </section>

        {/* ── What We Do ──────────────────────────── */}
        <section className="ab-section ab-dark">
          <div className="container">
            <motion.div
              className="ab-section-head"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.span variants={fadeUp(0)} className="section-label light">What We Do</motion.span>
              <motion.h2 variants={fadeUp(0.06)} className="ab-h2 ab-h2-light">
                Comprehensive Protection<br/>
                <span style={{ color: "var(--green)" }}>& Financial Planning</span>
              </motion.h2>
            </motion.div>

            <motion.div
              className="ab-services-grid"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Insurance */}
              <motion.div variants={fadeUp(0)} className="ab-service-card">
                <div className="ab-service-icon ab-service-icon--green">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <h3 className="ab-service-h3">Insurance Planning</h3>
                <ul className="ab-service-list">
                  {insuranceItems.map((item) => (
                    <li key={item} className="ab-service-item">
                      <span style={{ color: "var(--green)" }}><CheckIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Investment */}
              <motion.div variants={fadeUp(0.08)} className="ab-service-card">
                <div className="ab-service-icon ab-service-icon--plum">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                  </svg>
                </div>
                <h3 className="ab-service-h3">Investment & Savings</h3>
                <ul className="ab-service-list">
                  {investmentItems.map((item) => (
                    <li key={item} className="ab-service-item">
                      <span style={{ color: "#c9a8c4" }}><CheckIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Founders ────────────────────────────── */}
        <section className="ab-section ab-white">
          <div className="container">
            <motion.div
              className="ab-section-head"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.span variants={fadeUp(0)} className="section-label">Our Founders</motion.span>
              <motion.h2 variants={fadeUp(0.06)} className="ab-h2">
                The People Behind<br/>
                <span style={{ color: "var(--green)" }}>Your Coverage</span>
              </motion.h2>
            </motion.div>

            <motion.div
              className="ab-founders-grid"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {founders.map((f, i) => (
                <motion.div key={f.name} variants={fadeUp(i * 0.1)} className="ab-founder-card">
                  <div className="ab-founder-avatar" style={{ background: f.color }}>
                    {f.initials}
                  </div>
                  <div className="ab-founder-body">
                    <h3 className="ab-founder-name">{f.name}</h3>
                    <p className="ab-founder-role" style={{ color: f.color }}>{f.role}</p>
                    <span className="ab-founder-badge" style={{ background: f.color }}>{f.badge}</span>
                    <p className="ab-founder-bio">{f.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Compensation ────────────────────────── */}
        <section className="ab-section" style={{ background: "var(--bg-soft)" }}>
          <div className="container ab-comp-grid">
            <motion.div
              className="ab-comp-card ab-comp-card--green"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.h3 variants={fadeUp(0)} className="ab-comp-h3">Our Team</motion.h3>
              <motion.p variants={fadeUp(0.06)} className="ab-comp-p">
                DCW Financial Inc. is supported by a network of licensed agents working under <strong>Experior Financial Group Inc. (MGA)</strong>. All advisors maintain provincial licensing, continuing education, and mandatory E&amp;O coverage.
              </motion.p>
            </motion.div>
            <motion.div
              className="ab-comp-card ab-comp-card--plum"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.h3 variants={fadeUp(0)} className="ab-comp-h3">How We're Compensated</motion.h3>
              <motion.p variants={fadeUp(0.06)} className="ab-comp-p">
                You'll <strong>never pay a fee</strong> to use our services. We earn a commission from the carrier only if you choose to place a policy — so our advice is always in your interest.
              </motion.p>
              <motion.p variants={fadeUp(0.1)} className="ab-comp-tag">
                Our advice is completely free. Always.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────── */}
        <section className="ab-cta-section">
          <div className="container ab-cta-inner">
            <motion.h2
              className="ab-cta-h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="ab-cta-sub"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22,1,0.36,1] }}
            >
              Free consultation, no pressure, no fees. Talk to a licensed advisor today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.22,1,0.36,1] }}
              style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
            >
              <button onClick={openModal} className="ab-cta-btn-main">Get My Free Quote →</button>
              <Link href="/contact" className="ab-cta-btn-ghost">Contact Us</Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* ── Hero ── */
        .about-hero {
          background: var(--dark);
          padding: 56px 0 52px;
        }
        .about-hero-h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 900; line-height: 1.1;
          letter-spacing: -0.03em; color: #fff;
          font-family: var(--font-sora), sans-serif;
          margin-bottom: 14px;
        }
        .about-hero-sub {
          font-size: 15px; color: rgba(255,255,255,0.55);
          max-width: 520px; line-height: 1.7;
        }

        /* ── Shared section ── */
        .ab-section { padding: 80px 0; }
        .ab-white   { background: #fff; }
        .ab-dark    { background: var(--dark); }
        .ab-section-head { margin-bottom: 48px; }
        .ab-h2 {
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 800; line-height: 1.15;
          color: var(--dark); margin: 8px 0 0;
        }
        .ab-h2-light { color: #fff; }
        .ab-p {
          font-size: 15px; color: var(--body);
          line-height: 1.8; margin-bottom: 14px;
        }

        /* ── Who we are — two col ── */
        .ab-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .ab-copy { display: flex; flex-direction: column; }

        /* AMF block */
        .ab-amf-block {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 16px 18px; border-radius: 12px;
          background: rgba(74,164,97,0.06);
          border: 1px solid rgba(74,164,97,0.2);
          margin-bottom: 24px;
        }
        .ab-amf-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(74,164,97,0.12); color: var(--green);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ab-amf-title { font-size: 13px; font-weight: 700; color: var(--green); margin-bottom: 2px; }
        .ab-amf-sub   { font-size: 12px; color: var(--muted); margin-bottom: 4px; }
        .ab-amf-link  { font-size: 11px; font-weight: 700; color: var(--green); text-decoration: none; }
        .ab-amf-link:hover { text-decoration: underline; }
        .ab-ghost-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 13px 24px; border-radius: 50px;
          border: 1.5px solid var(--border); color: var(--dark);
          font-size: 14px; font-weight: 600; background: #fff;
          text-decoration: none; transition: border-color 0.2s, color 0.2s;
        }
        .ab-ghost-btn:hover { border-color: var(--green); color: var(--green); }

        /* Carriers card */
        .ab-carriers-card {
          background: var(--bg-soft);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 28px;
        }
        .ab-card-h3 { font-size: 16px; font-weight: 800; color: var(--dark); margin-bottom: 6px; }
        .ab-card-sub { font-size: 13px; color: var(--muted); margin-bottom: 20px; }
        .ab-carrier-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
        .ab-carrier-pill {
          font-size: 12px; font-weight: 700;
          background: var(--green); color: #fff;
          padding: 5px 13px; border-radius: 50px;
        }
        .ab-disclosure { font-size: 11px; color: var(--muted); font-style: italic; line-height: 1.6; }

        /* ── Services ── */
        .ab-services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          max-width: 880px;
          margin: 0 auto;
        }
        .ab-service-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 28px 24px;
          transition: background 0.2s, border-color 0.2s;
        }
        .ab-service-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(74,164,97,0.3);
        }
        .ab-service-icon {
          width: 48px; height: 48px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .ab-service-icon--green { background: rgba(74,164,97,0.15); color: var(--green); }
        .ab-service-icon--plum  { background: rgba(83,46,77,0.4); color: #c9a8c4; }
        .ab-service-h3 { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 14px; }
        .ab-service-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .ab-service-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 13px; color: rgba(255,255,255,0.65); line-height: 1.5;
        }

        /* ── Founders ── */
        .ab-founders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          max-width: 860px;
          margin: 0 auto;
        }
        .ab-founder-card {
          display: flex; align-items: flex-start; gap: 18px;
          padding: 28px 24px; border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--bg-soft);
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .ab-founder-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.07);
          transform: translateY(-3px);
        }
        .ab-founder-avatar {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 17px; font-weight: 800;
          flex-shrink: 0;
        }
        .ab-founder-name  { font-size: 15px; font-weight: 800; color: var(--dark); margin-bottom: 2px; }
        .ab-founder-role  { font-size: 12px; font-weight: 600; margin-bottom: 8px; }
        .ab-founder-badge {
          display: inline-block; font-size: 10px; font-weight: 700;
          color: #fff; padding: 3px 10px; border-radius: 50px; margin-bottom: 10px;
        }
        .ab-founder-bio { font-size: 13px; color: var(--muted); line-height: 1.7; }

        /* ── Compensation ── */
        .ab-comp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .ab-comp-card {
          background: #fff; border-radius: 16px;
          padding: 28px 24px;
          border: 1px solid var(--border);
          border-top: 4px solid;
        }
        .ab-comp-card--green { border-top-color: var(--green); }
        .ab-comp-card--plum  { border-top-color: var(--plum); }
        .ab-comp-h3 { font-size: 16px; font-weight: 800; color: var(--dark); margin-bottom: 12px; }
        .ab-comp-p  { font-size: 14px; color: var(--muted); line-height: 1.75; margin-bottom: 10px; }
        .ab-comp-tag { font-size: 13px; font-weight: 700; color: var(--green); }

        /* ── CTA ── */
        .ab-cta-section {
          background: var(--green);
          padding: 72px 0;
          position: relative;
          overflow: hidden;
        }
        .ab-cta-section::before {
          content: ""; position: absolute;
          right: -100px; top: -100px;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          pointer-events: none;
        }
        .ab-cta-inner { text-align: center; position: relative; z-index: 1; }
        .ab-cta-h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900; color: #fff;
          line-height: 1.1; margin-bottom: 12px;
          font-family: var(--font-sora), sans-serif;
        }
        .ab-cta-sub {
          font-size: 15px; color: rgba(255,255,255,0.75);
          max-width: 400px; margin: 0 auto 32px; line-height: 1.7;
        }
        .ab-cta-btn-main {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--green);
          font-weight: 800; font-size: 14px;
          padding: 14px 32px; border-radius: 50px;
          border: none; cursor: pointer; font-family: inherit;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ab-cta-btn-main:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.2); }
        .ab-cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff;
          font-weight: 700; font-size: 14px;
          padding: 13px 26px; border-radius: 50px;
          border: 2px solid rgba(255,255,255,0.4);
          text-decoration: none; transition: background 0.2s, border-color 0.2s;
        }
        .ab-cta-btn-ghost:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.7); }

        /* ── MOBILE FIRST ── */
        @media (max-width: 768px) {
          .ab-section { padding: 56px 0; }
          .about-hero  { padding: 40px 0 36px; }
          .ab-two-col  { grid-template-columns: 1fr; gap: 32px; }
          .ab-services-grid { grid-template-columns: 1fr; max-width: 100%; }
          .ab-founders-grid { grid-template-columns: 1fr; max-width: 100%; }
          .ab-comp-grid     { grid-template-columns: 1fr; }
          .ab-cta-section   { padding: 52px 0; }
          .ab-founder-card  { flex-direction: column; gap: 14px; }
          .ab-founder-card:hover { transform: none; }
        }

        @media (max-width: 480px) {
          .about-hero-h1 { font-size: 1.9rem; }
          .ab-section { padding: 44px 0; }
        }
      `}</style>
    </>
  );
}
