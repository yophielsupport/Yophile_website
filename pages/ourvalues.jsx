import { Fragment } from 'react';
import Link from 'next/link';
import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const BG = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

const values = [
  {
    num: '01',
    title: 'Integrity',
    icon: '◈',
    text: 'We conduct every business relationship with complete transparency, honesty and ethical responsibility — no compromises.',
  },
  {
    num: '02',
    title: 'Responsibility',
    icon: '◈',
    text: 'We take ownership of our actions, our commitments and our impact on the environment, our clients, and our communities.',
  },
  {
    num: '03',
    title: 'Excellence',
    icon: '◈',
    text: 'We are relentless in pursuing the highest standards of quality, performance and innovation in everything we deliver.',
  },
  {
    num: '04',
    title: 'Unity',
    icon: '◈',
    text: 'We believe in the collective strength of our global team — unified by purpose, diverse in thought, and collaborative in action.',
  },
  {
    num: '05',
    title: 'Respectful',
    icon: '◈',
    text: 'We treat every individual — clients, partners, and colleagues — with dignity, empathy and genuine respect in all interactions.',
  },
];

export default function Ourvalues() {
  return (
    <Fragment>
      <PageProgress />

      <style jsx global>{`
        .ov-hero {
          background: linear-gradient(135deg, #0a1628 0%, #0d2b45 60%, #0a3320 100%);
          padding: 140px 0 80px; position: relative; overflow: hidden;
        }
        .ov-hero::before {
          content: ''; position: absolute; inset: 0;
          background: url('/img/photos/Slider3.jpg') center/cover no-repeat;
          opacity: 0.1;
        }
        .ov-hero-content { position: relative; z-index: 2; }
        .ov-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.22em; color: rgb(121,191,30); margin-bottom: 14px; }
        .ov-hero-title { font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 900; color: #fff; line-height: 1.1; margin-bottom: 16px; }
        .ov-hero-sub { font-size: 17px; color: rgba(255,255,255,0.72); max-width: 540px; line-height: 1.8; }

        .ov-quote-section { background: #fff; padding: 72px 0; }
        .ov-quote-text { font-size: clamp(1.15rem, 2vw, 1.5rem); font-weight: 500; color: #2d3748; line-height: 1.85; font-style: italic; margin-bottom: 20px; }
        .ov-quote-author { font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; background: ${BG}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ov-quote-bar { width: 4px; background: ${BG}; border-radius: 2px; align-self: stretch; min-height: 80px; flex-shrink: 0; }

        .ov-image-section { background: #f7f9fc; padding: 72px 0; }
        .ov-img-heading { font-size: clamp(1.4rem, 2.2vw, 1.9rem); font-weight: 800; color: #0d1b2a; margin-bottom: 16px; }
        .ov-img-sub { font-size: 15px; color: #6b7a8d; line-height: 1.8; margin-bottom: 0; }

        .ov-values-section { background: #fff; padding: 80px 0; }
        .ov-section-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.22em; color: rgb(0,166,228); margin-bottom: 10px; }
        .ov-section-heading { font-size: clamp(1.5rem, 2.5vw, 2.1rem); font-weight: 800; color: #0d1b2a; margin-bottom: 8px; }
        .ov-accent { width: 52px; height: 3px; background: ${BG}; border-radius: 2px; margin: 0 auto 48px; }

        .ov-card {
          background: #f7f9fc; border-radius: 14px; padding: 36px 28px;
          position: relative; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s;
          height: 100%;
        }
        .ov-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: ${BG}; }
        .ov-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.10); }
        .ov-card-num { font-size: 3rem; font-weight: 900; opacity: 0.1; color: #000; line-height: 1; margin-bottom: 12px; }
        .ov-card-icon { font-size: 22px; background: ${BG}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 10px; }
        .ov-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; background: ${BG}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 12px; }
        .ov-card-text { font-size: 14px; color: #6b7a8d; line-height: 1.8; margin: 0; }

        .ov-cta { background: ${BG}; padding: 64px 0; text-align: center; }
        .ov-cta-title { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 800; color: #fff; margin-bottom: 12px; }
        .ov-cta-sub { color: rgba(255,255,255,0.85); font-size: 15px; margin-bottom: 28px; }
        .ov-cta-btn { display: inline-block; background: #fff; color: #0d1b2a; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; padding: 14px 36px; border-radius: 50px; text-decoration: none; transition: all 0.25s ease; }
        .ov-cta-btn:hover { background: #0d1b2a; color: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.25); text-decoration: none; }
      `}</style>

      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      {/* ── HERO ── */}
      <section className="ov-hero">
        <div className="container ov-hero-content">
          <p className="ov-label">What We Stand For</p>
          <h1 className="ov-hero-title">Our Values</h1>
          <p className="ov-hero-sub">The principles that define who we are, how we work, and why our clients trust us.</p>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="ov-quote-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
                <div className="ov-quote-bar" />
                <div>
                  <p className="ov-quote-text">
                    "Business, as I have seen it, places one great demand on you: it needs you to self-impose a framework of ethics, values, fairness and objectivity on yourself at all times."
                  </p>
                  <p className="ov-quote-author">— Ratan N. Tata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES IMAGE ── */}
      <section className="ov-image-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <p className="ov-section-label">Our Core Values</p>
              <h2 className="ov-img-heading">The DNA of Yophiel Internationals</h2>
              <p className="ov-img-sub">
                These values are not just corporate statements — they are the lived principles that guide every interaction, every decision, and every relationship we build with our clients, suppliers and communities around the world.
              </p>
            </div>
            <div className="col-lg-6">
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                <img
                  src="/img/photos/ourvalue.png"
                  alt="Our Values – Integrity, Responsibility, Excellence, Unity, Respectful"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE CARDS ── */}
      <section className="ov-values-section">
        <div className="container">
          <div className="text-center">
            <p className="ov-section-label">In Detail</p>
            <h2 className="ov-section-heading">What Each Value Means to Us</h2>
            <div className="ov-accent" />
          </div>
          <div className="row gy-4">
            {values.map(({ num, title, icon, text }) => (
              <div className="col-md-4" key={title}>
                <div className="ov-card">
                  <div className="ov-card-num">{num}</div>
                  <div className="ov-card-icon">{icon}</div>
                  <div className="ov-card-title">{title}</div>
                  <p className="ov-card-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="ov-cta">
        <div className="container">
          <h3 className="ov-cta-title">Let's Build Something Together</h3>
          <p className="ov-cta-sub">Partner with a company whose values match your own.</p>
          <Link href="/contact-2" className="ov-cta-btn">Contact Us</Link>
        </div>
      </div>

      <Footer11 />
    </Fragment>
  );
}
