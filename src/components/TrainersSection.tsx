'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TRAINERS } from '@/lib/trainers';

type TrainersSectionProps = {
  /** Lighter intro when embedded under Over ons */
  eyebrow?: string;
  heading?: string;
  intro?: string;
  background?: string;
};

const TrainersSection = ({
  eyebrow = 'Ons team',
  heading = 'Onze trainers',
  intro = 'Jelte, Rik en Wout — het team achter de trainingen op Sportpark Theo Lommen.',
  background = '#f7f7f7',
}: TrainersSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 },
    );
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section
      id="trainers"
      ref={sectionRef}
      aria-labelledby="trainers-heading"
      style={{
        padding: '100px 24px',
        backgroundColor: background,
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            maxWidth: '36rem',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition:
              'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
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
              marginBottom: '16px',
            }}
          >
            {eyebrow}
          </span>
          <h2
            id="trainers-heading"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: 1.08,
              margin: '0 0 16px',
              color: '#0f0f0f',
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: '#3a3a3a',
              lineHeight: 1.75,
              fontWeight: 500,
              margin: 0,
            }}
          >
            {intro}
          </p>
        </div>

        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px 24px',
          }}
        >
          {TRAINERS.map((trainer, index) => (
            <li
              key={trainer.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${0.12 + index * 0.1}s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${0.12 + index * 0.1}s`,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '3 / 4',
                  width: '100%',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius)',
                  backgroundColor: '#1a1a1a',
                }}
              >
                <Image
                  src={trainer.image}
                  alt={trainer.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 340px"
                  quality={75}
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <p
                style={{
                  margin: '16px 0 4px',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  letterSpacing: '0.01em',
                  color: '#0f0f0f',
                }}
              >
                {trainer.name}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#5a5a5a',
                  letterSpacing: '0.02em',
                }}
              >
                {trainer.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrainersSection;
