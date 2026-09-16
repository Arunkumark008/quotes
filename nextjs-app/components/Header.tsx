"use client";
import QuoteButton from "@/components/QuoteButton";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useLang, Lang } from "@/lib/i18n";
import ColorSwitcher from "@/components/ColorSwitcher";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen]  = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isPurple, setIsPurple] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Check color on mount and listen for changes */
  useEffect(() => {
    const checkColor = () => {
      const saved = localStorage.getItem("brand-color");
      setIsPurple(saved === "#572a4e");
    };
    checkColor();
    
    // Listen for storage changes (when color switcher updates)
    window.addEventListener("storage", checkColor);
    
    // Also poll for changes (for same-tab updates)
    const interval = setInterval(checkColor, 100);
    
    return () => {
      window.removeEventListener("storage", checkColor);
      clearInterval(interval);
    };
  }, []);

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

  /* Simplified services — only 3 main ones in the dropdown */
  const serviceItems = [
    { label: t.termLife,   href: "/services/term-life"   },
    { label: t.wholeLife,  href: "/services/whole-life"  },
    { label: t.disability, href: "/services/disability"  },
  ];

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>

      {/* ── Topbar ────────────────────────────────── */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href="tel:+15146620403" className="topbar-link topbar-link--bold">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              514-662-0403
            </a>
            <a href="mailto:info@quotes-lifeinsurance.com" className="topbar-link topbar-hide-sm">
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
            <ColorSwitcher />
            <span className="topbar-divider" />
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
              className={isPurple ? "logo-purple" : ""}
              style={{ height: "52px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop nav — clean & minimal */}
          <div className="desktop-nav">
            <Link href="/" className="nav-link">{t.home}</Link>

            {/* Services dropdown — click to toggle */}
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
                <div className="dropdown-panel">
                  {serviceItems.map((s) => (
                    <Link key={s.href} href={s.href} className="dropdown-item" onClick={() => setServicesOpen(false)}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about"   className="nav-link">{t.about}</Link>
            <Link href="/blog"    className="nav-link">{t.blog}</Link>
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
            {[
              { label: t.home,      href: "/" },
              { label: t.termLife,  href: "/services/term-life" },
              { label: t.wholeLife, href: "/services/whole-life" },
              { label: t.disability,href: "/services/disability" },
              { label: t.about,     href: "/about" },
              { label: t.blog,      href: "/blog" },
              { label: t.contact,   href: "/contact" },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                onClick={() => setMobileOpen(false)} className="mobile-link">
                {item.label}
              </Link>
            ))}
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
        .dropdown-panel {
          position: absolute; top: calc(100% + 6px); left: 50%;
          transform: translateX(-50%); z-index: 200; min-width: 220px;
          background: #fff; border-radius: 14px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06);
          padding: 6px;
        }
        .dropdown-item {
          display: block; padding: 10px 14px; font-size: 13px; font-weight: 600;
          color: #374151; text-decoration: none; border-radius: 10px;
          transition: background 0.15s, color 0.15s;
        }
        .dropdown-item:hover { background: rgba(74,164,97,0.08); color: var(--green); }

        .mobile-btn { display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 6px; cursor: pointer; }
        .mobile-menu { background: #fff; border-top: 1px solid var(--border); padding: 12px 20px 20px; }
        .mobile-link { display: block; padding: 11px 0; font-size: 14px; font-weight: 600; color: #374151; text-decoration: none; border-bottom: 1px solid var(--border); transition: color 0.15s; }
        .mobile-link:hover { color: var(--green); }
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
        }
      `}</style>
    </header>
  );
}
