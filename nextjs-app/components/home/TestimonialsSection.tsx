"use client";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  serviceType: string;
  contentType: "text" | "video";
  testimonial: string;
  videoUrl: string;
  rating: number;
  date: string;
  avatarUrl: string;
}

// Fallback testimonials
const fallbackTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Toronto, ON",
    serviceType: "Term Life",
    contentType: "text",
    testimonial: "Outstanding service! They took the time to explain every option and helped me find the perfect term life policy for my family. The process was smooth and I felt supported throughout.",
    videoUrl: "",
    rating: 5,
    date: "2024-02-15",
    avatarUrl: ""
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Vancouver, BC",
    serviceType: "Whole Life",
    contentType: "text",
    testimonial: "Very professional and knowledgeable team. They helped me understand the benefits of whole life insurance and found me a great rate. Highly recommend!",
    videoUrl: "",
    rating: 5,
    date: "2024-01-20",
    avatarUrl: ""
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Montreal, QC",
    serviceType: "Critical Illness",
    contentType: "text",
    testimonial: "I was looking for critical illness coverage and they made the whole process so easy. Great communication and follow-up. Thank you for protecting my family!",
    videoUrl: "",
    rating: 5,
    date: "2024-03-01",
    avatarUrl: ""
  },
];

// Extract YouTube video ID
function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const shortMatch = url.match(/youtu\.be\/([^?&\s]{11})/);
  if (shortMatch) return shortMatch[1];
  const longMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/);
  return longMatch ? longMatch[1] : null;
}

// Get initials from name
function getInitials(name: string): string {
  return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
}

