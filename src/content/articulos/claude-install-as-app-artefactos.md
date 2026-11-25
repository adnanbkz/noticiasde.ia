---
title: "Cada vez más gente se hará sus propias apps: Claude Install as app y cómo crear un buen artefacto"
description: "Claude ya convierte lo que construye en apps de escritorio para Mac y Windows. Por qué esto cambia quién hace software, cómo pedir un artefacto que funcione de verdad y qué permisos mirar antes de instalar nada."
date: 2026-11-25
category: dev
tags: ["Claude", "artifacts", "software personal", "apps de escritorio", "prompts"]
featured: true
cover: "/img/articulos/claude-install-as-app.webp"
reelCover: "/img/reels/claude-install-as-app-artefactos.webp"
---

Desde el 24 de noviembre de 2026, lo que Claude te construye en un chat ya no tiene por qué quedarse en el chat. Anthropic ha lanzado en beta **Install as app**: le describes lo que necesitas, Claude lo construye, pulsas un botón y lo tienes instalado en tu Mac o en tu PC con Windows, con su icono, su propia ventana y, si se lo permites, notificaciones. Sin código y también en el plan gratuito.

Parece una función más, pero creo que es de las que cambian hábitos. Hasta ahora, si necesitabas una herramienta, tenías dos caminos: buscar en una tienda de apps algo que se pareciera a lo que querías, o pagar a alguien para que te la programara. Ahora hay un tercero: hacértela tú, en minutos, exactamente como la necesitas.

## Por qué esto es más grande de lo que parece

Durante décadas, el software lo han hecho unos pocos para muchos. Una empresa detecta un problema común, programa una app para millones de personas y cada uno se adapta a ella como puede. Las necesidades demasiado concretas (las de tu clase, tu tienda o tu forma de trabajar) se quedaban sin app, porque a nadie le salía a cuenta programarla.

Los artefactos de Claude ya permitían crear esas herramientas, pero vivían dentro de una conversación: para usarlas tenías que abrir Claude y buscar el chat. Al convertirlas en apps de escritorio que se abren como cualquier otra y te avisan cuando algo necesita tu atención, pasan de ser una curiosidad a algo que usas cada día. La propia Anthropic lo resume así: si dependes de una herramienta para trabajar, debería abrirse como el resto de tus apps.

Por eso creo que vamos a ver cada vez más gente con sus propias apps. La pregunta deja de ser "¿qué app me descargo?" y pasa a ser "¿qué app me hago?".

## Qué es exactamente Install as app

Un *artifact* (artefacto) es lo que Claude genera en un panel aparte cuando le pides algo más que texto: una web, un gráfico, una herramienta pequeña. Hasta ahora vivía dentro de la conversación. Para usarlo tenías que abrir Claude, buscar el chat y abrirlo de nuevo.

Con Install as app, ese artefacto se convierte en una app de escritorio:

- **Dónde aparece:** en Mac, en la carpeta *Claude Apps* dentro de Aplicaciones (y la encuentras con Spotlight). En Windows, en el menú Inicio o como acceso directo.
- **Cómo se instala:** desde el menú del título del artefacto, con clic derecho o desde el menú Compartir, eligiendo *Install as app*.
- **Qué puede hacer:** usar Claude y tus conectores (Google Calendar, Gmail, etc.) igual que el artefacto original. Con tu permiso, también mandar notificaciones, ponerse en la barra de menús del Mac o en la bandeja de Windows, escuchar atajos de teclado o quedarse siempre por encima de otras ventanas.
- **Qué no necesitas:** ni saber programar, ni empaquetar la app, ni firmarla, ni una clave de API. Funciona con tu cuenta de Claude.
- **Cómo se actualiza:** vuelves a Claude, le pides el cambio y la app instalada se actualiza sola.

Está disponible en los planes Free, Pro, Max, Ultra, Team y Enterprise (en Enterprise lo tiene que activar el propietario de la organización) y necesitas Claude Desktop 6.28899.0 o posterior.

## Lo que no te cuentan en los reels

Antes de lanzarte, conviene saber dónde están los límites:

- **No hay versión para móvil, web ni Linux.** Si lo que necesitas tiene que ir contigo en el móvil, esto todavía no te sirve.
- **Necesita internet y tener la sesión iniciada** en Claude Desktop para abrirse.
- **Lo que hace con Claude cuenta para tu plan.** Si tu app llama a Claude cada vez que la abres (para resumir, clasificar o redactar), ese uso sale de los límites de tu suscripción a Claude. Una app que solo guarda datos y muestra tablas apenas gasta.
- **No sustituye apps complejas.** Una app de música, de mapas o un banco tienen detrás servidores, catálogos y años de trabajo. Lo que sí puedes replicar son las herramientas sencillas: las que son, en el fondo, formularios, listas, temporizadores y avisos.

## Cómo pedir un buen artefacto

La diferencia entre una app que usas cada día y una que borras está casi siempre en el primer mensaje. Estas son las seis cosas que yo incluyo siempre:

