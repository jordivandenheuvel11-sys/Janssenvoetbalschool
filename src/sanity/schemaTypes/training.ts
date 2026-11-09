import { defineField, defineType } from 'sanity';

export const trainingType = defineType({
  name: 'training',
  title: 'Trainingsdag',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Datum van de training',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'notes',
      title: 'Opmerkingen',
      type: 'text',
      description: 'Optionele opmerkingen voor deze trainingsdag (bijvoorbeeld: Neem je zaalschoenen mee!)',
    }),
  ],
  preview: {
    select: {
      title: 'date',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title ? new Date(title).toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' }) : 'Geen datum',
      };
    },
  },
});
