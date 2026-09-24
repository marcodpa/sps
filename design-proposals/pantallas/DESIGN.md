---
name: SPS · Propuesta por pantallas
description: Sistema visual de la propuesta de doce pantallas de escritorio; no rige la aplicación de producción.
colors:
  ink: "#142d40"
  muted: "#526472"
  blue: "#006ca8"
  blue-hover: "#005786"
  line: "#dbe1e5"
  paper: "#f3f6f7"
  white: "#ffffff"
  field-border: "#cbd5dc"
  placeholder: "#667782"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(42px,4.8vw,72px)"
    fontWeight: 550
    lineHeight: 1.035
    letterSpacing: "-0.035em"
  heading:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(38px,3.5vw,54px)"
    fontWeight: 550
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "25px"
    fontWeight: 560
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  button: "3px"
  field: "2px"
spacing:
  gutter: "clamp(28px,4.4vw,76px)"
  screen: "46px"
  section-gap: "30px"
  grid-gap: "28px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "17px 23px"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "17px 23px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px"
    height: "44px"
---

# Design System: SPS · Propuesta por pantallas

## Overview

**Creative North Star: "Experiencia de campo, espacio para leer"**

Sistema extraído de index.html, style.css y screens.js de esta carpeta. Documenta únicamente la propuesta: doce pantallas de revisión a 1440 × 900, con las 22 prestaciones y seis proyectos del contenido SPS. No implementa ni despliega cambios en la aplicación principal.

**Key Characteristics:**
- Fondo blanco, texto azul petróleo y acciones azules.
- Fotografía de campo grande, listas abiertas y separadores finos.
- Logotipo SPS original y contenido en español.

## Colors

El azul identifica acciones, selección y datos destacados; ink organiza titulares y texto fuerte, muted sostiene explicaciones, line separa bloques y paper agrupa ubicaciones. La constante roja declarada en CSS no se utiliza en los componentes y no forma parte de esta paleta extraída.

## Typography

Archivo aporta titulares compactos de peso medio; Manrope permite leer descripciones, navegación y formularios. Los párrafos alcanzan como máximo 65 caracteres tipográficos de ancho. Títulos de tarjetas varían entre 24 y 28 px; textos secundarios entre 12 y 14 px. No se sustituye el logotipo por texto tipográfico.

## Layout

Cabecera de 98 px y pie de revisión de 56 px. El contenido usa una altura mínima de calc(100svh - 154px), con centrado vertical. El margen lateral equivale a 63,36 px a 1440 px. Servicios y proyectos usan tres columnas; detalles, fotografía y formularios emplean dos columnas de proporciones variables. Fotografías de proyecto de 245 px de alto en el escritorio objetivo.

A partir de 1600 px el contenido se limita a 1680 px. A 1050 px se compacta la navegación y se oculta su botón. A 760 px las composiciones pasan a una columna y crecen según el contenido; las pestañas permiten desplazamiento horizontal. En pantallas de hasta 780 px de alto y al menos 1000 px de ancho se reducen espacios e imágenes. Estas adaptaciones no sustituyen la revisión principal de escritorio.

## Elevation & Depth

Composición plana, sin sombras. La profundidad procede de las fotografías; los pies blancos superpuestos mantienen la legibilidad. Los bordes finos y fondos claros organizan el resto.

## Shapes

Imágenes rectangulares y listas abiertas. Botones e inputs presentan redondeo mínimo; los separadores tienen un grosor de 1 px. Las tarjetas de proyecto no están encerradas en paneles con sombra.

## Components

Botones principales con texto de 14 px, peso 650, altura mínima de 48 px y transición de fondo de 180 ms. Los enlaces de texto incluyen flecha. El estado activo de navegación combina texto azul y subrayado de 2 px. Los controles enfocables tienen contorno azul de 3 px y separación de 5 px.

El formulario prepara y descarga un resumen TXT; su estado aclara que todavía no se envió a SPS. No tiene backend de entrega. Anterior y Siguiente recorren las doce pantallas como controles de revisión.

## Do's and Don'ts

- Do conservar las fotografías y datos SPS como base del diseño.
- Do identificar los retoques generativos: inicio y empresa usan panorama-mejorada.png y caldera-mejorada.png de ../v3-fotos-reales; los originales en public/assets/sps-field son la evidencia documental.
- Do preservar las 22 prestaciones y seis proyectos al ajustar composición.
- Don't presentar la propuesta como publicación o cambio de producción.
- Don't inventar certificaciones, métricas o confirmaciones de envío.
