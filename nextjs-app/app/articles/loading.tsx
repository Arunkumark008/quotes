import { BlogCardSkeleton } from "@/components/Skeleton";
import SkeletonStyles from "@/components/Skeleton";

export default function BlogLoading() {
  return (
    <>
      <SkeletonStyles />
      {/* Hero skeleton */}
      <div style={{ background: "var(--dark)", padding: "56px 0 48px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{
            width: "120px", height: "12px", borderRadius: "6px", margin: "0 auto 16px",
            background: "rgba(255,255,255,0.15)",
          }} />
          <div style={{
            width: "200px", height: "36px", borderRadius: "8px", margin: "0 auto 12px",
            background: "rgba(255,255,255,0.2)",
          }} />
          <div style={{
            width: "320px", height: "14px", borderRadius: "6px", margin: "0 auto",
            background: "rgba(255,255,255,0.1)",
          }} />
        </div>
      </div>

      {/* Cards skeleton grid */}
      <section style={{ padding: "64px 0", background: "#fff" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "28px",
          }}>
            {[1,2,3,4,5,6].map(i => <BlogCardSkeleton key={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
