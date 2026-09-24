"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useLang } from "@/lib/i18n";

interface JobListing {
  id: number;
  jobTitle: string;
  qualifications: string;
  yearsExperience: string;
  location: string;
  jobType: string;
  description: string;
  formLink: string;
  status: string;
}

// Fallback jobs if sheet is empty or fails
const fallbackJobs: JobListing[] = [
  {
    id: 1,
    jobTitle: "Insurance Sales Representative",
    qualifications: "LLQP License preferred, excellent communication skills",
    yearsExperience: "1-3 years",
    location: "Montreal, QC",
    jobType: "Full-time",
    description: "Join our team to help families protect their future with life insurance solutions.",
    formLink: "",
    status: "active",
  },
];

// Skeleton loader component for job cards
function JobCardSkeleton() {
  return (
    <div className="job-card job-card--skeleton">
      <div className="job-card-top">
        <div className="skeleton skeleton-icon"></div>
        <div className="skeleton skeleton-badge"></div>
      </div>
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-tag"></div>
      <div className="job-meta">
        <div className="skeleton skeleton-meta"></div>
        <div className="skeleton skeleton-meta"></div>
      </div>
      <div className="skeleton skeleton-desc"></div>
      <div className="skeleton skeleton-desc short"></div>
      <div className="job-qualifications skeleton-qual">
        <div className="skeleton skeleton-qual-header"></div>
        <div className="skeleton skeleton-qual-text"></div>
      </div>
      <div className="job-card-footer">
        <div className="skeleton skeleton-btn"></div>
      </div>
    </div>
  );
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const { t } = useLang();

  useEffect(() => {
    // Fetch jobs from Google Sheet
    fetch("https://script.google.com/macros/s/AKfycbwzoJbeZvpRY3_pVNgjgDuLqBSsJ9GVuu5MdVTvtne2vIpVyX8YBPWFg23aQ0mhKPFqkg/exec?action=getJobs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setJobs(data.data);
        } else {
          setJobs(fallbackJobs);
        }
        setLoading(false);
      })
      .catch(() => {
        setJobs(fallbackJobs);
        setLoading(false);
      });
  }, []);

  const activeJobs = jobs.filter(
    (job) => job.status && (job.status.toLowerCase() === "active" || job.status.toLowerCase() === "closed")
  );

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="careers-hero">
          <div className="careers-hero-bg"></div>
          <div className="container careers-hero-content">
            <Breadcrumb crumbs={[{ label: t.home, href: "/" }, { label: t.joinTeam }]} />
            <div className="careers-hero-text">
              <h1>{t.careersHeroTitle}</h1>
              <p>{t.careersHeroSub}</p>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="careers-section">
          <div className="container">
            {/* Open Positions - Now at top */}
            <div className="jobs-section">
              <h2>{t.careersOpenPositions}</h2>
              
              {loading ? (
                <div className="jobs-grid">
                  <JobCardSkeleton />
                  <JobCardSkeleton />
                  <JobCardSkeleton />
                </div>
              ) : activeJobs.length === 0 ? (
                <div className="no-jobs">
                  <div className="no-jobs-icon">📋</div>
                  <h3>{t.careersNoJobs}</h3>
                  <p>{t.careersNoJobsDesc} <a href="mailto:careers@quotes-lifeinsurance.com">careers@quotes-lifeinsurance.com</a></p>
                </div>
              ) : (
                <div className="jobs-grid">
                  {activeJobs.map((job) => (
                    <div key={job.id} className={`job-card ${job.status.toLowerCase() === "closed" ? "job-card--closed" : ""}`}>
                      {/* Card Header with Icon */}
                      <div className="job-card-top">
                        <div className="job-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                          </svg>
                        </div>
                        <div className="job-badges">
                          {job.status.toLowerCase() === "closed" ? (
                            <span className="job-status job-status--closed">{t.careersClosed}</span>
                          ) : (
                            <span className="job-status job-status--open">{t.careersHiring}</span>
                          )}
                        </div>
                      </div>

                      {/* Job Title & Type */}
                      <h3 className="job-title">{job.jobTitle}</h3>
                      <span className="job-type-tag">{job.jobType || "Full-time"}</span>
                      
                      {/* Meta Info */}
                      <div className="job-meta">
                        {job.location && (
                          <div className="job-meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                              <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span>{job.location}</span>
                          </div>
                        )}
                        {job.yearsExperience && (
                          <div className="job-meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 20v-6M6 20V10M18 20v-4"/>
                            </svg>
                            <span>{job.yearsExperience}</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      {job.description && (
                        <p className="job-description">{job.description}</p>
                      )}

                      {/* Qualifications */}
                      <div className="job-qualifications">
                        <div className="job-qual-header">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                          </svg>
                          <strong>{t.careersRequirements}</strong>
                        </div>
                        <p>{job.qualifications}</p>
                      </div>

                      {/* Apply Button */}
                      <div className="job-card-footer">
                        {job.status.toLowerCase() === "closed" ? (
                          <button className="apply-btn apply-btn--disabled" disabled>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/>
                              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                            </svg>
                            {t.careersPositionClosed}
                          </button>
                        ) : (
                          <button 
                            className="apply-btn"
                            onClick={() => {
                              if (job.formLink) {
                                setSelectedJob(job);
                              } else {
                                window.location.href = "mailto:careers@quotes-lifeinsurance.com?subject=Application: " + job.jobTitle;
                              }
                            }}
                          >
                            {t.careersApplyNow}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Why Join Us - Now below Open Positions */}
            <div className="benefits-section">
              <h2>{t.careersWhyTitle}</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                  <h4>{t.careersBenefit1Title}</h4>
                  <p>{t.careersBenefit1Desc}</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                  </div>
                  <h4>{t.careersBenefit2Title}</h4>
                  <p>{t.careersBenefit2Desc}</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <h4>{t.careersBenefit3Title}</h4>
                  <p>{t.careersBenefit3Desc}</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="18" y1="20" x2="18" y2="10"/>
                      <line x1="12" y1="20" x2="12" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  </div>
                  <h4>{t.careersBenefit4Title}</h4>
                  <p>{t.careersBenefit4Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Modal with Google Form */}
        {selectedJob && (
          <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedJob(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
              <div className="modal-header">
                <h2>{t.careersApplyNow} - {selectedJob.jobTitle}</h2>
                <p>{t.contactFormMessage}</p>
              </div>
              <div className="modal-body">
                <iframe
                  src={selectedJob.formLink}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title={`Application form for ${selectedJob.jobTitle}`}
                >
                  Loading form...
                </iframe>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />

      <style>{`
        .careers-hero {
          position: relative;
          padding: 80px 0 100px;
          text-align: center;
          overflow: hidden;
        }
        .careers-hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(15, 22, 35, 0.88) 0%, rgba(74, 164, 97, 0.75) 100%),
                      url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80') center/cover no-repeat;
          z-index: 0;
        }
        .careers-hero-content {
          position: relative;
          z-index: 1;
        }
        .careers-hero-text {
          max-width: 600px;
          margin: 0 auto;
        }
        .careers-hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 900;
          color: #fff;
          margin-bottom: 16px;
          line-height: 1.1;
        }
        .careers-hero p {
          font-size: 17px;
          color: rgba(255,255,255,0.75);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .careers-section {
          padding: 60px 0 80px;
          background: #f8f9fb;
        }

        /* Benefits */
        .benefits-section {
          margin-top: 60px;
        }
        .benefits-section h2 {
          font-size: 28px;
          font-weight: 800;
          color: var(--dark);
          text-align: center;
          margin-bottom: 32px;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .benefit-card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border: 1px solid var(--border);
        }
        .benefit-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(74,164,97,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .benefit-card h4 {
          font-size: 15px;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 8px;
        }
        .benefit-card p {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.5;
        }

        /* Jobs */
        .jobs-section h2 {
          font-size: 28px;
          font-weight: 800;
          color: var(--dark);
          text-align: center;
          margin-bottom: 32px;
        }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 28px;
        }

        .job-card {
          background: #fff;
          border-radius: 20px;
          padding: 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border: 1px solid var(--border);
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .job-card:hover {
          box-shadow: 0 12px 40px rgba(74,164,97,0.15);
          transform: translateY(-6px);
          border-color: rgba(74,164,97,0.3);
        }
        .job-card--closed {
          opacity: 0.75;
        }
        .job-card--closed:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.08);
        }

        /* Card Top Section */
        .job-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 24px 0;
        }
        .job-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--green) 0%, #3a9d5c 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(74,164,97,0.3);
        }
        .job-badges {
          display: flex;
          gap: 8px;
        }
        .job-status {
          padding: 6px 14px;
          font-size: 11px;
          font-weight: 800;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .job-status--open {
          background: linear-gradient(135deg, rgba(74,164,97,0.15) 0%, rgba(74,164,97,0.08) 100%);
          color: var(--green);
          border: 1px solid rgba(74,164,97,0.2);
        }
        .job-status--closed {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        /* Job Title */
        .job-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--dark);
          margin: 20px 24px 8px;
          line-height: 1.3;
        }

        /* Job Type Tag */
        .job-type-tag {
          display: inline-block;
          margin: 0 24px 16px;
          padding: 5px 12px;
          background: #f0f4f8;
          color: #64748b;
          font-size: 12px;
          font-weight: 600;
          border-radius: 6px;
        }

        /* Meta Info */
        .job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          padding: 0 24px;
          margin-bottom: 16px;
        }
        .job-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--muted);
        }
        .job-meta-item svg {
          color: var(--green);
          opacity: 0.8;
        }

        /* Description */
        .job-description {
          font-size: 14px;
          color: #64748b;
          line-height: 1.65;
          padding: 0 24px;
          margin-bottom: 16px;
        }

        /* Qualifications */
        .job-qualifications {
          background: linear-gradient(135deg, #f8faf9 0%, #f1f5f3 100%);
          border-radius: 12px;
          padding: 16px 18px;
          margin: 0 24px 20px;
          border: 1px solid rgba(74,164,97,0.1);
        }
        .job-qual-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .job-qual-header svg {
          color: var(--green);
        }
        .job-qual-header strong {
          font-size: 12px;
          color: var(--dark);
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }
        .job-qualifications p {
          font-size: 13px;
          color: #4b5563;
          margin: 0;
          line-height: 1.55;
        }

        /* Card Footer */
        .job-card-footer {
          margin-top: auto;
          padding: 20px 24px 24px;
          background: linear-gradient(180deg, transparent 0%, rgba(248,250,252,0.8) 100%);
        }

        .apply-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 24px;
          background: linear-gradient(135deg, var(--green) 0%, #3a9d5c 100%);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 4px 14px rgba(74,164,97,0.25);
        }
        .apply-btn:hover {
          background: linear-gradient(135deg, var(--green-dark) 0%, #2d8049 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(74,164,97,0.35);
        }
        .apply-btn svg {
          transition: transform 0.2s;
        }
        .apply-btn:hover svg {
          transform: translateX(3px);
        }

        .apply-btn--disabled {
          background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
          cursor: not-allowed;
          box-shadow: none;
        }
        .apply-btn--disabled:hover {
          background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
          transform: none;
          box-shadow: none;
        }
        .apply-btn--disabled:hover svg {
          transform: none;
        }

        /* No Jobs */
        .no-jobs {
          text-align: center;
          padding: 60px 20px;
          background: #fff;
          border-radius: 16px;
          border: 1px solid var(--border);
        }
        .no-jobs-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .no-jobs h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 12px;
        }
        .no-jobs p {
          font-size: 14px;
          color: var(--muted);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .no-jobs a {
          color: var(--green);
          font-weight: 600;
        }

        /* Loading */
        .loading-wrap {
          display: flex;
          justify-content: center;
          padding: 60px 0;
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

        /* Skeleton Loader */
        .job-card--skeleton {
          pointer-events: none;
        }
        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .skeleton-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
        }
        .skeleton-badge {
          width: 70px;
          height: 28px;
          border-radius: 20px;
        }
        .skeleton-title {
          height: 24px;
          width: 75%;
          margin: 20px 24px 12px;
        }
        .skeleton-tag {
          height: 28px;
          width: 90px;
          margin: 0 24px 16px;
          border-radius: 6px;
        }
        .skeleton-meta {
          height: 18px;
          width: 100px;
        }
        .skeleton-desc {
          height: 14px;
          width: 90%;
          margin: 0 24px 8px;
        }
        .skeleton-desc.short {
          width: 60%;
          margin-bottom: 16px;
        }
        .skeleton-qual {
          background: #f5f5f5;
          padding: 16px 18px;
        }
        .skeleton-qual-header {
          height: 16px;
          width: 120px;
          margin-bottom: 12px;
        }
        .skeleton-qual-text {
          height: 14px;
          width: 80%;
        }
        .skeleton-btn {
          height: 50px;
          width: 100%;
          border-radius: 12px;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          width: 100%;
          max-width: 700px;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f3f4f6;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }
        .modal-close:hover {
          background: #e5e7eb;
        }

        .modal-header {
          padding: 28px 28px 20px;
          border-bottom: 1px solid var(--border);
        }
        .modal-header h2 {
          font-size: 22px;
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 6px;
          padding-right: 40px;
        }
        .modal-header p {
          font-size: 14px;
          color: var(--muted);
        }

        .modal-body {
          padding: 0;
          overflow-y: auto;
          max-height: calc(90vh - 120px);
        }
        .modal-body iframe {
          display: block;
          border: none;
          min-height: 600px;
        }

        @media (max-width: 900px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .jobs-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          .job-card-top {
            flex-direction: row;
          }
          .job-title {
            font-size: 18px;
            margin: 16px 20px 8px;
          }
          .job-type-tag {
            margin: 0 20px 14px;
          }
          .job-meta {
            padding: 0 20px;
          }
          .job-description {
            padding: 0 20px;
          }
          .job-qualifications {
            margin: 0 20px 16px;
          }
          .job-card-footer {
            padding: 16px 20px 20px;
          }
          .job-card-top {
            padding: 20px 20px 0;
          }
          .job-icon {
            width: 46px;
            height: 46px;
            border-radius: 12px;
          }
          .modal-content {
            max-height: 95vh;
          }
          .modal-body {
            max-height: calc(95vh - 100px);
          }
        }
      `}</style>
    </>
  );
}
