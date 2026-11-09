'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem('janssen-welcome-timestamp');
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (!lastSeen || now - parseInt(lastSeen) > oneHour) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('janssen-welcome-timestamp', Date.now().toString());
  };

  const handleAction = () => {
    setIsVisible(false);
    localStorage.setItem('janssen-welcome-timestamp', Date.now().toString());
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50, x: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50, x: 50 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 99999,
            maxWidth: '380px',
            width: 'calc(100% - 60px)',
            backgroundColor: 'rgba(26, 26, 27, 0.98)',
            backdropFilter: 'blur(20px)',
            padding: '24px',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)',
            color: '#ffffff',
          }}
        >
          {/* Persona Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="/trainer-new.webp"
                width={500}
                height={750} 
                alt="Jelte Janssen" 
                loading="lazy"
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  objectFit: 'cover',
                  border: '2px solid #D90429'
                }} 
              />
              <div style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                width: '12px',
                height: '12px',
                backgroundColor: '#22c55e', // Online dot
                borderRadius: '50%',
                border: '2px solid #1a1a1b'
              }} />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '800', letterSpacing: '-0.01em' }}>Jelte Janssen</h4>
              <span style={{ fontSize: '13px', color: '#D90429', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Trainer / Eigenaar
              </span>
            </div>
          </div>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '24px',
            opacity: 0.9,
            fontWeight: '500',
            backgroundColor: 'rgba(255,255,255,0.05)',
            padding: '16px',
            borderRadius: '16px',
            borderBottomLeftRadius: '4px' // Message bubble style
          }}>
            Heb je vragen over de trainingen of wil je weten wanneer de volgende sessie is? 👋 <br /><br />
            Klik op de knop hieronder voor het actuele schema!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link 
              href="/trainingen" 
              onClick={handleAction}
              style={{
                backgroundColor: '#ffffff',
                color: '#1a1a1b',
                padding: '14px',
                borderRadius: '999px',
                textAlign: 'center',
                fontWeight: '700',
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = '#f0f0f0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
            >
              Wanneer trainen
            </Link>
            
            <button
              onClick={handleClose}
              style={{
                backgroundColor: 'transparent',
                color: 'rgba(255, 255, 255, 0.4)',
                padding: '10px',
                border: 'none',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
            >
              Niet nu
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
