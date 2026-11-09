'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { BUSINESS } from '@/lib/business';
import { RADIUS_CSS } from '@/lib/radius';

const WHATSAPP_PHONE = BUSINESS.telephone.replace(/\D/g, '');
const DRAFT_MESSAGE =
  'Hoi Jelte, ik heb een vraag over de proefles / training. Kun je me meer vertellen?';
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(DRAFT_MESSAGE)}`;

const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.82 11.82 0 001.592 5.961L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.634 0 12.044-5.412 12.048-12.05a11.8 11.8 0 00-3.326-8.522z" />
  </svg>
);

const WhatsAppButton = () => {
  const pathname = usePathname();
  const panelRef = React.useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isFilteredByScroll, setIsFilteredByScroll] = React.useState(false);
  const [isFooterVisible, setIsFooterVisible] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

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
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );

    const footer = document.querySelector('footer');
    if (footer) observer.observe(footer);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      if (footer) observer.unobserve(footer);
    };
  }, []);

  React.useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onPointer);
    };
  }, [isOpen]);

  if (pathname?.startsWith('/studio') || !isVisible || isFooterVisible || !isFilteredByScroll) {
    return null;
  }

  const inset = isMobile ? 16 : 28;

  return (
    <div
      ref={panelRef}
      style={{
        position: 'fixed',
        bottom: inset,
        left: inset,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 12,
      }}
    >
      {isOpen && (
        <div
          role="dialog"
          aria-label="WhatsApp chat"
          style={{
            width: isMobile ? 'min(300px, calc(100vw - 32px))' : 320,
            backgroundColor: '#ffffff',
            borderRadius: RADIUS_CSS,
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.22)',
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.06)',
            animation: 'navMenuIn 0.2s ease-out',
          }}
        >
          <div
            style={{
              backgroundColor: '#075E54',
              color: '#fff',
              padding: '12px 12px 12px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span style={{ position: 'relative', flexShrink: 0 }}>
              <picture>
                <source srcSet="/whatsapp-avatar.webp" type="image/webp" />
                <img
                  src="/whatsapp-avatar.jpg"
                  alt=""
                  width={40}
                  height={40}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block',
                    backgroundColor: '#25D366',
                  }}
                />
              </picture>
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  border: '2px solid #075E54',
                }}
              />
            </span>
            <div style={{ minWidth: 0, flex: 1, lineHeight: 1.25 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: '0.02em',
                }}
              >
                {BUSINESS.trainerName}
              </div>
              <div style={{ fontSize: 11, opacity: 0.85, fontWeight: 500 }}>
                Reageert meestal binnen een uur
              </div>
            </div>
            <button
              type="button"
              aria-label="Chat sluiten"
              onClick={() => setIsOpen(false)}
              style={{
                color: '#fff',
                opacity: 0.85,
                padding: 4,
                lineHeight: 0,
                background: 'transparent',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div
            style={{
              padding: '16px 14px',
              background: 'linear-gradient(180deg, #e5ddd5 0%, #d7cfc6 100%)',
              minHeight: 120,
            }}
          >
            <div
              style={{
                maxWidth: '92%',
                backgroundColor: '#fff',
                color: '#111',
                padding: '10px 12px 8px',
                borderRadius: RADIUS_CSS,
                fontSize: 13.5,
                fontWeight: 500,
                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                lineHeight: 1.45,
              }}
            >
              Hi, leuk dat je langskomt. Heb je een vraag over de proefles of
              de training? Stuur gerust een berichtje.
              <span
                style={{
                  display: 'block',
                  textAlign: 'right',
                  marginTop: 6,
                  fontSize: 10,
                  color: '#8696a0',
                  fontWeight: 500,
                }}
              >
                12:00
              </span>
            </div>
          </div>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              backgroundColor: '#25D366',
              color: '#fff',
              padding: '14px 16px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <WhatsAppIcon size={20} />
            Open WhatsApp
          </a>
        </div>
      )}

      <button
        type="button"
        aria-label={isOpen ? 'WhatsApp-chat sluiten' : 'WhatsApp-chat openen'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 28px rgba(37, 211, 102, 0.45)',
          border: 'none',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <WhatsAppIcon size={28} />
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
