import { Fragment } from 'react';
import Link from 'next/link';
import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const BG = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

/* ─── Product Card ─────────────────────────────────── */
const GearIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="blp-gear-icon">
    <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.33.07-.68.07-1.08s-.03-.74-.07-1.08l2.32-1.81c.21-.16.27-.46.13-.7l-2.2-3.81c-.13-.25-.42-.33-.67-.25l-2.74 1.1c-.57-.44-1.18-.79-1.85-1.07L14.92 2.1c-.05-.27-.27-.46-.55-.46h-4.4c-.28 0-.5.19-.55.46l-.41 2.74c-.67.28-1.28.63-1.85 1.07l-2.74-1.1c-.25-.08-.54 0-.67.25l-2.2 3.81c-.14.24-.08.54.13.7l2.32 1.81C4.03 11.26 4 11.61 4 12s.03.74.07 1.08L1.75 14.9c-.21.16-.27.46-.13.7l2.2 3.81c.13.25.42.33.67.25l2.74-1.1c.57.44 1.18.79 1.85 1.07l.41 2.74c.05.27.27.46.55.46h4.4c.28 0 .5-.19.55-.46l.41-2.74c.67-.28 1.28-.63 1.85-1.07l2.74 1.1c.25.08.54 0 .67-.25l2.2-3.81c.14-.24.08-.54-.13-.7l-2.32-1.81z" />
  </svg>
);

const ProductCard = ({ name }) => (
  <div className="blp-card">
    <GearIcon />
    <span className="blp-card-title">{name}</span>
  </div>
);

/* ─── Main Component ───────────────────────────────── */
const BusinessLinePage = ({ title, subtitle, heroImage, description, products }) => {
  return (
    <Fragment>
      <PageProgress />

      <style jsx global>{`
        /* ── Hero ── */
        .blp-hero {
          position: relative;
          width: 100%;
          min-height: 420px;
          background-image: url(${heroImage});
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: flex-end;
        }
        .blp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,20,40,0.45) 60%, rgba(0,0,0,0.1) 100%);
        }
        .blp-hero-content {
          position: relative;
          z-index: 2;
          padding: 60px 0 52px;
          width: 100%;
        }
        .blp-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.65);
          margin-bottom: 16px;
        }
        .blp-breadcrumb a { color: rgba(255,255,255,0.65); text-decoration: none; }
        .blp-breadcrumb a:hover { color: #fff; }
        .blp-breadcrumb-sep { opacity: 0.5; }
        .blp-hero-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 14px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .blp-hero-accent {
          width: 60px; height: 4px;
          background: ${BG};
          border-radius: 2px;
        }

        /* ── Intro Strip ── */
        .blp-intro {
          background: #fff;
          border-bottom: 1px solid #f0f0f0;
          padding: 52px 0;
          text-align: center;
        }
        .blp-intro-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: rgb(0,166,228);
          margin-bottom: 10px;
        }
        .blp-intro-title {
          font-size: clamp(1.5rem, 2.5vw, 2.1rem);
          font-weight: 800;
          color: #0d1b2a;
          margin-bottom: 18px;
          line-height: 1.2;
        }
        .blp-intro-text {
          font-size: 16px;
          color: #4a5568;
          line-height: 1.85;
          max-width: 740px;
          margin: 0 auto;
        }
        .blp-intro-bar {
          width: 52px; height: 3px;
          background: ${BG};
          border-radius: 2px;
          margin: 22px auto 0;
        }

        /* ── Product Grid ── */
        .blp-grid-section {
          background: #fff;
          padding: 72px 0 80px;
        }
        .blp-services-heading {
          font-size: clamp(1.6rem, 2.8vw, 2.3rem);
          font-weight: 800;
          color: #0d1b2a;
          border-left: 5px solid rgb(0,166,228);
          padding-left: 18px;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .blp-services-intro {
          font-size: 15px;
          color: #4a5568;
          line-height: 1.85;
          margin-bottom: 10px;
        }
        .blp-services-detail {
          font-size: 13px;
          font-weight: 700;
          color: #6b7a8d;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 40px;
        }
        .blp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) { .blp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .blp-grid { grid-template-columns: 1fr; } }

        .blp-card {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          cursor: default;
        }
        .blp-card:hover {
          border-color: rgb(0,166,228);
          box-shadow: 0 4px 18px rgba(0,166,228,0.13);
          transform: translateY(-3px);
        }
        .blp-gear-icon {
          color: #94a3b8;
          flex-shrink: 0;
          transition: color 0.25s;
        }
        .blp-card:hover .blp-gear-icon { color: rgb(0,166,228); }
        .blp-card-title {
          font-size: 14.5px;
          font-weight: 600;
          color: #1e293b;
          margin: 0;
          line-height: 1.4;
        }

        /* ── CTA Strip ── */
        .blp-cta {
          background: ${BG};
          padding: 60px 0;
          text-align: center;
        }
        .blp-cta-title {
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
        }
        .blp-cta-sub {
          color: rgba(255,255,255,0.85);
          font-size: 15px;
          margin-bottom: 28px;
        }
        .blp-cta-btn {
          display: inline-block;
          background: #fff;
          color: #0d1b2a;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 14px 36px;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
        }
        .blp-cta-btn:hover {
          background: #0d1b2a;
          color: #fff;
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
          text-decoration: none;
        }
      `}</style>

      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      {/* ── HERO ───────────────────────────────────────── */}
      <div className="blp-hero">
        <div className="blp-hero-overlay" />
        <div className="blp-hero-content">
          <div className="container">
            <div className="blp-breadcrumb">
              <Link href="/" style={{ color: 'inherit' }}>Home</Link>
              <span className="blp-breadcrumb-sep">›</span>
              <span>Business Lines</span>
              <span className="blp-breadcrumb-sep">›</span>
              <span style={{ color: '#fff' }}>{title}</span>
            </div>
            <h1 className="blp-hero-title">{title}</h1>
            {subtitle && <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', marginBottom: '20px', maxWidth: '600px' }}>{subtitle}</p>}
            <div className="blp-hero-accent" />
          </div>
        </div>
      </div>

      {/* ── INTRO ──────────────────────────────────────── */}
      {/* <div className="blp-intro">
        <div className="container">
          <p className="blp-intro-label">Our Expertise</p>
          <h2 className="blp-intro-title">{title}</h2>
          <p className="blp-intro-text">{description}</p>
          <div className="blp-intro-bar" />
        </div>
      </div> */}

      {/* ── PRODUCTS GRID ──────────────────────────────── */}
      <div className="blp-grid-section">
        <div className="container">
          <h2 className="blp-services-heading">Products We Offer</h2>
          <p className="blp-services-intro">{description}</p>
          <p className="blp-services-detail">Details As Per Follows:</p>
          <div className="blp-grid">
            {products.map(({ name }) => (
              <ProductCard key={name} name={name} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ────────────────────────────────────────── */}
      <div className="blp-cta">
        <div className="container">
          <h3 className="blp-cta-title">Need Technical Assistance?</h3>
          <p className="blp-cta-sub">Our specialist team is ready to recommend the right product for your application.</p>
          <Link href="/contact-2" className="blp-cta-btn">Get in Touch</Link>
        </div>
      </div>

      <Footer11 />
    </Fragment>
  );
};

export default BusinessLinePage;
