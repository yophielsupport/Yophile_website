import { Fragment } from 'react';
import Link from 'next/link';
import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const BG = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

const stats = [
  { value: '2023', label: 'Established' },
  { value: '20+', label: 'Product Lines' },
  { value: '2', label: 'Global Offices' },
  { value: '100%', label: 'Ethics Driven' },
];

export default function Whoweare() {
  return (
    <Fragment>
      <PageProgress />

      <style jsx global>{`
        .wwa-hero {
          background: linear-gradient(135deg, #0a1628 0%, #0d2b45 60%, #0a3320 100%);
          padding: 140px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .wwa-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('/img/photos/Slider1.jpg') center/cover no-repeat;
          opacity: 0.12;
        }
        .wwa-hero-content { position: relative; z-index: 2; }
        .wwa-label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.22em; color: rgb(121,191,30); margin-bottom: 14px;
        }
        .wwa-hero-title {
          font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 900; color: #fff;
          line-height: 1.1; margin-bottom: 20px;
        }
        .wwa-hero-sub {
          font-size: 17px; color: rgba(255,255,255,0.75); max-width: 580px;
          line-height: 1.8; margin-bottom: 36px;
        }
        .wwa-stat-row {
          display: flex; gap: 40px; flex-wrap: wrap; margin-top: 48px;
          padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.12);
        }
        .wwa-stat-val {
          font-size: 2.4rem; font-weight: 900;
          background: ${BG}; -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1;
        }
        .wwa-stat-lbl { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px; }

        .wwa-section { padding: 80px 0; }
        .wwa-accent { width: 52px; height: 3px; background: ${BG}; border-radius: 2px; margin-bottom: 28px; }
        .wwa-section-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.22em; color: rgb(0,166,228); margin-bottom: 10px; }
        .wwa-heading { font-size: clamp(1.6rem, 2.8vw, 2.2rem); font-weight: 800; color: #0d1b2a; line-height: 1.2; margin-bottom: 20px; }
        .wwa-body { font-size: 15.5px; color: #4a5568; line-height: 1.9; margin-bottom: 18px; }

        .wwa-card {
          background: #fff; border-radius: 14px; padding: 32px 28px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          border-top: 4px solid transparent;
          border-image: ${BG} 1;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          position: relative; overflow: hidden;
        }
        .wwa-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: ${BG};
        }
        .wwa-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.10); }
        .wwa-card-num { font-size: 3rem; font-weight: 900; opacity: 0.12; color: #000; line-height: 1; margin-bottom: 10px; }
        .wwa-card-title { font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; background: ${BG}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 12px; }
        .wwa-card-text { font-size: 14.5px; color: #6b7a8d; line-height: 1.8; margin: 0; }

        .wwa-cta {
          background: ${BG}; padding: 64px 0; text-align: center;
        }
        .wwa-cta-title { font-size: clamp(1.5rem, 2.5vw, 2.1rem); font-weight: 800; color: #fff; margin-bottom: 12px; }
        .wwa-cta-sub { color: rgba(255,255,255,0.85); font-size: 15px; margin-bottom: 28px; }
        .wwa-cta-btn { display: inline-block; background: #fff; color: #0d1b2a; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; padding: 14px 36px; border-radius: 50px; text-decoration: none; transition: all 0.25s ease; }
        .wwa-cta-btn:hover { background: #0d1b2a; color: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.25); text-decoration: none; }
      `}</style>

      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      {/* ── HERO ── */}
      <section className="wwa-hero">
        <div className="container wwa-hero-content">
          <p className="wwa-label">About Yophiel Internationals</p>
          <h1 className="wwa-hero-title">
            Energizing People.<br />Energizing Chemistry.
          </h1>
          <p className="wwa-hero-sub">
            An internationally recognized chemical distribution and engineering services company — built on ethics, driven by innovation, and committed to delivering value across the globe.
          </p>
          <Link href="/contact-2" className="wwa-cta-btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(8px)' }}>
            Get in Touch
          </Link>

          <div className="wwa-stat-row">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="wwa-stat-val">{value}</div>
                <div className="wwa-stat-lbl">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="wwa-section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <p className="wwa-section-label">Who We Are</p>
              <div className="wwa-accent" />
              <h2 className="wwa-heading">A Global Leader in Chemical Distribution & Engineering</h2>
              <p className="wwa-body">
                Welcome to the global arena of Chemicals and Engineering — where excellence, innovation and performance converge to shape a more sustainable and technologically advanced future.
              </p>
              <p className="wwa-body">
                <strong>Yophiel Internationals</strong> is an internationally recognized chemical distribution and engineering services company, established in the western region of India. Ethics and integrity are the cornerstones upon which this firm was built — and we will always endeavour to lead the industry in everything we do.
              </p>
              <p className="wwa-body" style={{ marginBottom: 0 }}>
                Our innovative and value-added services include energy management, annual maintenance contracts, tolling &amp; blending, and the procurement of raw materials. Our wide global network and in-depth industry knowledge allow us to support clients with specialized solutions that maximize productivity and profitability.
              </p>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.14)' }}>
                <img src="/img/photos/Slider2.jpg" alt="Yophiel Operations" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION / VALUES ── */}
      <section className="wwa-section" style={{ background: '#f7f9fc' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="wwa-section-label">Our Foundation</p>
            <h2 className="wwa-heading" style={{ margin: '0 auto' }}>Vision, Mission & Values</h2>
          </div>
          <div className="row gy-4">
            {[
              {
                num: '01',
                title: 'Our Vision',
                text: 'We aspire to be global leaders in each of our chosen businesses by 2030 — setting new benchmarks for quality, integrity, and innovation in the chemical industry.',
              },
              {
                num: '02',
                title: 'Our Mission',
                text: 'To be the most reliable global company for customers and suppliers, delivering value and maximizing prosperity through world-class products and services.',
              },
              {
                num: '03',
                title: 'Our Values',
                text: 'Integrity · Responsibility · Products · Unity · Knowledge — these are not just words, but the principles that guide every decision and relationship we build.',
              },
            ].map(({ num, title, text }) => (
              <div className="col-md-4" key={title}>
                <div className="wwa-card">
                  <div className="wwa-card-num">{num}</div>
                  <div className="wwa-card-title">{title}</div>
                  <p className="wwa-card-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="wwa-cta">
        <div className="container">
          <h3 className="wwa-cta-title">Ready to Partner with Yophiel?</h3>
          <p className="wwa-cta-sub">Connect with our expert team to explore how we can support your business.</p>
          <Link href="/contact-2" className="wwa-cta-btn">Contact Us Today</Link>
        </div>
      </div>

      <Footer11 />
    </Fragment>
  );
}
