/**
 * Earlier North American festivals that don't have a content-collection entry yet.
 * When details arrive, move each into src/content/festivals/ and delete it here.
 */
export type FestivalStub = { number: number; year?: number; city?: string; summary?: string };

export const festivalStubs: FestivalStub[] = [
  { number: 3 },
  { number: 2 },
  { number: 1, year: 2019 },
];

export const ordinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
