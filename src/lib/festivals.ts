import { getCollection, type CollectionEntry } from 'astro:content';
import { formatDateRange } from './dates';

export type Festival = CollectionEntry<'festivals'>;

/** All MKCNA festivals, newest first. */
export async function getFestivals(): Promise<Festival[]> {
  const all = await getCollection('festivals');
  return all.sort((a, b) => b.data.start.getTime() - a.data.start.getTime());
}

export const festivalUrl = (f: Festival) => `/festivals/${f.id}/`;
export const festivalDates = (f: Festival) => formatDateRange(f.data.start, f.data.end);

/** Inclusive number of festival days. */
export const festivalDays = (f: Festival) =>
  Math.round((f.data.end.getTime() - f.data.start.getTime()) / 86_400_000) + 1;
