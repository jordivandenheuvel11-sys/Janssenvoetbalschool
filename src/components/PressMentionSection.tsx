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
          paddingTop: '56px',
          paddingBottom: '56px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <span
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: '#D90429',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '28px',
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
            gap: '20px',
            textDecoration: 'none',
            color: 'inherit',
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <img
            src="/press/omroep-venlo-dark.svg"
            alt="Omroep Venlo"
            width={166}
            height={35}
            style={{
              width: 'min(220px, 70%)',
              height: 'auto',
              display: 'block',
            }}
          />

          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(1.35rem, 3.2vw, 1.85rem)',
              fontWeight: 700,
              letterSpacing: '0.015em',
              lineHeight: 1.25,
              color: '#1a1a1b',
              maxWidth: '34ch',
            }}
          >
            Jelte Janssen (19) heeft zijn eigen voetbalschool
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: '16px',
              lineHeight: 1.65,
              color: '#4a4a4a',
              fontWeight: 500,
              maxWidth: '42ch',
            }}
          >
            Omroep Venlo belicht hoe Jelte iedere week op het kunstgras van SV
            Velden het beste uit jonge voetballers haalt.
          </p>

          <span
            style={{
              marginTop: '4px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#1a1a1b',
              borderBottom: '2px solid #D90429',
              paddingBottom: '4px',
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
