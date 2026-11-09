'use client';

/**
 * This route is responsible for the Sanity Studio UI.
 * It's nested under /src/app/studio/[[...tool]]/page.tsx
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
