import { Fragment } from 'react';
import Link from 'next/link';
import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const BG = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

/* ─── Product Card ─────────────────────────────────── */
const ProductCard = ({ icon, name, description }) => (
  <div className="blp-card">
    <div className="blp-icon-wrap">
      <span className="blp-icon">{icon}</span>
    </div>
    <h5 className="blp-card-title">{name}</h5>
    <p className="blp-card-text">{description}</p>
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
          background: #f7f9fc;
          padding: 72px 0 80px;
        }
        .blp-grid-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: rgb(0,166,228);
          margin-bottom: 10px;
        }
        .blp-grid-heading {
          font-size: clamp(1.4rem, 2.2vw, 1.9rem);
          font-weight: 800;
          color: #0d1b2a;
          margin-bottom: 8px;
        }
        .blp-grid-sub {
          font-size: 15px;
          color: #6b7a8d;
          margin-bottom: 48px;
        }
        .blp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1100px) { .blp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .blp-grid { grid-template-columns: 1fr; } }

        .blp-card {
          background: #fff;
          border-radius: 14px;
          padding: 32px 24px 28px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .blp-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: ${BG};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .blp-card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(0,0,0,0.12); }
        .blp-card:hover::after { transform: scaleX(1); }
        .blp-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 12px;
          background: linear-gradient(135deg, #eef9ff 0%, #f3fff0 100%);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          font-size: 24px;
        }
        .blp-card-title {
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #0d1b2a;
          margin-bottom: 10px;
          line-height: 1.4;
        }
        .blp-card-text {
          font-size: 13.5px;
          color: #6b7a8d;
          line-height: 1.75;
          margin: 0;
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
      <div className="blp-intro">
        <div className="container">
          <p className="blp-intro-label">Our Expertise</p>
          <h2 className="blp-intro-title">{title}</h2>
          <p className="blp-intro-text">{description}</p>
          <div className="blp-intro-bar" />
        </div>
      </div>

      {/* ── PRODUCTS GRID ──────────────────────────────── */}
      <div className="blp-grid-section">
        <div className="container">
          <div className="text-center mb-4">
            <p className="blp-grid-label">Product Range</p>
            <h3 className="blp-grid-heading">Specialized Chemical Solutions</h3>
            <p className="blp-grid-sub">Tailored formulations engineered for performance and reliability</p>
          </div>
          <div className="blp-grid">
            {products.map(({ name, icon, description: desc }) => (
              <ProductCard key={name} name={name} icon={icon} description={desc} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ────────────────────────────────────────── */}
      <div className="blp-cta">
        <div className="container">
          <h3 className="blp-cta-title">Need Technical Assistance?</h3>
          <p className="blp-cta-sub">Our specialist team is ready to recommend the right solution for your application.</p>
          <Link href="/contact-2" className="blp-cta-btn">Get in Touch</Link>
        </div>
      </div>

      <Footer11 />
    </Fragment>
  );
};

export default BusinessLinePage;
