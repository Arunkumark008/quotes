import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { getPostBySlug, getAllPosts } from "@/lib/blogger";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import QuoteButton from "@/components/QuoteButton";

// Allow rendering any slug dynamically (not just pre-built ones)
export const dynamicParams = true;
export const revalidate = 3600;

// ── Static params — pre-build all blog post routes ────────────────────────────
export async function generateStaticParams() {
  const posts = await getAllPosts(50);
  return posts.map((p) => ({ slug: p.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Quotes Life Insurance Blog`,
    description: post.excerpt,
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <div style={{ background: "var(--dark)", padding: "56px 0 40px" }}>
          <div className="container">
            {/* Breadcrumb with back button */}
            <div style={{ marginBottom: "20px" }}>
              <Breadcrumb crumbs={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title.slice(0, 40) + (post.title.length > 40 ? "…" : "") },
              ]} />
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
              <span style={{
                fontSize: "11px", fontWeight: 700, background: "rgba(74,164,97,0.2)",
                color: "var(--green)", padding: "4px 12px", borderRadius: "20px",
              }}>
                {post.category}
              </span>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                {post.date}
              </span>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                By {post.author}
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
              fontWeight: 900, color: "#fff",
              fontFamily: "var(--font-sora), sans-serif",
              letterSpacing: "-0.02em", lineHeight: 1.2,
              maxWidth: "720px",
            }}>
              {post.title}
            </h1>
          </div>
        </div>

        {/* Main content */}
        <section style={{ padding: "56px 0 80px", background: "#fff" }}>
          <div className="container">
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 340px", gap: "56px",
            }}
              className="post-layout"
            >

              {/* ── Article body ─────────────────── */}
              <article>
                {/* Featured image */}
                {post.thumb && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.thumb} alt={post.title}
                    style={{
                      width: "100%", maxHeight: "420px",
                      objectFit: "cover", borderRadius: "16px",
                      marginBottom: "36px",
                    }}
                  />
                )}

                {/* Content from Blogger — suppressHydrationWarning prevents mismatch from browser extensions */}
                <div
                  className="blog-content"
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Back link */}
                <div style={{
                  marginTop: "48px", paddingTop: "24px",
                  borderTop: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  flexWrap: "wrap", gap: "12px",
                }}>
                  <Link href="/blog" style={{
                    fontSize: "14px", fontWeight: 600, color: "var(--green)",
                    textDecoration: "none",
                  }}>
                    ← Back to all articles
                  </Link>
                  <a href={post.link} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "12px", color: "var(--muted)", textDecoration: "none" }}>
                    View original on Blogger ↗
                  </a>
                </div>
              </article>

              {/* ── Sidebar ──────────────────────── */}
              <aside style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                {/* Get quote CTA */}
                <div style={{
                  background: "var(--plum)", borderRadius: "20px",
                  padding: "28px 24px", textAlign: "center",
                }}>
                  <p style={{
                    fontSize: "10px", fontWeight: 800, letterSpacing: "2px",
                    textTransform: "uppercase", color: "rgba(255,255,255,0.6)",
                    marginBottom: "8px",
                  }}>
                    Free — No Obligation
                  </p>
                  <h3 style={{
                    fontSize: "18px", fontWeight: 800, color: "#fff",
                    marginBottom: "10px", lineHeight: 1.3,
                  }}>
                    Get Your Free Life Insurance Quote
                  </h3>
                  <p style={{
                    fontSize: "13px", color: "rgba(255,255,255,0.65)",
                    marginBottom: "20px", lineHeight: 1.6,
                  }}>
                    Compare 20+ top Canadian carriers in minutes. Always free.
                  </p>
                  <QuoteButton
                    label="Get My Free Quote →"
                    style={{
                      width: "100%", justifyContent: "center",
                      background: "#fff", color: "var(--plum)", border: "none",
                    }}
                  />
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "10px" }}>
                    AMF Licensed · Lic. #179631
                  </p>
                </div>

                {/* Services links */}
                <div style={{
                  background: "var(--bg-soft)", borderRadius: "16px",
                  padding: "20px", border: "1px solid var(--border)",
                }}>
                  <p style={{
                    fontSize: "11px", fontWeight: 800, color: "var(--muted)",
                    textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px",
                  }}>
                    Our Services
                  </p>
                  {[
                    { label: "Term Life Insurance",       href: "/services/term-life" },
                    { label: "Whole Life Insurance",      href: "/services/whole-life" },
                    { label: "Universal Life Insurance",  href: "/services/universal-life" },
                    { label: "Critical Illness Coverage", href: "/services/critical-illness" },
                    { label: "Disability Insurance",      href: "/services/disability" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} style={{
                      display: "block", padding: "9px 0",
                      fontSize: "13px", fontWeight: 600,
                      color: "var(--body)", textDecoration: "none",
                      borderBottom: "1px solid var(--border)",
                      transition: "color 0.15s",
                    }}
                      className="footer-link"
                    >
                      {s.label} →
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .post-layout { grid-template-columns: 1fr 340px; }
        @media (max-width: 900px) { .post-layout { grid-template-columns: 1fr !important; } }

        /* Blogger content styles — proper readable typography */
        .blog-content {
          font-size: 16px;
          line-height: 1.9;
          color: #374151;
          max-width: 720px;
        }
        .blog-content h1, .blog-content h2, .blog-content h3,
        .blog-content h4, .blog-content h5 {
          color: var(--dark);
          font-weight: 700;
          margin: 40px 0 16px;
          line-height: 1.3;
          font-family: var(--font-sora), sans-serif;
        }
        .blog-content h1 { font-size: 1.9rem; }
        .blog-content h2 { font-size: 1.5rem; }
        .blog-content h3 { font-size: 1.2rem; }
        .blog-content h4 { font-size: 1rem; }
        .blog-content p  {
          margin-bottom: 22px;
          color: #374151;
        }
        .blog-content b, .blog-content strong {
          font-weight: 700;
          color: var(--dark);
        }
        .blog-content i, .blog-content em {
          font-style: italic;
          color: #4b5563;
        }
        .blog-content b i, .blog-content strong em {
          font-weight: 700;
          font-style: normal;
          color: #374151;
        }
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 28px auto;
          display: block;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .blog-content a {
          color: var(--green);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .blog-content ul, .blog-content ol {
          padding-left: 28px;
          margin: 0 0 22px;
        }
        .blog-content li {
          margin-bottom: 10px;
          line-height: 1.75;
        }
        .blog-content blockquote {
          border-left: 4px solid var(--green);
          padding: 16px 24px;
          margin: 28px 0;
          background: var(--bg-soft);
          border-radius: 0 12px 12px 0;
          font-style: italic;
          color: #4b5563;
        }
        /* Blogger separator divs — center images */
        .blog-content .separator {
          text-align: center;
          margin: 24px 0;
        }
        .blog-content .separator img {
          margin: 0 auto;
        }
        /* Remove inline width constraints from Blogger images */
        .blog-content img[width] {
          width: 100% !important;
          max-width: 600px !important;
        }
        /* Hashtag lines at end of posts — style subtly */
        .blog-content div:last-child i {
          color: #9ca3af;
          font-size: 13px;
        }
      `}</style>
    </>
  );
}
