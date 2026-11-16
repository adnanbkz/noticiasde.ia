---
title: "Cómo busca de verdad una IA en internet (spoiler: no navega como tú)"
description: "Tool calling, buscadores y resúmenes: lo que pasa entre que preguntas y ChatGPT te contesta con fuentes."
date: 2026-11-04
category: agentes
tags: ["tool calling", "búsqueda"]
featured: true
---

> **Artículo de ejemplo.** Este texto está aquí solo para enseñar el diseño. Sustitúyelo por el tuyo, escrito a mano.

## La idea en una frase

Aquí va el arranque del artículo: lo que vas a explicar y por qué le debería importar a quien lee. Frases cortas, ejemplos reales y nada de relleno.

## Cómo funciona por dentro

Un párrafo explicando el mecanismo paso a paso. Si hace falta, una lista:

1. **Primer paso.** Qué ocurre y por qué.
2. **Segundo paso.** El detalle que casi nadie cuenta.
3. **Tercer paso.** El resultado que ves en pantalla.

```python
# Un bloque de código queda así
from anthropic import Anthropic

client = Anthropic()
respuesta = client.messages.create(
    model="claude-opus-5-5",
    max_tokens=300,
    messages=[{"role": "user", "content": "Explícame MCP como si tuviera 10 años"}],
)
print(respuesta.content[0].text)
```

> "Una cita destacada queda así, grande y con aire."

## Lo que me sorprendió

Tu opinión personal. Esto es lo que diferencia un artículo escrito a mano de uno generado: lo que tú viste, lo que te falló y lo que aprendiste.

## Resumen rápido

- Punto clave uno.
- Punto clave dos.
- Punto clave tres.
