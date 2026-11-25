// ─────────────────────────────────────────────────────────────
//  Todo lo que quieras cambiar del blog está aquí arriba.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'noticiasde.ia',
  tagline: 'IA explicada por un developer.',
  description:
    'Blog de inteligencia artificial, cloud y desarrollo en español. Artículos de un software developer que va camino de AI & Cloud engineer.',
};

export const AUTHOR = {
  name: 'Adnan',
  github: 'adnanbkz',
  role: 'Software developer · camino a AI & Cloud engineer',
  bio: 'Llevo 2 años programando de forma profesional. Ahora estoy aprendiendo en público todo lo que necesito para ser AI & Cloud engineer: modelos, agentes, infraestructura y despliegue. Aquí lo cuento sin humo.',
  photo: '/redes/adnan.webp' as string | null,
};

export type Social = {
  id: string; name: string; handle: string; url: string; followers?: string;
};

export const SOCIALS: Social[] = [
  { id: 'tiktok', name: 'TikTok', handle: '@noticiasde.ia', url: 'https://www.tiktok.com/@noticiasde.ia' },
  { id: 'instagram', name: 'Instagram', handle: '@noticiasde.ia', url: 'https://www.instagram.com/noticiasde.ia/' },
  { id: 'youtube', name: 'YouTube', handle: '@noticiasde_IA', url: 'https://www.youtube.com/@noticiasde_IA' },
  { id: 'github', name: 'GitHub', handle: 'adnanbkz', url: 'https://github.com/adnanbkz' },
  { id: 'kofi', name: 'Ko-fi', handle: 'invítame a un café', url: 'https://ko-fi.com/adnanbk' },
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
  { title: 'Cómo hago vídeos virales con Claude', img: null, url: 'https://www.youtube.com/@noticiasde_IA' },
  { title: 'De piedra a procesador', img: null, url: 'https://www.youtube.com/@noticiasde_IA' },
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
  intro: 'Actualmente trabajo implementando software en entornos reales, en la industria de los robots colaborativos. Estos brazos trabajan al lado de personas, sin jaulas. Yo me encargo de implementar funciones usando programación, matemáticas y física.',
  facts: [
    { label: 'Qué hago', value: 'Full Stack Software Developer, especializado en Java y Maven.' },
    { label: 'Con qué', value: 'Universal Robots, Java, URScript, lenguaje de PLC y las comunicaciones entre las fuentes de soldadura y la unidad de control del cobot.' },
    { label: 'Lo que más me gusta', value: 'Ver el código en un entorno real me apasiona. Es un feedback constante :)' },
  ],
  photo: '/redes/cobots.webp' as string | null,
};

// ─── Proyectos destacados. `img` = captura en /public/proyectos/ ───
export const PROJECTS = [
  {
    name: 'Cobots de soldadura',
    what: 'He implementado tecnologías punteras en el mundo de los cobots y la soldadura, como MultiLayer, Touch Sensing y Matrix Replica, diseñando las interfaces y el contenido que hay dentro.',
    stack: ['Universal Robots', 'Java', 'Maven', 'URScript', 'PLC'],
    img: '/proyectos/cobots.webp' as string | null, url: '', cta: '',
  },
  {
    name: 'FinallyLoseWeight',
    what: 'Mi diario de fitness, que uso a diario para llevar mi propio déficit calórico. Es una app instalable (PWA) donde apunto peso, comidas, pasos y cardio, con gráficas y media de 7 días. Solo entran amigos invitados y cada uno ve solo sus datos.',
    stack: ['React', 'TypeScript', 'Vite', '.NET 10', 'PostgreSQL', 'Azure', 'Firebase', 'GitHub Actions'],
    img: '/proyectos/finallyloseweight.webp' as string | null, url: 'https://github.com/adnanbkz/FinallyLoseWeight', cta: 'Ver en GitHub',
  },
  {
    name: 'Fábrica de reels con IA',
    what: 'El sistema con el que hago los vídeos de noticiasde.ia: guion, voz, transcripción palabra a palabra y montaje automático con Remotion.',
    stack: ['Remotion', 'TypeScript', 'Whisper', 'ElevenLabs', 'three.js'],
    img: '/proyectos/reels.webp' as string | null, url: 'https://www.tiktok.com/@noticiasde.ia', cta: 'Ver los vídeos',
  },
];

// Repos que se muestran si no se pueden cargar en vivo desde GitHub .
export const REPOS_FALLBACK = [
  { name: 'FinallyLoseWeight', description: 'See your progress, keep going.', language: 'TypeScript', stars: 0, url: 'https://github.com/adnanbkz/FinallyLoseWeight' },
  { name: 'asfalcatweb', description: 'Web para la empresa asfalcat.com', language: 'TypeScript', stars: 0, url: 'https://github.com/adnanbkz/asfalcatweb' },
  { name: 'web-portfolio', description: 'Welcome to my personal web portfolio.', language: 'TypeScript', stars: 0, url: 'https://github.com/adnanbkz/web-portfolio' },
  { name: 'FitFusionApp', description: 'FitFusion android app.', language: 'Kotlin', stars: 0, url: 'https://github.com/adnanbkz/FitFusionApp' },
  { name: 'gia-tcp', description: 'Sin descripción todavía.', language: 'Java', stars: 0, url: 'https://github.com/adnanbkz/gia-tcp' },
  { name: 'noticiasde.ia', description: 'Esta web, hecha con Astro.', language: 'Astro', stars: 0, url: 'https://github.com/adnanbkz/noticiasde.ia' },
];

export const STORY = [
  { when: '2024', title: 'Empiezo como software developer', text: 'Primer trabajo programando de forma profesional.' },
  { when: '2025', title: 'Llego a los cobots', text: 'Software para robots que trabajan al lado de personas.' },
  { when: '2026', title: 'Nace noticiasde.ia', text: 'Reels de un minuto explicando IA en español, y este blog.' },
  { when: '2027', title: 'Expandir conocimiento', text: 'Entrar a ingeniería informática con el foco de ser ingeniero en cloud.' },
  { when: 'Meta', title: 'Azure y AWS Cloud Engineer + IA', text: 'Diseñar y llevar a producción sistemas en la nube con IA.' },
];
