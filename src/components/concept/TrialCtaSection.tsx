'use client';

import React from 'react';
import Image from 'next/image';
import ContactLink from '@/components/contact/ContactLink';

/** “Keertje meetrainen?” CTA — Figma hero 2. */
const TrialCtaSection = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <section
      aria-labelledby="trial-cta-heading"
      style={{
        backgroundColor: '#181818',
        padding: isMobile
          ? '48px 16px 72px'
          : 'clamp(48px, 6vw, 100px) 24px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        style={{
          maxWidth: 1247,
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: 30,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? 0 : 40,
          padding: isMobile ? '36px 24px 0' : '0 0 0 30px',
          overflow: 'visible',
          position: 'relative',
        }}
      >
        <div
          style={{
            flex: '1 1 280px',
            maxWidth: 520,
            padding: isMobile ? '0 0 28px' : '53px 22px 53px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
            gap: isMobile ? 28 : 48,
            minWidth: 0,
          }}
        >
          <h2
            id="trial-cta-heading"
            style={{
              margin: 0,
              fontFamily: 'var(--font-display), var(--font-sans)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              color: '#D90429',
            }}
          >
            Keertje
            <br />
            meetrainen?
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: 20,
              maxWidth: 462,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 17,
                fontWeight: 600,
                lineHeight: 1.55,
                letterSpacing: '-0.02em',
                color: '#D90429',
              }}
            >
              Meld je aan voor een gratis proefles, en kijk of het iets voor je
              is. Geen verplichtingen, gewoon een keer proberen
            </p>
            <ContactLink
              href="/proefles-aanvragen"
              type="proefles"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#D90429',
                color: '#ffffff',
                padding: '12px 32px',
                borderRadius: 30,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              }}
            >
              Gratis proefles
            </ContactLink>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            flex: isMobile ? '0 0 auto' : '0 0 340px',
            width: isMobile ? 'min(280px, 70%)' : 340,
            aspectRatio: '403 / 605',
            marginTop: isMobile ? 8 : -40,
            marginBottom: isMobile ? -24 : -40,
            alignSelf: isMobile ? 'center' : 'flex-end',
          }}
        >
          <Image
            src="/concept/cta-keeper.webp"
            alt="Keeper in actie tijdens training"
            fill
            sizes="(max-width: 900px) 70vw, 340px"
            quality={80}
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
      </div>
    </section>
  );
};

export default TrialCtaSection;
