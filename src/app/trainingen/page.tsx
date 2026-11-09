import { client } from '@/sanity/lib/client';
import { getTodayInAmsterdam } from '@/sanity/lib/today';
import type { Metadata } from "next";

// Define the Training interface (Simplified)
interface Training {
  _id: string;
  date: string;
  notes?: string;
}

export const revalidate = 60; // Revalidate every minute

export const metadata: Metadata = {
  title: "Trainingsdagen & planning",
  description:
    "Bekijk de planning van onze techniektrainingen in Velden inclusief tijden en locatie (Sportpark Theo Lommen).",
  alternates: { canonical: "/trainingen" },
};

export default async function TrainingenPage() {
  let trainingen: Training[] = [];
  
  try {
    // Try to fetch from Sanity
    trainingen = await client.fetch(
      `*[_type == "training" && date >= $today] | order(date asc) {
        _id,
        date,
        notes
      }`,
      { today: getTodayInAmsterdam() },
    );
  } catch (error) {
    console.error('Failed to fetch trainingen from Sanity:', error);
  }

  // Fixed values as requested
  const FIXED_TITLE = "Techniektraining";
  const FIXED_GROUPS = [
    { name: "Groep 1", time: "15:30 - 16:30" },
    { name: "Groep 2", time: "16:45 - 17:45" },
    { name: "Groep 3", time: "18:00 - 19:00" }
  ];
  const FIXED_LOCATION = "Sportpark Theo Lommen, Schandeloseweg 1a, 5941 CP Velden";

  return (
    <main style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#ffffff' }}>
      
      <div style={{ padding: '160px 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <span style={{
            fontSize: '14px',
            fontWeight: '900',
            color: '#D90429',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '20px'
          }}>
            Planning
          </span>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: '900', 
            letterSpacing: '-0.04em',
            lineHeight: '1',
            margin: '0 auto'
          }}>
            Trainingsdagen
          </h1>
          <p style={{ marginTop: '24px', fontSize: '20px', color: '#aaaaaa', maxWidth: '600px', margin: '24px auto 0' }}>
            Bekijk hieronder de geplande data voor onze techniektrainingen.
          </p>
        </div>

        {trainingen.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {trainingen.map((training) => (
              <div 
                key={training._id}
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: 'var(--radius)',
                  padding: '40px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative Accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  backgroundColor: '#D90429'
                }} />

                <div style={{ 
                  color: '#D90429', 
                  fontSize: '13px',
                  fontWeight: '900',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}>
                  {new Date(training.date).toLocaleDateString('nl-NL', { weekday: 'long' })}
                </div>
                
                <h3 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  {new Date(training.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' })}
                </h3>
                
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '24px', opacity: 0.8 }}>
                  {FIXED_TITLE}
                </h4>
                
                <div style={{ 
                  marginTop: 'auto',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '8px', 
                  fontSize: '15px' 
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {FIXED_GROUPS.map((group, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#D90429', fontWeight: '700' }}>{group.name}:</span> 
                        <span style={{ color: '#ffffff', opacity: 0.9 }}>{group.time}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                    <span style={{ color: '#D90429', fontWeight: '700' }}>Locatie:</span> {FIXED_LOCATION}
                  </div>
                  
                  {/* Optional Notes */}
                  {training.notes && (
                    <div style={{ 
                      marginTop: '20px', 
                      padding: '16px', 
                      backgroundColor: 'rgba(217, 4, 41, 0.1)', 
                      borderRadius: 'var(--radius)',
                      border: '1px solid rgba(217, 4, 41, 0.2)',
                      fontSize: '14px',
                      lineHeight: '1.5',
                      color: '#ffffff'
                    }}>
                      <strong style={{ color: '#D90429', display: 'block', marginBottom: '4px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Opmerking:
                      </strong>
                      {training.notes}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontSize: '18px', color: '#595959' }}>
              Er zijn momenteel geen trainingen gepland. Kom binnenkort terug!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
