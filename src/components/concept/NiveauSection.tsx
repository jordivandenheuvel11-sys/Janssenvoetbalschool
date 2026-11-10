'use client';

import Image from 'next/image';
import ContactLink from '@/components/contact/ContactLink';

/** Concept “Het niveau dat je kind verdient” — Figma hero 2. */
const NiveauSection = () => {
  return (
    <section
      aria-labelledby="niveau-heading"
      style={{
        backgroundColor: '#f4f4f4',
        padding: 'clamp(48px, 8vw, 100px) 24px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        style={{
          maxWidth: 1300,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(32px, 5vw, 68px)',
        }}
      >
        <div style={{ flex: '1 1 320px', minWidth: 280, maxWidth: 560 }}>
          <h2
            id="niveau-heading"
            style={{
              margin: '0 0 20px',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: 1.15,
              color: '#0f0f0f',
            }}
          >
            Het niveau dat je
            <br />
            kind verdient
          </h2>
          <p
            style={{
              margin: '0 0 28px',
              fontSize: 17,
              fontWeight: 500,
              lineHeight: 1.75,
              color: '#3a3a3a',
              maxWidth: 36rem,
            }}
          >
            Ik train spelers uit Velden en gemeente Venlo die naast clubtraining
            extra willen werken aan balvaardigheid, sneller handelen en meer
            zelfvertrouwen in de wedstrijd. Persoonlijke aandacht — geen grote
            groep.
          </p>
          <ContactLink
            href="/proefles-aanvragen"
            type="proefles"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              color: '#1a1a1b',
              padding: '12px 32px',
              borderRadius: 30,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            }}
          >
            Proefles aanvragen
          </ContactLink>
        </div>

        <div
          style={{
            flex: '1 1 280px',
            minWidth: 260,
            maxWidth: 542,
            width: '100%',
            position: 'relative',
            aspectRatio: '542 / 551',
            borderRadius: 20,
            overflow: 'hidden',
            backgroundColor: '#1a1a1a',
          }}
        >
          <Image
            src="/concept/niveau-photo.webp"
            alt="Jeugdspeler tijdens individuele voetbaltraining"
            fill
            sizes="(max-width: 768px) 100vw, 542px"
            quality={75}
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default NiveauSection;
