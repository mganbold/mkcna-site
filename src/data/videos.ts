export type Video = { id: string; title: string; description: string };

/** Featured performances on /videos (YouTube video IDs). */
export const videos: Video[] = [
  { id: 'G7hdIRQ8-Q4', title: 'International Morin Khuur Gathering', description: 'Ensemble concert performance showcase.' },
  { id: 'nxQ9YUMSono', title: 'Master Series and Repertoire Showcase', description: 'Traditional techniques and horse-head fiddle heritage.' },
];

/** Animated piece shown in the About section. */
export const aboutVideo = {
  id: 'u1VsyV4R7iY',
  title: 'The Old Musician: an animated morin khuur piece',
  credits: 'Painter: Yadamsuren Urjin · Musician: Urtnasan Gantulga · Animator: Ganbold Chuluunbat',
};
