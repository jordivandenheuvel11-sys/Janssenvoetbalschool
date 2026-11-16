'use client';

import Image from 'next/image';

const TEAM = [
  {
    name: 'Rik',
    role: 'Trainer | Ex-VVV speler',
    photo: '/concept/trainer-rik.webp',
    objectPosition: 'center 15%',
  },
  {
    name: 'Jelte',
    role: 'Trainer | Eigenaar',
    photo: '/concept/trainer-jelte.webp',
    objectPosition: 'center 20%',
  },
  {
    name: 'Wout',
    role: 'Trainer',
    photo: '/concept/trainer-wout.webp',
    objectPosition: 'center 18%',
  },
];

/** “Ons team” — Figma hero 2. */
const TeamSection = () => {
  return (
    <section
      aria-labelledby="team-heading"
      style={{
        backgroundColor: '#f4f4f4',
        padding: 'clamp(48px, 7vw, 80px) 24px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            textAlign: 'center',
            maxWidth: 520,
            margin: '0 auto clamp(36px, 5vw, 50px)',
          }}
        >
          <h2
            id="team-heading"
            style={{
              margin: '0 0 14px',
              fontSize: 'clamp(1.6rem, 3.4vw, 2.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: '#0f0f0f',
            }}
          >
            Ons team
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              fontWeight: 600,
              lineHeight: 1.55,
              letterSpacing: '-0.02em',
              color: '#0f0f0f',
            }}
          >
            Ons geweldige team van trainers die elke keer maar weer klaarstaan
            om de kinderen iets bij te leren
          </p>
        </div>

        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'clamp(24px, 4vw, 53px)',
            justifyItems: 'center',
            maxWidth: 856,
            margin: '0 auto',
          }}
        >
          {TEAM.map((member) => (
            <article
              key={member.name}
              style={{ width: '100%', maxWidth: 250 }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: 10,
                  overflow: 'hidden',
                  backgroundColor: '#111',
                  marginBottom: 10,
                }}
              >
                <Image
                  src={member.photo}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 250px"
                  quality={80}
                  style={{
                    objectFit: 'cover',
                    objectPosition: member.objectPosition,
                  }}
                />
              </div>
              <h3
                style={{
                  margin: '0 0 2px',
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#0f0f0f',
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 17,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#3a3a3a',
                }}
              >
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            max-width: 280px !important;
          }
          .team-grid article {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
