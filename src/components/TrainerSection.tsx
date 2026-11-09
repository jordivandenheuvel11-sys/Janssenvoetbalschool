'use client';

import React, { useEffect, useRef, useState } from 'react';

const trainerInfo = [
  {
    id: 1,
    title: "Ervaring",
    text: "Al meer dan 10 jaar ervaring in het ontwikkelen van jong voetbaltalent op topniveau.",
    position: "left-top"
  },
  {
    id: 2,
    title: "Opleiding",
    text: "Gediplomeerd coach met een passie voor de Tilburgse mentaliteit en sportinnovatie.",
    position: "right-center"
  },
  {
    id: 3,
    title: "Missie",
    text: "Elke speler helpen zijn of haar potentieel te bereiken door middel van persoonlijke begeleiding.",
    position: "left-bottom"
  }
];

const TrainerSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.min(Math.max(0, -rect.top / (rect.height - window.innerHeight)), 1);
        setScrollY(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="trainer-wrapper">
      <div className="trainer-sticky">
        <div className="trainer-bg-container">
          <img 
            src="/trainer.jpg" 
            alt="Trainer Jelte Janssen" 
            loading="lazy"
            className="trainer-bg-image"
          />
        </div>
        
        <div className="trainer-content-overlay">
          {trainerInfo.map((info, index) => {
            // Simple logic to show elements based on scroll progress (0 to 1)
            const showStart = index * 0.3;
            const isVisible = scrollY >= showStart;
            
            return (
              <div 
                key={info.id} 
                className={`trainer-info-card ${info.position} ${isVisible ? 'visible' : ''}`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
              >
                <div className="card-tag">Trainer Info</div>
                <h3>{info.title}</h3>
                <p>{info.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
