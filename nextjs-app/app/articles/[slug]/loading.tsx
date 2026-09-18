import { BlogPostSkeleton } from "@/components/Skeleton";
import SkeletonStyles from "@/components/Skeleton";

export default function BlogPostLoading() {
  return (
    <>
      <SkeletonStyles />
      {/* Header skeleton */}
      <div style={{ background: "var(--dark)", padding: "56px 0 40px" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            {[80,40,120].map((w,i) => (
              <div key={i} style={{
                width: w, height: "12px", borderRadius: "4px",
                background: "rgba(255,255,255,0.15)",
              }} />
            ))}
          </div>
          <div style={{ width: "80px", height: "22px", borderRadius: "20px", background: "rgba(255,255,255,0.15)", marginBottom: "16px" }} />
          <div style={{ width: "70%", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.2)", marginBottom: "10px" }} />
          <div style={{ width: "50%", height: "32px", borderRadius: "8px", background: "rgba(255,255,255,0.15)" }} />
        </div>
      </div>

      {/* Content skeleton */}
      <section style={{ padding: "56px 0", background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "56px" }} className="post-layout">
            <BlogPostSkeleton />
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ height: "220px", borderRadius: "20px", background: "#f0f0f0" }} />
              <div style={{ height: "280px", borderRadius: "16px", background: "#f0f0f0" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
