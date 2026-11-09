const AMSTERDAM_TIMEZONE = 'Europe/Amsterdam';

/** Today's date as YYYY-MM-DD in the Netherlands (matches Sanity date fields). */
export function getTodayInAmsterdam(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: AMSTERDAM_TIMEZONE });
}
