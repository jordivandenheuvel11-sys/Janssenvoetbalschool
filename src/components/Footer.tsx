'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  
  if (pathname?.startsWith('/studio')) return null;
  
  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      padding: '80px 24px 40px',
      borderTop: '1px solid #1f1f1f',
      fontFamily: 'var(--font-inter)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '60px',
        marginBottom: '60px'
      }}>
        {/* Brand Column */}
        <div>
          <Link href="/" onClick={handleHomeClick} style={{ display: 'block', width: 'fit-content' }}>
            <img 
              src="/logo.png" 
              alt="Logo" 
              loading="lazy"
              style={{ 
                height: '80px', 
                width: 'auto',
                marginBottom: '24px',
                display: 'block'
              }} 
            />
          </Link>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '850',
            letterSpacing: '-0.03em',
            margin: '0 0 20px 0',
            textTransform: 'uppercase'
          }}>
            Janssen Voetbalschool
          </h3>
          <p style={{
            fontSize: '15px',
            color: '#a0a0a0',
            lineHeight: '1.6',
            maxWidth: '300px'
          }}>
            Professionele voetbaltraining gericht op individuele aandacht, resultaat en het plezier in het spel. Master the game.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 style={{
            fontSize: '14px',
            fontWeight: '700',
            color: '#ffffff',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            margin: '0 0 20px 0'
          }}>
            Navigatie
          </h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {[
              { name: 'Home', href: '/' },
              { name: 'Wanneer trainen', href: '/trainingen' },
              { name: 'Mini Voetbalschool', href: '/mini-voetbalschool' },
              { name: 'Pakketten', href: '/pakketten' },
              { name: 'Over mij', href: '/#over-mij' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  onClick={item.name === 'Home' ? handleHomeClick : undefined}
                  style={{
                  color: '#a0a0a0',
                  textDecoration: 'none',
                  fontSize: '15px',
                  transition: 'color 0.2s ease',
                  cursor: 'pointer'
                }}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 style={{
            fontSize: '14px',
            fontWeight: '700',
            color: '#ffffff',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            margin: '0 0 20px 0'
          }}>
            Contact
          </h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            color: '#a0a0a0',
            fontSize: '15px'
          }}>
            <li><strong style={{ color: '#fff' }}>Email:</strong> <a href="mailto:jelte.janssen@ziggo.nl" style={{ color: 'inherit', textDecoration: 'none' }}>jelte.janssen@ziggo.nl</a></li>
            <li><strong style={{ color: '#fff' }}>Telefoon:</strong> <a href="tel:+31611250476" style={{ color: 'inherit', textDecoration: 'none' }}>+31 6 11250476</a></li>
            <li><strong style={{ color: '#fff' }}>Locatie:</strong> <a href="https://www.google.com/maps/search/?api=1&query=Sportpark+Theo+Lommen+Velden" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Sportpark Theo Lommen, Velden – Gemeente Venlo</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '30px',
        borderTop: '1px solid #1f1f1f',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <p style={{
            fontSize: '14px',
            color: '#666666',
            margin: 0
          }}>
            &copy; {new Date().getFullYear()} Janssen Voetbalschool. Alle rechten voorbehouden.
          </p>
          <a 
            href="https://www.instagram.com/jordivdhvl" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              fontSize: '12px', 
              color: '#444444', 
              textDecoration: 'none',
              transition: 'color 0.2s ease' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#D90429'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#444444'}
          >
            Website door Jordi van den Heuvel
          </a>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a
            href="https://www.instagram.com/janssenvoetbal/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#a0a0a0',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#D90429')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.tiktok.com/@janssenvoetbalsch"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#a0a0a0',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#D90429')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
          >
            TIKTOK
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
