"use client";
import QuoteButton from "@/components/QuoteButton";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useLang, Lang } from "@/lib/i18n";

/* Service categories with items */
const serviceCategories = [
  {
    title: "Life Insurance",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    items: [
      { label: "Term Life Insurance", href: "/services/term-life" },
      { label: "Whole Life Insurance", href: "/services/whole-life" },
      { label: "Universal Life Insurance", href: "/services/universal-life" },
      { label: "Children's Life Insurance", href: "/services/term-life" },
      { label: "No Medical Life Insurance", href: "/services/term-life" },
    ],
  },
  {
    title: "Critical Illness",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    ),
    items: [
      { label: "Critical Illness Coverage", href: "/services/critical-illness" },
    ],
  },
  {
    title: "Disability",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="m4.93 4.93 14.14 14.14"/>
      </svg>
    ),
    items: [
      { label: "Disability Insurance", href: "/services/disability" },
    ],
  },
  {
    title: "Travel & Visitor",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    items: [
      { label: "Travel Insurance", href: "/contact" },
      { label: "Visitor Insurance", href: "/contact" },
    ],
  },
  {
    title: "Health Insurance",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    items: [
      { label: "Health & Dental Plans", href: "/contact" },
    ],
  },
  {
    title: "Investments",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    items: [
      { label: "RRSP & TFSA", href: "/contact" },
      { label: "RESP (Education)", href: "/contact" },
    ],
  },
];

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen]  = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesOpen]);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>

      {/* ── Topbar ────────────────────────────────── */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href="mailto:info@quotes-lifeinsurance.com" className="topbar-link">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              info@quotes-lifeinsurance.com
            </a>
            <span className="topbar-link topbar-hide-md">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              4900 Jean-Talon Ouest, Unit 200, Montréal, QC
            </span>
          </div>
          <div className="topbar-right">
            <span className="amf-badge">AMF Lic. #179631</span>
            {/* Language toggle switch */}
            <div className="lang-toggle" onClick={() => setLang(lang === "en" ? "fr" : "en")}>
              <span className={`lang-toggle-label${lang === "en" ? " lang-toggle-label--active" : ""}`}>EN</span>
              <div className="lang-toggle-track">
                <div className={`lang-toggle-thumb${lang === "fr" ? " lang-toggle-thumb--right" : ""}`} />
              </div>
              <span className={`lang-toggle-label${lang === "fr" ? " lang-toggle-label--active" : ""}`}>FR</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main nav ──────────────────────────────── */}
      <nav className="main-nav">
        <div className="container main-nav-inner">

          {/* Logo - switches color based on theme */}
          <Link href="/" className="logo-wrap">
            <Image 
              src="/logo.png" 
              alt="Quotes Life Insurance" 
              width={200} 
              height={60} 
              priority
              style={{ height: "52px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop nav — clean & minimal */}
          <div className="desktop-nav">
            <Link href="/" className="nav-link">{t.home}</Link>

            {/* Services mega dropdown — click to toggle */}
            <div className="dropdown-wrap" ref={dropdownRef}>
              <button 
                className="nav-link nav-link--btn"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                {t.services}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "none" }}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              {servicesOpen && (
                <div className="mega-dropdown">
                  <div className="mega-grid">
                    {serviceCategories.map((cat) => (
                      <div key={cat.title} className="mega-category">
                        <div className="mega-cat-header">
                          <span className="mega-cat-icon">{cat.icon}</span>
                          <span className="mega-cat-title">{cat.title}</span>
                        </div>
                        <div className="mega-cat-items">
                          {cat.items.map((item) => (
                            <Link 
                              key={item.label} 
                              href={item.href} 
                              className="mega-item"
                              onClick={() => setServicesOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mega-footer">
                    <span>Need help choosing?</span>
                    <Link href="/contact" onClick={() => setServicesOpen(false)}>
                      Get Free Consultation →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about"   className="nav-link">{t.about}</Link>
            <Link href="/articles"    className="nav-link">{t.articles}</Link>
            <Link href="/contact" className="nav-link">{t.contact}</Link>
          </div>

          {/* CTA */}
          <div className="desktop-nav">
            <QuoteButton label={t.getQuote} style={{ fontSize: "14px", padding: "11px 24px" }} />
          </div>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-btn" aria-label="Toggle menu">
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: "22px", height: "2px",
                background: "#374151", borderRadius: "2px", transition: "all 0.2s",
                transform:
                  mobileOpen && i === 0 ? "rotate(45deg) translate(5px,5px)" :
                  mobileOpen && i === 1 ? "scaleX(0)" :
                  mobileOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mobile-menu">
            <Link href="/" onClick={() => setMobileOpen(false)} className="mobile-link">
              {t.home}
            </Link>
            
            {/* Mobile Services - collapsible */}
            <button 
              className="mobile-link mobile-link--btn"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              {t.services}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transition: "transform 0.2s", transform: mobileServicesOpen ? "rotate(180deg)" : "none", marginLeft: "auto" }}>
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            
            {mobileServicesOpen && (
              <div className="mobile-services-section">
                {serviceCategories.map((cat) => (
                  <div key={cat.title} className="mobile-cat">
                    <p className="mobile-cat-title">{cat.title}</p>
                    {cat.items.map((item) => (
                      <Link 
                        key={item.label} 
                        href={item.href}
                        onClick={() => setMobileOpen(false)} 
                        className="mobile-sub-link"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <Link href="/about" onClick={() => setMobileOpen(false)} className="mobile-link">
              {t.about}
            </Link>
            <Link href="/articles" onClick={() => setMobileOpen(false)} className="mobile-link">
              {t.articles}
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="mobile-link">
              {t.contact}
            </Link>
            
            <div className="mobile-lang">
              {(["en", "fr"] as Lang[]).map((l) => (
                <button key={l} onClick={() => { setLang(l); setMobileOpen(false); }}
                  className={`mobile-lang-btn${lang === l ? " mobile-lang-btn--active" : ""}`}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <QuoteButton label={t.getQuote} style={{ marginTop: "12px", width: "100%", justifyContent: "center" }} />
          </div>
        )}
      </nav>

      <style>{`
        .topbar { background: var(--green); padding: 7px 0; font-size: 12px; color: #fff; }
        .topbar-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .topbar-left  { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
        .topbar-right { display: flex; align-items: center; gap: 14px; }
        .topbar-link  { display: flex; align-items: center; gap: 5px; color: rgba(255,255,255,0.82); text-decoration: none; font-size: 12px; transition: color 0.15s; }
        .topbar-link:hover { color: #fff; }
        .topbar-link--bold { font-weight: 700; color: #fff; }
        .topbar-divider { width: 1px; height: 16px; background: rgba(255,255,255,0.3); }
        .amf-badge { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.9); letter-spacing: 0.3px; }
        
        /* Language toggle switch */
        .lang-toggle {
          display: flex; align-items: center; gap: 8px;
          cursor: pointer; user-select: none;
        }
        .lang-toggle-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.5px;
          color: rgba(255,255,255,0.5); transition: color 0.2s;
        }
        .lang-toggle-label--active { color: #fff; }
        .lang-toggle-track {
          width: 36px; height: 20px;
          background: rgba(255,255,255,0.2);
          border-radius: 12px; position: relative;
          transition: background 0.2s;
        }
        .lang-toggle:hover .lang-toggle-track { background: rgba(255,255,255,0.3); }
        .lang-toggle-thumb {
          position: absolute; top: 2px; left: 2px;
          width: 16px; height: 16px;
          background: #fff; border-radius: 50%;
          transition: transform 0.2s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        .lang-toggle-thumb--right { transform: translateX(16px); }

        .main-nav { background: #fff; box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 2px 16px rgba(0,0,0,0.05); }
        .main-nav-inner { display: flex; align-items: center; justify-content: space-between; height: 72px; gap: 8px; }
        .logo-wrap { flex-shrink: 0; display: flex; align-items: center; text-decoration: none; }
        .logo-purple { filter: hue-rotate(270deg) saturate(0.8); }

        .desktop-nav { display: flex; align-items: center; gap: 2px; }
        .nav-link {
          padding: 8px 13px; border-radius: 8px; font-size: 14px; font-weight: 600;
          color: #374151; text-decoration: none; white-space: nowrap;
          transition: color 0.15s, background 0.15s; position: relative;
        }
        .nav-link:hover { color: var(--green); background: rgba(74,164,97,0.07); }
        .nav-link--btn { background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 4px; font-family: inherit; }

        .dropdown-wrap { position: relative; }
        
        /* Mega Dropdown */
        .mega-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 200;
          width: 680px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 12px 48px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05);
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        .mega-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .mega-category {
          padding: 0;
        }
        
        .mega-cat-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 8px;
        }
        
        .mega-cat-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(74,164,97,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .mega-cat-title {
          font-size: 13px;
          font-weight: 800;
          color: var(--dark);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .mega-cat-items {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .mega-item {
          display: block;
          padding: 8px 10px;
          font-size: 13px;
          font-weight: 500;
          color: #4b5563;
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }
        .mega-item:hover {
          background: rgba(74,164,97,0.08);
          color: var(--green);
        }
        
        .mega-footer {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mega-footer span {
          font-size: 13px;
          color: var(--muted);
        }
        .mega-footer a {
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .mega-footer a:hover {
          opacity: 0.8;
        }

        .mobile-btn { display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 6px; cursor: pointer; }
        .mobile-menu { background: #fff; border-top: 1px solid var(--border); padding: 12px 20px 20px; max-height: 70vh; overflow-y: auto; }
        .mobile-link { display: flex; align-items: center; padding: 11px 0; font-size: 14px; font-weight: 600; color: #374151; text-decoration: none; border-bottom: 1px solid var(--border); transition: color 0.15s; width: 100%; background: none; border-top: none; border-left: none; border-right: none; }
        .mobile-link:hover { color: var(--green); }
        .mobile-link--btn { cursor: pointer; }
        
        /* Mobile Services Section */
        .mobile-services-section {
          padding: 12px 0 12px 8px;
          background: #f9fafb;
          margin: 0 -20px;
          padding-left: 28px;
          padding-right: 20px;
        }
        .mobile-section-title {
          font-size: 10px;
          font-weight: 800;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }
        .mobile-cat {
          margin-bottom: 16px;
        }
        .mobile-cat:last-child {
          margin-bottom: 0;
        }
        .mobile-cat-title {
          font-size: 12px;
          font-weight: 700;
          color: var(--green);
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .mobile-sub-link {
          display: block;
          padding: 8px 0 8px 12px;
          font-size: 13px;
          font-weight: 500;
          color: #4b5563;
          text-decoration: none;
          border-left: 2px solid var(--border);
          margin-left: 4px;
          transition: color 0.15s, border-color 0.15s;
        }
        .mobile-sub-link:hover {
          color: var(--green);
          border-color: var(--green);
        }
        
        .mobile-lang { display: flex; gap: 8px; margin-top: 14px; }
        .mobile-lang-btn { border: 1.5px solid var(--border); background: none; border-radius: 8px; padding: 6px 16px; font-size: 13px; font-weight: 700; color: #374151; cursor: pointer; transition: all 0.15s; }
        .mobile-lang-btn--active { background: var(--green); border-color: var(--green); color: #fff; }

        @media (max-width: 900px) {
          .desktop-nav  { display: none !important; }
          .mobile-btn   { display: flex !important; }
          .topbar-hide-sm { display: none !important; }
          .topbar-hide-md { display: none !important; }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .topbar-hide-md { display: none !important; }
          .mega-dropdown { width: 560px; }
          .mega-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </header>
  );
}
