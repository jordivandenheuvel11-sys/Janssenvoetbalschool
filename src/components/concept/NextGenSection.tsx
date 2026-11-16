'use client';

import Image from 'next/image';

/** “De volgende generatie van voetballers” — Figma hero 2. */
const NextGenSection = () => {
  return (
    <section
      aria-labelledby="nextgen-heading"
      style={{
        backgroundColor: '#f4f4f4',
        padding: 'clamp(40px, 6vw, 72px) 24px clamp(56px, 8vw, 96px)',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div
          style={{
            textAlign: 'center',
            maxWidth: 560,
            margin: '0 auto clamp(32px, 5vw, 50px)',
          }}
        >
          <h2
            id="nextgen-heading"
            style={{
              margin: '0 0 14px',
              fontSize: 'clamp(1.6rem, 3.4vw, 2.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: '#0f0f0f',
            }}
          >
            De volgende generatie van voetballers
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              fontWeight: 600,
              lineHeight: 1.55,
              letterSpacing: '-0.02em',
              color: '#0f0f0f',
            }}
          >
            Doe wat je leuk vindt, dan is het ook niet erg om te doen
          </p>
        </div>

        <div
          className="nextgen-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 20,
            alignItems: 'stretch',
          }}
        >
          <div
            style={{
              position: 'relative',
              minHeight: 280,
              aspectRatio: '629 / 500',
              borderRadius: 10,
              overflow: 'hidden',
              backgroundColor: '#111',
            }}
          >
            <Image
              src="/concept/jelte-coach.webp"
              alt="Jelte Janssen tijdens training"
              fill
              sizes="(max-width: 768px) 100vw, 640px"
              quality={80}
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            />
          </div>

          <div
            style={{
              backgroundColor: '#D90429',
              borderRadius: 10,
              minHeight: 280,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              padding: 'clamp(28px, 4vw, 48px)',
              textAlign: 'center',
              color: '#ffffff',
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: 500,
                fontSize: 'clamp(1.05rem, 2.2vw, 1.5rem)',
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              “Voetbal en training geven zijn altijd al mijn passies geweest. Nu
              heb ik een manier gevonden om deze passie over te brengen door
              middel van mijn trainingen”
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                fontWeight: 500,
                letterSpacing: '-0.02em',
              }}
            >
              Jelte Janssen — Eigenaar JVS
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nextgen-grid {
            grid-template-columns: 1fr !important;
          }
          .nextgen-grid > div {
            aspect-ratio: 4 / 3 !important;
            min-height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default NextGenSection;
