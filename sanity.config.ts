import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'Janssen Voetbalschool CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '54bdjqy8',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool({ structure })],

  schema: schema,
});
