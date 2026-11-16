// ─────────────────────────────────────────────────────────────
//  Todo lo que quieras cambiar del blog está aquí arriba.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'noticiasde.ia',
  tagline: 'IA explicada por un developer, escrita a mano.',
  description:
    'Blog de inteligencia artificial, cloud y desarrollo en español. Artículos escritos a mano por un software developer que va camino de AI & Cloud engineer.',
};

export const AUTHOR = {
  name: 'Adnan',
  github: 'adnanbkz',
  role: 'Software developer · camino a AI & Cloud engineer',
  bio: 'Llevo 2 años programando de forma profesional. Ahora estoy aprendiendo en público todo lo que necesito para ser AI & Cloud engineer: modelos, agentes, infraestructura y despliegue. Aquí lo cuento sin humo y sin IA escribiendo por mí.',
  // Pon tu foto en /public/redes/perfil.jpg y cambia esto a '/redes/perfil.jpg'
  photo: null as string | null,
};

export type Social = {
  id: string; name: string; handle: string; url: string; followers?: string;
};

export const SOCIALS: Social[] = [
  { id: 'instagram', name: 'Instagram', handle: '@noticiasde.ia', url: 'https://www.instagram.com/noticiasde.ia/' },
  { id: 'youtube', name: 'YouTube', handle: '@noticiasde_ia', url: 'https://www.youtube.com/@noticiasde_ia' },
  { id: 'tiktok', name: 'TikTok', handle: '@noticiasde.ia', url: '#' },
  { id: 'github', name: 'GitHub', handle: 'adnanbkz', url: 'https://github.com/adnanbkz' },
  { id: 'linkedin', name: 'LinkedIn', handle: 'Adnan', url: '#' },
];

// Huecos para capturas de tus redes. Sube la imagen a /public/redes/ y pon la ruta en `img`.
export const REELS: { title: string; img: string | null; url: string; views?: string }[] = [
  { title: 'MCP vs API en 90 segundos', img: null, url: 'https://www.instagram.com/noticiasde.ia/' },
  { title: 'Cómo busca la IA en internet', img: null, url: 'https://www.instagram.com/noticiasde.ia/' },
  { title: 'Qué hay detrás de todo internet', img: null, url: 'https://www.instagram.com/noticiasde.ia/' },
  { title: 'Cómo se fabrica un ChatGPT', img: null, url: 'https://www.instagram.com/noticiasde.ia/' },
  { title: 'API vs SDK con un drive-thru', img: null, url: 'https://www.instagram.com/noticiasde.ia/' },
];

export const YT_VIDEOS: { title: string; img: string | null; url: string }[] = [
  { title: 'Cómo hago vídeos virales con Claude', img: null, url: 'https://www.youtube.com/@noticiasde_ia' },
  { title: 'De piedra a procesador', img: null, url: 'https://www.youtube.com/@noticiasde_ia' },
];

export const CATEGORIES = {
  agentes:   { name: 'Agentes y MCP',        short: 'Agentes',   color: '#2fd6dc', color2: '#7b5cff', blurb: 'Agentes, tool calling, MCP y todo lo que hace que la IA haga cosas.' },
  modelos:   { name: 'Modelos y LLMs',       short: 'Modelos',   color: '#ffb547', color2: '#ff5e8a', blurb: 'Cómo funcionan por dentro GPT, Claude, Gemini y compañía.' },
  cloud:     { name: 'Cloud e infra',        short: 'Cloud',     color: '#5cc8ff', color2: '#3a2fb0', blurb: 'Servidores, GPUs, despliegue y la parte que nadie enseña.' },
  dev:       { name: 'Dev con IA',           short: 'Dev',       color: '#9cf36b', color2: '#1f8a7a', blurb: 'Herramientas para programar mejor: Copilot, Claude Code, GitHub.' },
  seguridad: { name: 'Ciberseguridad',       short: 'Seguridad', color: '#ff6b6b', color2: '#5b1f6e', blurb: 'Deepfakes, prompt injection y cómo protegerte.' },
  explicado: { name: 'Explicado fácil',      short: 'Explicado', color: '#ffd84d', color2: '#e8641c', blurb: '¿Cómo narices funciona esto? Lo de siempre, contado claro.' },
  opinion:   { name: 'Opinión',              short: 'Opinión',   color: '#f48cff', color2: '#4a2a8c', blurb: 'Lo que pienso yo, firmado y sin filtro.' },
  camino:    { name: 'Mi camino a AI Engineer', short: 'Diario', color: '#7cf2c4', color2: '#ffb547', blurb: 'Diario de aprendizaje: lo que estudio, lo que falla y lo que construyo.' },
} as const;

