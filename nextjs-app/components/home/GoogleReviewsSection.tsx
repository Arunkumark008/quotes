"use client";
import { useState, useEffect, useRef } from "react";

interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface PlaceData {
  name: string;
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
  url?: string;
}

// Get initials from name
function getInitials(name: string): string {
  return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
}

// Avatar component with fallback
function ReviewerAvatar({ name, photoUrl }: { name: string; photoUrl: string }) {
  const [imgError, setImgError] = useState(false);
  
  if (imgError || !photoUrl) {
    return (
      <div className="gr-reviewer-avatar-fallback">
        {getInitials(name)}
      </div>
    );
  }
  
  return (
    <img 
      src={photoUrl} 
      alt={name}
      className="gr-reviewer-photo"
      onError={() => setImgError(true)}
      referrerPolicy="no-referrer"
    />
  );
}

// Fallback data (actual reviews from Google - KADS Enterprises Chennai)
const fallbackData: PlaceData = {
  name: "KADS Enterprises",
  rating: 4.9,
  totalReviews: 10,
  url: "https://www.google.com/maps/search/?api=1&query=KADS+Enterprises+Chennai",
  reviews: [
    {
      author_name: "Jeffrin Binu",
      author_url: "https://www.google.com/maps/contrib/111666124984551759565/reviews",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUw5laS30uNT3moIqJ34pB_XzkcM4y26uyedx7cjTOA2cckWikPeQ=s128-c0x00000000-cc-rp-mo-ba2",
      rating: 5,
      relative_time_description: "5 years ago",
      text: "Good",
      time: 0,
    },
    {
      author_name: "v. Vignesh",
      author_url: "https://www.google.com/maps/contrib/105256845171088494172/reviews",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVEw4lg66kWuxveHfSt6eoDRjRtMUCNCsuls-9Ts7Yjof9jokjIFA=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "4 years ago",
      text: "",
      time: 0,
    },
    {
      author_name: "Vishwa Karthi",
      author_url: "https://www.google.com/maps/contrib/110582462356116185749/reviews",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUQAeYh5rWYeBw09NDLcwCV1wYcTcC5dJJVwt5R820g93ewIgU=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "5 years ago",
      text: "",
      time: 0,
    },
    {
      author_name: "Aaron Akash",
      author_url: "https://www.google.com/maps/contrib/107694646345848315195/reviews",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVkeUXidvGr5XWQVWBcfIXfUPpiPL_U148e3zFQQidawfxYVluD=s128-c0x00000000-cc-rp-mo-ba2",
      rating: 5,
      relative_time_description: "5 years ago",
      text: "",
      time: 0,
    },
    {
      author_name: "AKASH S",
      author_url: "https://www.google.com/maps/contrib/111154956684016173543/reviews",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVE4jq-Jh578ba_1ZYOcg5N_azfqkj4kanRDKrcsdCfCa4FpuU0=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "5 years ago",
      text: "",
      time: 0,
    },
  ],
};

// Google "G" logo SVG
function GoogleLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.58-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

