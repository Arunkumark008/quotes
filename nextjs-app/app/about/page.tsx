"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useModal } from "@/lib/modal";
import Breadcrumb from "@/components/Breadcrumb";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: "easeOut" } },
});

const carrierLogos = [
  { name: "Manulife", logo: "/company/manulife.png" },
  { name: "Foresters", logo: "/company/foresters.png" },
  { name: "Canada Protection Plan", logo: "/company/canada protection.png" },
  { name: "Humania", logo: "/company/humania.png" },
  { name: "Empire Life", logo: "/company/empire life.png" },
  { name: "Desjardins", logo: "/company/desjardins.png" },
  { name: "iA Financial", logo: "/company/iafinancial.png" },
  { name: "Assumption", logo: "/company/assumption.png" },
  { name: "Ivari", logo: "/company/ivari.png" },
  { name: "Edge Benefits", logo: "/company/edgebenefits.png" },
  { name: "UV Insurance", logo: "/company/uv insurance.png" },
];

const insuranceItems = [
  { icon: "shield", text: "Life insurance (term & permanent)" },
  { icon: "heart", text: "Critical illness & disability insurance" },
  { icon: "health", text: "Health & dental plans" },
  { icon: "plane", text: "Travel insurance" },
  { icon: "briefcase", text: "Business/partner protection" },
];

const investmentItems = [
  { icon: "dollar", text: "RRSP, TFSA, and non-registered strategies" },
  { icon: "graduation", text: "Education, estate, and legacy planning" },
  { icon: "tax", text: "Tax-aware beneficiary structuring" },
];

