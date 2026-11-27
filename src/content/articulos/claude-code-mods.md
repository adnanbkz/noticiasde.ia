---
title: "Claude Code ya tiene mods: qué son, cómo se instalan y tres ejemplos para usarlos"
description: "Los mods cambian cómo funciona Claude Code por dentro: paneles, desvíos a otro modelo, su aspecto. Cómo instalarlos, tres ejemplos de uso y por qué tienes que leerlos antes, porque no van en sandbox."
date: 2026-11-27
category: dev
tags: ["Claude Code", "mods", "plugins", "seguridad"]
cover: "/img/articulos/claude-code-mods.webp"
reel: "https://www.instagram.com/reel/DgPcCLqO8Sb/"
reelCover: "/img/reels/claude-code-mods.webp"
---

Desde octubre, Claude Code acepta **mods**. Como en un videojuego: le enchufas una pieza y cambia cómo funciona por dentro. Un mod es un plugin con pequeños manejadores en JavaScript o TypeScript que se ejecutan dentro de Claude Code cada vez que pasa algo: una llamada a una herramienta, un prompt que envías o el momento en que se dibuja la pantalla. Con eso pueden mostrar paneles al lado de la conversación, cambiar cómo se ven partes de la interfaz, añadir comandos `/` propios o mandar una petición concreta a otro modelo.

## 1. Cómo se instala un mod

Necesitas Claude Code **v2.1.287 o posterior** en la terminal (`claude --version`) o la 2.1.286 en la app de escritorio. Los mods se instalan igual que cualquier plugin, con el formato `plugin@marketplace`:

```bash
# dentro de una sesión de Claude Code
/plugin install nombre-del-mod@marketplace

# o desde la terminal
claude plugin install nombre-del-mod@marketplace
```

Si lo instalas desde la terminal con una sesión abierta, ejecuta `/reload-plugins` en esa sesión. Para comprobar que está cargado, abre `/plugin`: debajo de las pestañas verás una línea como `1 mod active`.

Para probar un mod sin instalarlo, apunta Claude Code a su carpeta:

```bash
claude --plugin-dir ./mi-mod
```

Así puedes probar, por ejemplo, los mods de muestra que publica Anthropic: `token-weather` (una previsión de cuánto contexto te queda, encima del prompt), `blast-radius` (frena comandos peligrosos como un `rm -rf` o un force push y te enseña lo que cambiarían antes de dejarte seguir) y `replay-theater` (añade `/replay` para repasar las ediciones de la última respuesta).

## 2. Tres ejemplos de uso

No hace falta saber programar. Le describes el mod a Claude Code y lo construye él con su skill integrada `plugin-authoring` (también la puedes llamar con `/plugin-authoring`). El mod se carga en esa sesión; si quieres conservarlo, copia la carpeta y cárgala con `claude --plugin-dir`.

**El desvío de modelo (model-router).** Un mod puede mandar una petición a otro modelo. La idea: lo fácil (renombrar, explicar un error corto, generar un test sencillo) va a un modelo más barato y el grande se queda para lo difícil, así tu límite dura más.

```text
Hazme un mod que mande las peticiones cortas y sencillas a un modelo más barato
y deje el modelo principal para el resto. Enséñame en un aviso qué modelo ha respondido.
```

**El panel de subagentes (agent-dashboard).** Un panel en directo al lado de la conversación que te dice qué está haciendo cada subagente, qué herramienta usa y cuánto lleva, sin tener que preguntar.

```text
Hazme un mod con un panel a la derecha que liste los subagentes activos,
la herramienta que está usando cada uno y el tiempo que llevan.
```

**Tu propio aspecto (tema).** Los mods pueden redibujar partes de la interfaz, como las filas de las llamadas a herramientas o el spinner. Puedes darle a Claude Code los colores de tu marca o lo que te ayude a leer mejor.

```text
Hazme un mod que pinte las llamadas a herramientas en violeta y ámbar
y cambie el spinner por uno más grande y visible.
```

## 3. Antes de instalar: no hay sandbox

Esta es la parte que no sale en los vídeos. Un mod **corre con tus permisos y sin sandbox**. Puede leer y escribir tus archivos, lanzar procesos, conectarse a internet, leer claves de API que tengas en variables de entorno o en la configuración, ver cada prompt y cada llamada a herramienta, reescribirlas y gastar tu uso. El sandbox de Claude Code aísla los comandos que lanza Claude, pero un proceso que lanza un mod queda fuera.

Mis reglas:

- **Instala solo mods que hayas leído**, de autores y marketplaces en los que confíes. Es lo que dice la propia documentación.
- **Valida antes de instalar.** `claude plugin validate ./el-mod` te dice qué hace sin ejecutarlo.
- **Comprueba que el guardián está activo.** El mod integrado `cc-plugin-sec-default` impide que un mod apruebe llamadas que tus reglas `deny` o `ask` bloquearían. Míralo en la pestaña *Installed* de `/plugin`.
- **Ten a mano el botón de apagado.** Desactiva un mod desde `/plugin`, arranca una sesión sin personalizaciones con `--safe-mode` o apágalos todos con `"disableAllHooks": true` en `~/.claude/settings.json`.

Un mod puede ahorrarte mucho uso o tiempo. Pero tiene las mismas llaves que tú, así que trátalo como cualquier programa que instalas en tu ordenador.

## Fuentes

- [Documentación de Claude Code: Mods](https://code.claude.com/docs/en/plugins/mods/overview)
- [Documentación de Claude Code: crear un mod](https://code.claude.com/docs/en/plugins/mods/create)