// Star rating
function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 24 24" fill={s <= rating ? "#fbbf24" : "#e5e7eb"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviewsSection() {
  const [placeData, setPlaceData] = useState<PlaceData>(fallbackData);
  const [loading, setLoading] = useState(true);
  const [googleMapsUrl, setGoogleMapsUrl] = useState(fallbackData.url || "https://www.google.com/maps/search/?api=1&query=KADS+Enterprises+Chennai");
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setPlaceData({
            name: data.data.name || fallbackData.name,
            rating: data.data.rating || fallbackData.rating,
            totalReviews: data.data.totalReviews || fallbackData.totalReviews,
            url: data.data.url || fallbackData.url,
            reviews: data.data.reviews?.length > 0 
              ? data.data.reviews.map((r: GoogleReview) => ({
                  author_name: r.author_name,
                  author_url: r.author_url || "#",
                  profile_photo_url: r.profile_photo_url,
                  rating: r.rating,
                  relative_time_description: r.relative_time_description,
                  text: r.text,
                  time: r.time,
                }))
              : fallbackData.reviews,
          });
          if (data.data.url) {
            setGoogleMapsUrl(data.data.url);
          }
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Duplicate reviews for infinite scroll effect
  const displayReviews = [...placeData.reviews, ...placeData.reviews];

  return (
    <section className="google-reviews-section">
      <div className="container">
        {/* Header with Google branding */}
        <div className="gr-header">
          <div className="gr-header-left">
            <div className="gr-google-badge">
              <GoogleLogo size={28} />
              <span>Google Reviews</span>
            </div>
            <div className="gr-rating-summary">
              <span className="gr-rating-number">{placeData.rating}</span>
              <div className="gr-rating-details">
                <Stars rating={Math.round(placeData.rating)} size={20} />
                <span className="gr-review-count">
                  Based on {placeData.totalReviews} review{placeData.totalReviews !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
          <a 
            href={googleMapsUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="gr-write-review-btn"
          >
            Write a Review
          </a>
        </div>

        {/* Carousel */}
        {loading ? (
          <div className="gr-loading">
            <div className="gr-spinner" />
          </div>
        ) : (
          <div 
            className="gr-carousel-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              ref={carouselRef}
              className={`gr-carousel-track ${isPaused ? "paused" : ""}`}
            >
              {displayReviews.map((review, idx) => (
                <a
                  key={idx}
                  href={review.author_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gr-review-card"
                >
                  <div className="gr-review-header">
                    <ReviewerAvatar name={review.author_name} photoUrl={review.profile_photo_url} />
                    <div className="gr-reviewer-info">
                      <h4 className="gr-reviewer-name">{review.author_name}</h4>
                      <span className="gr-review-time">{review.relative_time_description}</span>
                    </div>
                    <div className="gr-google-icon">
                      <GoogleLogo size={20} />
                    </div>
                  </div>
                  <Stars rating={review.rating} size={18} />
                  <p className="gr-review-text">
                    {review.text || "Gave us 5 stars on Google!"}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="gr-footer">
          <a 
            href={googleMapsUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="gr-see-all-btn"
          >
            See All Reviews on Google
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .google-reviews-section {
          padding: 80px 0;
          background: #f8faf9;
          overflow: hidden;
        }

        .gr-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 40px;
        }

        .gr-header-left {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .gr-google-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 700;
          color: var(--dark);
        }

        .gr-rating-summary {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .gr-rating-number {
          font-size: 42px;
          font-weight: 800;
          color: var(--dark);
          line-height: 1;
        }

        .gr-rating-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .gr-review-count {
          font-size: 13px;
          color: var(--muted);
        }

        .gr-write-review-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #fff;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          color: #4285F4;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .gr-write-review-btn:hover {
          border-color: #4285F4;
          background: rgba(66, 133, 244, 0.05);
        }

        .gr-loading {
          display: flex;
          justify-content: center;
          padding: 60px 0;
        }
        .gr-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #e5e7eb;
          border-top-color: #4285F4;
          border-radius: 50%;
          animation: gr-spin 0.8s linear infinite;
        }
        @keyframes gr-spin {
          to { transform: rotate(360deg); }
        }

        /* Carousel */
        .gr-carousel-wrapper {
          position: relative;
          width: 100vw;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }

        .gr-carousel-track {
          display: flex;
          gap: 20px;
          animation: gr-scroll 30s linear infinite;
          width: max-content;
          padding: 10px 0;
        }

        .gr-carousel-track.paused {
          animation-play-state: paused;
        }

        @keyframes gr-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .gr-review-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          text-decoration: none;
          transition: all 0.25s;
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 300px;
          max-width: 300px;
          flex-shrink: 0;
        }
        .gr-review-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-4px);
          border-color: #4285F4;
        }

        .gr-review-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gr-reviewer-photo {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
        }

        .gr-reviewer-avatar-fallback {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4285F4, #34A853);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }

        .gr-reviewer-info {
          flex: 1;
          min-width: 0;
        }

        .gr-reviewer-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--dark);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .gr-review-time {
          font-size: 12px;
          color: var(--muted);
        }

        .gr-google-icon {
          flex-shrink: 0;
        }

        .gr-review-text {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .gr-footer {
          text-align: center;
          margin-top: 32px;
        }

        .gr-see-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #4285F4;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .gr-see-all-btn:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .google-reviews-section {
            padding: 60px 0;
          }
          .gr-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .gr-rating-number {
            font-size: 36px;
          }
          .gr-review-card {
            min-width: 280px;
            max-width: 280px;
          }
        }

        @media (max-width: 500px) {
          .gr-header-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .gr-review-card {
            min-width: 260px;
            max-width: 260px;
          }
        }
      `}</style>
    </section>
  );
}
