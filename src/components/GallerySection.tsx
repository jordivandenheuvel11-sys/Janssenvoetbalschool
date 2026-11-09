'use client';

import React from 'react';

const galleryImages = [
  '/gallery/g1.jpg',
  '/gallery/g2.jpg',
  '/gallery/g3.jpg',
  '/gallery/g4.jpg',
  '/gallery/g5.jpg',
  '/gallery/g6.jpg'
];

// Duplicate for endless scroll
const infiniteImages = [...galleryImages, ...galleryImages];

const GallerySection = () => {
  return (
    <section id="gallery" style={{
      padding: '120px 0', // Remove horizontal padding for full-width scroll
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 50,
      overflow: 'hidden',
      boxShadow: '0 -20px 60px rgba(0,0,0,0.05)'
    }}>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .gallery-track {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
          gap: 24px;
          padding: 0 12px;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', width: '100%', marginBottom: '60px', textAlign: 'center', padding: '0 24px' }}>
        <span style={{
          fontSize: '14px',
          fontWeight: '900',
          color: '#D90429',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '20px'
        }}>
          Sfeerimpressie
        </span>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          letterSpacing: '-0.04em',
          lineHeight: '1.1',
          color: '#0f0f0f'
        }}>
          In actie op het veld.
        </h2>
      </div>

      <div className="gallery-track">
        {infiniteImages.map((src, index) => (
          <div 
            key={index}
            style={{
              overflow: 'hidden',
              borderRadius: 'var(--radius)',
              height: '350px',
              aspectRatio: '4/3',
              backgroundColor: '#f5f5f5',
              cursor: 'pointer',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img 
              src={src} 
              alt={`Training sessie ${index + 1}`} 
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
