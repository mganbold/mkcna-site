export type Video = { id: string; title: string; description: string };

/** Featured performances on /videos (YouTube video IDs). */
export const videos: Video[] = [
  { id: 'G7hdIRQ8-Q4', title: '“Strings of the Heart” Trailer 2', description: 'Trailer for the film “Strings of the Heart.”' },
  { id: 'nxQ9YUMSono', title: 'Үүлэн бор (Üülen Bor)', description: 'A morin khuur performance of “Üülen Bor.”' },
];

/** Animated piece shown in the About section. */
export const aboutVideo = {
  id: 'u1VsyV4R7iY',
  title: 'The Old Musician: an animated morin khuur piece',
  credits: 'Painter: Yadamsuren Urjin · Musician: Urtnasan Gantulga · Animator: Ganbold Chuluunbat',
};