const founders = [
  {
    initials: "DL",
    name: "Denesh Logeswaran",
    role: "Co-Founder & Director",
    bio: "A builder and mentor to a growing team of licensed agents across Canada, Denesh focuses on practical, tax-aware protection strategies for families and entrepreneurs.",
    image: "/testimonials/denesh.jpg",
  },
  {
    initials: "LM",
    name: "Lucia Medina",
    role: "Co-Founder & Director",
    bio: "Known for her client advocacy and meticulous service standards, Lucia leads our service operations to ensure prompt follow-through and proactive policy maintenance.",
    image: "/testimonials/lucia.jpg",
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function AboutPage() {
  const { openModal } = useModal();

  return (
    <>
      <Header />
      <main>

        {/* ── Hero with Cover Image ─────────────────────────────────── */}
        <section className="about-hero">
          <div className="about-hero-overlay" />
          <div className="container about-hero-content">
            <Breadcrumb crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us" },
            ]} />
            <motion.span
              className="about-hero-label"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
            >
              About DCW Financial Inc.
            </motion.span>
            <motion.h1
              className="about-hero-h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22,1,0.36,1] }}
            >
              A Family-Built,<br/>
              <span style={{ color: "var(--green)" }}>Client-First Brokerage</span>
            </motion.h1>
            <motion.p
              className="about-hero-sub"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22,1,0.36,1] }}
            >
              Independent insurance and financial services advisors serving Canadian families with unbiased recommendations tailored to your needs and budget.
            </motion.p>
          </div>
        </section>

        {/* ── About Company ──────────────────────────────────────────── */}
        <section className="ab-section ab-white">
          <div className="container">
            <div className="ab-intro-grid">
              
              {/* Left - Main content */}
              <motion.div
                className="ab-intro-left"
                initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                <motion.h2 variants={fadeUp(0)} className="ab-h2">
                  Independent Advice.<br/>
                  <span style={{ color: "var(--green)" }}>Your Best Interest.</span>
                </motion.h2>
                <motion.p variants={fadeUp(0.06)} className="ab-p">
                  DCW Financial Inc. is a family-built, client-first insurance and financial services brokerage led by co-founders and directors <strong>Denesh Logeswaran</strong> and <strong>Lucia Medina</strong>.
                </motion.p>
                <motion.p variants={fadeUp(0.1)} className="ab-p">
                  We operate as independent advisors and are contracted through <strong>Experior Financial Group Inc. (MGA)</strong>, which provides our access to a broad marketplace of leading Canadian insurers. This independence lets us compare options across carriers so you receive unbiased recommendations tailored to your needs and budget.
                </motion.p>

                {/* AMF License Block */}
                <motion.div variants={fadeUp(0.14)} className="ab-amf-block">
                  <div className="ab-amf-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <polyline points="9 12 11 14 15 10"/>
                    </svg>
                  </div>
                  <div className="ab-amf-content">
                    <p className="ab-amf-title">AMF Licensed & Regulated</p>
                    <p className="ab-amf-numbers">
                      <span>License #: <strong>179631</strong></span>
                      <span className="ab-amf-sep">•</span>
                      <span>Firm Registration #: <strong>608808</strong></span>
                    </p>
                    <a href="https://lautorite.qc.ca" target="_blank" rel="noopener noreferrer" className="ab-amf-link">
                      Verify on AMF Website ↗
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp(0.18)} className="ab-cta-row">
                  <button onClick={openModal} className="btn-primary">Get a Free Quote →</button>
                  <Link href="/contact" className="ab-ghost-btn">Contact Us</Link>
                </motion.div>
              </motion.div>

              {/* Right - Carrier Access Card */}
              <motion.div
                className="ab-carriers-card"
                initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                <motion.div variants={fadeUp(0)} className="ab-carriers-header">
                  <div className="ab-carriers-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </div>
                  <h3 className="ab-carriers-h3">Our Carrier Access</h3>
                </motion.div>
                <motion.p variants={fadeUp(0.05)} className="ab-carriers-desc">
                  We work with a wide range of reputable insurers, including (but not limited to):
                </motion.p>
                <motion.div variants={fadeUp(0.1)} className="ab-carrier-logos">
                  {carrierLogos.map((carrier) => (
                    <div key={carrier.name} className="ab-carrier-logo-item">
                      <Image
                        src={carrier.logo}
                        alt={carrier.name}
                        width={100}
                        height={40}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  ))}
                </motion.div>
                <motion.p variants={fadeUp(0.14)} className="ab-disclosure">
                  <strong>Disclosure:</strong> DCW Financial Inc. is independently owned and operated. Experior Financial Group Inc. is our contracted Managing General Agency (MGA) and is not an insurer. Carrier availability and product eligibility may vary by province and client circumstances.
                </motion.p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── What We Do ─────────────────────────────────────────────── */}
        <section className="ab-section ab-dark">
          <div className="container">
            <motion.div
              className="ab-section-head"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.span variants={fadeUp(0)} className="section-label light">What We Do</motion.span>
              <motion.h2 variants={fadeUp(0.06)} className="ab-h2 ab-h2-light">
                Comprehensive Protection &<br/>
                <span style={{ color: "var(--green)" }}>Financial Planning</span>
              </motion.h2>
            </motion.div>

            <motion.div
              className="ab-services-grid"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Insurance Planning */}
              <motion.div variants={fadeUp(0)} className="ab-service-card">
                <div className="ab-service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <h3 className="ab-service-h3">Insurance Planning</h3>
                <ul className="ab-service-list">
                  {insuranceItems.map((item) => (
                    <li key={item.text} className="ab-service-item">
                      <span className="ab-check"><CheckIcon /></span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Investment & Savings */}
              <motion.div variants={fadeUp(0.08)} className="ab-service-card">
                <div className="ab-service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                  </svg>
                </div>
                <h3 className="ab-service-h3">Investment & Savings Strategies</h3>
                <ul className="ab-service-list">
                  {investmentItems.map((item) => (
                    <li key={item.text} className="ab-service-item">
                      <span className="ab-check"><CheckIcon /></span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Meet the Founders ──────────────────────────────────────── */}
        <section className="ab-section ab-white">
          <div className="container">
            <motion.div
              className="ab-section-head"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.span variants={fadeUp(0)} className="section-label">Leadership</motion.span>
              <motion.h2 variants={fadeUp(0.06)} className="ab-h2">
                Meet the <span style={{ color: "var(--green)" }}>Founders</span>
              </motion.h2>
            </motion.div>

            <motion.div
              className="ab-founders-grid"
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {founders.map((f, i) => (
                <motion.div key={f.name} variants={fadeUp(i * 0.1)} className="ab-founder-card">
                  <div className="ab-founder-avatar">
                    <Image 
                      src={f.image} 
                      alt={f.name} 
                      width={100} 
                      height={100}
                      style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "50%", objectPosition: "top" }}
                    />
                  </div>
                  <div className="ab-founder-body">
                    <h3 className="ab-founder-name">{f.name}</h3>
                    <p className="ab-founder-role">{f.role}</p>
                    <p className="ab-founder-bio">{f.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Our Team & Compensation ────────────────────────────────── */}
        <section className="ab-section ab-soft">
          <div className="container">
            <div className="ab-info-grid">
              
              {/* Our Team */}
              <motion.div
                className="ab-info-card"
                initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                <motion.div variants={fadeUp(0)} className="ab-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </motion.div>
                <motion.h3 variants={fadeUp(0.04)} className="ab-info-h3">Our Team</motion.h3>
                <motion.p variants={fadeUp(0.08)} className="ab-info-p">
                  DCW Financial Inc. is supported by a network of licensed agents who share our standards for compliance, education, and client care. Working under Experior Financial Group Inc. (MGA), our advisors maintain provincial licensing, continuing education, and mandatory Errors & Omissions (E&O) coverage.
                </motion.p>
              </motion.div>

              {/* Compensation */}
              <motion.div
                className="ab-info-card ab-info-card--highlight"
                initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                <motion.div variants={fadeUp(0)} className="ab-info-icon ab-info-icon--white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </motion.div>
                <motion.h3 variants={fadeUp(0.04)} className="ab-info-h3 ab-info-h3--white">How We Are Compensated</motion.h3>
                <motion.p variants={fadeUp(0.08)} className="ab-info-p ab-info-p--white">
                  At Quotes-LifeInsurance, you'll <strong>never pay a fee</strong> to use our services or to speak with one of our licensed brokers. We operate on a commission basis, and we are only compensated by the insurance carrier if you choose to put a policy in place through us.
                </motion.p>
                <motion.p variants={fadeUp(0.12)} className="ab-info-p ab-info-p--white">
                  In other words, <strong>our advice is completely free to you</strong>. Our role is to listen, educate, and guide you toward protection that makes a meaningful difference in your financial future. If we leave you with value and a solution that improves your financial position, we've done our job.
                </motion.p>
                <motion.div variants={fadeUp(0.16)} className="ab-free-badge">
                  ✓ Our Advice Is Always Free
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────── */}
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
              className="ab-cta-btns"
            >
              <button onClick={openModal} className="ab-cta-btn-main">Get My Free Quote →</button>
              <Link href="/contact" className="ab-cta-btn-ghost">Contact Us</Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* ── Hero with Cover Image ── */
        .about-hero {
          position: relative;
          background: linear-gradient(135deg, #1a3a1d 0%, #0f1623 100%);
          background-image: url('/cover-term-life.jpg');
          background-size: cover;
          background-position: center;
          min-height: 380px;
          display: flex;
          align-items: flex-end;
          padding: 0 0 56px;
        }
        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,22,35,0.4) 0%, rgba(15,22,35,0.88) 70%, rgba(15,22,35,0.98) 100%);
        }
        .about-hero-content {
          position: relative;
          z-index: 1;
        }
        .about-hero-label {
          display: inline-block;
          font-size: 11px; font-weight: 800;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--green);
          margin-bottom: 14px;
        }
        .about-hero-h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 900; line-height: 1.1;
          letter-spacing: -0.03em; color: #fff;
          font-family: var(--font-sora), sans-serif;
          margin-bottom: 16px;
        }
        .about-hero-sub {
          font-size: 16px; color: rgba(255,255,255,0.65);
          max-width: 560px; line-height: 1.75;
        }

        /* ── Shared Section ── */
        .ab-section { padding: 80px 0; }
        .ab-white { background: #fff; }
        .ab-dark { background: var(--dark); }
        .ab-soft { background: var(--bg-soft); }
        .ab-section-head { text-align: center; margin-bottom: 48px; }
        .ab-h2 {
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 800; line-height: 1.15;
          color: var(--dark); margin: 8px 0 0;
        }
        .ab-h2-light { color: #fff; }
        .ab-p {
          font-size: 15px; color: var(--body);
          line-height: 1.85; margin-bottom: 16px;
        }

        /* ── Intro Grid ── */
        .ab-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        /* AMF Block */
        .ab-amf-block {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 20px 22px; border-radius: 14px;
          background: rgba(74,164,97,0.06);
          border: 1px solid rgba(74,164,97,0.2);
          margin: 24px 0;
        }
        .ab-amf-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(74,164,97,0.15); color: var(--green);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ab-amf-content { flex: 1; }
        .ab-amf-title { font-size: 14px; font-weight: 800; color: var(--dark); margin-bottom: 6px; }
        .ab-amf-numbers { 
          font-size: 13px; color: var(--muted); margin-bottom: 8px;
          display: flex; flex-wrap: wrap; gap: 6px; align-items: center;
        }
        .ab-amf-sep { color: var(--border); }
        .ab-amf-link { 
          font-size: 12px; font-weight: 700; color: var(--green); 
          text-decoration: none; display: inline-flex; align-items: center; gap: 4px;
        }
        .ab-amf-link:hover { text-decoration: underline; }

        .ab-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .ab-ghost-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 13px 24px; border-radius: 50px;
          border: 1.5px solid var(--border); color: var(--dark);
          font-size: 14px; font-weight: 600; background: #fff;
          text-decoration: none; transition: border-color 0.2s, color 0.2s;
        }
        .ab-ghost-btn:hover { border-color: var(--green); color: var(--green); }

        /* Carriers Card */
        .ab-carriers-card {
          background: var(--bg-soft);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 28px;
        }
        .ab-carriers-header {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 14px;
        }
        .ab-carriers-icon {
          width: 48px; height: 48px; border-radius: 12px;
          background: rgba(74,164,97,0.12); color: var(--green);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ab-carriers-h3 { font-size: 18px; font-weight: 800; color: var(--dark); }
        .ab-carriers-desc { font-size: 14px; color: var(--muted); margin-bottom: 18px; line-height: 1.6; }
        .ab-carrier-logos { 
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 16px;
          justify-content: center;
        }
        .ab-carrier-logo-item {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          width: calc(20% - 10px);
          min-width: 100px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ab-carrier-logo-item:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .ab-carrier-logo-item img {
          max-width: 100%;
          height: auto;
          filter: grayscale(20%);
          opacity: 0.85;
          transition: filter 0.2s, opacity 0.2s;
        }
        .ab-carrier-logo-item:hover img {
          filter: grayscale(0%);
          opacity: 1;
        }
        .ab-carrier-more {
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          text-align: center;
          margin-bottom: 20px;
        }
        .ab-disclosure { 
          font-size: 11px; color: var(--muted); 
          line-height: 1.7; 
          padding: 14px;
          background: rgba(0,0,0,0.03);
          border-radius: 10px;
        }

        /* ── Services Grid ── */
        .ab-services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        .ab-service-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 32px 28px;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .ab-service-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(74,164,97,0.35);
          transform: translateY(-3px);
        }
        .ab-service-icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: rgba(74,164,97,0.15); color: var(--green);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
        .ab-service-h3 { font-size: 17px; font-weight: 800; color: #fff; margin-bottom: 18px; }
        .ab-service-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .ab-service-item {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.5;
        }
        .ab-check { color: var(--green); }

        /* ── Founders Grid ── */
        .ab-founders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        .ab-founder-card {
          display: flex; align-items: flex-start; gap: 20px;
          padding: 32px 28px; border-radius: 18px;
          border: 1px solid var(--border);
          background: var(--bg-soft);
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .ab-founder-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }
        .ab-founder-avatar {
          width: 100px; height: 100px; border-radius: 50%;
          background: var(--green);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 18px; font-weight: 800;
          flex-shrink: 0;
          overflow: hidden;
        }
        .ab-founder-avatar img {
          object-position: top !important;
        }
        .ab-founder-name { font-size: 17px; font-weight: 800; color: var(--dark); margin-bottom: 4px; }
        .ab-founder-role { font-size: 13px; font-weight: 600; color: var(--green); margin-bottom: 12px; }
        .ab-founder-bio { font-size: 14px; color: var(--muted); line-height: 1.75; }

        /* ── Info Grid (Team & Compensation) ── */
        .ab-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .ab-info-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 32px 28px;
        }
        .ab-info-card--highlight {
          background: var(--green);
          border-color: var(--green);
        }
        .ab-info-icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: rgba(74,164,97,0.12); color: var(--green);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
        .ab-info-icon--white {
          background: rgba(255,255,255,0.15); color: #fff;
        }
        .ab-info-h3 { font-size: 18px; font-weight: 800; color: var(--dark); margin-bottom: 14px; }
        .ab-info-h3--white { color: #fff; }
        .ab-info-p { font-size: 14px; color: var(--muted); line-height: 1.8; margin-bottom: 12px; }
        .ab-info-p--white { color: rgba(255,255,255,0.85); }
        .ab-free-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 800;
          background: rgba(255,255,255,0.2);
          color: #fff;
          padding: 10px 18px;
          border-radius: 50px;
          margin-top: 8px;
        }

        /* ── CTA Section ── */
        .ab-cta-section {
          background: var(--green);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        .ab-cta-section::before {
          content: ""; position: absolute;
          right: -120px; top: -120px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }
        .ab-cta-section::after {
          content: ""; position: absolute;
          left: -80px; bottom: -80px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          pointer-events: none;
        }
        .ab-cta-inner { text-align: center; position: relative; z-index: 1; }
        .ab-cta-h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900; color: #fff;
          line-height: 1.1; margin-bottom: 14px;
          font-family: var(--font-sora), sans-serif;
        }
        .ab-cta-sub {
          font-size: 15px; color: rgba(255,255,255,0.6);
          max-width: 420px; margin: 0 auto 32px; line-height: 1.75;
        }
        .ab-cta-btns {
          display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
        }
        .ab-cta-btn-main {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--green);
          font-weight: 800; font-size: 15px;
          padding: 15px 34px; border-radius: 50px;
          border: none; cursor: pointer; font-family: inherit;
          box-shadow: 0 4px 24px rgba(0,0,0,0.15);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ab-cta-btn-main:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
        .ab-cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff;
          font-weight: 700; font-size: 15px;
          padding: 14px 28px; border-radius: 50px;
          border: 2px solid rgba(255,255,255,0.4);
          text-decoration: none; transition: background 0.2s, border-color 0.2s;
        }
        .ab-cta-btn-ghost:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.7); }

        /* ── MOBILE RESPONSIVE ── */
        @media (max-width: 900px) {
          .ab-intro-grid { grid-template-columns: 1fr; gap: 32px; }
          .ab-services-grid { grid-template-columns: 1fr; }
          .ab-carrier-logos { grid-template-columns: repeat(3, 1fr); }
          .ab-founders-grid { grid-template-columns: 1fr; }
          .ab-info-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .ab-section { padding: 56px 0; }
          .about-hero { min-height: 320px; padding-bottom: 40px; }
          .about-hero-h1 { font-size: 1.9rem; }
          .ab-founder-card { flex-direction: column; gap: 16px; }
          .ab-founder-card:hover { transform: none; }
          .ab-amf-numbers { flex-direction: column; gap: 2px; }
          .ab-amf-sep { display: none; }
        }
      `}</style>
    </>
  );
}
