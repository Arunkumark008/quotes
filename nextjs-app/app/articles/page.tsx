import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { getAllPosts } from "@/lib/blogger";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Tips & News — Quotes Life Insurance Articles",
  description: "Expert life insurance tips, guides, and news from Quotes Life Insurance.",
};

export default async function ArticlesPage() {
  const posts = await getAllPosts(18);

  return (
    <>
      <Header />
      <main>

        {/* Hero with cover image */}
        <section className="blog-hero">
          <div className="blog-hero-overlay" />
          <div className="container blog-hero-content">
            {/* Breadcrumb */}
            <div style={{ marginBottom: "20px" }}>
              <Breadcrumb crumbs={[
                { label: "Home", href: "/" },
                { label: "Articles" },
              ]} />
            </div>
            <span style={{
              display: "inline-block", fontSize: "11px", fontWeight: 800,
              letterSpacing: "2px", textTransform: "uppercase",
              color: "var(--green)", marginBottom: "12px",
            }}>
              Insurance Tips &amp; News
            </span>
            <h1 style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 900, color: "#fff",
              fontFamily: "var(--font-sora), sans-serif", letterSpacing: "-0.02em",
            }}>
              Our Articles
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.65)", marginTop: "10px",
              fontSize: "15px", maxWidth: "480px",
            }}>
              Tips, guides and news to help you make smarter life insurance decisions.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section style={{ padding: "48px 0 64px", background: "#fff" }}>
          <div className="container">
            {posts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <p style={{ color: "var(--muted)", marginBottom: "16px" }}>No articles found.</p>
                <a href="https://artstarofficial.blogspot.com" target="_blank" rel="noopener"
                  className="btn-primary" style={{ display: "inline-flex" }}>
                  Visit Articles ↗
                </a>
              </div>
            ) : (
              <div className="blog-grid">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/articles/${post.slug}`}
                    style={{ textDecoration: "none", display: "block" }}>
                    <article className="blog-card" style={{
                      borderRadius: "16px", overflow: "hidden",
                      border: "1px solid var(--border)", background: "#fff",
                      height: "100%", transition: "box-shadow 0.25s, transform 0.25s",
                    }}>
                      {/* Thumbnail */}
                      <div style={{ height: "190px", overflow: "hidden", background: "var(--bg-soft)" }}>
                        {post.thumb ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={post.thumb} alt={post.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        ) : (
                          <div style={{
                            width: "100%", height: "100%",
                            display: "flex", alignItems: "center",
                            justifyContent: "center", fontSize: "42px",
                          }}>📰</div>
                        )}
                      </div>
                      {/* Content */}
                      <div style={{ padding: "16px 16px 20px" }}>
                        <div style={{
                          display: "flex", alignItems: "center",
                          justifyContent: "space-between", marginBottom: "8px",
                          flexWrap: "wrap", gap: "4px",
                        }}>
                          <span style={{
                            fontSize: "11px", fontWeight: 700,
                            background: "var(--bg-soft)", color: "var(--green)",
                            padding: "3px 10px", borderRadius: "20px",
                          }}>
                            {post.category}
                          </span>
                          <span style={{ fontSize: "11px", color: "var(--muted)" }}>{post.date}</span>
                        </div>
                        <h2 style={{
                          fontSize: "14px", fontWeight: 700, color: "var(--dark)",
                          lineHeight: 1.45, marginBottom: "8px",
                        }}>
                          {post.title.length > 70 ? post.title.slice(0, 70) + "…" : post.title}
                        </h2>
                        <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6 }}>
                          {post.excerpt.slice(0, 110)}…
                        </p>
                        <p style={{ marginTop: "10px", fontSize: "13px", fontWeight: 700, color: "var(--green)" }}>
                          Read more →
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* Blog Hero with cover image */
        .blog-hero {
          position: relative;
          background: linear-gradient(135deg, #1a3a1d 0%, #0f1623 100%);
          background-image: url('/cover-blog.jpg');
          background-size: cover;
          background-position: center;
          min-height: 320px;
          display: flex;
          align-items: flex-end;
          padding: 0 0 48px;
        }
        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,22,35,0.4) 0%, rgba(15,22,35,0.88) 70%, rgba(15,22,35,0.98) 100%);
        }
        .blog-hero-content {
          position: relative;
          z-index: 1;
        }
        
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .blog-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .blog-hero { min-height: 280px; padding-bottom: 36px; }
        }
        .blog-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.09) !important;
          transform: translateY(-3px) !important;
        }
      `}</style>
    </>
  );
}
