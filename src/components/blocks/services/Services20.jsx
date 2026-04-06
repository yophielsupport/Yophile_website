import { Fragment } from 'react';
import { serviceList10 } from 'data/service';
import Link from 'next/link';

const BRAND_GRADIENT = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';
const HEX_GRADIENT   = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

const featuredProducts = [
  {
    name: 'Basic Chemistry Products',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6" />
        <path d="M8 3L4.2 19.5A1 1 0 005.1 21h13.8a1 1 0 00.9-1.5L16 3" />
        <circle cx="9" cy="15.5" r="1" fill="white" stroke="none" />
        <circle cx="13" cy="17.5" r="1.3" fill="white" stroke="none" />
        <circle cx="11" cy="13.5" r="0.8" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Functional Additives',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'Performance Chemicals & Ingredients',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
  },
  {
    name: 'Specialty Oils & Lubricants',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 9.5 5 14.5a7 7 0 0014 0C19 9.5 12 2 12 2z" />
        <path d="M9 14.5a3 3 0 003 3" strokeOpacity="0.6" />
      </svg>
    ),
  },
  {
    name: 'Value Added Services',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: 'Honey & Natural Ingredients',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 5h4l-2.5 4 1.5 5-6-2-6 2 1.5-5L5 7h4l3-5z" fill="rgba(255,255,255,0.25)" />
        <path d="M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3" />
        <path d="M12 15v3" />
      </svg>
    ),
  },
];

/* ─── Hexagon Cell ─────────────────────────────────────────── */
const HexCell = ({ name, icon }) => (
  <div
    className="hex-cell"
    style={{
      width: '220px',
      height: '254px',
      background: HEX_GRADIENT,
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      gap: '10px',
    }}
  >
    <div style={{ opacity: 0.92 }}>{icon}</div>
    <span
      style={{
        color: '#fff',
        fontWeight: '700',
        fontSize: '13px',
        textAlign: 'center',
        padding: '0 36px',
        lineHeight: '1.55',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
      }}
    >
      {name}
    </span>
  </div>
);

/* ─── Accent Bar ───────────────────────────────────────────── */
const AccentBar = () => (
  <div style={{ width: '56px', height: '3px', background: BRAND_GRADIENT, borderRadius: '2px', margin: '0 auto 20px' }} />
);

/* ─── Section Label ────────────────────────────────────────── */
const SectionLabel = ({ text }) => (
  <p
    style={{
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontSize: '12px',
      color: 'rgb(0,166,228)',
      marginBottom: '10px',
    }}
  >
    {text}
  </p>
);

/* ─── Section Heading ──────────────────────────────────────── */
const SectionHeading = ({ children }) => (
  <h2
    style={{
      background: BRAND_GRADIENT,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: '800',
      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
      lineHeight: '1.2',
      marginBottom: '16px',
    }}
  >
    {children}
  </h2>
);

/* ═══════════════════════════════════════════════════════════ */
const Services20 = () => {
  return (
    <Fragment>
      <style jsx global>{`
        /* ── Industry Cards ── */
        .ind-card {
          border-radius: 14px;
          overflow: hidden;
          height: 248px;
          position: relative;
          box-shadow: 0 4px 18px rgba(0,0,0,0.12);
          cursor: pointer;
          display: block;
          text-decoration: none !important;
        }
        .ind-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.55s ease;
        }
        .ind-card:hover .ind-img {
          transform: scale(1.08);
        }
        .ind-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.08) 60%);
          transition: background 0.4s ease;
        }
        .ind-card:hover .ind-overlay {
          background: linear-gradient(to top, rgba(0,60,90,0.93) 0%, rgba(0,100,160,0.18) 60%);
        }
        .ind-bar {
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%);
          border-radius: 1px;
          margin-top: 10px;
          transition: width 0.4s ease;
        }
        .ind-card:hover .ind-bar {
          width: 40px;
        }
        .ind-title {
          color: #fff;
          font-size: 13.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          line-height: 1.45;
          margin: 0;
        }

        /* ── Hexagon Cells ── */
        .hex-cell {
          transition: transform 0.35s ease, filter 0.35s ease;
        }
        .hex-cell:hover {
          transform: scale(1.1) translateY(-4px);
          filter: brightness(1.2);
        }
      `}</style>

      {/* ════════════════════════════════════════════════════════
          SECTION 1 — FOCUS INDUSTRIES
      ════════════════════════════════════════════════════════ */}
      <div className="row text-center mb-2">
        <div className="col-lg-8 offset-lg-2">
          <SectionLabel text="What We Serve" />
          <SectionHeading>Performance Chemicals for Every Industry</SectionHeading>
          <AccentBar />
          
          <p
            style={{
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              fontSize: '12px',
              color: '#111',
              marginBottom: '40px',
            }}
          >
            Our Focus Industries
          </p>
        </div>
      </div>

      <div className="row gy-4 mb-14">
        {serviceList10.map(({ id, title, backgroundImage, linkUrl }) => (
          <div className="col-sm-6 col-lg-4" key={id}>
            <Link href={linkUrl} className="ind-card">
              <div className="ind-img" style={{ backgroundImage: `url(${backgroundImage})` }} />
              <div className="ind-overlay" />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '22px 20px' }}>
                <h3 className="ind-title">{title}</h3>
                <div className="ind-bar" />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════
          SECTION 2 — FEATURED PRODUCTS (HEXAGONS)
      ════════════════════════════════════════════════════════ */}
      <div
        style={{
          background: 'linear-gradient(145deg, #eef9ff 0%, #f3fff0 100%)',
          borderRadius: '20px',
          padding: '64px 32px 72px',
          marginBottom: '80px',
        }}
      >
        <div className="row text-center mb-4">
          <div className="col-lg-8 offset-lg-2">
            
            <SectionHeading>Sustainable Chemistry for Every Product</SectionHeading>
            <AccentBar />
            <p
              style={{
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                fontSize: '12px',
                color: '#111',
                marginBottom: '48px',
              }}
            >
              Our Featured Products
            </p>
          </div>
        </div>

        {/* Row 1 — 3 hexagons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}
        >
          {featuredProducts.slice(0, 3).map(({ name, icon }) => (
            <HexCell key={name} name={name} icon={icon} />
          ))}
        </div>

        {/* Row 2 — 3 hexagons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          {featuredProducts.slice(3).map(({ name, icon }) => (
            <HexCell key={name} name={name} icon={icon} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Services20;