1. **Para quién es y para qué.** "Soy desarrollador, trabajo desde casa y quiero..." le da a Claude contexto para decidir lo que no le dices.
2. **El problema, no la solución.** En vez de "hazme una lista de tareas", di qué te falla: "se me olvidan las tareas que no tienen fecha" o "nunca sé cuánto llevo gastado este mes".
3. **Qué datos guarda y cómo los ves.** Qué campos tiene cada elemento (título, fecha, categoría, importe...) y qué vistas quieres (hoy, semana, por categoría).
4. **Cuándo te avisa.** Si quieres notificaciones, di exactamente cuándo: "a las 9:00 si no he marcado el hábito", "cuando pase del 80 % del presupuesto".
5. **Cómo quieres que se vea.** Tema oscuro, tamaño de ventana, si va en la barra de menús, colores. Si no lo dices, Claude elige por ti.
6. **Que sea pequeña.** Pide la versión mínima que resuelva el problema. Una vez instalada, añades cosas pidiéndolas en el mismo chat.

Después, **prueba antes de instalar**: mete datos de verdad en la vista previa, cierra y vuelve a abrir, y comprueba que no se ha perdido nada. Cuando funcione como quieres, instálala.

Una plantilla que puedes copiar y rellenar:

```text
Quiero una app de escritorio para [quién soy y qué hago].
El problema: [qué me pasa hoy y por qué las apps que uso no me sirven].
Cada [tarea / hábito / gasto] tiene: [campos].
Quiero ver: [vistas o pantallas].
Avísame con una notificación cuando: [condición exacta].
Estilo: [oscuro/claro, tamaño, barra de menús sí o no].
Que guarde los datos para que no se pierdan al cerrar la app.
Empieza por la versión más simple que resuelva esto y dime qué permisos va a necesitar.
```

La última línea es importante: así sabes de antemano si la app va a pedirte notificaciones o algo más.

## Apps para lo que tú necesites

Lo interesante no es rehacer las apps que ya existen, sino las que nunca iban a existir porque solo las necesitas tú. Algunas ideas para que veas por dónde va esto:

- **Si das clase:** una app donde pegas las respuestas de un examen, aplica tu rúbrica y te deja la nota y un comentario por alumno listos para revisar.
- **Si tienes un negocio pequeño:** un control de pedidos con los campos exactos que usas tú, que te avisa cuando un pedido lleva tres días sin salir.
- **Si estudias:** un planificador que reparte los temas que te quedan entre los días que faltan para el examen y te avisa cada mañana de lo que toca.
- **Si trabajas con reuniones:** un panel que, con tus conectores de calendario y correo, te prepara cada reunión con lo último que habéis hablado. Es uno de los ejemplos que enseña la propia Anthropic.
- **Si programas:** una mini terminal, un gestor de archivos a tu gusto o un panel con el estado de tus proyectos. Felix Rieseberg, ingeniero de Anthropic, cuenta que se ha hecho terminales, gestores de archivos, editores de vídeo y hasta mascotas de escritorio.

Ninguna de estas es una gran app. Ese es justo el punto: son herramientas pequeñas, hechas a la medida de una sola persona, que antes no compensaba que nadie programara.

## Permisos: lo que tienes que mirar antes de aceptar

Aquí está la parte que más se exagera, en los dos sentidos. Lo que dice la documentación es esto:

- **Por defecto, una app instalada solo puede hacer lo mismo que en el navegador.** No toca tus archivos ni tu sistema.
- **Permisos de app:** notificaciones, atajos globales, ventana siempre encima. Los pide y tú decides.
- **Acceso total al ordenador:** permite ejecutar programas y leer, cambiar o borrar archivos sin preguntarte cada vez. Es opcional y solo se puede dar a apps que has hecho tú (o, en Team y Enterprise, gente de tu organización).
- **Anthropic no revisa las apps antes de instalarlas.** Por eso el permiso vale solo para la versión actual: después de cada actualización, incluidas las tuyas, te lo vuelve a pedir.

Mi regla: casi ninguna de las ideas de arriba necesita acceso total. Si una app para apuntar cosas o avisarte te lo pide, algo has pedido de más. Reserva ese permiso para herramientas que de verdad tienen que trabajar con archivos, como un organizador de descargas, y revisa lo que hace antes de dárselo.

## Mi opinión

No es el fin de las apps que usamos todos: las que necesitas en el móvil, las que sincronizan con otra gente o las que tienen detrás un servicio de verdad van a seguir ahí. Lo que cambia es todo lo que había entre medias, esas herramientas pequeñas que nadie te iba a hacer porque solo las querías tú.

Igual que las hojas de cálculo hicieron que cualquiera pudiera montar sus propias cuentas sin ser contable, esto hace que cualquiera pueda montar su propia app sin ser programador. Va a haber apps malas, apps abandonadas a los dos días y algún susto con los permisos. Pero también mucha gente resolviendo por fin ese problema concreto que ninguna app de la tienda le resolvía.

## Fuentes

- [Anuncio de @ClaudeDevs en X (24-11-2026)](https://x.com/ClaudeDevs/status/2125315491522650299)
- [TestingCatalog: Anthropic now allows installing artifacts as desktop apps](https://www.testingcatalog.com/anthropic-now-allows-installing-artifacts-as-desktop-apps/)
- [SiliconANGLE: Anthropic is trying to kill traditional desktop apps](https://siliconangle.com/2026/11/24/anthropic-is-trying-to-kill-traditional-desktop-apps-with-claude-generated-desktop-apps/)
- [Notebookcheck: What full access lets them do](https://www.notebookcheck.net/Claude-artifacts-become-desktop-apps-What-full-access-lets-them-do.1459673.0.html)
- [MacRumors: Claude Now Lets You Install Artifacts as Desktop Apps](https://www.macrumors.com/2026/11/25/claude-install-artifacts-desktop-apps/)
