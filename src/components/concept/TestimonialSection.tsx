'use client';

/** Dark testimonial strip — Figma hero 2. */
const TestimonialSection = () => {
  return (
    <section
      aria-label="Ervaring van een ouder"
      style={{
        backgroundColor: '#141414',
        padding: 'clamp(48px, 7vw, 88px) 24px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        style={{
          maxWidth: 640,
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <img
          src="/concept/stars-5.png"
          alt="5 van 5 sterren"
          width={140}
          height={42}
          style={{
            width: 140,
            height: 'auto',
            maxHeight: 42,
            display: 'block',
            objectFit: 'contain',
          }}
        />
        <blockquote
          style={{
            margin: 0,
            fontSize: 'clamp(1.05rem, 2.4vw, 1.5rem)',
            fontWeight: 600,
            lineHeight: 1.35,
            color: '#ffffff',
          }}
        >
          “Bij de trainingen die ik ben gaan kijken viel het me op dat de
          trainers erg motiverend en professioneel zijn. Mijn zoon komt elke
          training thuis met een voldaan gevoel”
        </blockquote>
        <p
          style={{
            margin: 0,
            fontSize: 17,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#ffffff',
          }}
        >
          Ouder, anoniem
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
