---
title: "12 repos gratis para asegurar el código que escribe tu IA"
description: "Los agentes programan más rápido de lo que nadie puede revisar. Estas 12 herramientas open source lo atacan, lo escanean y lo auditan antes de producción."
date: 2026-11-17
category: seguridad
tags: ["github", "open source", "agentes", "devsecops", "pentesting"]
featured: true
---

Tu agente de IA escribe código más rápido de lo que nadie puede revisarlo. Y cada línea que pasa sin revisar es una puerta que puede quedarse abierta: una consulta SQL montada a mano, una clave de API pegada en el código, un `eval` que nadie vio.

La buena noticia es que OpenAI, Anthropic, NVIDIA, Microsoft, Cloudflare y Cisco han publicado gratis sus propias herramientas para atacar ese código antes de que lo hagan otros. Aquí van las 12 que más merecen la pena, de menos a más estrellas en GitHub (datos del 17 de noviembre de 2026).

## 12. PyRIT (Microsoft) · 4,9k estrellas

[github.com/microsoft/PyRIT](https://github.com/microsoft/PyRIT)

El kit de *red teaming* de IA de Microsoft. Lanza contra tu chatbot o tu app con LLM ataques automáticos: jailbreaks, inyecciones de prompt y ataques de varios turnos que se adaptan a lo que responde el modelo. Sirve para saber cómo se rompe tu app antes de que lo descubra un usuario con malas intenciones.

## 11. BLA, Blind LLM Agents · 6,0k estrellas

[github.com/qybaihe/bla](https://github.com/qybaihe/bla)

El caso contrario: protege tu código de *otras* IAs. Hace que tus bundles de JavaScript, tus binarios, tus apps de Electron o tus modelos sean mucho más difíciles de destripar para agentes de ingeniería inversa. Se lanza con un comando:

```bash
npx bla-agents harden .
```

## 10. Claude Code Security Review (Anthropic) · 7,0k estrellas

[github.com/anthropics/claude-code-security-review](https://github.com/anthropics/claude-code-security-review)

Una GitHub Action que usa Claude para revisar cada pull request en busca de fallos de seguridad y deja los comentarios en la propia PR. Este es el workflow mínimo de su README (`.github/workflows/security.yml`), con tu clave de la API guardada como secreto `CLAUDE_API_KEY`:

```yaml
name: Security Review

permissions:
  pull-requests: write
  contents: read

on:
  pull_request:

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.event.pull_request.head.sha || github.sha }}
          fetch-depth: 2
      - uses: anthropics/claude-code-security-review@main
        with:
          comment-pr: true
          claude-api-key: ${{ secrets.CLAUDE_API_KEY }}
```

Dos avisos: en producción, cambia `@main` por el hash de un commit concreto que hayas revisado, para que un cambio futuro en la acción no se ejecute solo en tu repo. Y el propio README avisa de que no está blindada contra inyecciones de prompt, así que úsala con PRs de gente de confianza.

## 9. ClamAV (Cisco) · 7,6k estrellas

[github.com/Cisco-Talos/clamav](https://github.com/Cisco-Talos/clamav)

El antivirus open source de toda la vida, mantenido por Cisco Talos. No es de IA, pero si tu app deja subir archivos, escanearlos con ClamAV antes de guardarlos sigue siendo una de las cosas más sensatas que puedes hacer.

## 8. Codex Security (OpenAI) · 13,9k estrellas

[github.com/openai/codex-security](https://github.com/openai/codex-security)

La CLI y el SDK de OpenAI para encontrar vulnerabilidades, validar que son reales y proponer el arreglo. Lo interesante es ese último paso: no solo te dice dónde está el fallo, también escribe el parche.

```bash
cs scan .
```

## 7. Semgrep · 17,8k estrellas

[github.com/semgrep/semgrep](https://github.com/semgrep/semgrep)

Análisis estático ligero para un montón de lenguajes. Las reglas se escriben con una sintaxis que se parece al propio código, así que es fácil añadir las tuyas. Puesto en el CI, pilla los patrones inseguros antes del merge.

## 6. SkillSpector (NVIDIA) · 26,5k estrellas

[github.com/NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)

Un escáner para *skills* de agentes (Claude Code, Codex, MCP). Busca inyecciones de prompt escondidas, fugas de datos y riesgos de cadena de suministro **antes** de que instales la skill. Si instalas skills de terceros, esto debería ir primero.

```bash
skillspector scan ./my-skill/
```

## 5. TruffleHog · 29,5k estrellas

[github.com/trufflesecurity/trufflehog](https://github.com/trufflesecurity/trufflehog)

Busca claves, tokens y contraseñas filtradas en tu historial de git (y en GitHub, S3, Docker…). Lo mejor: comprueba cuáles **siguen funcionando**, para que sepas qué rotar ya.

```bash
trufflehog git https://github.com/tu-usuario/tu-repo --results=verified
```

## 4. Nuclei · 33,0k estrellas

[github.com/projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei)

Un escáner de vulnerabilidades rapidísimo basado en plantillas YAML que escribe la comunidad. Prueba tu web, tus APIs y tus servidores contra miles de fallos conocidos.

```bash
nuclei -target example.com
```

## 3. Trivy · 39,5k estrellas

[github.com/aquasecurity/trivy](https://github.com/aquasecurity/trivy)

Revisa imágenes de Docker, clústeres de Kubernetes, Terraform y repos de código en busca de paquetes vulnerables, configuraciones peligrosas y secretos.

```bash
trivy image python:3.4-alpine
```

## 2. Security Audit Skill (Cloudflare) · 74,3k estrellas

[github.com/cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)

Una skill que convierte tu agente de código en un auditor de seguridad: hace la auditoría por fases (reconocimiento, búsqueda, validación independiente) y devuelve los hallazgos en un formato que se puede procesar.

```bash
npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit
```

## 1. Strix · 76,2k estrellas

[github.com/usestrix/strix](https://github.com/usestrix/strix)

La que más impresiona. Strix lanza agentes de IA que se comportan como hackers: atacan tu aplicación de verdad, encuentran los fallos y los **demuestran** con una prueba de concepto real, en lugar de llenarte el informe de falsos positivos.

```bash
strix --target ./app-directory
```

## Cómo combinarlas

Juntas cubren casi toda la pila:

- **Tu código:** Semgrep, Codex Security y Claude Code Security Review en cada PR.
- **Tus dependencias y contenedores:** Trivy.
- **Tus secretos:** TruffleHog.
- **Tu app en marcha:** Nuclei y Strix.
- **Los archivos que suben tus usuarios:** ClamAV.
- **Tus agentes y tu app de IA:** SkillSpector, PyRIT y la skill de Cloudflare.
- **Tu código frente a otras IAs:** BLA.

Ninguna sustituye a revisar el código, pero sí hacen que el código que escribe tu IA no llegue a producción sin que nadie lo haya atacado antes.

¿Cuál añadirías tú? Cuéntamelo en los comentarios del reel.
