// Antepone una ruta base a los enlaces internos de la web ya compilada.
// Hace falta porque GitHub Pages sirve la web en /noticiasde.ia/ y no en la raíz del dominio.
// Uso: BASE_PATH=/noticiasde.ia node scripts/prefix-base.mjs dist
// Si algún día usas un dominio propio, quita BASE_PATH del workflow y no hará nada.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] || 'dist';
const base = (process.env.BASE_PATH || '').replace(/\/+$/, '');
if (!base) { console.log('prefix-base: sin BASE_PATH, no cambio nada'); process.exit(0); }

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
let n = 0;
for (const f of walk(root).filter((f) => /\.(html|css|xml)$/.test(f))) {
  const s = readFileSync(f, 'utf8');
  const out = s
    // href="/..." src="/..." (pero no "//cdn...")
    .replace(/\b(href|src|action|poster)="\/(?!\/)/g, `$1="${base}/`)
    // url(/...) en CSS
    .replace(/url\((['"]?)\/(?!\/)/g, `url($1${base}/`);
  if (out !== s) { writeFileSync(f, out); n++; }
}
console.log(`prefix-base: ${n} archivos con la base ${base}`);
