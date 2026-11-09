/** Shared NAP / local entity data for schema, footer and maps links. */

export const BUSINESS = {
  name: "Janssen Voetbalschool",
  legalName: "Janssen Voetbalschool",
  trainerName: "Jelte Janssen",
  telephone: "+31611250476",
  telephoneDisplay: "+31 6 11250476",
  email: "jelte.janssen@ziggo.nl",
  kvk: "4218918",
  streetAddress: "Schandeloseweg 1a",
  addressLocality: "Velden",
  addressRegion: "Limburg",
  postalCode: "5941 CP",
  addressCountry: "NL",
  venueName: "Sportpark Theo Lommen",
  /** WGS84 from PDOK BAG for Schandeloseweg 1A, Velden */
  latitude: 51.41547297,
  longitude: 6.16981933,
  /** Training session windows (local time, Europe/Amsterdam) */
  openingHours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "15:30", closes: "19:00" },
  ],
  sameAs: [
    "https://www.instagram.com/janssenvoetbal/",
    "https://www.tiktok.com/@janssenvoetbalsch",
    "https://omroepvenlo.nl/nieuws/artikel/jelte-janssen-19-heeft-zijn-eigen-voetbalschool",
  ],
} as const;

export function getMapsUrl(): string {
  const q = encodeURIComponent(
    `${BUSINESS.streetAddress}, ${BUSINESS.postalCode} ${BUSINESS.addressLocality}`,
  );
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function getFullAddressLine(): string {
  return `${BUSINESS.venueName}, ${BUSINESS.streetAddress}, ${BUSINESS.postalCode} ${BUSINESS.addressLocality}`;
}
