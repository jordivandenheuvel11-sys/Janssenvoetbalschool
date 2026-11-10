'use client';

import React from 'react';
import ContactLink from '@/components/contact/ContactLink';

/** Concept hero for /nieuw — matches Figma "Janssen voetbalschool hero 2". */
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
        /* Exact viewport height so the fold sits at the bottom of the screen */
        height: '100dvh',
        minHeight: '100dvh',
        maxHeight: '100dvh',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isMobile ? 'flex-end' : 'center',
        position: 'relative',
        margin: 0,
        paddingTop: isMobile ? '88px' : '120px',
        paddingBottom: isMobile ? '48px' : 0,
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
          objectPosition: isMobile ? '92% 28%' : '78% center',
          zIndex: 0,
        }}
      />

      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: isMobile
            ? 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,0.25) 62%, rgba(0,0,0,0.35) 100%)'
            : 'linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.12) 68%, rgba(0,0,0,0.05) 100%)',
          zIndex: 1,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <h1
          id="hero2-heading"
          style={{
            margin: '0 0 24px',
            maxWidth: 744,
            fontSize: 'clamp(2.4rem, 5.2vw, 3.8rem)',
            fontWeight: 700,
            letterSpacing: '0.02em',
            lineHeight: 1.08,
            color: '#ffffff',
          }}
        >
          Individuele voetbaltraining in Velden
        </h1>
        <p
          style={{
            margin: '0 0 32px',
            maxWidth: 544,
            fontSize: 'clamp(1.05rem, 2vw, 1.15rem)',
            fontWeight: 500,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.92)',
          }}
        >
          Extra training naast je club, in kleine groepjes voor jeugd uit{' '}
          <strong style={{ fontWeight: 700 }}>Limburg</strong> (locatie Velden,
          gemeente Venlo).
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
    </section>
  );
};

export default Hero2;
