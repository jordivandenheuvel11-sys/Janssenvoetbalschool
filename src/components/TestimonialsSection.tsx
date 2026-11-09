'use client';

import React from 'react';

const testimonials = [
  {
    quote: "De individuele aandacht heeft mijn techniek naar een hoger niveau getild. Een echte aanrader!",
    author: "Speler (U15)",
    role: "Talentontwikkeling"
  },
  {
    quote: "Professionele trainingen met een duidelijke focus op resultaat. De passie voor het spel is overal voelbaar.",
    author: "Ouder",
    role: "Persoonlijke Coaching"
  },
  {
    quote: "Een unieke voetbalschool waar persoonlijke groei centraal staat. De vooruitgang is al na een paar sessies zichtbaar.",
    author: "Technisch Coördinator",
    role: "Expert Review"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" style={{
      padding: '20px 24px 60px', // Smaller top padding
      backgroundColor: '#ffffff',
      color: '#0f0f0f',
      position: 'relative',
      zIndex: 20
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px'
      }}>
        {testimonials.map((t, index) => (
          <div 
            key={index}
            style={{
              padding: '40px',
              backgroundColor: '#f9f9f9',
              borderRadius: '24px',
              border: '1px solid #eeeeee',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'transform 0.3s ease',
            }}
          >
            <div>
              <div style={{ fontSize: '40px', color: '#D90429', marginBottom: '20px', lineHeight: '1' }}>&quot;</div>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#333333',
                marginBottom: '40px',
                fontWeight: '500',
                fontStyle: 'italic'
              }}>
                {t.quote}
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '4px' }}>{t.author}</h4>
              <span style={{ fontSize: '14px', color: '#888888', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
