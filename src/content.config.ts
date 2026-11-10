import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * North American festivals hosted by MKCNA.
 * One Markdown file per festival in src/content/festivals/; the file name is the URL slug
 * (e.g. 2026-denver.md -> /festivals/2026-denver). The Markdown body is the
 * "Festival highlights" intro paragraph.
 */
const festivals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/festivals' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        /** 4 for the "4th Morin Khuur Festival in the USA". */
        number: z.number().int().positive(),
        city: z.string(),
        venue: z.object({
          name: z.string(),
          detail: z.string().optional(),
          address: z.string().optional(),
        }),
        /** Calendar days (YYYY-MM-DD), inclusive. */
        start: z.coerce.date(),
        end: z.coerce.date(),
        hero: z.object({
          image: image(),
          alt: z.string(),
          /** Tailwind object-position class for the cover crop. */
          position: z.string().default('object-center'),
        }),
        /** Big headline on the festival page. Falls back to `title`. */
        headline: z.string().optional(),
        /** One or two sentences used on cards and in the page intro. */
        summary: z.string(),
        coHost: z
          .object({ name: z.string(), description: z.string().optional() })
          .optional(),
        poster: z.object({ image: image(), alt: z.string() }).optional(),
        highlights: z
          .array(z.object({ title: z.string(), description: z.string() }))
          .default([]),
        partners: z.array(z.string()).default([]),
      })
      .refine((f) => f.end >= f.start, { message: '`end` must be on or after `start`', path: ['end'] }),
});

export const collections = { festivals };
