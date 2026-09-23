"use client";
import { useState, useEffect, useCallback } from "react";

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
        <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={s <= rating ? "#fbbf24" : "#e5e7eb"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

// Avatar component
function Avatar({ name, avatarUrl, size = 48 }: { name: string; avatarUrl?: string; size?: number }) {
  const [imgError, setImgError] = useState(false);
  
  if (imgError || !avatarUrl) {
    return (
      <div 
        className="avatar-fallback"
        style={{ width: size, height: size, fontSize: size * 0.35 }}
      >
        {getInitials(name)}
      </div>
    );
  }
  
  return (
    <img 
      src={avatarUrl} 
      alt={name}
      className="avatar-img"
      style={{ width: size, height: size }}
      onError={() => setImgError(true)}
    />
  );
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const sheetUrl = "https://script.google.com/macros/s/AKfycbx3EDWt9H3mJEx1gIlKJtRVkE_SbkAn_od5LGnz4lM-wZ8DMSyHv02IK7FHQNXdxXTh/exec";
    
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

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

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
    <section 
      className="testimonials-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Header */}
        <div className="header">
          <span className="badge">Client Stories</span>
          <h2>What Our Clients Say</h2>
          <p>Real experiences from families we&apos;ve helped protect</p>
        </div>

        {/* Main Content */}
        <div className="content-grid">
          {/* Left: Featured Video/Quote */}
          <div className="featured">
            {/* Navigation Arrows */}
            {testimonials.length > 1 && (
              <div className="nav-arrows">
                <button className="nav-arrow nav-arrow--prev" onClick={goPrev} aria-label="Previous testimonial">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <button className="nav-arrow nav-arrow--next" onClick={goNext} aria-label="Next testimonial">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            )}

            <div className="featured-content" key={activeIndex}>
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
                <div className="featured-quote">
                  <svg className="quote-icon" viewBox="0 0 24 24" fill="var(--green)" opacity="0.15">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                  </svg>
                  <p className="quote-text">&ldquo;{current?.testimonial}&rdquo;</p>
                </div>
              )}
            </div>
            
            {/* Author info */}
            <div className="author-row">
              <Avatar name={current?.name || ""} avatarUrl={current?.avatarUrl} size={52} />
              <div className="author-info">
                <h4>{current?.name}</h4>
                <p>{current?.location}</p>
              </div>
              <div className="author-meta">
                <span className="service-tag">{current?.serviceType}</span>
                <Stars rating={current?.rating || 5} />
              </div>
            </div>

            {/* Pagination & Progress */}
            {testimonials.length > 1 && (
              <div className="pagination-bar">
                <span className="pagination-text">{activeIndex + 1} of {testimonials.length}</span>
                <div className="progress-dots">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`progress-dot ${idx === activeIndex ? "progress-dot--active" : ""}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`View testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="auto-play-indicator">
                  {isPaused ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--muted)">
                      <rect x="6" y="4" width="4" height="16"/>
                      <rect x="14" y="4" width="4" height="16"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green)">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right: Scrollable List */}
          <div className="testimonials-list">
            <div className="list-header">
              <h3>All Reviews</h3>
              <span className="review-count">{testimonials.length} reviews</span>
            </div>
            <div className="list-scroll">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  className={`list-card ${idx === activeIndex ? "list-card--active" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <Avatar name={t.name} avatarUrl={t.avatarUrl} size={44} />
                  <div className="list-card-content">
                    <div className="list-card-header">
                      <h5>{t.name}</h5>
                      {t.contentType === "video" && (
                        <span className="video-badge">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"/>
                          </svg>
                        </span>
                      )}
                    </div>
                    <span className="list-card-location">{t.location}</span>
                    <p className="list-card-preview">{t.testimonial.slice(0, 80)}...</p>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Scroll indicator */}
            {testimonials.length > 4 && (
              <div className="scroll-hint">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
                <span>Scroll for more</span>
              </div>
            )}
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
    grid-template-columns: 1.3fr 1fr;
    gap: 32px;
    align-items: start;
  }

  /* Featured Area */
  .featured {
    background: #fff;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
    border: 1px solid var(--border);
    position: relative;
  }

  /* Navigation Arrows */
  .nav-arrows {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    z-index: 10;
    padding: 0 8px;
  }
  .nav-arrow {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    pointer-events: auto;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    color: var(--dark);
  }
  .nav-arrow:hover {
    background: var(--green);
    color: #fff;
    border-color: var(--green);
    transform: scale(1.05);
  }
  .nav-arrow--prev {
    margin-left: -20px;
  }
  .nav-arrow--next {
    margin-right: -20px;
  }

  /* Featured Content with Animation */
  .featured-content {
    animation: fadeIn 0.4s ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
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

  .featured-quote {
    position: relative;
    padding: 40px 32px;
    min-height: 200px;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, rgba(74,164,97,0.03) 0%, rgba(74,164,97,0.08) 100%);
    border-radius: 14px;
  }
  .quote-icon {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 56px;
    height: 56px;
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
  
  .avatar-img {
    border-radius: 50%;
    object-fit: cover;
  }
  .avatar-fallback {
    border-radius: 50%;
    background: linear-gradient(135deg, var(--green), #2d8a4e);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    flex-shrink: 0;
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

  /* Pagination Bar */
  .pagination-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
  }
  .pagination-text {
    font-size: 13px;
    font-weight: 600;
    color: var(--muted);
  }
  .progress-dots {
    display: flex;
    gap: 6px;
  }
  .progress-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--border);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s;
  }
  .progress-dot:hover {
    background: #aaa;
  }
  .progress-dot--active {
    background: var(--green);
    width: 24px;
    border-radius: 4px;
  }
  .auto-play-indicator {
    display: flex;
    align-items: center;
    opacity: 0.6;
  }

  /* Testimonials List */
  .testimonials-list {
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
  }

  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
  }
  .list-header h3 {
    font-size: 16px;
    font-weight: 700;
    color: var(--dark);
    margin: 0;
  }
  .review-count {
    font-size: 12px;
    font-weight: 600;
    color: var(--green);
    background: rgba(74,164,97,0.1);
    padding: 4px 10px;
    border-radius: 12px;
  }

  .list-scroll {
    max-height: 380px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-right: 4px;
  }

  /* Custom scrollbar */
  .list-scroll::-webkit-scrollbar {
    width: 6px;
  }
  .list-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  .list-scroll::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
  .list-scroll::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }

  .list-card {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px;
    background: #f8f9fb;
    border: 2px solid transparent;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
    width: 100%;
  }
  .list-card:hover {
    background: #f0f4f2;
    border-color: rgba(74,164,97,0.3);
  }
  .list-card--active {
    background: rgba(74,164,97,0.08);
    border-color: var(--green);
  }

  .list-card-content {
    flex: 1;
    min-width: 0;
  }
  .list-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 2px;
  }
  .list-card-header h5 {
    font-size: 14px;
    font-weight: 700;
    color: var(--dark);
    margin: 0;
  }
  .video-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: var(--green);
    color: #fff;
    border-radius: 50%;
  }
  .list-card-location {
    font-size: 12px;
    color: var(--muted);
  }
  .list-card-preview {
    font-size: 13px;
    color: #6b7280;
    line-height: 1.5;
    margin: 6px 0 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .scroll-hint {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    font-size: 12px;
    color: var(--muted);
    border-top: 1px solid var(--border);
    margin-top: 8px;
  }
  .scroll-hint svg {
    animation: bounce 1.5s infinite;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(4px); }
  }

  /* Dots for mobile */
  .dots {
    display: none;
    justify-content: center;
    gap: 8px;
    margin-top: 32px;
    flex-wrap: wrap;
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
    .testimonials-list {
      display: none;
    }
    .dots {
      display: flex;
    }
    .featured-quote {
      padding: 24px 16px;
      min-height: auto;
    }
    .quote-text {
      font-size: 16px;
    }
    .quote-icon {
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
    .nav-arrows {
      display: none;
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
  }
`;
