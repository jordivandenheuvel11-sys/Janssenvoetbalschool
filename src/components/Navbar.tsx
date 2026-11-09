'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ContactLink from '@/components/contact/ContactLink';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    // Initial check for mobile
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);

      // Close menu on scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      // Always show when near the top
      if (currentScrollY < 100) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;

      if (diff > 20) {
        // Scrolling down
        setIsVisible(false);
        lastScrollY.current = currentScrollY;
      } else if (diff < -20) {
        // Scrolling up
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const handleHomeClick = (e: React.MouseEvent) => {
    setIsMenuOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.split('#')[1];
    if (pathname === '/' && targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        setIsMenuOpen(false);
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  if (!mounted || pathname?.startsWith('/studio')) return null;

  return (
    <>
      <nav
        id="main-navbar"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: 1000,
          width: '100%',
          padding: '0 16px',
          maxWidth: '1400px', // Increased slightly for breathing room
          margin: '0 auto',
          // Smooth slide up/down based on visibility
          transform: isVisible ? 'translateY(0)' : 'translateY(-150px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
      <div style={{
        backgroundColor: 'rgba(10, 10, 10, 0.98)',
        backdropFilter: 'blur(12px)',
        borderRadius: '24px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px', // Reduced from 40px to move logo further left
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
        color: '#ffffff',
      }}>
        <Link href="/" onClick={handleHomeClick} style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/logo.webp"
            alt="Janssen Voetbalschool"
            width={160}
            height={50}
            sizes="160px"
            quality={95}
            /* no priority — keep LCP on hero poster */
            style={{
              height: '50px',
              width: 'auto',
              display: 'block',
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-8" style={{ fontSize: '14px', fontWeight: '600' }}>
            <div className="flex gap-8 nav-links">
              <Link href="/mini-voetbalschool" className="navbar-item" style={{ color: '#ffffff' }}>Mini Voetbalschool</Link>
              <Link href="/trainingen" className="navbar-item" style={{ color: '#ffffff' }}>Wanneer trainen</Link>
              <Link href="/pakketten" className="navbar-item" style={{ color: '#ffffff' }}>Pakketten</Link>
              <Link href="/#over-mij" className="navbar-item" onClick={(e) => handleScrollClick(e, '/#over-mij')} style={{ color: '#ffffff' }}>Over mij</Link>
              <ContactLink href="/contact" type="contact" className="navbar-item" style={{ color: '#ffffff' }}>Contact</ContactLink>
            </div>
            <ContactLink href="/proefles-aanvragen" type="proefles" className="btn" style={{
              backgroundColor: '#ffffff',
              color: '#0f0f0f',
              padding: '12px 28px',
              borderRadius: '9999px',
              fontWeight: '700',
              textDecoration: 'none'
            }}>
              Proefles aanvragen
            </ContactLink>
          </div>
        )}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay — CSS only (no framer-motion on every page) */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '84px',
            left: '24px',
            right: '24px',
            backgroundColor: 'rgba(15, 15, 15, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '24px',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
            animation: 'navMenuIn 0.2s ease-out',
          }}
        >
          <Link href="/mini-voetbalschool" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffffff', fontSize: '18px', fontWeight: '600', textDecoration: 'none' }}>Mini Voetbalschool</Link>
          <Link href="/trainingen" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffffff', fontSize: '18px', fontWeight: '600', textDecoration: 'none' }}>Wanneer trainen</Link>
          <Link href="/pakketten" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffffff', fontSize: '18px', fontWeight: '600', textDecoration: 'none' }}>Pakketten</Link>
          <Link href="/#over-mij" onClick={(e) => handleScrollClick(e, '/#over-mij')} style={{ color: '#ffffff', fontSize: '18px', fontWeight: '600', textDecoration: 'none' }}>Over mij</Link>
          <ContactLink href="/contact" type="contact" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffffff', fontSize: '18px', fontWeight: '600', textDecoration: 'none', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Contact</ContactLink>

          <ContactLink href="/proefles-aanvragen" type="proefles" onClick={() => setIsMenuOpen(false)} style={{
            backgroundColor: '#D90429',
            color: '#ffffff',
            padding: '16px',
            borderRadius: '9999px',
            fontWeight: '700',
            textAlign: 'center',
            textDecoration: 'none',
            marginTop: '8px'
          }}>
            Proefles aanvragen
          </ContactLink>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
