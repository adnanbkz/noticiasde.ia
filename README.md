# noticiasde.ia

Mi web personal y blog de IA: mi historia, mis proyectos con cobots y artículos sobre IA y cloud escritos a mano, sin IA. Hecha con [Astro](https://astro.build).

## Arrancar en local

```bash
npm install
npx astro dev
```

## Dónde se cambia cada cosa

- Tus datos, proyectos, redes y huecos de fotos: `src/data/site.ts`
- Artículos (Markdown escrito a mano): `src/content/articulos/*.md`
- Fotos: súbelas a `public/redes/` o `public/proyectos/` y pon la ruta en `src/data/site.ts`
- Estilos: `src/styles/global.css`

## Publicación

Cada push a `main` construye la web y la publica en GitHub Pages (`.github/workflows/deploy.yml`).
El dominio está en `public/CNAME`.
