import { Fragment } from 'react';
import Link from 'next/link';
import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const BG = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

const services = [
  { icon: '📐', title: 'Basic & Detail Engineering', desc: 'Complete process engineering from conceptual design through to detailed engineering packages and P&IDs.' },
  { icon: '🛒', title: 'Procurement Services', desc: 'Strategic sourcing of equipment, materials and specialist components with full quality assurance and documentation.' },
  { icon: '🧊', title: '3D Plant Modelling', desc: 'Advanced 3D modelling for piping layout, equipment placement and clash detection to optimize plant design.' },
  { icon: '⚡', title: 'Instrumentation & Control', desc: 'Complete instrumentation engineering including control philosophy, loop diagrams and SCADA integration.' },
  { icon: '🔩', title: 'Piping Engineering', desc: 'Detailed piping design, stress analysis and isometric drawings for all process and utility systems.' },
  { icon: '🏗️', title: 'Civil & Structural Design', desc: 'Foundation design, structural analysis and civil drawings for industrial plants and process facilities.' },
  { icon: '🏭', title: 'Site Work & Commissioning', desc: 'On-site project management, construction supervision and end-to-end plant commissioning support.' },
  { icon: '⚡', title: 'Energy Management', desc: 'Energy auditing, optimization studies and implementation of energy-saving solutions for industrial operations.' },
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

        .eng-grid-section { background: #f7f9fc; padding: 72px 0 80px; }
        .eng-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
        @media(max-width:1100px){.eng-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:600px){.eng-grid{grid-template-columns:1fr;}}

        .eng-card { background: #fff; border-radius: 14px; padding: 32px 24px 28px; box-shadow: 0 2px 16px rgba(0,0,0,0.06); position: relative; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; }
        .eng-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: ${BG}; transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease; }
        .eng-card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(0,0,0,0.11); }
        .eng-card:hover::after { transform: scaleX(1); }
        .eng-card-icon { font-size: 28px; margin-bottom: 16px; }
        .eng-card-title { font-size: 13.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: #0d1b2a; margin-bottom: 10px; line-height: 1.4; }
        .eng-card-text { font-size: 13.5px; color: #6b7a8d; line-height: 1.75; margin: 0; }

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
              <span>›</span><span>Resources</span><span>›</span>
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
          <div className="text-center mb-5">
            <p className="eng-intro-label">Service Range</p>
            <h3 style={{ fontSize: 'clamp(1.4rem,2.2vw,1.9rem)', fontWeight: '800', color: '#0d1b2a', marginBottom: '8px' }}>What We Offer</h3>
            <p style={{ fontSize: '15px', color: '#6b7a8d' }}>Specialist capabilities across every engineering discipline</p>
          </div>
          <div className="eng-grid">
            {services.map(({ icon, title, desc }) => (
              <div className="eng-card" key={title}>
                <div className="eng-card-icon">{icon}</div>
                <div className="eng-card-title">{title}</div>
                <p className="eng-card-text">{desc}</p>
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
