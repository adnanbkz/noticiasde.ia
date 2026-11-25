---
title: "Cómo crear un buen artefacto con Claude (y dejar de pagar por apps sencillas)"
description: "Claude ya convierte sus artefactos en apps de escritorio para Mac y Windows. Cómo pedir uno que funcione de verdad, cinco apps que te puedes hacer hoy con su prompt, y los permisos que conviene mirar antes de instalar nada."
date: 2026-11-25
category: dev
tags: ["Claude", "artifacts", "productividad", "apps de escritorio", "prompts"]
featured: true
---

Desde el 24 de noviembre de 2026, lo que Claude te construye en un chat ya no tiene por qué quedarse en el chat. Anthropic ha lanzado en beta **Install as app**: le pides a Claude un artefacto, pulsas un botón y lo tienes instalado en tu Mac o en tu PC con Windows, con su icono, su propia ventana y, si se lo permites, notificaciones.

Eso cambia la cuenta de muchas suscripciones. Hay apps por las que pagamos cada mes que en el fondo son una lista, un temporizador o una tabla con avisos. Este artículo va de cómo hacerte las tuyas bien, no de cómo hacer una demo bonita que abandonas a los dos días.

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

Antes de cancelar nada, conviene saber dónde están los límites:

- **No hay versión para móvil, web ni Linux.** Si tu lista de tareas tiene que estar en el móvil cuando sales a la calle, una app de escritorio no sustituye del todo a Todoist o a TickTick.
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

## Cinco apps que te puedes hacer hoy

Las he elegido por lo que más busca y paga la gente en productividad: tareas, concentración, hábitos, dinero y calendario. Los precios son orientativos y cambian a menudo.

### 1. Tu lista de tareas (en lugar de Todoist o TickTick)

Todoist Pro cuesta unos 5 dólares al mes en plan anual. Si trabajas desde el ordenador y no necesitas el móvil, puedes hacerte una a tu medida:

```text
Hazme una app de tareas para el escritorio. Cada tarea tiene título, proyecto,
prioridad (alta, media, baja) y fecha opcional. Vistas: Hoy, Próximos 7 días y
Sin fecha. Atajo de teclado para añadir una tarea rápida. A las 9:00 mándame una
notificación con las tareas de hoy. Tema oscuro y ventana estrecha.
```

### 2. Un temporizador Pomodoro en la barra de menús

```text
Hazme un temporizador Pomodoro que viva en la barra de menús del Mac (o en la
bandeja de Windows). 25 minutos de trabajo y 5 de descanso, con un descanso
largo de 15 minutos cada cuatro. Notificación al acabar cada bloque. Que guarde
cuántos pomodoros hago al día y me enseñe la semana en un gráfico de barras.
```

### 3. Un tracker de hábitos con rachas

```text
Hazme un tracker de hábitos. Puedo crear hábitos diarios o de ciertos días de la
semana. Los marco con un clic. Enséñame la racha actual, la mejor racha y un
calendario del mes con los días cumplidos en verde. Si a las 21:00 no he marcado
un hábito de hoy, mándame una notificación.
```

### 4. Tu control de gastos (en lugar de YNAB y similares)

YNAB ronda los 15 dólares al mes. Para llevar un presupuesto personal sencillo:

```text
Hazme una app de presupuesto mensual. Defino categorías con un límite al mes
(comida, transporte, ocio...). Apunto cada gasto con importe, categoría y nota.
Enséñame cuánto llevo en cada categoría con una barra de progreso y avísame con
una notificación cuando pase del 80 % de cualquier límite. Que pueda exportar
el mes a CSV.
```

Un consejo: no le des a una app así acceso a tu banco ni pegues datos de tus tarjetas. Apunta los gastos a mano o importa un CSV que hayas descargado tú.

### 5. Un preparador de reuniones con tu calendario y tu correo

Es el ejemplo que más está enseñando Anthropic, y el más útil si tienes muchas reuniones:

```text
Usa mis conectores de Google Calendar y Gmail. Hazme una app que cada mañana
me enseñe las reuniones del día y, para cada una, un resumen de los últimos
correos con esas personas y los puntos pendientes. Mándame una notificación
10 minutos antes de cada reunión con ese resumen.
```

Esta sí usa Claude cada vez que prepara un resumen, así que gasta de los límites de tu plan.

## Permisos: lo que tienes que mirar antes de aceptar

Aquí está la parte que más se exagera, en los dos sentidos. Lo que dice la documentación es esto:

- **Por defecto, una app instalada solo puede hacer lo mismo que en el navegador.** No toca tus archivos ni tu sistema.
- **Permisos de app:** notificaciones, atajos globales, ventana siempre encima. Los pide y tú decides.
- **Acceso total al ordenador:** permite ejecutar programas y leer, cambiar o borrar archivos sin preguntarte cada vez. Es opcional y solo se puede dar a apps que has hecho tú (o, en Team y Enterprise, gente de tu organización).
- **Anthropic no revisa las apps antes de instalarlas.** Por eso el permiso vale solo para la versión actual: después de cada actualización, incluidas las tuyas, te lo vuelve a pedir.

Mi regla: ninguna de las cinco apps de arriba necesita acceso total. Si una app de tareas o de hábitos te lo pide, algo has pedido de más. Reserva ese permiso para herramientas que de verdad tienen que trabajar con archivos, como un organizador de descargas, y revisa lo que hace antes de dárselo.

## Mi opinión

No es el fin de las apps, pero sí el fin de pagar cada mes por las más simples. Si una herramienta es en el fondo una lista con avisos, ahora te la puedes hacer a tu medida en diez minutos, con exactamente lo que usas y nada más.

Lo que sigue teniendo sentido pagar son las apps que necesitas en el móvil, las que sincronizan con otra gente y las que tienen detrás un servicio de verdad. Para todo lo demás, merece la pena probar antes de renovar la próxima suscripción.

## Fuentes

- [Anuncio de @ClaudeDevs en X (24-11-2026)](https://x.com/ClaudeDevs/status/2125315491522650299)
- [TestingCatalog: Anthropic now allows installing artifacts as desktop apps](https://www.testingcatalog.com/anthropic-now-allows-installing-artifacts-as-desktop-apps/)
- [SiliconANGLE: Anthropic is trying to kill traditional desktop apps](https://siliconangle.com/2026/11/24/anthropic-is-trying-to-kill-traditional-desktop-apps-with-claude-generated-desktop-apps/)
- [Notebookcheck: What full access lets them do](https://www.notebookcheck.net/Claude-artifacts-become-desktop-apps-What-full-access-lets-them-do.1459673.0.html)
- [MacRumors: Claude Now Lets You Install Artifacts as Desktop Apps](https://www.macrumors.com/2026/11/25/claude-install-artifacts-desktop-apps/)
