// Genera una copia de la web con enlaces relativos para verla sin servidor (doble clic en index.html).
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname, posix } from 'node:path';
const root = process.argv[2] || 'dist';
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const resolve = (u) => {
  const [path, hash = ''] = u.split('#'); const clean = path.replace(/^\/|\/$/g, '');
  let t;
  if (clean === '') t = 'index.html';
  else if (existsSync(join(root, clean + '.html'))) t = clean + '.html';
  else if (existsSync(join(root, clean, 'index.html'))) t = clean + '/index.html';
  else if (existsSync(join(root, clean))) t = clean;
  else return null;
  return [t, hash];
};
for (const f of walk(root).filter((f) => f.endsWith('.html') || f.endsWith('.css'))) {
  const dir = dirname(relative(root, f)) || '.';
  let s = readFileSync(f, 'utf8');
  s = s.replace(/(href|src)="(\/[^"\/][^"]*|\/)"/g, (m, a, u) => {
    const r = resolve(u); if (!r) return m;
    let rel = posix.relative(dir === '.' ? '' : dir.split('\\').join('/'), r[0]) || 'index.html';
    return `${a}="${rel}${r[1] ? '#' + r[1] : ''}"`;
  });
  s = s.replace(/url\((\/[^)]+)\)/g, (m, u) => { const r = resolve(u); return r ? `url(${posix.relative(dir === '.' ? '' : dir, r[0])})` : m; });
  writeFileSync(f, s);
}
console.log('preview ok');
