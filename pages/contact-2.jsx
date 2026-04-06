import { Fragment } from 'react';
import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import ContactForm from 'components/common/ContactForm';

const BG = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

const contactDetails = [
  {
    icon: '📍',
    label: 'Head Office — India',
    lines: ['P. O. Box 411023, West Coast Park,', 'Pune, MH, India'],
  },
  {
    icon: '📍',
    label: 'Communication Office — UAE',
    lines: ['WH 07, Block 07, Industrial Area 2,', 'Ajman, UAE'],
  },
  {
    icon: '✉️',
    label: 'Email',
    lines: ['sales@yophiel.net'],
  },
  {
    icon: '📞',
    label: 'Phone',
    lines: ['+91 9637 422525', '+971 509 014345'],
  },
];

export default function ContactTwo() {
  return (
    <Fragment>
      <PageProgress />

      <style jsx global>{`
        .ct-hero {
          background: linear-gradient(135deg, #0a1628 0%, #0d2b45 60%, #0a3320 100%);
          padding: 140px 0 72px; position: relative; overflow: hidden;
        }
        .ct-hero::before {
          content: ''; position: absolute; inset: 0;
          background: url('/img/photos/Slider1.jpg') center/cover; opacity: 0.1;
        }
        .ct-hero-content { position: relative; z-index: 2; }
        .ct-hero-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.22em; color: rgb(121,191,30); margin-bottom: 14px; }
        .ct-hero-title { font-size: clamp(2.2rem,5vw,3.8rem); font-weight: 900; color: #fff; line-height: 1.1; margin-bottom: 14px; }
        .ct-hero-sub { font-size: 17px; color: rgba(255,255,255,0.72); max-width: 520px; line-height: 1.8; }

        .ct-main { background: #f7f9fc; padding: 80px 0 96px; }

        /* Left — contact info panel */
        .ct-info-panel {
          background: #0d1b2a;
          border-radius: 20px;
          padding: 48px 40px;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .ct-info-panel::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: ${BG};
        }
        .ct-info-heading { font-size: 22px; font-weight: 800; color: #fff; margin-bottom: 8px; }
        .ct-info-sub { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 36px; }
        .ct-info-item { display: flex; gap: 16px; align-items: flex-start; margin-bottom: 28px; }
        .ct-info-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
        .ct-info-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: rgb(0,166,228); margin-bottom: 5px; }
        .ct-info-line { font-size: 14px; color: rgba(255,255,255,0.78); line-height: 1.65; margin: 0; }
        .ct-info-divider { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 32px 0; }
        .ct-social-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.45); margin-bottom: 14px; }

        /* Right — form panel */
        .ct-form-panel {
          background: #fff;
          border-radius: 20px;
          padding: 48px 40px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.08);
        }
        .ct-form-heading { font-size: 22px; font-weight: 800; color: #0d1b2a; margin-bottom: 6px; }
        .ct-form-sub { font-size: 14px; color: #6b7a8d; margin-bottom: 32px; line-height: 1.7; }

        /* Override form-control for this page */
        .ct-form-panel .form-control {
          border: 1.5px solid #e8ecf0;
          border-radius: 10px;
          font-size: 14px;
          background: #f7f9fc;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .ct-form-panel .form-control:focus {
          border-color: rgb(0,166,228);
          box-shadow: 0 0 0 3px rgba(0,166,228,0.12);
          background: #fff;
        }
        .ct-form-panel .btn-primary {
          background: ${BG};
          border: none;
          border-radius: 50px;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 14px 40px;
          transition: opacity 0.25s, box-shadow 0.25s;
        }
        .ct-form-panel .btn-primary:hover {
          opacity: 0.9;
          box-shadow: 0 8px 24px rgba(0,166,228,0.35);
        }

        @media(max-width:768px){
          .ct-info-panel, .ct-form-panel { padding: 36px 24px; }
        }
      `}</style>

      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      {/* ── HERO ── */}
      <section className="ct-hero">
        <div className="container ct-hero-content">
          <p className="ct-hero-label">We'd Love to Hear from You</p>
          <h1 className="ct-hero-title">Get in Touch</h1>
          <p className="ct-hero-sub">Reach out to our team for technical assistance, product information, & inquiries.</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="ct-main">
        <div className="container">
          <div className="row gy-5 align-items-stretch">

            {/* Left — Info Panel */}
            <div className="col-lg-4">
              <div className="ct-info-panel">
                <h3 className="ct-info-heading">Contact Information</h3>
                {/* <p className="ct-info-sub">Our team is available during business hours. We typically respond within 24 hours.</p> */}

                {contactDetails.map(({ icon, label, lines }) => (
                  <div className="ct-info-item" key={label}>
                    <div className="ct-info-icon">{icon}</div>
                    <div>
                      <p className="ct-info-label">{label}</p>
                      {lines.map((l) => <p className="ct-info-line" key={l}>{l}</p>)}
                    </div>
                  </div>
                ))}

                <hr className="ct-info-divider" />
                <p className="ct-social-label">Follow Us</p>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/yophiel-internationals"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    style={{
                      width: '38px', height: '38px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      textDecoration: 'none', transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#0A66C2'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {/* Twitter / X */}
                  <a
                    href="#"
                    style={{
                      width: '38px', height: '38px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: '700',
                      textTransform: 'uppercase', textDecoration: 'none',
                      transition: 'background 0.2s',
                    }}
                  >
                    tw
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form Panel */}
            <div className="col-lg-8">
              <div className="ct-form-panel">
                <h3 className="ct-form-heading">Send Us a Message</h3>
                <p className="ct-form-sub">Fill in the form below and one of our specialists will be in touch shortly.</p>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer11 />
    </Fragment>
  );
}
