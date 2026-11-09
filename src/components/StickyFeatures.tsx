'use client';

import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    title: 'Individuele aandacht',
    video: '/feature-video-1.mp4',
    poster: '/feature-poster-1.jpg',
    description: 'Persoonlijke coaching om jouw unieke talenten te ontwikkelen.',
  },
  {
    title: 'Resultaat',
    video: '/feature-video-2.mp4',
    poster: '/feature-poster-2.jpg',
    description: 'Focus op vooruitgang en het behalen van sportieve doelen.',
  },
  {
    title: 'Plezier',
    video: '/feature-video-3.mp4',
    poster: '/feature-poster-3.jpg',
    description: 'De basis van elke goede voetballer is passie voor het spel.',
  },
];

type StickyFeaturesProps = {
  sectionHeading?: string;
};

function FeatureCard({
  feature,
  isMobile,
}: {
  feature: (typeof features)[number];
  isMobile: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setActive(inView);
        const video = videoRef.current;
        if (!video) return;
        if (inView) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.15 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        position: isMobile ? 'relative' : 'sticky',
        top: isMobile ? '0' : '10vh',
        width: isMobile ? '85vw' : '100%',
        height: isMobile ? '65vh' : '80vh',
        minHeight: isMobile ? 'auto' : '500px',
        backgroundColor: '#1a1a1a',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: 'none',
        flexShrink: 0,
        scrollSnapAlign: isMobile ? 'center' : 'none',
      }}
    >
      {/* Poster always present for CLS-stable paint */}
      <img
        src={feature.poster}
        alt=""
        width={960}
        height={540}
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isMobile ? 1 : 0.6,
        }}
      />

      {active && (
        <video
          ref={videoRef}
          src={feature.video}
          poster={feature.poster}
          loop
          muted
          playsInline
          preload="none"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isMobile ? 1 : 0.6,
          }}
        />
      )}

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: isMobile ? '30px' : '60px',
          background: isMobile
            ? 'none'
            : 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#ffffff',
        }}
      >
        <h3
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: '24px',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
          }}
        >
          {feature.title}
        </h3>
        <p
          style={{
            fontSize: '20px',
            maxWidth: '450px',
            lineHeight: '1.6',
            opacity: 0.9,
            fontWeight: '500',
          }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}

const StickyFeatures = ({ sectionHeading }: StickyFeaturesProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="aanpak"
      style={{
        backgroundColor: '#ffffff',
        padding: '120px 24px 60px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '80px', textAlign: 'center' }}>
        <span
          style={{
            fontSize: '14px',
            fontWeight: '900',
            color: '#D90429',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '20px',
          }}
        >
          Mijn Aanpak
        </span>
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            color: '#000000',
            letterSpacing: '-0.04em',
            lineHeight: '1.05',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {sectionHeading ?? 'Waarom Janssen Voetbalschool?'}
        </h2>
      </div>

      <div
        ref={scrollContainerRef}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          gap: isMobile ? '16px' : '100px',
          overflowX: isMobile ? 'auto' : 'visible',
          scrollSnapType: isMobile ? 'x mandatory' : 'none',
          scrollBehavior: 'smooth',
          paddingBottom: isMobile ? '24px' : '0',
          scrollbarWidth: isMobile ? 'none' : 'auto',
          msOverflowStyle: isMobile ? 'none' : 'auto',
        }}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} isMobile={isMobile} />
        ))}
      </div>

      {isMobile && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
          <button
            onClick={() => scroll('left')}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              cursor: 'pointer',
            }}
            aria-label="Vorige kaart"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              cursor: 'pointer',
            }}
            aria-label="Volgende kaart"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}

      {!isMobile && <div style={{ height: '10vh' }} />}
    </section>
  );
};

export default StickyFeatures;
