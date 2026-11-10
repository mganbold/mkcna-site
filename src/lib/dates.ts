const md = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', timeZone: 'UTC' });
const full = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

/** "May 8–10, 2026", "April 30–May 2, 2026", or "Dec 30, 2026–Jan 2, 2027". Dates are treated as UTC calendar days. */
export function formatDateRange(start: Date, end: Date): string {
  const sy = start.getUTCFullYear();
  const ey = end.getUTCFullYear();
  if (start.getTime() === end.getTime()) return full.format(start);
  if (sy !== ey) return `${full.format(start)}–${full.format(end)}`;
  if (start.getUTCMonth() === end.getUTCMonth()) {
    return `${md.format(start)}–${end.getUTCDate()}, ${sy}`;
  }
  return `${md.format(start)}–${md.format(end)}, ${sy}`;
}
