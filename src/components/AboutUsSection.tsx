'use client';

import React, { useEffect, useRef, useState } from 'react';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="mijn-verhaal"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#ffffff',
        color: '#0f0f0f',
        position: 'relative',
        zIndex: 20
      }}
    >
      {/* Left Side: Full Height Image with Rounding */}
      <div style={{
        flex: '1 1 500px',
        minHeight: '50vh',
        position: 'relative',
        overflow: 'hidden',
        padding: '24px' // Padding to show the rounding
      }}>
        <img 
          src="/about-us-new.jpg" 
          alt="Janssen Voetbal Training" 
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '32px', // Consistency
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(1.1)',
            transition: 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </div>

      {/* Right Side: Story Text */}
      <div style={{
        flex: '1 1 500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        minHeight: '50vh',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
      }}>
        <div style={{ maxWidth: '500px' }}>
          <span style={{
            fontSize: '13px',
            fontWeight: '900',
            color: '#D90429',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '16px'
          }}>
            Mijn Verhaal
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '900',
            letterSpacing: '-0.04em',
            lineHeight: '1.1',
            marginBottom: '24px',
            color: '#0f0f0f'
          }}>
            Zelfvertrouwen op het veld.
          </h2>
          
          <div style={{
            fontSize: '20px',
            lineHeight: '1.7',
            color: '#4a4a4a',
            fontWeight: '500'
          }}>
            <p>
              Bij Janssen Voetbalschool geloof ik dat elk kind uit de regio Venlo het verdient om met plezier en zelfverzekerdheid op het veld te staan. Mijn individuele trainingen in Velden (gemeente Venlo) zijn ontworpen om niet alleen de techniek, maar ook het karakter van uw kind te versterken. Door persoonlijke aandacht en gericht maatwerk bouw ik aan een fundament van technische perfectie, waardoor uw kind met trots en overtuiging elke wedstrijd ingaat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
