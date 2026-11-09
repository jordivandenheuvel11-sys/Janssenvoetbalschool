'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const packages = [
  {
    name: "Techniektraining",
    sessions: "10 lessen",
    price: "150",
    priceSuffix: "/ 10 lessen",
    description: "Een volledig trainingsblok om je spel naar een hoger niveau te tillen.",
    features: [
      "Blok van 10 lessen",
      "Persoonlijke aandacht",
      "Focus op alle facetten",
      "Inclusief evaluatie",
    ],
    popular: true,
  },
  {
    name: "Jaarpakket",
    sessions: "40 lessen",
    price: "500",
    priceSuffix: "/ 40 lessen",
    description: "Voor spelers die een heel seizoen structureel willen trainen en groeien.",
    features: [
      "Beste prijs per les",
      "40 sessies van 60 min",
      "Lange termijn ontwikkeling",
      "Gepersonaliseerd plan",
    ],
    popular: false,
  },
  {
    name: "2-op-1 training",
    sessions: "per les",
    price: "25",
    priceSuffix: "/ per les",
    description: "Meer individuele aandacht: 1 trainer met 2 kinderen. Ideaal voor gerichte vooruitgang.",
    features: [
      "1 trainer, 2 kinderen",
      "Meer individuele aandacht",
      "Gericht op jouw doelen",
      "Flexibel in te plannen",
    ],
    popular: false,
  },
];

type PackagesSectionProps = {
  /** Override section H2 (e.g. /venlo) */
  headingOverride?: string;
};

const PackagesSection = ({ headingOverride }: PackagesSectionProps) => {
  return (
    <section id="pakketten" style={{
      padding: '120px 24px',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      scrollMarginTop: '100px'
    }}>
      <div style={{ maxWidth: '1200px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '14px',
              fontWeight: '900',
              color: '#D90429',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '20px'
            }}
          >
            Trainen & Ontwikkelen
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              letterSpacing: '-0.04em',
              lineHeight: '1.1',
              margin: '0 0 24px 0'
            }}
          >
            {headingOverride ? (
              headingOverride
            ) : (
              <>
                Kies jouw <span style={{ color: '#D90429' }}>pakket</span>
              </>
            )}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '18px',
              color: '#a0a0a0',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Investeer in je toekomst op het veld met onze op maat gemaakte trainingstrajecten.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          paddingBottom: '20px'
        }}>
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: pkg.popular ? '#1a1a1a' : 'rgba(255, 255, 255, 0.03)',
                borderRadius: '32px',
                padding: '48px 40px',
                border: pkg.popular ? '2px solid #D90429' : '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: pkg.popular ? '0 20px 50px rgba(217, 4, 41, 0.15)' : 'none',
                transition: 'border-color 0.3s ease'
              }}
            >
              {pkg.popular && (
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  backgroundColor: '#D90429',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Meest gekozen
                </div>
              )}

              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>{pkg.name}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '20px' }}>
                <span style={{ fontSize: '48px', fontWeight: '900', color: '#ffffff' }}>€{pkg.price}</span>
                <span style={{ fontSize: '16px', color: '#666', fontWeight: '700' }}>{pkg.priceSuffix}</span>
              </div>
              
              <p style={{ color: '#a0a0a0', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
                {pkg.description}
              </p>

              <div style={{ flex: 1, marginBottom: '40px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#e0e0e0' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D90429" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/inschrijven?pakket=${encodeURIComponent(`${pkg.name} — €${pkg.price} ${pkg.priceSuffix.replace('/ ', '')}`)}`}
                style={{
                  backgroundColor: pkg.popular ? '#D90429' : 'transparent',
                  color: '#ffffff',
                  border: pkg.popular ? 'none' : '2px solid rgba(255, 255, 255, 0.1)',
                  padding: '16px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  fontWeight: '800',
                  fontSize: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  if (pkg.popular) {
                    e.currentTarget.style.backgroundColor = '#b50322';
                  } else {
                    e.currentTarget.style.borderColor = '#ffffff';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseOut={(e) => {
                  if (pkg.popular) {
                    e.currentTarget.style.backgroundColor = '#D90429';
                  } else {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Inschrijven
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
