'use client';

import Image from 'next/image';

const STORIES = [
  {
    name: 'DAILY',
    club: 'Fortuna Sittard',
    copy: 'Daily werd begin oktober gescout voor Fortuna Sittard',
    photo: '/concept/daily.webp',
    logo: '/concept/logo-fortuna.webp',
    logoAlt: 'Fortuna Sittard',
    logoSide: 'left' as const,
    objectPosition: 'center 30%',
  },
  {
    name: 'DANI-DEX',
    club: 'VVV-Venlo',
    copy: 'Dani-Dex werd begin november uitgenodigd voor het talentenplan van VVV-Venlo',
    photo: '/concept/dani-dex.webp',
    logo: '/concept/logo-vvv.webp',
    logoAlt: 'VVV-Venlo',
    logoSide: 'right' as const,
    objectPosition: 'center 25%',
  },
];

/** “Van Janssenvoetbalschool naar profclub” — Figma hero 2. */
const SuccessStoriesSection = () => {
  return (
    <section
      aria-labelledby="success-heading"
      style={{
        backgroundColor: '#f4f4f4',
        padding: 'clamp(48px, 7vw, 80px) 24px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 8px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 50px)' }}>
          <h2
            id="success-heading"
            style={{
              margin: '0 0 12px',
              fontSize: 'clamp(1.6rem, 3.4vw, 2.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: '#0f0f0f',
            }}
          >
            Van Janssenvoetbalschool naar profclub
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#0f0f0f',
            }}
          >
            Klaar voor de volgende stap
          </p>
        </div>

        <div
          className="success-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 'clamp(20px, 3vw, 28px)',
          }}
        >
          {STORIES.map((story) => (
            <article key={story.name} style={{ minWidth: 0 }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '450 / 400',
                  borderRadius: 10,
                  overflow: 'visible',
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    overflow: 'hidden',
                    backgroundColor: '#111',
                  }}
                >
                  <Image
                    src={story.photo}
                    alt={`${story.name} — ${story.club}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    quality={80}
                    style={{
                      objectFit: 'cover',
                      objectPosition: story.objectPosition,
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: 12,
                      bottom: 10,
                      fontFamily: 'var(--font-display), var(--font-sans)',
                      fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      color: 'rgba(217, 4, 41, 0.72)',
                      textTransform: 'uppercase',
                      pointerEvents: 'none',
                    }}
                  >
                    {story.name}
                  </span>
                </div>
                <img
                  src={story.logo}
                  alt={story.logoAlt}
                  width={story.logoSide === 'left' ? 92 : 72}
                  height={story.logoSide === 'left' ? 92 : 78}
                  style={{
                    position: 'absolute',
                    top: -28,
                    ...(story.logoSide === 'left'
                      ? { left: -18 }
                      : { right: -12 }),
                    width: story.logoSide === 'left' ? 92 : 72,
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.25))',
                    zIndex: 2,
                  }}
                />
              </div>
              <h3
                style={{
                  margin: '0 0 4px',
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#0f0f0f',
                }}
              >
                {story.club}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 17,
                  fontWeight: 600,
                  lineHeight: 1.45,
                  letterSpacing: '-0.02em',
                  color: '#3a3a3a',
                  maxWidth: '28rem',
                }}
              >
                {story.copy}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .success-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessStoriesSection;
