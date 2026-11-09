'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const node = sectionRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section
      id="mijn-verhaal"
      ref={sectionRef}
      aria-labelledby="verhaal-heading"
      style={{
        padding: '100px 24px',
        backgroundColor: '#ffffff',
        color: '#0f0f0f',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '40px',
          flexDirection: 'row-reverse',
        }}
      >
        <div
          style={{
            flex: '1 1 320px',
            minWidth: '280px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span
            style={{
              fontSize: '13px',
              fontWeight: 900,
              color: '#D90429',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Mijn verhaal
          </span>
          <h2
            id="verhaal-heading"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              margin: '0 0 20px',
              color: '#0f0f0f',
            }}
          >
            Zelfvertrouwen op het veld.
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: '#3a3a3a',
              fontWeight: 500,
              margin: 0,
            }}
          >
            Bij Janssen Voetbalschool geloof ik dat elk kind uit de regio Venlo
            het verdient om met plezier en zelfverzekerdheid op het veld te
            staan. Mijn individuele trainingen in Velden (gemeente Venlo) zijn
            ontworpen om niet alleen de techniek, maar ook het karakter van uw
            kind te versterken. Door persoonlijke aandacht en gericht maatwerk
            bouw ik aan een fundament van technische perfectie, waardoor uw kind
            met trots en overtuiging elke wedstrijd ingaat.
          </p>
        </div>

        <div
          style={{
            flex: '1 1 320px',
            minWidth: '280px',
            position: 'relative',
            aspectRatio: '4 / 3',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/about-us-new.webp"
            alt="Janssen Voetbal Training"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            quality={90}
            style={{
              objectFit: 'cover',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(1.04)',
              transition:
                'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
