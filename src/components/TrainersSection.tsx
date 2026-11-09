'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TRAINERS } from '@/lib/trainers';

type TrainersSectionProps = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  background?: string;
  /** Extra top padding under fixed navbar (e.g. over-ons page) */
  topPadding?: boolean;
  /** Use h1 when this section is the page title */
  asPageTitle?: boolean;
};

const TrainersSection = ({
  eyebrow = 'Over ons',
  heading = 'Aangenaam.',
  intro = 'Jelte, Rik en Wout — het team achter de trainingen op Sportpark Theo Lommen.',
  background = '#ffffff',
  topPadding = false,
  asPageTitle = false,
}: TrainersSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const HeadingTag = asPageTitle ? 'h1' : 'h2';

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
      className="trainers-section"
      style={{
        padding: topPadding ? '140px 24px 100px' : '100px 24px',
        backgroundColor: background,
        position: 'relative',
        zIndex: 20,
      }}
    >
      <style>{`
        .trainers-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px 24px;
        }
        .trainers-card {
          min-width: 0;
        }
        .trainers-photo {
          position: relative;
          aspect-ratio: 3 / 4;
          width: 100%;
          overflow: hidden;
          border-radius: var(--radius);
          background-color: #1a1a1a;
        }
        .trainers-name {
          margin: 16px 0 4px;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #0f0f0f;
        }
        .trainers-role {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
          color: #5a5a5a;
          letter-spacing: 0.02em;
        }

        @media (max-width: 640px) {
          .trainers-grid {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: flex-start;
            gap: 16px 18px;
          }
          .trainers-card {
            flex: 0 0 auto;
            width: auto;
            text-align: center;
          }
          .trainers-photo {
            width: 80px;
            height: 80px;
            aspect-ratio: 1 / 1;
            margin: 0 auto;
            border-radius: 50%;
          }
          .trainers-name {
            margin: 12px 0 0;
            font-size: 0.85rem;
            line-height: 1.25;
            max-width: 5.75rem;
          }
          .trainers-role {
            display: none;
          }
        }
      `}</style>

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
          <HeadingTag
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
          </HeadingTag>
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

        <ul className="trainers-grid">
          {TRAINERS.map((trainer, index) => (
            <li
              key={trainer.id}
              className="trainers-card"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${0.12 + index * 0.1}s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${0.12 + index * 0.1}s`,
              }}
            >
              <div className="trainers-photo">
                <Image
                  src={trainer.image}
                  alt={trainer.imageAlt}
                  fill
                  sizes="(max-width: 640px) 80px, 340px"
                  quality={75}
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <p className="trainers-name">{trainer.name}</p>
              <p className="trainers-role">{trainer.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrainersSection;
