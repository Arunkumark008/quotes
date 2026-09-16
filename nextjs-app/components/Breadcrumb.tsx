"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const router = useRouter();

  return (
    <div className="bc-wrap">
      {/* Back button */}
      <button className="bc-back" onClick={() => router.back()} aria-label="Go back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12 19 5 12 12 5"/>
        </svg>
        Back
      </button>

      {/* Divider */}
      <span className="bc-divider" />

      {/* Trail */}
      <nav className="bc-trail" aria-label="Breadcrumb">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <span key={i} className="bc-item">
              {!isLast && c.href ? (
                <Link href={c.href} className="bc-link">{c.label}</Link>
              ) : (
                <span className="bc-current">{c.label}</span>
              )}
              {!isLast && <span className="bc-sep">›</span>}
            </span>
          );
        })}
      </nav>

      <style>{`
        .bc-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        /* Back button */
        .bc-back {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px;
          padding: 5px 12px 5px 9px;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
          font-family: inherit;
        }
        .bc-back:hover {
          background: rgba(255,255,255,0.14);
          color: #fff;
        }
        /* Divider */
        .bc-divider {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
        }
        /* Trail */
        .bc-trail {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }
        .bc-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .bc-link {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.15s;
        }
        .bc-link:hover { color: var(--green); }
        .bc-sep {
          font-size: 13px;
          color: rgba(255,255,255,0.2);
        }
        .bc-current {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
        }
      `}</style>
    </div>
  );
}
