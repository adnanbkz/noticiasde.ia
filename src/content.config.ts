import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['agentes', 'modelos', 'cloud', 'dev', 'seguridad', 'explicado', 'opinion', 'camino']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    // Imagen propia opcional (ruta en /public). Si no hay, se dibuja una portada automática.
    cover: z.string().optional(),
    // Enlace al reel / vídeo relacionado
    reel: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articulos };