// Star rating
function Stars({ rating }: { rating: number }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={s <= rating ? "#fbbf24" : "#e5e7eb"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sheetUrl = process.env.NEXT_PUBLIC_TESTIMONIALS_SHEET_URL;
    if (!sheetUrl) {
      setLoading(false);
      return;
    }
    fetch(sheetUrl)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data.length > 0) {
          setTestimonials(data.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials]);

  const current = testimonials[activeIndex];
  const youtubeId = current?.contentType === "video" ? getYouTubeId(current.videoUrl) : null;

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <div className="loading-wrap"><div className="spinner" /></div>
        </div>
        <style>{styles}</style>
      </section>
    );
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="header">
          <span className="badge">Client Stories</span>
          <h2>What Our Clients Say</h2>
          <p>Real experiences from families we've helped protect</p>
        </div>

        {/* Main Content */}
        <div className="content-grid">
          {/* Left: Video or Featured Card */}
          <div className="featured">
            {youtubeId ? (
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${current.name} testimonial`}
                />
              </div>
            ) : (
              <div className="featured-card">
                <svg className="quote-svg" viewBox="0 0 24 24" fill="var(--green)" opacity="0.1">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
                <p className="quote-text">"{current?.testimonial}"</p>
              </div>
            )}
            
            {/* Author info below video/card */}
            <div className="author-row">
              <div className="avatar">
                {current?.avatarUrl ? (
                  <img src={current.avatarUrl} alt={current.name} />
                ) : (
                  <span>{getInitials(current?.name || "")}</span>
                )}
              </div>
              <div className="author-info">
                <h4>{current?.name}</h4>
                <p>{current?.location}</p>
              </div>
              <div className="author-meta">
                <span className="service-tag">{current?.serviceType}</span>
                <Stars rating={current?.rating || 5} />
              </div>
            </div>
          </div>

          {/* Right: Testimonial Cards List */}
          <div className="cards-list">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                className={`card ${idx === activeIndex ? "card--active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="card-avatar">
                  {t.avatarUrl ? (
                    <img src={t.avatarUrl} alt={t.name} />
                  ) : (
                    <span>{getInitials(t.name)}</span>
                  )}
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h5>{t.name}</h5>
                    {t.contentType === "video" && (
                      <svg className="play-icon" width="16" height="16" viewBox="0 0 24 24" fill="var(--green)">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    )}
                  </div>
                  <p className="card-location">{t.location}</p>
                  <p className="card-preview">{t.testimonial.slice(0, 60)}...</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === activeIndex ? "dot--active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{styles}</style>
    </section>
  );
}

const styles = `
  .testimonials-section {
    padding: 80px 0;
    background: linear-gradient(180deg, #fff 0%, #f8faf9 100%);
  }

  .header {
    text-align: center;
    margin-bottom: 48px;
  }
  .badge {
    display: inline-block;
    padding: 6px 16px;
    background: rgba(74,164,97,0.1);
    color: var(--green);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 20px;
    margin-bottom: 16px;
  }
  .header h2 {
    font-size: clamp(28px, 5vw, 38px);
    font-weight: 800;
    color: var(--dark);
    margin-bottom: 12px;
  }
  .header p {
    font-size: 16px;
    color: var(--muted);
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 32px;
    align-items: start;
  }

  /* Featured Area */
  .featured {
    background: #fff;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    border-radius: 14px;
    overflow: hidden;
    background: #0f1623;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .featured-card {
    position: relative;
    padding: 32px;
    min-height: 240px;
    display: flex;
    align-items: center;
  }
  .quote-svg {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 64px;
    height: 64px;
  }
  .quote-text {
    font-size: 18px;
    line-height: 1.7;
    color: var(--dark);
    font-style: italic;
    position: relative;
    z-index: 1;
  }

  .author-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
    flex-wrap: wrap;
  }
  .avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--green), #2d8a4e);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    flex-shrink: 0;
    overflow: hidden;
  }
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .author-info {
    flex: 1;
    min-width: 120px;
  }
  .author-info h4 {
    font-size: 16px;
    font-weight: 700;
    color: var(--dark);
    margin-bottom: 2px;
  }
  .author-info p {
    font-size: 13px;
    color: var(--muted);
  }
  .author-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
  }
  .service-tag {
    padding: 4px 12px;
    background: rgba(74,164,97,0.1);
    color: var(--green);
    font-size: 11px;
    font-weight: 700;
    border-radius: 12px;
  }
  .stars {
    display: flex;
    gap: 2px;
  }

  /* Cards List */
  .cards-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .card {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 16px;
    background: #fff;
    border: 2px solid var(--border);
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
    width: 100%;
  }
  .card:hover {
    border-color: var(--green);
    box-shadow: 0 4px 16px rgba(74,164,97,0.1);
  }
  .card--active {
    border-color: var(--green);
    background: rgba(74,164,97,0.04);
  }
  .card-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--green), #2d8a4e);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    flex-shrink: 0;
    overflow: hidden;
  }
  .card-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card-content {
    flex: 1;
    min-width: 0;
  }
  .card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 2px;
  }
  .card-header h5 {
    font-size: 14px;
    font-weight: 700;
    color: var(--dark);
    margin: 0;
  }
  .play-icon {
    flex-shrink: 0;
  }
  .card-location {
    font-size: 12px;
    color: var(--muted);
    margin-bottom: 6px;
  }
  .card-preview {
    font-size: 13px;
    color: #6b7280;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Dots for mobile */
  .dots {
    display: none;
    justify-content: center;
    gap: 8px;
    margin-top: 32px;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--border);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.2s;
  }
  .dot:hover {
    background: #aaa;
  }
  .dot--active {
    background: var(--green);
    transform: scale(1.2);
  }

  /* Loading */
  .loading-wrap {
    display: flex;
    justify-content: center;
    padding: 80px 0;
  }
  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--border);
    border-top-color: var(--green);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Mobile */
  @media (max-width: 900px) {
    .content-grid {
      grid-template-columns: 1fr;
    }
    .cards-list {
      display: none;
    }
    .dots {
      display: flex;
    }
    .featured-card {
      padding: 24px 16px;
      min-height: auto;
    }
    .quote-text {
      font-size: 16px;
    }
    .quote-svg {
      width: 48px;
      height: 48px;
    }
    .author-meta {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
    }
  }

  @media (max-width: 480px) {
    .testimonials-section {
      padding: 60px 0;
    }
    .featured {
      padding: 16px;
    }
    .author-row {
      gap: 12px;
    }
    .avatar {
      width: 44px;
      height: 44px;
      font-size: 16px;
    }
  }
`;
