'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import ContactLink from '@/components/contact/ContactLink';

const WhatsAppButton = () => {
  const pathname = usePathname();

  const [isMobile, setIsMobile] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isFilteredByScroll, setIsFilteredByScroll] = React.useState(false);
  const [isFooterVisible, setIsFooterVisible] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setIsFilteredByScroll(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) observer.observe(footer);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      if (footer) observer.unobserve(footer);
    };
  }, []);

  if (pathname?.startsWith('/studio') || !isVisible || isFooterVisible || !isFilteredByScroll) return null;

  return (
    <ContactLink
      href="/contact"
      type="contact"
      style={{
        position: 'fixed',
        bottom: isMobile ? '20px' : '30px',
        left: isMobile ? '20px' : '30px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        backgroundColor: '#25D366',
        color: '#ffffff',
        padding: isMobile ? '16px' : '12px 24px',
        borderRadius: '999px',
        boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '15px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'pointer',
        width: isMobile ? '56px' : 'auto',
        height: isMobile ? '56px' : 'auto'
      }}
    >
      <svg 
        viewBox="0 0 24 24" 
        width="24" 
        height="24" 
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.82 11.82 0 001.592 5.961L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.634 0 12.044-5.412 12.048-12.05a11.8 11.8 0 00-3.326-8.522z" />
      </svg>
      {!isMobile && <span>Stuur me een bericht</span>}
    </ContactLink>
  );
};

export default WhatsAppButton;
