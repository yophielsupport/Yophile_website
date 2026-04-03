import { Fragment } from 'react';
import Link from 'next/link';
import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const BG = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

const offerings = [
  { icon: '🔧', title: 'Preventive Maintenance', desc: 'Scheduled inspection and servicing programs to prevent breakdowns and extend equipment lifespan.' },
  { icon: '⚡', title: 'Emergency Response', desc: '24/7 rapid-response support for unexpected breakdowns, minimizing downtime and production losses.' },
  { icon: '📊', title: 'Performance Monitoring', desc: 'Continuous monitoring of equipment health and performance KPIs with detailed reporting and analytics.' },
  { icon: '🏭', title: 'Plant Turnaround Support', desc: 'Specialized shutdown and turnaround services to restore plant efficiency and safety compliance.' },
  { icon: '📋', title: 'Compliance & Documentation', desc: 'Maintain full regulatory compliance with updated maintenance records, certifications and audit trails.' },
  { icon: '👨‍🔧', title: 'Dedicated Field Teams', desc: 'Experienced on-site technicians and engineers providing hands-on maintenance and technical support.' },
];

export default function Contracts() {
  return (
    <Fragment>
      <PageProgress />

      <style jsx global>{`
        .mc-hero { position: relative; min-height: 420px; background: linear-gradient(135deg, #0a1628, #0d2b45); display: flex; align-items: flex-end; overflow: hidden; }
        .mc-hero::before { content: ''; position: absolute; inset: 0; background: url('/img/photos/Slider3.jpg') center/cover; opacity: 0.15; }
        .mc-hero-content { position: relative; z-index: 2; padding: 60px 0 52px; width: 100%; }
        .mc-bc { display: flex; gap: 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-bottom: 16px; }
        .mc-bc a { color: inherit; text-decoration: none; }
        .mc-title { font-size: clamp(2rem,4vw,3.2rem); font-weight: 900; color: #fff; line-height: 1.1; margin: 0 0 14px; text-transform: uppercase; }
        .mc-sub { color: rgba(255,255,255,0.75); font-size: 16px; max-width: 580px; line-height: 1.8; margin-bottom: 20px; }
        .mc-accent { width: 60px; height: 4px; background: ${BG}; border-radius: 2px; }

        .mc-intro { background: #fff; padding: 64px 0; }
        .mc-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.22em; color: rgb(0,166,228); margin-bottom: 10px; }
        .mc-heading { font-size: clamp(1.5rem,2.5vw,2.1rem); font-weight: 800; color: #0d1b2a; margin-bottom: 18px; }
        .mc-text { font-size: 15.5px; color: #4a5568; line-height: 1.9; margin-bottom: 14px; }

        .mc-grid-section { background: #f7f9fc; padding: 72px 0 80px; }
        .mc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media(max-width:900px){.mc-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:600px){.mc-grid{grid-template-columns:1fr;}}

        .mc-card { background: #fff; border-radius: 14px; padding: 32px 24px 28px; box-shadow: 0 2px 16px rgba(0,0,0,0.06); position: relative; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; }
        .mc-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: ${BG}; transform: scaleX(0); transform-origin: left; transition: transform 0.35s; }
        .mc-card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(0,0,0,0.11); }
        .mc-card:hover::before { transform: scaleX(1); }
        .mc-card-icon { font-size: 28px; margin-bottom: 16px; }
        .mc-card-title { font-size: 13.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: #0d1b2a; margin-bottom: 10px; }
        .mc-card-text { font-size: 13.5px; color: #6b7a8d; line-height: 1.75; margin: 0; }

        .mc-cta { background: ${BG}; padding: 60px 0; text-align: center; }
        .mc-cta-title { font-size: clamp(1.4rem,2.5vw,2rem); font-weight: 800; color: #fff; margin-bottom: 10px; }
        .mc-cta-sub { color: rgba(255,255,255,0.85); font-size: 15px; margin-bottom: 28px; }
        .mc-cta-btn { display: inline-block; background: #fff; color: #0d1b2a; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; padding: 14px 36px; border-radius: 50px; text-decoration: none; transition: all 0.25s; }
        .mc-cta-btn:hover { background: #0d1b2a; color: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.25); text-decoration: none; }
      `}</style>

      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      <div className="mc-hero">
        <div className="mc-hero-content">
          <div className="container">
            <div className="mc-bc">
              <Link href="/" style={{ color: 'inherit' }}>Home</Link>
              <span>›</span><span>Resources</span><span>›</span>
              <span style={{ color: '#fff' }}>Maintenance Contracts</span>
            </div>
            <h1 className="mc-title">Maintenance Contracts</h1>
            <p className="mc-sub">Structured maintenance programs that maximize uptime, safety and operational performance.</p>
            <div className="mc-accent" />
          </div>
        </div>
      </div>

      <div className="mc-intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="mc-label">Our Services</p>
              <h2 className="mc-heading">Annual Maintenance Contracts Tailored to Your Operations</h2>
              <p className="mc-text">
                Yophiel Internationals offers comprehensive annual maintenance contract services designed to keep your plant, equipment and processes running at peak efficiency. Our structured programs are tailored to your specific operational requirements and backed by experienced field engineers and technical specialists.
              </p>
              <p className="mc-text" style={{ marginBottom: 0 }}>
                From preventive maintenance schedules and emergency response support to performance reporting and compliance documentation, our contracts give you complete peace of mind — and the freedom to focus on production.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mc-grid-section">
        <div className="container">
          <div className="text-center mb-5">
            <p className="mc-label">What's Included</p>
            <h3 style={{ fontSize: 'clamp(1.4rem,2.2vw,1.9rem)', fontWeight: '800', color: '#0d1b2a', marginBottom: '8px' }}>Our Contract Offerings</h3>
            <p style={{ fontSize: '15px', color: '#6b7a8d' }}>Everything you need to maintain reliable, compliant operations</p>
          </div>
          <div className="mc-grid">
            {offerings.map(({ icon, title, desc }) => (
              <div className="mc-card" key={title}>
                <div className="mc-card-icon">{icon}</div>
                <div className="mc-card-title">{title}</div>
                <p className="mc-card-text">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mc-cta">
        <div className="container">
          <h3 className="mc-cta-title">Interested in a Maintenance Contract?</h3>
          <p className="mc-cta-sub">Contact us to discuss a tailored maintenance program for your facility.</p>
          <Link href="/contact-2" className="mc-cta-btn">Talk to Our Team</Link>
        </div>
      </div>

      <Footer11 />
    </Fragment>
  );
}
