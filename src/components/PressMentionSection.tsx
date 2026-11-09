'use client';

import React, { useEffect, useRef, useState } from 'react';

const ARTICLE_URL =
  'https://omroepvenlo.nl/nieuws/artikel/jelte-janssen-19-heeft-zijn-eigen-voetbalschool';

const PressMentionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Gezien bij Omroep Venlo"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: '28px',
          paddingBottom: '28px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#D90429',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '14px',
            textAlign: 'center',
          }}
        >
          Gezien bij
        </span>

        <a
          href={ARTICLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'inherit',
            maxWidth: '560px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <img
            src="/press/omroep-venlo-dark.svg"
            alt="Omroep Venlo"
            width={140}
            height={30}
            style={{
              width: 'min(140px, 55%)',
              height: 'auto',
              display: 'block',
            }}
          />

          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(1rem, 2.4vw, 1.2rem)',
              fontWeight: 700,
              letterSpacing: '0.01em',
              lineHeight: 1.3,
              color: '#1a1a1b',
              maxWidth: '36ch',
            }}
          >
            Jelte Janssen (19) heeft zijn eigen voetbalschool
          </h2>

          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#1a1a1b',
              borderBottom: '1.5px solid #D90429',
              paddingBottom: '2px',
            }}
          >
            Lees het artikel
          </span>
        </a>
      </div>
    </section>
  );
};

export default PressMentionSection;
