import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Articles",   href: "/articles" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Term Life Insurance",      href: "/services/term-life" },
  { label: "Whole Life Insurance",     href: "/services/whole-life" },
  { label: "Disability Insurance",     href: "/services/disability" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Col 1 — Brand */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo-link">
            <Image 
              src="/whitelogo.png" 
              alt="Quotes Life Insurance" 
              width={180} 
              height={50}
              style={{ objectFit: "contain" }}
            />
          </Link>

          <p className="footer-desc">
            A family-built, client-first brokerage. We compare 20+ Canadian carriers to find you the best coverage — at no cost.
          </p>

          {/* Contact chips */}
          <div className="footer-chips">
            <a href="mailto:info@quotes-lifeinsurance.com" className="footer-chip">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Email Us
            </a>
          </div>

          {/* AMF line — compact */}
          <p className="footer-amf">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{display:"inline",verticalAlign:"middle",marginRight:"5px"}}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
            AMF Licensed · Lic. #179631 · Firm #608808
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-h">Quick Links</h4>
          <ul className="footer-list">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="footer-link">
                  <span className="footer-arrow">›</span>{l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div className="footer-col">
          <h4 className="footer-col-h">Services</h4>
          <ul className="footer-list">
            {serviceLinks.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="footer-link">
                  <span className="footer-arrow">›</span>{s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} Quotes Life Insurance — DCW Financial Inc. All rights reserved.
          </p>
          <div className="footer-bar-links">
            <Link href="/privacy-policy" className="footer-bar-link">Privacy Policy</Link>
            <span className="footer-bar-sep">·</span>
            <Link href="/terms" className="footer-bar-link">Terms of Service</Link>
            <span className="footer-bar-sep">·</span>
            <a href="https://lautorite.qc.ca" target="_blank" rel="noopener noreferrer" className="footer-bar-link">Verify AMF ↗</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer { background: #0e1420; color: #fff; }

        /* 3-col grid — brand left, quick links center, services right */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          padding: 56px 0 48px;
        }
        @media (max-width: 800px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; padding: 40px 0 32px; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr; }
        }

        /* Brand col */
        .footer-logo-link { display: inline-block; margin-bottom: 16px; }
        .footer-desc {
          font-size: 13px; color: rgba(255,255,255,0.48);
          line-height: 1.7; margin-bottom: 18px; max-width: 280px;
        }
        .footer-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .footer-chip {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 600;
          color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px; padding: 5px 12px;
          text-decoration: none; transition: color 0.15s, background 0.15s;
        }
        .footer-chip:hover { color: var(--green); background: rgba(74,164,97,0.12); border-color: rgba(74,164,97,0.25); }
        .footer-amf {
          font-size: 11px; color: rgba(255,255,255,0.3); line-height: 1.5;
        }
        .footer-amf svg { color: var(--green); }

        /* Link cols */
        .footer-col-h {
          font-size: 10px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(255,255,255,0.3);
          margin-bottom: 18px;
        }
        .footer-list { list-style: none; display: flex; flex-direction: column; gap: 9px; }
        .footer-link {
          display: flex; align-items: center; gap: 5px;
          font-size: 13px; color: rgba(255,255,255,0.52);
          text-decoration: none; transition: color 0.15s;
        }
        .footer-link:hover { color: var(--green); }
        .footer-arrow {
          color: var(--green); font-size: 15px; line-height: 1;
          transition: transform 0.15s;
        }
        .footer-link:hover .footer-arrow { transform: translateX(2px); }

        /* Bottom bar */
        .footer-bar { border-top: 1px solid rgba(255,255,255,0.06); }
        .footer-bar-inner {
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap;
          gap: 10px; padding: 16px 0;
        }
        .footer-copy { font-size: 11.5px; color: rgba(255,255,255,0.25); }
        .footer-bar-links { display: flex; align-items: center; gap: 8px; }
        .footer-bar-link {
          font-size: 11.5px; color: rgba(255,255,255,0.25);
          text-decoration: none; transition: color 0.15s;
        }
        .footer-bar-link:hover { color: rgba(255,255,255,0.6); }
        .footer-bar-sep { color: rgba(255,255,255,0.12); font-size: 11px; }
      `}</style>
    </footer>
  );
}
