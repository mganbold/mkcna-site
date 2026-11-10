import type { ImageMetadata } from 'astro';
import khuurchiinkhan from '../assets/affiliates/khuurchiinkhan.webp';
import maec from '../assets/affiliates/acm-maec.webp';
import ajnai from '../assets/affiliates/ajnai.webp';
import giingoo from '../assets/affiliates/giingoo.webp';
import anura from '../assets/affiliates/anura.webp';

export type Affiliate = {
  region: string;
  name: string;
  location: string;
  description: string;
  /** Column span on the 6-column desktop grid. */
  span: 2 | 3;
  logo: ImageMetadata;
  link?: { href: string; label: string };
};

export const affiliates: Affiliate[] = [
  {
    region: 'West Coast',
    name: 'Khuurchiinkhan',
    location: 'Seattle, WA',
    description: 'Pacific Northwest ensemble focused on youth education, community performance, and traditional technique.',
    span: 3,
    logo: khuurchiinkhan,
  },
  {
    region: 'West Coast',
    name: 'Mongolian Arts and Education Center (MAEC)',
    location: 'San Francisco, CA',
    description: 'Bay Area center promoting cross-cultural collaboration, artist workshops, and advanced student development.',
    span: 3,
    logo: maec,
    link: { href: 'https://www.facebook.com/profile.php?id=61586777398714', label: 'Visit on Facebook' },
  },
  {
    region: 'Mountain',
    name: 'Ajnai',
    location: 'Denver, CO',
    description: 'Host of the 2026 North American Festival.',
    span: 2,
    logo: ajnai,
    link: { href: 'https://www.youtube.com/@AjnaiColorado', label: 'Watch on YouTube' },
  },
  {
    region: 'Midwest',
    name: 'Giingoo',
    location: 'Chicago, IL',
    description: 'Children’s morin khuur ensemble near Chicago, founded in October 2021. About 22 students ages 10–16 train regularly.',
    span: 2,
    logo: giingoo,
    link: { href: 'https://www.youtube.com/@giingoomorinkhuur', label: 'Watch on YouTube' },
  },
  {
    region: 'East Coast',
    name: 'Anura Music Academy',
    location: 'Falls Church, VA',
    description: 'Nonprofit music school founded in 2015, teaching piano and morin khuur to students of all ages, in person and online.',
    span: 2,
    logo: anura,
    link: { href: 'https://anuramusic.org/', label: 'Visit website' },
  },
];
