'use client';

import React, { useEffect, useRef, useState } from 'react';

const ARTICLE_HREF =
  'https://omroepvenlo.nl/nieuws/artikel/jelte-janssen-19-heeft-zijn-eigen-voetbalschool';

/** Figma hero 2 “Gezien bij” — Omroep Venlo article block on /nieuw only. */
const GezienBijBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Gezien bij"
      style={{
        backgroundColor: '#f4f4f4',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '28px 24px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
          transition:
            'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <a
          href={ARTICLE_HREF}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            maxWidth: 560,
            margin: '0 auto',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <img
            src="/press/omroep-venlo-dark.svg"
            alt="Omroep Venlo"
            width={140}
            height={30}
            style={{
              width: 140,
              height: 'auto',
              maxHeight: 30,
              display: 'block',
              objectFit: 'contain',
            }}
          />
          <p
            style={{
              margin: 0,
              maxWidth: 469,
              fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: '0.01em',
              textAlign: 'center',
              color: '#1a1a1b',
            }}
          >
            Jelte Janssen (19) heeft zijn eigen voetbalschool
          </p>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#1a1a1b',
              borderBottom: '1.5px solid #D90429',
              paddingBottom: 2,
            }}
          >
            Lees het artikel
          </span>
        </a>
      </div>
    </section>
  );
};

export default GezienBijBar;
