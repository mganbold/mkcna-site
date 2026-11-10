import type { ImageMetadata } from 'astro';
import europePoster from '../assets/cycle/europe-2025-ingolstadt-poster.webp';
import mongoliaPoster from '../assets/cycle/mongolia-2027-ulaanbaatar-poster.webp';

/**
 * Partner festivals in the three-year global cycle (Europe -> North America -> Mongolia).
 * The North American festival comes from the `festivals` content collection.
 */
export type PartnerFestival = {
  region: string;
  year: number;
  status: 'Completed' | 'Upcoming';
  title: string;
  city: string;
  dates: string;
  summary: string;
  poster: ImageMetadata;
  posterAlt: string;
  posterFit: string;
  link: { href: string; label: string };
};

export const europe: PartnerFestival = {
  region: 'Europe',
  year: 2025,
  status: 'Completed',
  title: 'Second Morin Khuur Festival in Europe',
  city: 'Ingolstadt, Germany',
  dates: 'June 14–15, 2025',
  summary: 'Organized by the Morin Khuur Festival in Europe, with the “Sounds of Mongolia” gala concert at the Stadttheater.',
  poster: europePoster,
  posterAlt: 'Poster for the Sounds of Mongolia gala concert of the second European Morin Khuur Festival in Ingolstadt',
  posterFit: 'object-cover object-top',
  link: { href: 'https://www.morinkhuur.de/', label: 'Festival website' },
};

export const mongolia: PartnerFestival = {
  region: 'Mongolia',
  year: 2027,
  status: 'Upcoming',
  title: '8th International Morin Khuur Festival',
  city: 'Ulaanbaatar, Mongolia',
  dates: 'April 17–24, 2027',
  summary: 'Hosted by the World Morin Khuur Association in Ulaanbaatar, under the patronage of the President of Mongolia.',
  poster: mongoliaPoster,
  posterAlt: 'Poster for the 8th International Morin Khuur Festival, Ulaanbaatar, Mongolia, April 17-24, 2027',
  posterFit: 'object-contain',
  link: { href: 'https://www.facebook.com/WMAssociation/', label: 'Official event page' },
};
