import { defineField, defineType } from "sanity";

export const aanvraagType = defineType({
  name: "aanvraag",
  title: "Aanvragen",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Contact", value: "contact" },
          { title: "Proefles", value: "proefles" },
          { title: "Mini Voetbalschool", value: "mini-voetbalschool" },
          { title: "Inschrijving", value: "inschrijving" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pakket",
      title: "Pakket",
      type: "string",
      description: "Geselecteerd trainingspakket (bij inschrijvingen)",
    }),
    defineField({
      name: "subject",
      title: "Onderwerp",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Naam",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefoon",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Bericht",
      type: "text",
    }),
    defineField({
      name: "createdAt",
      title: "Aangemaakt op",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "subject",
      name: "name",
      type: "type",
      pakket: "pakket",
      createdAt: "createdAt",
    },
    prepare({ title, name, type, pakket, createdAt }) {
      const labels: Record<string, string> = {
        proefles: "Proefles",
        "mini-voetbalschool": "Mini",
        inschrijving: "Inschrijving",
        contact: "Contact",
      };
      const label = labels[type] || "Contact";
      const date = createdAt ? new Date(createdAt).toLocaleString("nl-NL") : "";
      return {
        title: title || pakket || `${label} aanvraag`,
        subtitle: [name, pakket && type === "inschrijving" ? pakket : null, date]
          .filter(Boolean)
          .join(" · "),
      };
    },
  },
});
