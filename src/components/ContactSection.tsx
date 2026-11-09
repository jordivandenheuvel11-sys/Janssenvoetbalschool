'use client';

import React, { useState } from 'react';

type ContactSectionProps = {
  initialSubject?: string;
  initialMessage?: string;
  aanvraagType?: 'contact' | 'proefles' | 'mini-voetbalschool';
  heading?: string;
  description?: string;
  submitLabel?: string;
  /** Use h1 on dedicated pages for SEO; default h2 for embedded sections */
  headingAs?: 'h1' | 'h2';
};

const ContactSection = ({
  initialSubject,
  initialMessage,
  aanvraagType = 'contact',
  heading,
  description,
  submitLabel,
  headingAs = 'h2',
}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    subject: initialSubject ?? '',
    name: '',
    email: '',
    phone: '',
    message: initialMessage ?? ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setStatus('submitting');
      const res = await fetch('/api/aanvragen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: aanvraagType,
          subject: formData.subject,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setFormData({
        subject: initialSubject ?? '',
        name: '',
        email: '',
        phone: '',
        message: initialMessage ?? '',
      });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" style={{
      padding: '120px 24px',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 20,
      scrollMarginTop: '100px' // Offset for fixed navbar
    }}>
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', marginBottom: '60px' }}>
        <span style={{
          fontSize: '14px',
          fontWeight: '900',
          color: '#D90429',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '20px'
        }}>
          Direct Contact
        </span>
        {React.createElement(
          headingAs,
          {
            style: {
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              letterSpacing: '-0.04em',
              lineHeight: '1.1',
              marginBottom: '24px',
              color: '#ffffff',
            },
          },
          heading ?? 'Klaar voor de volgende stap?',
        )}
        <p style={{
          fontSize: '20px',
          color: '#a0a0a0',
          lineHeight: '1.6',
          fontWeight: '500'
        }}>
          {description ?? 'Vraag een proefles aan of stel je vragen. Ik help je graag verder.'}
        </p>
      </div>

      <form 
        onSubmit={handleSubmit}
        style={{
          maxWidth: '600px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="subject" style={{ fontSize: '14px', fontWeight: '800', color: '#595959', textTransform: 'uppercase' }}>Onderwerp</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              padding: '16px',
              borderRadius: 'var(--radius)',
              border: '1px solid #333333',
              fontSize: '16px',
              backgroundColor: '#1a1a1a',
              color: '#ffffff'
            }}
          />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px',
          width: '100%' 
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="name" style={{ fontSize: '14px', fontWeight: '800', color: '#595959', textTransform: 'uppercase' }}>Naam</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              required
              style={{
                padding: '16px',
                borderRadius: 'var(--radius)',
                border: '1px solid #333333',
                fontSize: '16px',
                backgroundColor: '#1a1a1a',
                color: '#ffffff'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ fontSize: '14px', fontWeight: '800', color: '#595959', textTransform: 'uppercase' }}>E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              required
              style={{
                padding: '16px',
                borderRadius: 'var(--radius)',
                border: '1px solid #333333',
                fontSize: '16px',
                backgroundColor: '#1a1a1a',
                color: '#ffffff'
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: '800', color: '#595959', textTransform: 'uppercase' }}>Telefoonnummer</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            style={{
              padding: '16px',
              borderRadius: 'var(--radius)',
              border: '1px solid #333333',
              fontSize: '16px',
              backgroundColor: '#1a1a1a',
              color: '#ffffff'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="message" style={{ fontSize: '14px', fontWeight: '800', color: '#595959', textTransform: 'uppercase' }}>Bericht</label>
          <textarea 
            id="message" 
            name="message" 
            rows={5}
            value={formData.message} 
            onChange={handleChange}
            required
            style={{
              padding: '16px',
              borderRadius: 'var(--radius)',
              border: '1px solid #333333',
              fontSize: '16px',
              backgroundColor: '#1a1a1a',
              color: '#ffffff',
              resize: 'vertical'
            }}
          />
        </div>

        <button 
          type="submit"
          style={{
            marginTop: '12px',
            padding: '20px',
            borderRadius: 'var(--radius)',
            backgroundColor: '#ffffff',
            color: '#0a0a0a',
            fontSize: '16px',
            fontWeight: '800',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {status === 'submitting' ? 'Versturen…' : (submitLabel ?? 'Verstuur Aanvraag')}
        </button>

        {status === 'success' && (
          <p style={{ margin: '8px 0 0', color: '#86efac', fontWeight: 700, textAlign: 'center' }}>
            Verstuurd. Je aanvraag staat nu in het overzicht voor de eigenaar.
          </p>
        )}
        {status === 'error' && (
          <p style={{ margin: '8px 0 0', color: '#fca5a5', fontWeight: 700, textAlign: 'center' }}>
            Versturen ging mis. Probeer het opnieuw.
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactSection;
