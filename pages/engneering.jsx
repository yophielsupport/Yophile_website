import { Fragment } from 'react';
import Link from 'next/link';
import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const BG = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

const services = [
  { title: 'Basic & Detail Engineering' },
  { title: 'Procurement Services' },
  { title: '3D Plant Modelling' },
  { title: 'Instrumentation & Control' },
  { title: 'Piping Engineering' },
  { title: 'Civil & Structural Design' },
  { title: 'Site Work & Commissioning' },
  { title: 'Energy Management' },
  { title: 'Feasibility Study' },
  { title: 'Health Safety & Environment' },
  { title: 'Quality Control' },
  { title: 'Construction Management' },
];

export default function Engineering() {
  return (
    <Fragment>
      <PageProgress />

      <style jsx global>{`
        .eng-hero {
          position: relative; min-height: 440px;
          background: linear-gradient(135deg, #0a1628 0%, #0d2b45 100%);
          display: flex; align-items: flex-end; overflow: hidden;
        }
        .eng-hero::before {
          content: ''; position: absolute; inset: 0;
          background: url('/img/photos/Slider4.jpg') center/cover no-repeat;
          opacity: 0.18;
        }
        .eng-hero-content { position: relative; z-index: 2; padding: 60px 0 52px; width: 100%; }
        .eng-bc { display: flex; gap: 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-bottom: 16px; }
        .eng-bc a { color: inherit; text-decoration: none; }
        .eng-title { font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 900; color: #fff; line-height: 1.1; margin: 0 0 14px; text-transform: uppercase; }
        .eng-sub { color: rgba(255,255,255,0.75); font-size: 16px; max-width: 580px; line-height: 1.8; margin-bottom: 20px; }
        .eng-accent { width: 60px; height: 4px; background: ${BG}; border-radius: 2px; }

        .eng-intro { background: #fff; padding: 64px 0; }
        .eng-intro-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.22em; color: rgb(0,166,228); margin-bottom: 10px; }
        .eng-intro-heading { font-size: clamp(1.5rem, 2.5vw, 2.1rem); font-weight: 800; color: #0d1b2a; margin-bottom: 18px; }
        .eng-intro-text { font-size: 15.5px; color: #4a5568; line-height: 1.9; margin-bottom: 14px; }
        .eng-intro-bar { width: 52px; height: 3px; background: ${BG}; border-radius: 2px; }

        .eng-grid-section { background: #fff; padding: 72px 0 80px; }
        .eng-services-heading {
          font-size: clamp(1.6rem, 2.8vw, 2.3rem);
          font-weight: 800;
          color: #0d1b2a;
          border-left: 5px solid rgb(0,166,228);
          padding-left: 18px;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .eng-services-intro { font-size: 15px; color: #4a5568; line-height: 1.85; margin-bottom: 10px; }
        .eng-services-detail { font-size: 13px; font-weight: 700; color: #6b7a8d; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 40px; }
        .eng-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        @media(max-width:900px){.eng-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:600px){.eng-grid{grid-template-columns:1fr;}}

        .eng-card {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 20px 20px 20px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          cursor: default;
        }
        .eng-card:hover {
          border-color: rgb(0,166,228);
          box-shadow: 0 4px 18px rgba(0,166,228,0.13);
          transform: translateY(-3px);
        }
        .eng-card-gear {
          color: #94a3b8;
          flex-shrink: 0;
          transition: color 0.25s;
        }
        .eng-card:hover .eng-card-gear { color: rgb(0,166,228); }
        .eng-card-title { font-size: 14.5px; font-weight: 600; color: #1e293b; margin: 0; line-height: 1.4; }

        .eng-cta { background: ${BG}; padding: 60px 0; text-align: center; }
        .eng-cta-title { font-size: clamp(1.4rem,2.5vw,2rem); font-weight: 800; color: #fff; margin-bottom: 10px; }
        .eng-cta-sub { color: rgba(255,255,255,0.85); font-size: 15px; margin-bottom: 28px; }
        .eng-cta-btn { display: inline-block; background: #fff; color: #0d1b2a; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; padding: 14px 36px; border-radius: 50px; text-decoration: none; transition: all 0.25s; }
        .eng-cta-btn:hover { background: #0d1b2a; color: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.25); text-decoration: none; }
      `}</style>

      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      {/* HERO */}
      <div className="eng-hero">
        <div className="eng-hero::before" />
        <div className="eng-hero-content">
          <div className="container">
            <div className="eng-bc">
              <Link href="/" style={{ color: 'inherit' }}>Home</Link>
              <span>›</span><span>Services</span><span>›</span>
              <span style={{ color: '#fff' }}>Engineering Services</span>
            </div>
            <h1 className="eng-title">Engineering Services</h1>
            <p className="eng-sub">End-to-end engineering solutions — from conceptual design to plant commissioning.</p>
            <div className="eng-accent" />
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="eng-intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="eng-intro-label">Our Capabilities</p>
              <h2 className="eng-intro-heading">Comprehensive Engineering Across the Full Project Lifecycle</h2>
              <p className="eng-intro-text">
                Yophiel Internationals offers comprehensive engineering services spanning the full project lifecycle — from basic design and detailed engineering to procurement, construction management and plant commissioning. Our multidisciplinary team brings deep technical expertise across process, instrumentation, piping, civil and structural disciplines.
              </p>
              <p className="eng-intro-text" style={{ marginBottom: 0 }}>
                Whether you need end-to-end project delivery or specialist support on a specific phase, our engineers are equipped to deliver — on time, on budget and to the highest quality standards.
              </p>
              <div className="eng-intro-bar" style={{ marginTop: '24px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="eng-grid-section">
        <div className="container">
          <h2 className="eng-services-heading">Services We Provide</h2>
          <p className="eng-services-intro">
            Yophiel Internationals offers comprehensive engineering services spanning the full project lifecycle — from basic design and detailed engineering to procurement, construction management and plant commissioning.
          </p>
          <p className="eng-services-detail">Details As Per Follows:</p>
          <div className="eng-grid">
            {services.map(({ title }) => (
              <div className="eng-card" key={title}>
                <svg className="eng-card-gear" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.33.07-.68.07-1.08s-.03-.74-.07-1.08l2.32-1.81c.21-.16.27-.46.13-.7l-2.2-3.81c-.13-.25-.42-.33-.67-.25l-2.74 1.1c-.57-.44-1.18-.79-1.85-1.07L14.92 2.1c-.05-.27-.27-.46-.55-.46h-4.4c-.28 0-.5.19-.55.46l-.41 2.74c-.67.28-1.28.63-1.85 1.07l-2.74-1.1c-.25-.08-.54 0-.67.25l-2.2 3.81c-.14.24-.08.54.13.7l2.32 1.81C4.03 11.26 4 11.61 4 12s.03.74.07 1.08L1.75 14.9c-.21.16-.27.46-.13.7l2.2 3.81c.13.25.42.33.67.25l2.74-1.1c.57.44 1.18.79 1.85 1.07l.41 2.74c.05.27.27.46.55.46h4.4c.28 0 .5-.19.55-.46l.41-2.74c.67-.28 1.28-.63 1.85-1.07l2.74 1.1c.25.08.54 0 .67-.25l2.2-3.81c.14-.24.08-.54-.13-.7l-2.32-1.81z" />
                </svg>
                <span className="eng-card-title">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="eng-cta">
        <div className="container">
          <h3 className="eng-cta-title">Have an Engineering Project in Mind?</h3>
          <p className="eng-cta-sub">Talk to our team about how Yophiel can support your next project.</p>
          <Link href="/contact-2" className="eng-cta-btn">Get in Touch</Link>
        </div>
      </div>

      <Footer11 />
    </Fragment>
  );
}
