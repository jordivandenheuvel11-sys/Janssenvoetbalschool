'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { BUSINESS } from '@/lib/business';
import { RADIUS_CSS } from '@/lib/radius';

const WHATSAPP_PHONE = BUSINESS.telephone.replace(/\D/g, '');
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hoi Jelte, ik heb een vraag over de training.')}`;

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
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur een WhatsApp-bericht"
      style={{
        position: 'fixed',
        bottom: isMobile ? '16px' : '28px',
        left: isMobile ? '16px' : '28px',
        zIndex: 9999,
        width: isMobile ? 'min(280px, calc(100vw - 32px))' : '300px',
        backgroundColor: '#ffffff',
        color: '#111',
        borderRadius: RADIUS_CSS,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.18)',
        textDecoration: 'none',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.06)',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
        cursor: 'pointer',
        display: 'block',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 16px 44px rgba(0, 0, 0, 0.22)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.18)';
      }}
    >
      {/* Chat header */}
      <div
        style={{
          backgroundColor: '#075E54',
          color: '#fff',
          padding: '10px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span
          style={{
            width: 34,
            height: 34,
            borderRadius: RADIUS_CSS,
            backgroundColor: '#25D366',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.82 11.82 0 001.592 5.961L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.634 0 12.044-5.412 12.048-12.05a11.8 11.8 0 00-3.326-8.522z" />
          </svg>
        </span>
        <div style={{ minWidth: 0, lineHeight: 1.25 }}>
          <div style={{ fontWeight: 700, fontSize: 13 }}>{BUSINESS.trainerName}</div>
          <div style={{ fontSize: 11, opacity: 0.85 }}>online · WhatsApp</div>
        </div>
      </div>

      {/* Message thread */}
      <div
        style={{
          padding: '14px 12px 16px',
          background:
            'linear-gradient(180deg, #e5ddd5 0%, #d7cfc6 100%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <div
          style={{
            alignSelf: 'flex-start',
            maxWidth: '92%',
            backgroundColor: '#fff',
            color: '#111',
            padding: '10px 12px',
            borderRadius: RADIUS_CSS,
            fontSize: 14,
            fontWeight: 600,
            boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
            lineHeight: 1.35,
          }}
        >
          Stuur een bericht
          <span
            style={{
              display: 'block',
              marginTop: 4,
              fontSize: 11,
              fontWeight: 500,
              color: '#667781',
            }}
          >
            Tik om WhatsApp te openen
          </span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
