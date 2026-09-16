"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, type Variants } from "framer-motion";
import { useModal } from "@/lib/modal";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] } },
});

const provinces = [
  { value: "", label: "Select Province" },
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "NT", label: "Northwest Territories" },
  { value: "NU", label: "Nunavut" },
  { value: "ON", label: "Ontario" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "QC", label: "Quebec" },
  { value: "SK", label: "Saskatchewan" },
  { value: "YT", label: "Yukon" },
];

const durations = [
  { value: "", label: "Select Term" },
  { value: "10", label: "10 Years" },
  { value: "15", label: "15 Years" },
  { value: "20", label: "20 Years" },
  { value: "25", label: "25 Years" },
  { value: "30", label: "30 Years" },
  { value: "whole", label: "Whole Life" },
];

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  return `$${(value / 1000).toFixed(0)}K`;
};

export default function QuoteCalculatorPage() {
  const { openModal } = useModal();
  
  const [coverage, setCoverage] = useState(250000);
  const [duration, setDuration] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [smoker, setSmoker] = useState("");
  const [province, setProvince] = useState("");
  const [showResult, setShowResult] = useState(false);

  const isFormValid = coverage && duration && dob && gender && smoker && province;

  const calculateEstimate = () => {
    if (!isFormValid) return null;
    
    // Basic estimation logic (for illustration purposes)
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    
    // Base rate per $1000 of coverage
    let baseRate = 0.15;
    
    // Age factor
    if (age < 30) baseRate *= 0.7;
    else if (age < 40) baseRate *= 1.0;
    else if (age < 50) baseRate *= 1.5;
    else if (age < 60) baseRate *= 2.2;
    else baseRate *= 3.5;
    
    // Gender factor
    if (gender === "male") baseRate *= 1.15;
    
    // Smoker factor
    if (smoker === "yes") baseRate *= 2.5;
    
    // Duration factor
    if (duration === "whole") baseRate *= 4;
    else if (parseInt(duration) >= 25) baseRate *= 1.3;
    else if (parseInt(duration) >= 20) baseRate *= 1.15;
    
    const monthlyEstimate = (coverage / 1000) * baseRate;
    
    return {
      low: Math.round(monthlyEstimate * 0.8),
      mid: Math.round(monthlyEstimate),
      high: Math.round(monthlyEstimate * 1.3),
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setShowResult(true);
    }
  };

  const estimate = calculateEstimate();

  return (
    <>
      <Header />
      <main>

        {/* ── Calculator Section ───────────────────────────────────── */}
        <section className="calc-section">
          <div className="container">

            {/* Page Header */}
            <motion.div
              className="calc-page-header"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="calc-nav-row">
                <Link href="/" className="calc-back-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5"/>
                    <polyline points="12 19 5 12 12 5"/>
                  </svg>
                  Back
                </Link>
                <div className="calc-breadcrumb">
                  <Link href="/">Home</Link>
                  <span className="calc-breadcrumb-sep">›</span>
                  <span>Quote Calculator</span>
                </div>
              </div>
              <h1 className="calc-page-title">
                Life Insurance <span>Quote Calculator</span>
              </h1>
              <p className="calc-page-desc">
                Get an instant estimate in seconds. No personal information required. Free, confidential, and no obligation.
              </p>
            </motion.div>

            <div className="calc-grid">
              
              {/* Form Card */}
              <motion.div
                className="calc-form-card"
                initial="hidden"
                animate="show"
                variants={fadeUp(0)}
              >
                <form onSubmit={handleSubmit}>
                  
                  {/* Coverage Amount Slider */}
                  <div className="calc-field">
                    <label className="calc-label">
                      Coverage Amount
                      <span className="calc-value">{formatCurrency(coverage)}</span>
                    </label>
                    <div className="calc-slider-wrap">
                      <input
                        type="range"
                        min={15000}
                        max={1500000}
                        step={5000}
                        value={coverage}
                        onChange={(e) => setCoverage(Number(e.target.value))}
                        className="calc-slider"
                      />
                      <div className="calc-slider-labels">
                        <span>$15K</span>
                        <span>$1.5M</span>
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="calc-field">
                    <label className="calc-label">Term Duration</label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="calc-select"
                    >
                      {durations.map((d) => (
                        <option key={d.value} value={d.value}>{d.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date of Birth */}
                  <div className="calc-field">
                    <label className="calc-label">Date of Birth</label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="calc-input"
                      max={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  {/* Gender & Tobacco in one row */}
                  <div className="calc-field-row">
                    {/* Gender */}
                    <div className="calc-field calc-field-half">
                      <label className="calc-label">Gender</label>
                      <div className="calc-radio-group-compact">
                        <label className={`calc-radio-compact ${gender === "male" ? "active" : ""}`}>
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                          />
                          Male
                        </label>
                        <label className={`calc-radio-compact ${gender === "female" ? "active" : ""}`}>
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                          />
                          Female
                        </label>
                      </div>
                    </div>

                    {/* Smoker */}
                    <div className="calc-field calc-field-half">
                      <label className="calc-label">Tobacco Use</label>
                      <div className="calc-radio-group-compact">
                        <label className={`calc-radio-compact ${smoker === "no" ? "active" : ""}`}>
                          <input
                            type="radio"
                            name="smoker"
                            value="no"
                            checked={smoker === "no"}
                            onChange={(e) => setSmoker(e.target.value)}
                          />
                          No
                        </label>
                        <label className={`calc-radio-compact ${smoker === "yes" ? "active" : ""}`}>
                          <input
                            type="radio"
                            name="smoker"
                            value="yes"
                            checked={smoker === "yes"}
                            onChange={(e) => setSmoker(e.target.value)}
                          />
                          Yes
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Province */}
                  <div className="calc-field">
                    <label className="calc-label">Province</label>
                    <select
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="calc-select"
                    >
                      {provinces.map((p) => (
                        <option key={p.value} value={p.value}>{p.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`calc-submit ${isFormValid ? "" : "disabled"}`}
                    disabled={!isFormValid}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2"/>
                      <line x1="8" y1="6" x2="16" y2="6"/>
                      <line x1="8" y1="10" x2="16" y2="10"/>
                      <line x1="8" y1="14" x2="12" y2="14"/>
                    </svg>
                    Calculate My Quote
                  </button>

                </form>
              </motion.div>

              {/* Result Card */}
              <motion.div
                className="calc-result-card"
                initial="hidden"
                animate="show"
                variants={fadeUp(0.1)}
              >
                {!showResult ? (
                  <div className="calc-result-empty">
                    <div className="calc-result-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <polyline points="9 12 11 14 15 10"/>
                      </svg>
                    </div>
                    <h3 className="calc-result-title">Your Estimate</h3>
                    <p className="calc-result-empty-text">
                      Fill out the form to get your personalized life insurance quote estimate.
                    </p>
                  </div>
                ) : (
                  <motion.div
                    className="calc-result-filled"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="calc-result-header">
                      <div className="calc-result-icon calc-result-icon--success">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <h3 className="calc-result-title">Your Estimated Quote</h3>
                      <p className="calc-result-subtitle">Based on your information</p>
                    </div>

                    <div className="calc-estimate-box">
                      <span className="calc-estimate-label">Monthly Premium</span>
                      <div className="calc-estimate-range">
                        <span className="calc-estimate-low">${estimate?.low}</span>
                        <span className="calc-estimate-sep">–</span>
                        <span className="calc-estimate-high">${estimate?.high}</span>
                      </div>
                      <span className="calc-estimate-avg">Average: ~${estimate?.mid}/month</span>
                    </div>

                    <div className="calc-summary">
                      <div className="calc-summary-row">
                        <span>Coverage</span>
                        <strong>{formatCurrency(coverage)}</strong>
                      </div>
                      <div className="calc-summary-row">
                        <span>Term</span>
                        <strong>{duration === "whole" ? "Whole Life" : `${duration} Years`}</strong>
                      </div>
                      <div className="calc-summary-row">
                        <span>Tobacco Use</span>
                        <strong>{smoker === "yes" ? "Yes" : "No"}</strong>
                      </div>
                    </div>

                    <div className="calc-result-actions">
                      <button onClick={openModal} className="calc-cta-primary">
                        Get Exact Quote →
                      </button>
                      <button
                        onClick={() => setShowResult(false)}
                        className="calc-cta-secondary"
                      >
                        Recalculate
                      </button>
                    </div>

                    <p className="calc-disclaimer">
                      * This is an estimate only. Actual premiums may vary based on health history, lifestyle, and underwriting. Speak with a licensed advisor for an accurate quote.
                    </p>
                  </motion.div>
                )}
              </motion.div>

            </div>

            {/* Info Cards */}
            <motion.div
              className="calc-info-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={fadeUp(0)} className="calc-info-card">
                <div className="calc-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4>100% Confidential</h4>
                <p>Your information is secure and never shared without your consent.</p>
              </motion.div>
              <motion.div variants={fadeUp(0.08)} className="calc-info-card">
                <div className="calc-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h4>No Cost to You</h4>
                <p>Our service is completely free. We're compensated by insurers, not you.</p>
              </motion.div>
              <motion.div variants={fadeUp(0.16)} className="calc-info-card">
                <div className="calc-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4>Licensed Advisors</h4>
                <p>Work with AMF-licensed professionals who prioritize your best interest.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* ── Calculator Section ── */
        .calc-section {
          padding: 32px 0 60px;
          background: #f8f9fa;
          min-height: calc(100vh - 80px);
        }

        /* ── Page Header ── */
        .calc-page-header {
          margin-bottom: 28px;
        }
        .calc-nav-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .calc-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          color: var(--dark);
          text-decoration: none;
          transition: all 0.2s;
        }
        .calc-back-btn:hover {
          border-color: var(--green);
          color: var(--green);
        }
        .calc-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--muted);
        }
        .calc-breadcrumb a {
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .calc-breadcrumb a:hover {
          color: var(--green);
        }
        .calc-breadcrumb-sep {
          color: var(--border);
        }
        .calc-page-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--dark);
          font-family: var(--font-sora), sans-serif;
          margin-bottom: 8px;
        }
        .calc-page-title span {
          color: var(--green);
        }
        .calc-page-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
          max-width: 500px;
        }

        .calc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }

        /* ── Form Card ── */
        .calc-form-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          border: 1px solid var(--border);
        }
        .calc-field {
          margin-bottom: 18px;
        }
        .calc-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .calc-field-half {
          margin-bottom: 18px;
        }
        .calc-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .calc-value {
          font-size: 15px;
          font-weight: 800;
          color: var(--green);
          text-transform: none;
          letter-spacing: 0;
        }

        /* Slider */
        .calc-slider-wrap { position: relative; }
        .calc-slider {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #e5e7eb;
          appearance: none;
          cursor: pointer;
        }
        .calc-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--green);
          border: 3px solid #fff;
          box-shadow: 0 2px 8px rgba(74,164,97,0.4);
          cursor: pointer;
          transition: transform 0.15s;
        }
        .calc-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .calc-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--green);
          border: 3px solid #fff;
          box-shadow: 0 2px 8px rgba(74,164,97,0.4);
          cursor: pointer;
        }
        .calc-slider-labels {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: var(--muted);
          margin-top: 4px;
        }

        /* Select & Input */
        .calc-select,
        .calc-input {
          width: 100%;
          padding: 12px 14px;
          font-size: 14px;
          font-weight: 500;
          color: var(--dark);
          background: var(--bg-soft);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .calc-select:focus,
        .calc-input:focus {
          outline: none;
          border-color: var(--green);
          box-shadow: 0 0 0 3px rgba(74,164,97,0.15);
        }

        /* Compact Radio Buttons for Gender/Tobacco */
        .calc-radio-group-compact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .calc-radio-compact {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 12px;
          border-radius: 8px;
          background: var(--bg-soft);
          border: 1.5px solid var(--border);
          font-size: 13px;
          font-weight: 600;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .calc-radio-compact input {
          display: none;
        }
        .calc-radio-compact.active {
          background: rgba(74,164,97,0.1);
          border-color: var(--green);
          color: var(--green);
        }
        .calc-radio-compact:hover:not(.active) {
          border-color: #aaa;
        }

        /* Radio Buttons */
        .calc-radio-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .calc-radio-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 16px;
          border-radius: 12px;
          background: var(--bg-soft);
          border: 1.5px solid var(--border);
          font-size: 14px;
          font-weight: 600;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .calc-radio-btn input {
          display: none;
        }
        .calc-radio-btn.active {
          background: rgba(74,164,97,0.08);
          border-color: var(--green);
          color: var(--green);
        }
        .calc-radio-btn:hover:not(.active) {
          border-color: #aaa;
        }
        .calc-radio-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        /* Submit */
        .calc-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          background: var(--green);
          color: #fff;
          font-size: 15px;
          font-weight: 800;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.2s, box-shadow 0.2s;
          margin-top: 4px;
        }
        .calc-submit:hover:not(.disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(74,164,97,0.35);
        }
        .calc-submit.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ── Result Card ── */
        .calc-result-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          border: 1px solid var(--border);
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }
        .calc-result-empty {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px 20px;
        }
        .calc-result-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(74,164,97,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .calc-result-icon--success {
          width: 48px;
          height: 48px;
          background: var(--green);
          color: #fff;
          margin-bottom: 12px;
        }
        .calc-result-title {
          font-size: 18px;
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 6px;
        }
        .calc-result-subtitle {
          font-size: 12px;
          color: var(--muted);
          margin-bottom: 20px;
        }
        .calc-result-empty-text {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.7;
          max-width: 240px;
        }

        /* Filled Result */
        .calc-result-filled {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .calc-result-header {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Estimate Box */
        .calc-estimate-box {
          width: 100%;
          background: linear-gradient(135deg, var(--green) 0%, #3d8a4f 100%);
          border-radius: 14px;
          padding: 20px 20px;
          margin-bottom: 18px;
        }
        .calc-estimate-label {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .calc-estimate-range {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 6px;
          margin: 8px 0 6px;
        }
        .calc-estimate-low,
        .calc-estimate-high {
          font-size: 28px;
          font-weight: 900;
          color: #fff;
        }
        .calc-estimate-sep {
          font-size: 20px;
          color: rgba(255,255,255,0.5);
        }
        .calc-estimate-avg {
          font-size: 13px;
          color: rgba(255,255,255,0.8);
        }

        /* Summary */
        .calc-summary {
          width: 100%;
          background: var(--bg-soft);
          border-radius: 10px;
          padding: 12px 16px;
          margin-bottom: 18px;
        }
        .calc-summary-row {
          display: flex;
          justify-content: space-between;
          padding: 6px 0;
          font-size: 13px;
          color: var(--muted);
          border-bottom: 1px solid var(--border);
        }
        .calc-summary-row:last-child {
          border-bottom: none;
        }
        .calc-summary-row strong {
          color: var(--dark);
        }

        /* CTAs */
        .calc-result-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }
        .calc-cta-primary {
          width: 100%;
          padding: 14px 20px;
          background: var(--green);
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .calc-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(74,164,97,0.35);
        }
        .calc-cta-secondary {
          width: 100%;
          padding: 12px 20px;
          background: transparent;
          color: var(--muted);
          font-size: 13px;
          font-weight: 600;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          font-family: inherit;
          transition: border-color 0.2s, color 0.2s;
        }
        .calc-cta-secondary:hover {
          border-color: var(--green);
          color: var(--green);
        }

        /* Disclaimer */
        .calc-disclaimer {
          font-size: 10px;
          color: var(--muted);
          line-height: 1.5;
          margin-top: 14px;
          text-align: center;
        }

        /* ── Info Cards ── */
        .calc-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .calc-info-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px 24px;
          text-align: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .calc-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        .calc-info-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(74,164,97,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .calc-info-card h4 {
          font-size: 15px;
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 8px;
        }
        .calc-info-card p {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.65;
        }

        /* ── Mobile Responsive ── */
        @media (max-width: 900px) {
          .calc-grid {
            grid-template-columns: 1fr;
          }
          .calc-result-card {
            min-height: auto;
          }
          .calc-info-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .calc-section {
            padding: 20px 0 40px;
          }
          .calc-page-header {
            margin-bottom: 20px;
          }
          .calc-nav-row {
            flex-direction: row;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
          }
          .calc-page-title {
            font-size: 1.4rem;
          }
          .calc-page-desc {
            font-size: 13px;
          }
          .calc-form-card,
          .calc-result-card {
            padding: 20px 16px;
          }
          .calc-field-row {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .calc-estimate-low,
          .calc-estimate-high {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}
