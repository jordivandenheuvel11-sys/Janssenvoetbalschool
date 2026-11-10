'use client';

import React, { useEffect, useRef, useState } from 'react';

type Partner = {
  name: string;
  href: string;
  /** Image logo when available; otherwise wordmark text */
  logoSrc?: string;
  logoWidth?: number;
  wordmark?: string;
};

const PARTNERS: Partner[] = [
  {
    name: 'Omroep Venlo',
    href: 'https://omroepvenlo.nl/nieuws/artikel/jelte-janssen-19-heeft-zijn-eigen-voetbalschool',
    logoSrc: '/press/omroep-venlo-dark.svg',
    logoWidth: 140,
  },
  {
    name: 'KNVB',
    href: 'https://www.knvb.nl/',
    wordmark: 'KNVB',
  },
  {
    name: 'VVV-Venlo',
    href: 'https://www.vvv-venlo.nl/',
    wordmark: 'VVV',
  },
  {
    name: 'CIOS',
    href: 'https://www.vistacollege.nl/mbo-opleidingen/sport-en-bewegen/sport-en-bewegen-bol',
    wordmark: 'CIOS',
  },
];

/** Compact “Gezien bij” strip for /nieuw — logos + Lees meer under each. */
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
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: 28,
          paddingBottom: 28,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
          transition:
            'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: '#D90429',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: 18,
            textAlign: 'center',
          }}
        >
          Gezien bij
        </span>

        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '28px 48px',
          }}
        >
          {PARTNERS.map((partner) => (
            <li key={partner.name} style={{ textAlign: 'center', minWidth: 88 }}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {partner.logoSrc ? (
                  <img
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={partner.logoWidth ?? 120}
                    height={30}
                    style={{
                      width: partner.logoWidth ?? 120,
                      height: 'auto',
                      maxHeight: 30,
                      display: 'block',
                      objectFit: 'contain',
                    }}
                  />
                ) : (
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 30,
                      fontSize: 18,
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      color: '#1a1a1b',
                      textTransform: 'uppercase',
                    }}
                  >
                    {partner.wordmark}
                  </span>
                )}
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
                  Lees meer
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GezienBijBar;
