import Link from "next/link";
import { getAllPosts } from "@/lib/blogger";

export default async function BlogSection() {
  const posts = await getAllPosts(6);

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="section-label">News &amp; Articles</span>
          <h2 style={{
            fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)",
            fontWeight: 800, marginTop: "8px", color: "var(--dark)",
          }}>
            Latest Tips &amp;{" "}
            <span style={{ color: "var(--green)" }}>News</span>
          </h2>
        </div>

        {posts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>Could not load articles right now.</p>
            <Link href="/articles" className="btn-outline">View Articles</Link>
          </div>
        ) : (
          <>
            {/* 3-col cards grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}>
              {posts.map((post) => (
                /* Internal link — opens in our site */
                <Link
                  key={post.slug}
                  href={`/articles/${post.slug}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <article style={{
                    borderRadius: "16px", overflow: "hidden",
                    border: "1px solid var(--border)", background: "#fff",
                    transition: "box-shadow 0.25s, transform 0.25s",
                    height: "100%",
                  }}
                    className="blog-card"
                  >
                    {/* Thumbnail */}
                    <div style={{
                      height: "200px", overflow: "hidden",
                      background: "var(--bg-soft)",
                    }}>
                      {post.thumb ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={post.thumb} alt={post.title}
                          loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "cover",
                            transition: "transform 0.4s" }}
                          className="blog-thumb"
                        />
                      ) : (
                        <div style={{
                          width: "100%", height: "100%",
                          display: "flex", alignItems: "center",
                          justifyContent: "center", fontSize: "48px",
                        }}>📰</div>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ padding: "18px 18px 22px" }}>
                      <div style={{
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between", marginBottom: "10px",
                      }}>
                        <span style={{
                          fontSize: "11px", fontWeight: 700,
                          background: "var(--bg-soft)", color: "var(--green)",
                          padding: "3px 10px", borderRadius: "20px",
                        }}>
                          {post.category}
                        </span>
                        <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                          {post.date}
                        </span>
                      </div>
                      <h3 style={{
                        fontSize: "15px", fontWeight: 700,
                        color: "var(--dark)", lineHeight: 1.4, marginBottom: "8px",
                      }}>
                        {post.title.length > 72 ? post.title.slice(0, 72) + "…" : post.title}
                      </h3>
                      <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--green)", marginTop: "12px" }}>
                        Read article →
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* View all — internal /articles page */}
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link href="/articles" className="btn-outline">
                View All Articles →
              </Link>
            </div>
          </>
        )}
      </div>

      <style>{`
        .blog-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.09) !important; transform: translateY(-4px) !important; }
        .blog-card:hover .blog-thumb { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
