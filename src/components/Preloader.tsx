'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const words = ["lokaal", "transparant", "plezier"];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();


  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0); // Force scroll to top before hiding preloader
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (pathname?.startsWith('/studio')) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100dvh', // Use dynamic viewport height
            minHeight: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            zIndex: 9999,
            overflow: 'hidden',
            // Slight scale to prevent any browser UI gaps
            transform: 'scale(1.01)',
          }}
        >
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            {/* Placeholder Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                marginBottom: '32px'
              }}
            >
              <img 
                src="/logo.png" 
                alt="Janssen Voetbalschool Logo" 
                fetchPriority="high"
                style={{ 
                  height: '140px', 
                  width: 'auto',
                  display: 'block'
                }} 
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
