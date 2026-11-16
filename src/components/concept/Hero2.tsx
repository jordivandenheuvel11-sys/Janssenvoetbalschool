'use client';

import React from 'react';
import ContactLink from '@/components/contact/ContactLink';

/** Concept hero for /nieuw — Figma “Janssen voetbalschool hero 2”. */
const Hero2 = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <section
      aria-labelledby="hero2-heading"
      style={{
        height: isMobile ? 'auto' : '100dvh',
        minHeight: isMobile ? '100dvh' : '100dvh',
        maxHeight: isMobile ? 'none' : '100dvh',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isMobile ? 'flex-end' : 'center',
        position: 'relative',
        margin: 0,
        paddingTop: isMobile ? '100px' : '120px',
        paddingBottom: isMobile ? '40px' : 0,
        overflow: 'hidden',
        backgroundColor: '#0a0a0a',
      }}
    >
      <img
        src="/concept/hero-2-bg.webp"
        alt=""
        width={1920}
        height={1072}
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: isMobile ? '55% 58%' : '68% center',
          zIndex: 0,
        }}
      />

      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: isMobile
            ? 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.25) 100%)'
            : 'rgba(0,0,0,0.25)',
          zIndex: 1,
        }}
      />

      <div
        className="hero2-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: isMobile ? 'center' : 'flex-start',
          justifyContent: isMobile ? 'center' : 'space-between',
          textAlign: isMobile ? 'center' : 'left',
          gap: isMobile ? 32 : 48,
        }}
      >
        <div
          style={{
            flex: '1 1 280px',
            maxWidth: 744,
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
          }}
        >
          <h1
            id="hero2-heading"
            style={{
              margin: '0 0 28px',
              fontFamily: 'var(--font-display), var(--font-sans)',
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              color: '#ffffff',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            Individuele
            <br />
            voetbaltraining
            <br />
            in Velden
          </h1>
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
            Gratis proefles
          </ContactLink>
        </div>

        <div
          style={{
            flex: '0 1 280px',
            width: '100%',
            maxWidth: isMobile ? 320 : 280,
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            gap: 16,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '273 / 154',
              borderRadius: 10,
              overflow: 'hidden',
              backgroundColor: '#d9d9d9',
            }}
          >
            <video
              src="/feature-video-1.mp4"
              poster="/hero-loop-poster.webp"
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 500,
              lineHeight: 1.35,
              color: 'rgba(255,255,255,0.92)',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            Bekijk de video van een van onze trainingen. We zorgen voor een
            goede sfeer, maar ook een professionele setting
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
