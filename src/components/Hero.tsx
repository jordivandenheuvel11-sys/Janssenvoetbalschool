'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Hero: scherpe poster (LCP) + gecomprimeerde loop-video op desktop.
 * Video ~2.2 MB (720p / 24 fps / 900 kbps, geen audio) — idle-load, niet op mobiel.
 */
const Hero = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [loadVideo, setLoadVideo] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  React.useEffect(() => {
    if (isMobile) return;

    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (connection?.saveData) return;
    if (connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g') {
      return;
    }

    let cancelled = false;
    const start = () => {
      if (!cancelled) setLoadVideo(true);
    };

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(start, { timeout: 2500 });
      return () => {
        cancelled = true;
        w.cancelIdleCallback?.(id);
      };
    }

    const t = window.setTimeout(start, 1500);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [isMobile]);

  React.useEffect(() => {
    if (!loadVideo || !videoRef.current) return;
    videoRef.current.play().catch(() => {});
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
        paddingTop: isMobile ? '88px' : '120px',
        overflow: 'hidden',
        backgroundColor: '#0a0a0a',
      }}
    >
      <img
        src="/hero-loop-poster-1920.webp"
        srcSet="/hero-loop-poster.webp 1280w, /hero-loop-poster-1920.webp 1920w"
        sizes="100vw"
        alt=""
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {loadVideo && !isMobile && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/hero-loop-poster-1920.webp"
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
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
      )}

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
            maxWidth: '18ch',
            lineHeight: '1.08',
            fontSize: 'clamp(2.1rem, 5.5vw, 3.8rem)',
            color: '#ffffff',
            margin: '0 0 24px',
            letterSpacing: '-0.03em',
            fontWeight: 800,
          }}
        >
          Individuele voetbaltraining in Velden
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
          Ik geef privé 1-op-1 training aan jeugdspelers in gemeente{' '}
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
