---
title: "AlphaProof Code: una IA ha demostrado con matemáticas que el cifrado de Signal es seguro"
description: "Google DeepMind ha verificado formalmente el núcleo criptográfico de Signal en cuatro semanas. Qué significa, cómo funciona y qué no cubre."
date: 2026-11-24
category: seguridad
tags: ["AlphaProof Code", "DeepMind", "Signal", "verificación formal", "Lean"]
featured: true
---

Esta semana subí un reel que empezaba con una frase pensada para asustar: "una IA de Google se ha metido dentro de Signal". Suena a hackeo, pero es justo lo contrario. Aquí va la versión larga, con calma y con los matices que en un minuto de vídeo no caben.

## Qué ha pasado

El 10 de noviembre, Google DeepMind presentó **AlphaProof Code**, un sistema de agentes de IA basado en Gemini que sirve para verificar software de forma formal. Su primer gran trabajo ha sido el núcleo criptográfico de Signal, la app de mensajería que usan periodistas, gobiernos y millones de personas que simplemente quieren que nadie lea sus chats.

Verificar formalmente no es revisar el código ni pasarle tests. Es **demostrar con matemáticas** que el programa cumple ciertas propiedades en todos los casos posibles, no solo en los que a alguien se le ocurrió probar. Un test te dice "con estas entradas funciona". Una prueba formal te dice "funciona siempre, y aquí está la demostración".

## Por qué es tan difícil

Este tipo de trabajo existe desde hace décadas, pero casi nadie lo hace a esta escala porque es carísimo. Un equipo de expertos puede tardar **años** en verificar un sistema criptográfico serio. Por eso se reserva para casos muy concretos: aviónica, algunos microkernels, partes muy pequeñas de librerías de cifrado.

AlphaProof Code lo ha hecho con Signal en **cuatro semanas**, generando más de **seis millones de líneas de pruebas** en Lean.

## Cómo funciona

El reparto de trabajo es lo que más me ha llamado la atención:

1. **Los humanos deciden qué hay que demostrar.** Escriben la especificación: qué propiedades de seguridad tiene que cumplir el sistema. Es la parte que requiere criterio, y sigue siendo nuestra.
2. **Los agentes escriben la demostración.** Varios agentes con Gemini trabajan en paralelo construyendo la prueba paso a paso.
3. **Lean comprueba que la prueba es correcta.** Lean es un lenguaje y un asistente de demostraciones: si la prueba tiene un hueco, no compila. Aquí está la clave de todo. No hace falta fiarse de la IA, porque la que valida el resultado es una máquina que solo acepta matemáticas correctas.

Según DeepMind, solo alrededor del 1 % del trabajo necesitó revisión humana. Y hay otro detalle importante: la verificación se hizo sobre el **código compilado**, el que de verdad corre en los dispositivos, no sobre una versión idealizada en papel. Muchos fallos reales viven justo en ese salto entre el diseño y lo que acaba ejecutándose.

## La prueba de fuego: dos bugs reales

Para comprobar que el sistema no daba todo por bueno, el equipo reintrodujo en el código **dos bugs reales** que Signal había tenido en el pasado y que ya estaban arreglados. AlphaProof Code detectó los dos: la demostración dejaba de cerrar exactamente donde estaba el fallo.

Esto es lo que diferencia una herramienta útil de una demo bonita. Si un verificador no encuentra errores que sabemos que existen, no sirve para nada.

## Qué se ha demostrado exactamente

Entre las propiedades verificadas está una de las promesas más importantes de Signal: aunque alguien comprometa tu móvil durante un tiempo, **los mensajes de antes y los de después siguen protegidos**. Es lo que se conoce como secreto hacia delante y recuperación tras un compromiso, y es la base de por qué Signal se considera tan seguro.

## Lo que no cubre

Aquí conviene ser honesto, porque es fácil exagerar esta noticia:

- Lo verificado es el **núcleo criptográfico** (la librería libsignal y el protocolo de los chats uno a uno), no toda la aplicación.
- Una prueba formal demuestra que el código cumple la especificación. Si la especificación olvida algo, la prueba no lo va a encontrar. Por eso la parte humana sigue siendo tan importante.
- No protege de que alguien vea tu pantalla, de un móvil con malware permanente o de que tú mismo reenvíes un mensaje.

Signal no se ha vuelto "invencible". Lo que ha pasado es que una parte crítica ha pasado de "confiamos en que está bien" a "está demostrado que está bien".

## Por qué me parece importante

Llevamos meses hablando de agentes de IA que encuentran vulnerabilidades más rápido que cualquier equipo humano. Si los atacantes van a usar IA para buscar fallos a esa velocidad, la defensa necesita algo más que parches rápidos. DeepMind plantea combinar esto con **CodeMender**, su agente que corrige vulnerabilidades de forma automática: uno arregla, el otro demuestra que el arreglo es correcto.

Los siguientes objetivos que mencionan son el firmware de dispositivos médicos y el software de las redes eléctricas, sistemas donde un fallo no significa una filtración de datos sino algo bastante peor. Además, han publicado los artefactos de la verificación como código abierto, así que cualquiera puede revisarlos.

Como desarrollador, lo que más me interesa es el cambio de rol. Escribir la especificación correcta, decidir qué tiene que cumplir un sistema, pasa a ser la parte valiosa del trabajo. La demostración la puede hacer una máquina, y otra máquina puede comprobar que está bien.

Te dejo la misma pregunta que en el reel: ¿te fías más de una prueba matemática o de un experto?

## Fuentes

- Google DeepMind, "Introducing AlphaProof Code" (10 de noviembre de 2026) y el paper técnico que lo acompaña.
- The Decoder, 11 de noviembre de 2026.
- The Next Web y Hardware Busters, sobre la verificación a nivel de código máquina.
