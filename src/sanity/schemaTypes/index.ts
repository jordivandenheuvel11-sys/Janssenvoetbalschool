import { type SchemaTypeDefinition } from 'sanity';
import { trainingType } from './training';
import { aanvraagType } from './aanvraag';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [trainingType, aanvraagType],
};
