---
name: SPS — propuesta completa
description: Presentación editorial de servicios y evidencia de campo.
colors:
  ink: "#0b2046"
  blue: "#0055f5"
  red: "#c72036"
  muted: "#4c5d74"
  line: "#d4e0f0"
  ice: "#edf5ff"
  white: "#ffffff"
  canvas: "#f9fcff"
  blue-hover: "#0044ce"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "70px"
    fontWeight: 690
    lineHeight: 1
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "46px"
    fontWeight: 670
    lineHeight: 1.06
    letterSpacing: "-.03em"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "23px"
    fontWeight: 620
    lineHeight: 1.17
    letterSpacing: "-.015em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    lineHeight: 1.72
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 700
rounded:
  field: "3px"
  button: "4px"
  panel: "8px"
spacing:
  desktop-gutter: "54px"
  tablet-gutter: "30px"
  mobile-gutter: "22px"
  section-gap: "28px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "15px 21px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue}"
    rounded: "{rounded.button}"
    padding: "15px 21px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 11px"
---

# Design System: SPS — propuesta completa

## Overview

**Creative North Star: "Claridad industrial"**

Dirección aprobada: blanco elegante, azul marino y cobalto, fotografías reales y logotipo SPS. La presentación persuade mediante alcance técnico legible y evidencia de campo. Las tuberías suaves y el resplandor del puntero son recursos expresamente solicitados.

**Key Characteristics:**
- Composición editorial luminosa con fotografías amplias.
- Texto descriptivo suficiente para explicar servicios y trabajos.
- Tipografía firme, divisores finos y acentos azules.

Documento extraído de `style.css`, `views.js` y `app.js`. Aplica solamente a esta propuesta autónoma, en modo Persuade; no a una implementación de producción ni al código React original. Referencia conceptual aprobada: `../nueva-direccion/vista-general.png`.

## Colors

El cobalto dirige acciones y énfasis; el marino sostiene la lectura sobre blancos fríos.

- **Primary — Cobalto:** enlaces, botones, selección de pestañas y cifras destacadas.
- **Neutral — Marino tinta:** titulares y texto de navegación. Gris azulado para párrafos; línea pálida para separar contenidos; blanco y hielo para superficies.
- **Acento de identidad — Rojo:** puntuación puntual asociada a la marca, sin competir con las acciones.

## Typography

Archivo variable para titulares; Manrope variable para lectura y controles. Ambas fuentes se cargan localmente desde `node_modules/@fontsource-variable` con `font-display: swap`; el respaldo es sans-serif.

El hero utiliza display. Los títulos de página ordinarios usan 58px, los de sección headline y los subtítulos title. Los párrafos conservan hasta 70ch; descripciones y fichas compactas usan 12–14px. En móvil el hero baja a 44px, h1 a 39px y h2 a 35px; los campos pasan a 16px. Misión y visión son encabezados principales de sus columnas, con la frase explicativa subordinada.

## Layout

Cinco páginas, 28 secciones: Inicio 7, Nosotros 5, Servicios 6, Proyectos 7 y Contacto 3. A 1440 × 900 cada pantalla presenta una sección, con cabecera de 88px y navegación de revisión de 52px. El cuerpo tiene altura mínima `calc(100svh - 140px)`, márgenes laterales del token desktop y separación vertical de sección.

Se alternan divisiones editoriales asimétricas, fotografía con detalle superpuesto, carril de categorías y fichas técnicas. El texto tiene espacio propio; las fotos funcionan como prueba. En 1100px se reduce el margen; en 760px las composiciones principales se apilan y el contenido fluye sin altura mínima. Hay ajustes de altura para escritorios de menos de 780px. La galería de revisión usa dos columnas y una en móvil.

## Elevation & Depth

Profundidad principalmente tonal: fondos fríos, líneas claras y fotos de campo. Dos sombras ambientales levantan el panel de servicios y el formulario; sus valores están en el sidecar. Las tuberías permanecen detrás del contenido, sin capturar eventos. Su trazo animado recorre 18s; el resplandor acompaña únicamente punteros precisos con preferencia de movimiento habilitada. `prefers-reduced-motion: reduce` desactiva animaciones y transiciones y oculta el resplandor.

## Shapes

Fotografías rectangulares, esquinas discretas en paneles y controles. El hero y la imagen del cierre tienen cortes diagonales que desaparecen en móvil. La foto insertada tiene borde blanco de 8px y su imagen ocupa íntegramente el recuadro, sin heredar el tamaño de la fotografía principal.

## Components

- **Botones:** cobalto y blanco; variante de contorno sobre blanco. Altura mínima 48px; hover desplaza 2px hacia arriba. Enlaces de texto subrayan al pasar el puntero.
- **Navegación:** enlaces de 13px, estado actual cobalto con línea inferior; en móvil ocupa una fila desplazable. La navegación inferior recorre secciones y páginas de la propuesta.
- **Pestañas de servicio:** palabras grandes en Archivo; categoría activa azul. Admiten flechas, Inicio y Fin. Las pestañas de evidencia alternan fotografías y expresan selección con `aria-pressed`.
- **Campos:** etiqueta visible, fondo blanco y borde claro. El formulario descarga un resumen de texto local y declara explícitamente que no lo envía a SPS.
- **Foco:** contorno cobalto de 3px separado 5px, también en controles y resúmenes de preguntas frecuentes.
- **Evidencia:** fotografías originales de `public/assets/sps-field` en fichas. El hero utiliza la versión retocada `../v3-fotos-reales/panorama-mejorada.png`; no debe confundirse con una fotografía original sin edición. Mantener el logotipo SPS suministrado.

## Do's and Don'ts

- **Do** conservar identidad SPS, español, fotografías reales y alcance técnico del contenido fuente.
- **Do** mantener texto suficiente para explicar cada servicio, con jerarquía visible y aire entre bloques.
- **Do** respetar movimiento reducido y navegación por teclado.
- **Don't** inventar certificaciones, cifras, clientes, resultados ni hechos empresariales; las fechas existentes son afirmaciones del repositorio.
- **Don't** presentar el formulario como envío recibido ni la propuesta como sitio publicado en producción.
- **Don't** sustituir la evidencia original de proyectos por imágenes retocadas sin identificar el cambio.

Revisión visual: 28 capturas inspeccionadas por el revisor. Se corrigieron el alcance de estilos de la foto insertada y la jerarquía de los encabezados de misión y visión.

## Ajuste solicitado: 1990
En La empresa, la fotografía panorámica original se recorta dentro de los números 1990 mediante un clipPath SVG tipográfico Archivo 900. Sustituye exclusivamente la franja fotográfica con año blanco superpuesto; conserva textos y composición restantes.


Corrección de referencia: 1990 se une a una franja inferior continua de la fotografía. Usa panorama-mejorada.png (retoque visual), conservando los huecos de los números en la parte superior.

