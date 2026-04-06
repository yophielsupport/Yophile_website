import { Fragment } from 'react';

const BRAND_GRADIENT = 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)';

const vmvItems = [
  {
    num: '01',
    title: 'Our Vision',
    text: 'We aspire to be global leaders in each of our chosen businesses by 2030 — setting new benchmarks for quality, integrity, and innovation.',
  },
  {
    num: '02',
    title: 'Our Mission',
    text: 'To be the most reliable global company for customers and suppliers, delivering value and maximizing prosperity through world-class products and services.',
  },
  {
    num: '03',
    title: 'Our Values',
    isValues: true,
  },
];

const About19 = () => {
  return (
    <Fragment>
      <style jsx global>{`
        .vmv-card {
          background: #fff;
          border-radius: 16px;
          padding: 36px 28px 32px;
          height: 100%;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          position: relative;
          overflow: hidden;
          transition: transform 0.32s ease, box-shadow 0.32s ease;
        }
        .vmv-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%);
        }
        .vmv-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }
        .vmv-num {
          font-size: 48px;
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 14px;
          opacity: 0.35;
        }
        .vmv-title {
          font-size: 15px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 14px;
        }
        .about-divider {
          width: 56px;
          height: 3px;
          background: linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%);
          border-radius: 2px;
          margin-bottom: 28px;
        }
      `}</style>

      {/* ── Main Intro ───────────────────────────────────────── */}
      <div className="row mb-12">
        <div className="col-lg-10">

          <h3
            className="display-4 mb-4 text-start"
            style={{ fontWeight: '800', lineHeight: '1.15' }}
          >
            <span style={{ color: '#000' }}>Energizing </span>
            <span
              style={{
                background: BRAND_GRADIENT,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              PEOPLE
            </span>
            <span style={{ color: '#000' }}> ... Energizing </span>
            <span
              style={{
                background: BRAND_GRADIENT,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              CHEMISTRY
            </span>
          </h3>

          <div className="about-divider" />

          <p style={{ color: '#111', fontSize: '16px', lineHeight: '1.9', marginBottom: '18px' }}>
            Welcome to the global arena of Chemicals and Engineering — where{' '}
            <strong>Products, Knowledge and performance</strong> converge to shape a more
            sustainable and technologically advanced future.
          </p>
          <p style={{ color: '#111', fontSize: '16px', lineHeight: '1.9', marginBottom: '18px' }}>
            <strong>Yophiel Internationals</strong> is an internationally recognized chemical
            distribution and engineering services company, established in the western region.
            Ethics and integrity are the cornerstones upon which this firm was built — and we
            will always endeavour to lead the industry in everything we do.
          </p>
          <p style={{ color: '#111', fontSize: '16px', lineHeight: '1.9', marginBottom: '18px' }}>
            Our innovative and value-added services include Formulation Chemistry support, Blending Services , Contract Manufacturing, and the procurement of raw materials. Our strong
            technical team and allied suppliers enable us to offer a wide range of
            performance-oriented products.
          </p>
          <p style={{ color: '#111', fontSize: '16px', lineHeight: '1.9', marginBottom: '0' }}>
            Our wide global network, in-depth industry knowledge, and extensive product range
            allow us to support clients with specialized solutions that maximize productivity
            and profitability.
          </p>
        </div>
      </div>

      {/* ── Vision / Mission — Row 1 (2 centered cards) ─────── */}
      <div className="row gy-4 justify-content-center mb-4">
        {vmvItems.filter(({ isValues }) => !isValues).map(({ num, title, text }) => (
          <div className="col-md-5" key={title}>
            <div className="vmv-card">
              <div className="vmv-num">{num}</div>
              <h5 className="vmv-title">{title}</h5>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Values — Row 2 (full-width landscape) ────────────── */}
      <div className="row mb-14">
        <div className="col-12">
          <div className="vmv-card" style={{ display: 'flex', alignItems: 'center', gap: '56px', padding: '44px 52px' }}>

            {/* Left label */}
            <div style={{ flexShrink: 0, minWidth: '110px' }}>
              <div className="vmv-num">03</div>
              <h5 className="vmv-title">Our Values</h5>
            </div>

            {/* Image — fills all remaining space, constrained so it never overflows */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <img
                src="/img/photos/ourvalue.png"
                alt="Our Values – Integrity, Responsibility, Excellence, Unity, Respect"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
              />
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About19;
