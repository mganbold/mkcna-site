export type Person = { name: string; role: string; bio?: string };

export const board: Person[] = [
  { name: 'Urtnasan Gantulga', role: 'Board Member' },
  { name: 'Peter Marsh', role: 'Board Member' },
  { name: 'Charlotte D’Evelyn', role: 'Board Member' },
  { name: 'Altanzaya Batchuluun', role: 'Board Member' },
];

export const executiveTeam: Person[] = [
  { name: 'Mandakh Ganbold', role: 'Executive Team' },
  { name: 'Dorjpagma Badam', role: 'Executive Team' },
];

/** "Charlotte D’Evelyn" -> "CD" */
export const initials = (name: string) =>
  name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
