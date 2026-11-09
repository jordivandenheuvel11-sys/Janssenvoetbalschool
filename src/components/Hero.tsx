'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Hero = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  const pathname = usePathname();

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="hero" style={{
      height: isMobile ? '100dvh' : '100vh',
      minHeight: isMobile ? '100dvh' : '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      margin: '0',
      paddingTop: isMobile ? '0' : '220px', /* Center on mobile, move down on desktop */
      overflow: 'hidden'
    }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero-bg.jpg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', /* Global darken */
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%)', /* Dual gradient for focus */
          zIndex: 1
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 style={{
          marginBottom: '32px',
          maxWidth: '800px',
          lineHeight: '1.1',
          fontSize: 'clamp(2rem, 6vw, 3.8rem)', /* Smaller title size */
          color: '#ffffff',
          textShadow: 'none',
          margin: '0 auto 32px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
          textTransform: 'none' /* Maintain natural capitalization */
        }}>
          Train, ontwikkel en beheers elke vaardigheid.
        </h1>

        <p
          style={{
            margin: '0 auto 32px',
            maxWidth: '640px',
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            lineHeight: 1.65,
            color: 'rgba(255, 255, 255, 0.92)',
            textAlign: 'center',
            textShadow: '0 1px 12px rgba(0,0,0,0.35)',
            fontWeight: 500,
          }}
        >
          Individuele voetbaltraining in <strong>Velden</strong>, gemeente{' '}
          <strong>Venlo</strong> – voor jeugdspelers die het beste uit zichzelf
          willen halen.
        </p>

        <div className="hero-buttons" style={{ justifyContent: 'center' }}>
          <Link href="/proefles-aanvragen" className="btn btn-secondary" style={{
            padding: '12px 32px', /* Smaller buttons */
            fontSize: '15px',     /* Smaller font */
            borderRadius: '9999px',
            backgroundColor: '#ffffff', /* White as requested */
            color: '#1a1a1b',
            fontWeight: '700',
            border: 'none',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            textDecoration: 'none'
          }}>
            Proefles aanvragen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
