import Link from 'next/link';

const quickLinks = [
  { title: 'Home',           href: '/' },
  { title: 'About Us',      href: '/whoweare' },
  { title: 'Business Lines', href: '/oilfield' },
  { title: 'Services',      href: '/engneering' },
  { title: 'Contact Us',    href: '/contact-2' },
  { title: 'Brochure',      href: 'https://drive.google.com/file/d/1YbXu5NtP98UmbKWDTNfVw4Aj8RJefGev/view?usp=sharing' },
];

const BG = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

/* Reusable section heading style */
const sectionHead = {
  fontSize: '16px',
  fontWeight: '800',
  color: '#0d1b2a',
  marginBottom: '20px',
  paddingBottom: '10px',
  borderBottom: '2px solid #e8ecf0',
  letterSpacing: '0.01em',
};

const subHead = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#0d1b2a',
  marginBottom: '3px',
};

const bodyText = {
  fontSize: '13.5px',
  color: '#64748b',
  lineHeight: '1.7',
  margin: 0,
};

const Footer11 = () => {
  return (
    <footer style={{ background: '#fff', borderTop: '2px solid #e8ecf0' }}>
      <div className="container" style={{ padding: '56px 15px 44px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'space-between' }}>

          {/* ── Logo + tagline ── */}
          <div style={{ flex: '1 1 170px', minWidth: '160px', maxWidth: '195px' }}>
            <img
              src="/img/Website/Page Logo 1.png"
              alt="Yophiel Internationals"
              style={{ width: '140px', height: 'auto', marginBottom: '16px', display: 'block' }}
            />
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.8', margin: 0 }}>
              Proud Trade Partner With<br />
              <strong style={{ color: '#0d1b2a' }}>S&P Global Metals Award Winner</strong><br />
              <strong style={{ color: '#0d1b2a' }}>2020 Company</strong> based in<br />
              <strong style={{ color: '#0d1b2a' }}>Switzerland.</strong>
            </p>
          </div>

          {/* ── Meet Us Here ── */}
          <div style={{ flex: '1 1 210px', minWidth: '195px' }}>
            <h5 style={sectionHead}>Meet Us Here</h5>

            {/* India HQ */}
            <div style={{ marginBottom: '18px' }}>
              <p style={subHead}>India – HQ &nbsp;🇮🇳</p>
              <p style={bodyText}>
                📍 F 705, West Coast Park, NDA Road,<br />
                Shivane, Pune 411023, MH, IND
              </p>
            </div>

            {/* UAE */}
            <div style={{ marginBottom: '18px' }}>
              <p style={subHead}>United Arab Emirates &nbsp;🇦🇪</p>
              <p style={bodyText}>
                📍 WH 07, Block 07, Industrial Area 2,<br />
                Ajman, UAE
              </p>
            </div>

            {/* Saudi Arabia */}
            <div>
              <p style={subHead}>Saudi Arabia &nbsp;🇸🇦</p>
              <p style={bodyText}>
                📍 13226, Riyadh, Saudi Arabia
              </p>
            </div>
          </div>

          {/* ── Get In Touch ── */}
          <div style={{ flex: '1 1 190px', minWidth: '175px' }}>
            <h5 style={sectionHead}>Get In Touch</h5>

            {/* Phone */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '18px' }}>
              <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>📞</span>
              <div>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>Phone</p>
                <a href="tel:+919637422525" style={{ display: 'block', ...bodyText, color: '#0d1b2a', textDecoration: 'none', fontWeight: '600' }}>+91 9637422525</a>
                <a href="tel:+971509014345" style={{ display: 'block', ...bodyText, color: '#0d1b2a', textDecoration: 'none', fontWeight: '600' }}>+971 509014345</a>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '18px' }}>
              <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>✉️</span>
              <div>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>Email</p>
                <a href="mailto:sales@yophiel.net" style={{ display: 'block', fontSize: '13.5px', color: 'rgb(0,166,228)', textDecoration: 'none', fontWeight: '600', lineHeight: '1.6' }}>sales@yophiel.net</a>
                <a href="mailto:info@yophiel.net"  style={{ display: 'block', fontSize: '13.5px', color: 'rgb(0,166,228)', textDecoration: 'none', fontWeight: '600', lineHeight: '1.6' }}>info@yophiel.net</a>
              </div>
            </div>

            {/* LinkedIn */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', flexShrink: 0 }}>🔗</span>
              <div>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>Follow Us</p>
                <a
                  href="https://www.linkedin.com/company/yophiel-internationals"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
                >
                  <span style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#0A66C2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </span>
                  <span style={{ fontSize: '13.5px', color: '#0A66C2', fontWeight: '600' }}>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div style={{ flex: '1 1 130px', minWidth: '120px' }}>
            <h5 style={sectionHead}>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map(({ title, href }) => (
                <li key={title} style={{ marginBottom: '11px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: BG, flexShrink: 0, display: 'inline-block' }} />
                  <Link
                    href={href}
                    style={{ fontSize: '14px', color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgb(0,166,228)'}
                    onMouseLeave={e => e.currentTarget.style.color = '#4a5568'}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '100%', minHeight: '54px',
        background: BG, color: '#fff', textAlign: 'center', padding: '10px 20px',
      }}>
        <p style={{ margin: 0, fontSize: '13.5px', fontWeight: '600', letterSpacing: '0.01em' }}>
          Copyright © {new Date().getFullYear()} yophiel.net &nbsp;|&nbsp; Yophiel Internationals Pvt. Ltd. &nbsp;|&nbsp; All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer11;
