'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * LCP-first hero: poster image paints immediately; video loads after idle/timeout
 * so Lighthouse does not wait on a multi‑MB MP4 for LCP.
 */
const Hero = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [loadVideo, setLoadVideo] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    const start = () => {
      if (!cancelled) setLoadVideo(true);
    };

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(start, { timeout: 2000 });
      return () => {
        cancelled = true;
        w.cancelIdleCallback?.(id);
      };
    }

    const t = window.setTimeout(start, 1200);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  React.useEffect(() => {
    if (!loadVideo || !videoRef.current) return;
    videoRef.current.play().catch(() => {
      /* autoplay may be blocked — poster remains */
    });
  }, [loadVideo]);

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
        paddingTop: isMobile ? '0' : '220px',
        overflow: 'hidden',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* LCP element: optimized poster */}
      <Image
        src="/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {loadVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/hero-bg.webp"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      )}

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%)',
          zIndex: 1,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1
          style={{
            marginBottom: '32px',
            maxWidth: '800px',
            lineHeight: '1.1',
            fontSize: 'clamp(2rem, 6vw, 3.8rem)',
            color: '#ffffff',
            textShadow: 'none',
            margin: '0 auto 32px',
            letterSpacing: '-0.02em',
            fontWeight: '800',
            textTransform: 'none',
          }}
        >
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
          <Link
            href="/proefles-aanvragen"
            className="btn btn-secondary"
            style={{
              padding: '12px 32px',
              fontSize: '15px',
              borderRadius: '9999px',
              backgroundColor: '#ffffff',
              color: '#1a1a1b',
              fontWeight: '700',
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
