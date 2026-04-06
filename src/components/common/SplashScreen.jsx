import { useEffect, useState } from 'react';

const LINE1 = 'YOPHIEL'.split('');
const LINE2 = 'INTERNATIONALS'.split('');

// Tagline words with individual colors matching the brand image
const TAGLINE = [
  { word: 'energizing', color: 'rgb(121,191,30)' },
  { word: '\u00a0people\u00a0', color: 'rgb(0,166,228)' },
  { word: 'for\u00a0growth', color: 'rgb(121,191,30)' },
];

const SplashScreen = ({ onDone }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 3400);
    const t2 = setTimeout(() => onDone && onDone(), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const letterDelay = (idx) => idx * 85;

  return (
    <>
      <style>{`
        .sp-wrap {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fff;
          transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .sp-wrap.sp-out {
          opacity: 0;
          pointer-events: none;
        }

        /* Logo drop-in */
        @keyframes spLogoIn {
          0%   { opacity: 0; transform: translateY(-22px) scale(0.88); }
          60%  { opacity: 1; transform: translateY(4px) scale(1.03); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .sp-logo {
          width: 72px;
          height: auto;
          animation: spLogoIn 0.55s cubic-bezier(0.34,1.56,0.64,1) both;
          margin-bottom: 20px;
        }

        /* Letter reveal */
        @keyframes spLetterIn {
          0%   { opacity: 0; transform: translateY(18px) scaleY(0.6); filter: blur(4px); }
          60%  { opacity: 1; transform: translateY(-3px) scaleY(1.05); filter: blur(0); }
          100% { opacity: 1; transform: translateY(0) scaleY(1); filter: blur(0); }
        }
        .sp-letter {
          display: inline-block;
          opacity: 0;
          animation: spLetterIn 0.42s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        /* YOPHIEL */
        .sp-line1 {
          display: flex;
          gap: 1px;
          font-size: clamp(2.2rem, 6vw, 3.6rem);
          font-weight: 900;
          letter-spacing: 0.18em;
          line-height: 1;
          margin-bottom: 4px;
        }

        /* INTERNATIONALS */
        .sp-line2 {
          display: flex;
          gap: 0.5px;
          font-size: clamp(0.7rem, 1.8vw, 1rem);
          font-weight: 700;
          letter-spacing: 0.38em;
          line-height: 1;
          margin-bottom: 28px;
        }

        /* Gradient bar */
        @keyframes spBarGrow {
          0%   { width: 0; }
          100% { width: 100%; }
        }
        @keyframes spBarFadeIn {
          to { opacity: 1; }
        }
        .sp-bar-wrap {
          width: clamp(200px, 30vw, 300px);
          height: 2px;
          background: #f0f0f0;
          border-radius: 2px;
          overflow: hidden;
          opacity: 0;
          animation: spBarFadeIn 0.3s 1.8s forwards;
          margin-bottom: 28px;
        }
        .sp-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%);
          border-radius: 2px;
          animation: spBarGrow 1s 1.85s cubic-bezier(0.4,0,0.2,1) forwards;
          width: 0;
        }

        /* Tagline */
        @keyframes spTaglineIn {
          0%   { opacity: 0; transform: translateY(12px); letter-spacing: 0.18em; }
          100% { opacity: 1; transform: translateY(0);    letter-spacing: 0.08em; }
        }
        .sp-tagline {
          display: flex;
          align-items: center;
          gap: 0;
          font-size: clamp(0.85rem, 2.2vw, 1.1rem);
          font-weight: 800;
          letter-spacing: 0.08em;
          opacity: 0;
          /* starts appearing after bar is mostly done */
          animation: spTaglineIn 0.65s 2.85s cubic-bezier(0.34,1.2,0.64,1) forwards;
        }
        .sp-tagline-word {
          display: inline-block;
        }
      `}</style>

      <div className={`sp-wrap${fadeOut ? ' sp-out' : ''}`}>

        {/* Logo icon */}
        <img
          className="sp-logo"
          src="/img/Website/Site Icon 1.png"
          alt="Yophiel"
          onError={(e) => { e.target.src = '/img/Website/Page Logo 1.png'; e.target.style.width = '130px'; }}
        />

        {/* YOPHIEL — letter by letter */}
        <div className="sp-line1">
          {LINE1.map((char, i) => (
            <span
              key={i}
              className="sp-letter"
              style={{
                animationDelay: `${letterDelay(i)}ms`,
                background: 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* INTERNATIONALS — letter by letter */}
        <div className="sp-line2">
          {LINE2.map((char, i) => (
            <span
              key={i}
              className="sp-letter"
              style={{
                animationDelay: `${letterDelay(LINE1.length + i + 2)}ms`,
                color: '#64748b',
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Gradient bar */}
        <div className="sp-bar-wrap">
          <div className="sp-bar-fill" />
        </div>

        {/* Tagline — slides up after bar fills */}
        <div className="sp-tagline">
          {TAGLINE.map(({ word, color }) => (
            <span
              key={word}
              className="sp-tagline-word"
              style={{ color }}
            >
              {word}
            </span>
          ))}
        </div>

      </div>
    </>
  );
};

export default SplashScreen;
