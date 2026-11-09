'use client';

import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section
      id="over-mij"
      aria-labelledby="over-mij-heading"
      style={{
        padding: '100px 24px',
        backgroundColor: '#ffffff',
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
          flexDirection: 'row',
        }}
      >
        <div style={{ flex: '1 1 320px', minWidth: '280px' }}>
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
            Over mij
          </span>
          <h2
            id="over-mij-heading"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              margin: '0 0 20px',
              color: '#0f0f0f',
            }}
          >
            Aangenaam.
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: '#3a3a3a',
              lineHeight: 1.75,
              fontWeight: 500,
              margin: '0 0 16px',
            }}
          >
            Ik ben Jelte Janssen. Op Sportpark Theo Lommen in Velden train ik
            jeugdspelers persoonlijk — techniek, spelinzicht en zelfvertrouwen,
            gericht op jouw doelen.
          </p>
          <p
            style={{
              fontSize: '17px',
              color: '#3a3a3a',
              lineHeight: 1.75,
              fontWeight: 500,
              margin: 0,
            }}
          >
            Mijn aanpak is direct en persoonlijk: of je nu sneller wilt handelen,
            sterker in 1-tegen-1 wilt worden of meer zekerheid zoekt in de
            wedstrijd — ik werk samen met jou aan resultaat, zonder het plezier
            uit het oog te verliezen.
          </p>

          <div style={{ marginTop: '28px' }}>
            <Link
              href="/proefles-aanvragen"
              style={{
                display: 'inline-block',
                backgroundColor: '#D90429',
                color: '#ffffff',
                padding: '14px 22px',
                borderRadius: '9999px',
                fontWeight: 800,
                textDecoration: 'none',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontSize: '13px',
              }}
            >
              Proefles aanvragen
            </Link>
          </div>
        </div>

        <div
          style={{
            flex: '1 1 320px',
            minWidth: '280px',
            position: 'relative',
            aspectRatio: '3 / 4',
            maxWidth: '420px',
            width: '100%',
            margin: '0 auto',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/trainer-new.webp"
            alt="Trainer Jelte Janssen van Janssen Voetbalschool"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            quality={90}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