export type CatId = keyof typeof CATEGORIES;

// ─── Lo que hago en el trabajo (cobots). Rellena con tus datos reales. ───
export const WORK = {
  title: 'Programo cobots',
  intro: 'Mi día a día es software para robots colaborativos: brazos que trabajan al lado de personas, sin jaulas. Escribe aquí en dos líneas qué haces tú exactamente.',
  facts: [
    { label: 'Qué hago', value: 'Escribe aquí tu rol (p. ej. integración, programación de tareas, visión).' },
    { label: 'Con qué', value: 'Marca del robot, lenguajes y herramientas que usas.' },
    { label: 'Lo que más me gusta', value: 'Ver código moverse en el mundo real.' },
  ],
  photo: null as string | null, // /redes/cobots.jpg
};

// ─── Proyectos destacados. `img` = captura en /public/proyectos/ ───
export const PROJECTS = [
  {
    name: 'Fábrica de reels con IA',
    what: 'El sistema con el que hago los vídeos de noticiasde.ia: guion, voz, transcripción palabra a palabra y montaje automático con Remotion.',
    stack: ['Remotion', 'TypeScript', 'Whisper', 'ElevenLabs', 'three.js'],
    img: null as string | null, url: 'https://www.instagram.com/noticiasde.ia/', cta: 'Ver los vídeos',
  },
  {
    name: 'Este blog',
    what: 'Web estática hecha con Astro. Los artículos son ficheros Markdown que escribo a mano y las portadas se dibujan con código.',
    stack: ['Astro', 'Markdown', 'CSS', 'SVG'],
    img: null as string | null, url: 'https://github.com/adnanbkz', cta: 'Ver el código',
  },
  {
    name: 'Tu proyecto con cobots',
    what: 'Hueco para un proyecto del trabajo o personal con robots. Cuenta el problema, lo que construiste y el resultado.',
    stack: ['Python', 'ROS 2', '...'],
    img: null as string | null, url: '#', cta: 'Más detalles',
  },
];

// Repos que se muestran si no se pueden cargar en vivo desde GitHub (ejemplos, cámbialos).
export const REPOS_FALLBACK = [
  { name: 'noticiasde-ia-reels', description: 'Pipeline de vídeos verticales con Remotion.', language: 'TypeScript', stars: 0, url: 'https://github.com/adnanbkz' },
  { name: 'noticiasde-ia-web', description: 'Este blog, hecho con Astro.', language: 'Astro', stars: 0, url: 'https://github.com/adnanbkz' },
  { name: 'cobot-playground', description: 'Ejemplo: pruebas y utilidades para cobots.', language: 'Python', stars: 0, url: 'https://github.com/adnanbkz' },
  { name: 'cloud-notes', description: 'Ejemplo: apuntes y labs de AWS y Azure.', language: 'HCL', stars: 0, url: 'https://github.com/adnanbkz' },
];

export const STORY = [
  { when: '2024', title: 'Empiezo como software developer', text: 'Primer trabajo programando de forma profesional.' },
  { when: '2025', title: 'Llego a los cobots', text: 'Software para robots que trabajan al lado de personas.' },
  { when: '2026', title: 'Nace noticiasde.ia', text: 'Reels de un minuto explicando IA en español, y este blog.' },
  { when: '2027', title: 'Cloud en serio', text: 'Certificaciones de AWS y Azure, despliegue de modelos.' },
  { when: 'Meta', title: 'AI & Cloud engineer', text: 'Diseñar y llevar a producción sistemas de IA.' },
];
