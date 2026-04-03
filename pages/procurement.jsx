import { Fragment } from 'react';
import Link from 'next/link';
import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const BG = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

const pillars = [
  { icon: '🔍', title: 'Strategic Sourcing', desc: 'Global supplier identification and qualification to secure best-in-class materials at competitive prices.' },
  { icon: '✅', title: 'Quality Assurance', desc: 'Rigorous inspection protocols, third-party testing and documentation to meet international quality standards.' },
  { icon: '📋', title: 'Compliance Management', desc: 'Full compliance with safety, environmental and regulatory standards across all procurement activities.' },
  { icon: '🤝', title: 'Supplier Relationships', desc: 'Long-term partnerships with trusted, vetted suppliers to ensure supply chain reliability and continuity.' },
  { icon: '🚢', title: 'Logistics & Delivery', desc: 'End-to-end logistics coordination — from port of origin to final delivery at your facility.' },
  { icon: '💰', title: 'Cost Optimization', desc: 'Competitive pricing through volume leverage, supplier negotiations and smart procurement strategies.' },
];

export default function Procurement() {
  return (
    <Fragment>
      <PageProgress />

      <style jsx global>{`
        .proc-hero { position: relative; min-height: 420px; background: linear-gradient(135deg, #0a1628, #0d2b45); display: flex; align-items: flex-end; overflow: hidden; }
        .proc-hero::before { content: ''; position: absolute; inset: 0; background: url('/img/photos/Slider5.jpg') center/cover; opacity: 0.15; }
        .proc-hero-content { position: relative; z-index: 2; padding: 60px 0 52px; width: 100%; }
        .proc-bc { display: flex; gap: 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-bottom: 16px; }
        .proc-bc a { color: inherit; text-decoration: none; }
        .proc-title { font-size: clamp(2rem,4vw,3.2rem); font-weight: 900; color: #fff; line-height: 1.1; margin: 0 0 14px; text-transform: uppercase; }
        .proc-sub { color: rgba(255,255,255,0.75); font-size: 16px; max-width: 580px; line-height: 1.8; margin-bottom: 20px; }
        .proc-accent { width: 60px; height: 4px; background: ${BG}; border-radius: 2px; }

        .proc-intro { background: #fff; padding: 64px 0; }
        .proc-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.22em; color: rgb(0,166,228); margin-bottom: 10px; }
        .proc-heading { font-size: clamp(1.5rem,2.5vw,2.1rem); font-weight: 800; color: #0d1b2a; margin-bottom: 18px; }
        .proc-text { font-size: 15.5px; color: #4a5568; line-height: 1.9; margin-bottom: 14px; }

        .proc-grid-section { background: #f7f9fc; padding: 72px 0 80px; }
        .proc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media(max-width:900px){.proc-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:600px){.proc-grid{grid-template-columns:1fr;}}

        .proc-card { background: #fff; border-radius: 14px; padding: 32px 24px 28px; box-shadow: 0 2px 16px rgba(0,0,0,0.06); position: relative; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; }
        .proc-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: ${BG}; transform: scaleX(0); transform-origin: left; transition: transform 0.35s; }
        .proc-card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(0,0,0,0.11); }
        .proc-card:hover::before { transform: scaleX(1); }
        .proc-card-icon { font-size: 28px; margin-bottom: 16px; }
        .proc-card-title { font-size: 13.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: #0d1b2a; margin-bottom: 10px; }
        .proc-card-text { font-size: 13.5px; color: #6b7a8d; line-height: 1.75; margin: 0; }

        .proc-cta { background: ${BG}; padding: 60px 0; text-align: center; }
        .proc-cta-title { font-size: clamp(1.4rem,2.5vw,2rem); font-weight: 800; color: #fff; margin-bottom: 10px; }
        .proc-cta-sub { color: rgba(255,255,255,0.85); font-size: 15px; margin-bottom: 28px; }
        .proc-cta-btn { display: inline-block; background: #fff; color: #0d1b2a; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; padding: 14px 36px; border-radius: 50px; text-decoration: none; transition: all 0.25s; }
        .proc-cta-btn:hover { background: #0d1b2a; color: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.25); text-decoration: none; }
      `}</style>

      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      <div className="proc-hero">
        <div className="proc-hero-content">
          <div className="container">
            <div className="proc-bc">
              <Link href="/" style={{ color: 'inherit' }}>Home</Link>
              <span>›</span><span>Resources</span><span>›</span>
              <span style={{ color: '#fff' }}>Procurement</span>
            </div>
            <h1 className="proc-title">Procurement</h1>
            <p className="proc-sub">Strategic sourcing and supply chain solutions for the chemical and industrial sectors.</p>
            <div className="proc-accent" />
          </div>
        </div>
      </div>

      <div className="proc-intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="proc-label">Our Approach</p>
              <h2 className="proc-heading">Reliable Procurement, Global Reach</h2>
              <p className="proc-text">
                Yophiel Internationals delivers end-to-end procurement services designed to simplify your supply chain, reduce costs and ensure the timely delivery of high-quality materials. We leverage our extensive global supplier network to source specialty chemicals, raw materials and industrial equipment that meet the most demanding specifications.
              </p>
              <p className="proc-text" style={{ marginBottom: 0 }}>
                Our procurement team manages the entire process — from initial supplier qualification and price negotiation through quality inspection, documentation and logistics coordination — so you can focus on what matters most: your operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="proc-grid-section">
        <div className="container">
          <div className="text-center mb-5">
            <p className="proc-label">Our Pillars</p>
            <h3 style={{ fontSize: 'clamp(1.4rem,2.2vw,1.9rem)', fontWeight: '800', color: '#0d1b2a', marginBottom: '8px' }}>How We Deliver Value</h3>
            <p style={{ fontSize: '15px', color: '#6b7a8d' }}>Six principles that define our procurement excellence</p>
          </div>
          <div className="proc-grid">
            {pillars.map(({ icon, title, desc }) => (
              <div className="proc-card" key={title}>
                <div className="proc-card-icon">{icon}</div>
                <div className="proc-card-title">{title}</div>
                <p className="proc-card-text">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="proc-cta">
        <div className="container">
          <h3 className="proc-cta-title">Need Procurement Support?</h3>
          <p className="proc-cta-sub">Let our team streamline your sourcing and supply chain operations.</p>
          <Link href="/contact-2" className="proc-cta-btn">Get in Touch</Link>
        </div>
      </div>

      <Footer11 />
    </Fragment>
  );
}
