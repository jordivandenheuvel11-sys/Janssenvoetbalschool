'use client';

import Image from 'next/image';

const PHOTOS = [
  {
    src: '/concept/training-bw-1.webp',
    alt: 'Jeugdspeler dribbleert op kunstgras naast een pion',
    caption: 'Balvaardigheid onder druk',
    accent: false,
  },
  {
    src: '/concept/training-color.webp',
    alt: 'Jeugdspeler in Janssen Voetbalschool trainingspak op het veld',
    caption: 'Focus in elk moment',
    accent: true,
  },
  {
    src: '/concept/training-bw-2.webp',
    alt: 'Jeugdspeler dribbelt met de bal tijdens training',
    caption: 'Tempo en zelfvertrouwen',
    accent: false,
  },
] as const;

/** Concept photo strip — tall portraits under NiveauSection, before footer. */
const TrainingPhotosSection = () => {
  return (
    <section
      aria-labelledby="training-photos-heading"
      style={{
        backgroundColor: '#000000',
        padding: 'clamp(56px, 9vw, 112px) 24px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        style={{
          maxWidth: 1300,
          margin: '0 auto',
        }}
      >
        <h2
          id="training-photos-heading"
          style={{
            margin: '0 0 clamp(36px, 5vw, 56px)',
            textAlign: 'center',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '0.02em',
            lineHeight: 1.15,
            color: '#ffffff',
          }}
        >
          Op het veld
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'clamp(16px, 2.4vw, 28px)',
            alignItems: 'start',
          }}
          className="training-photos-grid"
        >
          {PHOTOS.map((photo) => (
            <figure
              key={photo.src}
              style={{
                margin: 0,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '682 / 1024',
                  borderRadius: 20,
                  overflow: 'hidden',
                  backgroundColor: '#111111',
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  quality={80}
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <figcaption
                style={{
                  margin: 0,
                  width: '100%',
                  fontSize: 15,
                  fontWeight: 600,
                  lineHeight: 1.45,
                  letterSpacing: '0.01em',
                  color: photo.accent ? '#7CFF6B' : 'rgba(255,255,255,0.88)',
                }}
              >
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .training-photos-grid {
            grid-template-columns: 1fr !important;
            max-width: 420px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default TrainingPhotosSection;
