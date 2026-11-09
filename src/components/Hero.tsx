'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Studio hero still (nieuwe bestandsnamen i.v.m. CDN immutable-cache).
 * Geen video.
 */
const Hero = () => {
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
      className="hero"
      style={{
        height: isMobile ? '100dvh' : '100vh',
        minHeight: isMobile ? '100dvh' : '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        margin: '0',
        paddingTop: isMobile ? '88px' : '120px',
        overflow: 'hidden',
        backgroundColor: '#0a0a0a',
      }}
    >
      <picture>
        <source
          type="image/webp"
          srcSet="/hero-studio.webp 1376w, /hero-studio-1920.webp 1920w"
          sizes="100vw"
        />
        <img
          src="/hero-player.jpg"
          srcSet="/hero-player.jpg 1376w, /hero-studio-1920.jpg 1920w"
          sizes="100vw"
          alt=""
          width={1920}
          height={1072}
          fetchPriority="high"
          decoding="async"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'right center',
            zIndex: 0,
          }}
        />
      </picture>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: isMobile
            ? 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.55) 100%)'
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <h1
          style={{
            maxWidth: '16ch',
            lineHeight: '1.08',
            fontSize: 'clamp(2.1rem, 5.5vw, 3.8rem)',
            color: '#ffffff',
            margin: '0 0 24px',
            letterSpacing: '-0.03em',
            fontWeight: 800,
          }}
        >
          Train, ontwikkel en beheers elke vaardigheid.
        </h1>

        <p
          style={{
            margin: '0 0 32px',
            maxWidth: '34rem',
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            lineHeight: 1.65,
            color: 'rgba(255, 255, 255, 0.92)',
            fontWeight: 500,
          }}
        >
          Ik train jeugdspelers individueel in <strong>Velden</strong>, gemeente{' '}
          <strong>Venlo</strong> — zodat jij het beste uit jezelf haalt.
        </p>

        <div className="hero-buttons" style={{ justifyContent: isMobile ? 'center' : 'flex-start' }}>
          <Link
            href="/proefles-aanvragen"
            className="btn btn-secondary"
            style={{
              padding: '12px 32px',
              fontSize: '15px',
              borderRadius: '9999px',
              backgroundColor: '#ffffff',
              color: '#1a1a1b',
              fontWeight: 700,
              border: 'none',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              textDecoration: 'none',
            }}
          >
            Proefles aanvragen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
