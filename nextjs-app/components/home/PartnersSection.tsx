import Image from "next/image";
import Animate from "@/components/Animate";

const logos = [
  { file: "assumption.png",        name: "Assumption Life" },
  { file: "canada protection.png", name: "Canada Protection Plan" },
  { file: "desjardins.png",        name: "Desjardins" },
  { file: "edgebenefits.png",      name: "Edge Benefits" },
  { file: "empire life.png",       name: "Empire Life" },
  { file: "foresters.png",         name: "Foresters" },
  { file: "humania.png",           name: "Humania Assurance" },
  { file: "iafinancial.png",       name: "iA Financial" },
  { file: "ivari.png",             name: "Ivari" },
  { file: "manulife.png",          name: "Manulife" },
  { file: "uv insurance.png",      name: "UV Insurance" },
];

const allLogos = [...logos, ...logos, ...logos];

export default function PartnersSection() {
  return (
    <section className="section-padding-sm" style={{ background: "#fff", overflow: "hidden" }}>

      <div className="container" style={{ textAlign: "center", marginBottom: "40px" }}>
        <Animate>
          <span className="section-label">Our Carriers</span>
          <h2 style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 800, marginTop: "8px", color: "var(--dark)",
          }}>
            Insurance Companies We Represent
          </h2>
        </Animate>
      </div>

      {/* Marquee */}
      <div style={{
        overflow: "hidden",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}>
        <div className="marquee-track" style={{ gap: "16px" }}>
          {allLogos.map((logo, i) => (
            <div key={`${logo.name}-${i}`} style={{
              flexShrink: 0,
              width: "156px",
              height: "80px",
              padding: "14px 18px",
              borderRadius: "12px",
              background: "#fff",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}>
              <Image
                src={`/company/${logo.file}`}
                alt={logo.name}
                width={110}
                height={48}
                style={{ maxHeight: "48px", width: "auto", objectFit: "contain", opacity: 0.8 }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: "40px" }} />
    </section>
  );
}
