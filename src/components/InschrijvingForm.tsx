'use client';

import React, { useState } from 'react';

type InschrijvingFormProps = {
  initialPakket?: string;
};

const InschrijvingForm = ({ initialPakket }: InschrijvingFormProps) => {
  const [formData, setFormData] = useState({
    pakket: initialPakket ?? '',
    name: '',
    email: '',
    phone: '',
    message: initialPakket
      ? `Ik wil me graag inschrijven voor: ${initialPakket}`
      : 'Ik wil me graag inschrijven voor een trainingspakket.',
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
          type: 'inschrijving',
          pakket: formData.pakket,
          subject: formData.pakket
            ? `Inschrijving: ${formData.pakket}`
            : 'Inschrijving trainingspakket',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setFormData({
        pakket: initialPakket ?? '',
        name: '',
        email: '',
        phone: '',
        message: initialPakket
          ? `Ik wil me graag inschrijven voor: ${initialPakket}`
          : 'Ik wil me graag inschrijven voor een trainingspakket.',
      });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #333333',
    fontSize: '16px',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 800,
    color: '#888888',
    textTransform: 'uppercase',
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '600px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label htmlFor="pakket" style={labelStyle}>
          Pakket
        </label>
        <input
          type="text"
          id="pakket"
          name="pakket"
          value={formData.pakket}
          onChange={handleChange}
          required
          placeholder="Bijv. Techniektraining — €150 10 lessen"
          style={inputStyle}
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="name" style={labelStyle}>
            Naam
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="email" style={labelStyle}>
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label htmlFor="phone" style={labelStyle}>
          Telefoonnummer
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label htmlFor="message" style={labelStyle}>
          Bericht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          marginTop: '12px',
          padding: '20px',
          borderRadius: '9999px',
          backgroundColor: '#ffffff',
          color: '#0a0a0a',
          fontSize: '16px',
          fontWeight: 800,
          cursor: status === 'submitting' ? 'wait' : 'pointer',
          transition: 'all 0.3s ease',
          border: 'none',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          opacity: status === 'submitting' ? 0.7 : 1,
        }}
      >
        {status === 'submitting' ? 'Versturen…' : 'Inschrijving versturen'}
      </button>

      {status === 'success' && (
        <p style={{ margin: '8px 0 0', color: '#86efac', fontWeight: 700, textAlign: 'center' }}>
          Verstuurd. Je inschrijving is ontvangen en zichtbaar in het studio-overzicht.
        </p>
      )}
      {status === 'error' && (
        <p style={{ margin: '8px 0 0', color: '#fca5a5', fontWeight: 700, textAlign: 'center' }}>
          Versturen ging mis. Probeer het opnieuw.
        </p>
      )}
    </form>
  );
};

export default InschrijvingForm;
