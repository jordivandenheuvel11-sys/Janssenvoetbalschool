'use client';

import React from 'react';
import ContactSection from '@/components/ContactSection';

export default function ProeflesAanvragenPage() {
  return (
    <main style={{ backgroundColor: '#0f0f0f', color: '#ffffff', minHeight: '100vh' }}>
      <div style={{ paddingTop: '80px' }}>
        <ContactSection
          aanvraagType="proefles"
          heading="Proefles aanvragen"
          description="Laat je gegevens achter en ik neem contact met je op om de proefles in te plannen."
          submitLabel="Proefles aanvragen"
          initialSubject="Proefles aanvraag"
        />
      </div>
    </main>
  );
}

