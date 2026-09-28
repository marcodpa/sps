---
name: SPS — recorrido industrial conectado
description: Sitio editorial blanco con tubería continua, planos decorativos y evidencia de campo.
colors:
  ink: "#091c45"
  blue: "#075ac7"
  red: "#c72036"
  muted: "#4c5d74"
  line: "#d4e0f0"
  ice: "#edf5ff"
  white: "#ffffff"
  blue-hover: "#0044ce"
  blueprint: "#aac3dd"
  steel: "#737f87"
  steel-light: "#e6ebee"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(48px,5.3vw,82px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(36px,4vw,60px)"
    fontWeight: 690
    lineHeight: 1.035
    letterSpacing: "-.035em"
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
  panel: "0px"
spacing:
  desktop-gutter: "clamp(64px,6.5vw,120px)"
  mobile-gutter: "38px"
  section-top: "100px"
  section-bottom: "150px"
  section-gap: "38px"
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

# Design System: SPS — recorrido industrial conectado

## Overview

**Creative North Star: "Recorrido industrial conectado"**

Una tubería de acero conecta la lectura de cada página sobre un fondo blanco con geometría de planos tenues. Titulares amplios, azul de acción y fotografías de campo expresan la capacidad industrial de SPS. La tubería aporta continuidad; la evidencia y el texto conservan su espacio propio.

La referencia conceptual aprobada es `../inicio-tuberias/recorrido-fondo-planos-v3.png`. La implementación anterior fue rechazada. Esta reconstrucción representa una mejora material preparada para revisión del usuario; no se documenta como fidelidad exacta ni como aprobación final del resultado.

**Key Characteristics:**
- Blanco abierto, planos SVG discretos y un recorrido continuo medido sobre el contenido.
- Portada con visualización ilustrativa de una caldera y titulares editoriales.
- Fotografías originales en proyectos, identidad SPS y contenido en español.

Extracción de `style.css`, `industrial.css`, `editorial.css`, `app.js`, `industrial.js` y `home.js`, con precedencia de las capas industrial y editorial. El `index.html` de la raíz inicia este sitio vanilla JavaScript. El código React original de `src` permanece preservado e inactivo. Este documento describe la implementación local; no acredita publicación en producción.

## Colors

El azul de acción dirige enlaces y énfasis; marino tinta y gris azulado sostienen titulares y párrafos sobre blanco. El rojo conserva un papel puntual de identidad. Líneas claras e hielo separan información cuando hace falta, sin convertir cada sección en una tarjeta.

Los planos utilizan el token blueprint con opacidad variable. La tubería combina acero, luces blancas y grises mediante trazos superpuestos; las uniones incorporan degradados metálicos. El metal es decorativo y no cambia la semántica de las acciones azules.

## Typography

Archivo variable para titulares y Manrope variable para lectura y controles, cargadas localmente desde `node_modules/@fontsource-variable` con `font-display: swap` y respaldo sans-serif. El display corresponde al hero actual. El headline documenta títulos de sección convertidos desde h1; otros h2 conservan su jerarquía o una escala contextual.

El hero usa tres líneas deliberadas y baja a 46px en móvil. Historia utiliza una escala propia de 42–72px y 40px en móvil; el capítulo de servicios usa 35–54px y 34px en móvil. Los párrafos mantienen un máximo de 70ch. Campos móviles usan 16px para lectura y entrada cómodas. Las cifras 1990 son texto SVG Archivo de peso 900, recortado con fotografía.

## Layout

Cinco páginas independientes por `?pagina=inicio|nosotros|servicios|proyectos|contacto`, con todas sus secciones: Inicio 7, Nosotros 5, Servicios 6, Proyectos 7 y Contacto 3. Cada página tiene scroll vertical y anclas internas. Hay una cabecera sticky de 88px en escritorio y navegación móvil en fila desplazable. El antiguo control de revisión Anterior/Siguiente está eliminado.

Las secciones alternan proporciones editoriales; no se fuerzan a ocupar una pantalla. El hero mantiene altura mínima de viewport menos cabecera. Los márgenes y espacios generales están en frontmatter; a partir de 1700px las secciones usan `max(140px,calc((100vw - 1420px)/2))`. Hasta 760px los bloques principales se apilan y el espaciado general pasa a 55px arriba y 100px abajo, con excepciones del hero y servicios.

Sólo el capítulo de servicios de Inicio cambia a recorrido horizontal con scroll vertical en escritorio de 1000px o más y sin preferencia de movimiento reducido. Ocupa 240vh y fija su contenido bajo la cabecera; tres paneles se desplazan con el avance de lectura. En móvil, tablet y movimiento reducido quedan en flujo vertical. Los botones y el foco de teclado llevan al panel correspondiente.

## Elevation & Depth

Los paneles de servicios, formulario y ubicación son planos: las capas activas anulan sus sombras y redondeados anteriores. La profundidad se concentra en fotografía y tubería. El riel horizontal utiliza una sombra ambiental pequeña; el SVG continuo incluye un trazo oscuro desplazado y luces metálicas. No hay resplandor que siga al puntero: el montaje elimina el antiguo ambiente.

El recorrido se recalcula mediante ResizeObserver y tras cargar fuentes, usando dimensiones reales del contenido. Es visible completo, sin animación de flujo de 18 segundos. Una línea de progreso de lectura aparece bajo la cabecera y se oculta con movimiento reducido. Las transiciones y scroll suave también respetan esa preferencia.

## Shapes

Fotografías rectangulares, controles con esquinas discretas y paneles abiertos. La tubería SVG mantiene codos redondeados, uniones y válvulas; el trazo principal mide 23px en escritorio y 9px en móvil. En móvil se simplifica y se omiten accesorios. El recorrido pasa por márgenes y espacios entre secciones; la conexión a la ilustración del hero es compositiva, no un esquema de instalación.

Los planos nativos de tanque, válvula y control son geometría SVG decorativa, oculta a tecnologías de asistencia. No son planos de ingeniería ni documentación técnica validada.

## Components

- **Botones:** azul con texto blanco, variante de contorno y altura mínima de 48px. Hover eleva 2px; foco visible con contorno azul de 3px y separación de 5px. Los enlaces de texto se subrayan al pasar el puntero.
- **Navegación:** página actual azul con línea inferior; enlaces a páginas independientes y anclas locales. Se incluyen salto al contenido y navegación al pie.
- **Servicios:** capítulo horizontal de Inicio con contador, botones de 44px y fotografías originales; el explorador de otras secciones mantiene pestañas accesibles con flechas, Inicio y Fin.
- **Evidencia:** las galerías funcionan por proyecto y expresan la selección con `aria-pressed`. Las fotos originales proceden de `public/assets/sps-field`.
- **Hero:** `public/assets/sps-boiler-studio.png` es una visualización generada e ilustrativa del equipo, identificada en texto alternativo y pie. No sustituye evidencia fotográfica de proyectos.
- **Historia:** Inicio recorta la fotografía original `bajo-grande-caldera.jpg` en 1990 y una franja inferior continua. La página Nosotros conserva su tratamiento fotográfico existente; no debe asumirse que todos sus recursos retocados son originales sin edición.
- **Formulario:** etiquetas visibles, borde claro, campos blancos y distribución apilada en móvil. Descarga `solicitud-sps.txt` localmente. No existe envío externo: el estado confirma que todavía no se ha enviado a SPS.

## Do's and Don'ts

- **Do** conservar identidad SPS, español, alcance del contenido y fotografías originales como evidencia.
- **Do** mantener la tubería continua, medida sobre el contenido y sin capturar eventos.
- **Do** conservar espacio legible entre texto, imágenes y decoración, con teclado y movimiento reducido funcionales.
- **Don't** presentar una visualización generada como fotografía original, ni los planos decorativos como documentación de ingeniería.
- **Don't** inventar certificaciones, clientes, cifras o resultados empresariales.
- **Don't** afirmar envío de formularios, despliegue o aprobación visual final sin evidencia.
