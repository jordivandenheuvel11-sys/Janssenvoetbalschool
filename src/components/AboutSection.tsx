'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="over-mij" style={{
      padding: '120px 24px',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 20
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '60px',
        flexWrap: 'wrap'
      }}>
        {/* Left Side: Text */}
        <div style={{ flex: '1 1 500px' }}>
          <span style={{
            fontSize: '14px',
            fontWeight: '900',
            color: '#D90429',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '20px'
          }}>
            Over mij
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            letterSpacing: '-0.04em',
            lineHeight: '1.1',
            marginBottom: '30px',
            color: '#1a1a1b'
          }}>
            Aangenaam.
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#555555',
            lineHeight: '1.8',
            fontWeight: '500',
            marginBottom: '20px'
          }}>
            Welkom bij Janssen Voetbalschool. Mijn naam is Jelte Janssen, en ik ben gedreven door de passie om jong talent naar het volgende niveau te tillen. Met ervaring als speler én trainer geloof ik dat de juiste begeleiding het verschil maakt — juist in de jeugd, wanneer techniek en zelfvertrouwen het hardst groeien.
          </p>
          <p style={{
            fontSize: '18px',
            color: '#555555',
            lineHeight: '1.8',
            fontWeight: '500',
            marginBottom: '20px'
          }}>
            Mijn aanpak is persoonlijk, direct en gefocust op jouw specifieke behoeften. Of het nu gaat om techniek, sneller handelen of spelinzicht — ik werk samen met jou keihard aan jouw ontwikkeling in een professionele, maar vertrouwde omgeving op Sportpark Theo Lommen in Velden.
          </p>
          <p style={{
            fontSize: '18px',
            color: '#555555',
            lineHeight: '1.8',
            fontWeight: '500'
          }}>
            Omroep Venlo schreef eerder over de oprichting van de voetbalschool. Diezelfde drive staat nog steeds centraal: elke speler serieus nemen, duidelijk feedback geven en resultaat boeken zonder het plezier uit het oog te verliezen.
          </p>

          <div style={{
            marginTop: '34px',
            padding: '22px 22px',
            borderRadius: '20px',
            backgroundColor: 'rgba(217, 4, 41, 0.06)',
            border: '1px solid rgba(217, 4, 41, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: '#1a1a1b', fontWeight: 600 }}>
              Benieuwd wat een persoonlijke aanpak voor jou kan doen? Vraag een proefles aan en we plannen samen een moment.
            </p>
            <div>
              <Link href="/proefles-aanvragen" style={{
                display: 'inline-block',
                backgroundColor: '#1a1a1b',
                color: '#ffffff',
                padding: '14px 22px',
                borderRadius: '9999px',
                fontWeight: 800,
                textDecoration: 'none',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontSize: '13px'
              }}>
                Proefles aanvragen
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Reversible Image */}
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            perspective: '1500px', 
            width: '100%', 
            maxWidth: '500px', 
            aspectRatio: '4/5',
            cursor: 'pointer'
          }}>
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                position: 'relative', 
                transition: 'transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1)', 
                transformStyle: 'preserve-3d', 
                transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0)' 
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Front side (Photo) */}
              <div style={{ 
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                backfaceVisibility: 'hidden',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                overflow: 'hidden'
              }}>
                <Image
                  src="/trainer-new.webp"
                  alt="Trainer Jelte Janssen"
                  width={500}
                  height={750}
                  sizes="(max-width: 768px) 90vw, 400px"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Back side (Quote) */}
              <div style={{ 
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                backfaceVisibility: 'hidden', 
                transform: 'rotateY(180deg)', 
                backgroundColor: '#ffffff', 
                color: '#1a1a1b', 
                borderRadius: '24px',
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '40px', 
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}>
                <p style={{ 
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', 
                  fontStyle: 'italic', 
                  fontWeight: '700',
                  lineHeight: '1.3',
                  marginBottom: '20px'
                }}>
                  &quot;Ik wil mijn passie voor voetbal overbrengen aan de volgende generaties&quot;
                </p>
                <div style={{
                  width: '40px',
                  height: '4px',
                  backgroundColor: '#D90429',
                  marginBottom: '20px'
                }} />
                <span style={{ 
                  fontSize: '18px', 
                  fontWeight: '500', 
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  opacity: 0.8
                }}>
                  Jelte Janssen
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
