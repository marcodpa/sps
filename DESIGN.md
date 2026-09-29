---
name: SPS — Operación conectada
description: Sistema editorial industrial sobre láminas arquitectónicas blancas y azul pálido.
colors:
  blue: "#0068f5"
  ink: "#071c3e"
  text: "#405778"
  line: "#d2e1ee"
  white: "white"
  primary-hover: "#0052c2"
  secondary-surface: "#fffffff0"
  secondary-border: "#9fc4fd"
  secondary-hover: "#edf5ff"
  secondary-hover-text: "#004da9"
  input-surface: "#fbfdff"
  input-border: "#b5cbe0"
  footer-surface: "#f8fbff"
  function-surface: "#e9f3ff"
typography:
  display:
    fontFamily: "'Source Serif 4 Variable', Georgia, serif"
    fontSize: "clamp(48px,6.5vw,96px)"
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: "-.035em"
  headline:
    fontFamily: "'Source Serif 4 Variable', Georgia, serif"
    fontSize: "clamp(38px,4.5vw,66px)"
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: "-.035em"
  title:
    fontFamily: "'Source Serif 4 Variable', Georgia, serif"
    fontSize: "clamp(25px,2.4vw,36px)"
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: "-.035em"
  body:
    fontFamily: "'Manrope Variable', Arial, sans-serif"
    lineHeight: 1.75
  label:
    fontFamily: "'Manrope Variable', Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 650
  button:
    fontFamily: "'Manrope Variable', Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 650
    lineHeight: 1.4
rounded:
  photo: "5px"
  field: "7px"
  card: "12px"
  panel: "14px"
  filter: "22px"
  button: "30px"
spacing:
  action-gap: "14px"
  grid-gap: "25px"
  panel-padding: "40px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "15px 25px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.secondary-surface}"
    textColor: "{colors.blue}"
    rounded: "{rounded.button}"
    padding: "15px 25px"
  input:
    backgroundColor: "{colors.input-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "13px"
  filter:
    backgroundColor: "{colors.white}"
    textColor: "#0755a9"
    rounded: "{rounded.filter}"
    padding: "10px 22px"
  project-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
---

# Design System: SPS — Operación conectada

## Overview

**Creative North Star: "Operación conectada"**

A white and pale-blue architectural canvas connects petroleum equipment, field photographs and editorial Spanish typography. Source Serif 4 carries the large statements; Manrope carries navigation, explanations and controls. Blue highlights connect section titles to service actions.

This is a scan of the replacement implementation in `src/site/app.js`, `src/site/site.css`, `src/site/content.js` and `src/site/pipes.js`, booted by root `index.html`. The nine approved references are `design-proposals/web-completa-conectada/01-inicio.png` through `09-detalle-articulo.png`. Those references remain the visual authority. This document records the implementation, which is still under visual review; it does not certify exact fidelity to the compositions.

**Key Characteristics:**
- White surfaces with pale-blue architectural plates and industrial connections.
- Large serif headings, restrained sans-serif controls and blue emphasis.
- Supplied field photography distinguished from conceptual generated illustrations.
- Rounded white panels with soft shadows and generous section spacing.

## Colors

### Primary

The blue accent marks emphasized heading words, filled actions, selected filters and active navigation. Hover treatment deepens the action color. Secondary actions use translucent white with a blue outline.

### Neutral

Ink anchors headings and controls; slate text supports descriptions. Pale lines divide lists and form fields. White and translucent white surfaces keep content readable over the plates. The footer and functional explanation strips use pale-blue surfaces. Machine-readable values above are extracted from the effective CSS, not sampled from generated artwork.

## Typography

The effective display family is Source Serif 4 Variable with Georgia fallback. Manrope Variable with Arial fallback supports body and interface text. Both are locally bundled through Fontsource imports. An earlier Bodoni declaration remains in the stylesheet but is superseded by the later display-family override.

The frontmatter describes the base heading hierarchy. Templates override it: desktop project listing title (120px), photo-led detail title (68px), article hero title (65px), and category bar titles (25px). At the mobile breakpoint the photo-led detail, company and article hero titles become (43px); project listing becomes (62px). Paragraphs vary by context, with a base line height (1.75) and maximum measure (68ch). Headings use blue emphasis without italic styling.

## Layout

Root `index.html` boots a vanilla JavaScript application through Vite. Query parameters choose six main routes (`inicio`, `nosotros`, `servicios`, `proyectos`, `articulos`, `contacto`) plus 22 service, six project and six article details: 40 content routes. `quienes-somos` is an alias for `nosotros`, not an additional page.

The sticky desktop header is (104px) high; the mobile header is (82px). Main sections have a maximum width (1600px) and horizontal padding `max(6vw,24px)`. The effective shared desktop vertical padding is (65px / 90px), with template overrides. Two-column photographs and copy, alternating project entries, a three-column category strip, and a two-column application grid support the long pages. Article listings are alternating image-and-copy rows. Article details combine a sticky contents rail with illustrated reading sections.

Responsive rules at (1100px) compact navigation and columns. At (760px), navigation becomes a toggle-controlled panel, grids largely stack, and shared section padding becomes (55px / 70px). Some template-specific values override the defaults; the stylesheet remains the source for exact layout.

Generated `public/assets/connected/plate-*.png` images supply the architectural background for each of the nine template types. `app.js` assigns a page plate and section crop variables, with explicit cuts for main pages and proportional cuts for details. Each section renders its crop in a noninteractive pseudo-element. Mobile plates are reduced to opacity (.35) and cropped horizontally. The previous whole-content background, SVG pipe overlay and photo manifold are hidden by the final CSS.

## Elevation & Depth

Panels use the shared soft shadow `0 18px 40px -20px #254c7570`. Primary action hover uses `0 8px 24px -12px #17468570`. White layers, soft photographic masks and generated architectural scenery provide depth without obscuring content. Project photographs scale slightly on hover; category panels rise slightly. Reduced-motion rules remove transitions and animations, disable smooth scrolling and simplify the recovery scene. Pipe scroll logic remains mounted but its SVG overlay is currently hidden.

## Shapes

Buttons and filter chips use pill-like rounding. Cards and panels use the card/panel radii in the frontmatter; inputs use the field radius. Field photographs generally retain rectangular proportions with modest corner rounding. Hero photography uses transparent gradient masks to blend into the plate. Do not treat the illustrated pipe fittings as interactive controls.

## Components

Primary and secondary links share the same pill geometry and arrow. A global visible-focus outline (3px blue, 5px offset) also applies to links, buttons and form fields. Navigation marks the current main route with blue text and an underline; mobile navigation exposes its expanded state and closes on Escape.

Category panels link to service groups; service lists link to individual details. Project and article cards link to their detail routes. Project/article filters toggle item visibility and expose their pressed state. Gallery buttons open a native dialog with a labeled close control and caption. The contact form uses native required fields and a service selector; its submission downloads `solicitud-sps.txt` and announces that the request has not been sent. There is no delivery backend.

The supplied logo and field photographs remain identity and evidence assets. Generated process images are conceptual illustrations. The location graphic is an indicative schematic, not an interactive map. Section plates are decorative artwork behind live text, links and forms.

## Do's and Don'ts

- Do preserve the nine approved compositions as the visual authority during review.
- Do use supplied field photographs as operational evidence and label conceptual illustrations.
- Do keep interface text and controls live and keyboard accessible over the decorative plates.
- Do keep the contact download behavior and its unsent status explicit.
- Don't interpret this implementation inventory as certification of visual fidelity.
- Don't present generated equipment scenes as photographs of completed SPS work.
- Don't claim that downloading a contact summary sends a request to SPS.

### Movimiento de Inicio — 29 septiembre 2026
Inicio usa `src/site/home.js`, seis escenas independientes y `home.css`. `home-motion.js` sincroniza con GSAP/ScrollTrigger el colector que alimenta servicios y las dos conexiones transmisor → PLC → SCADA. Los recorridos se revierten al retroceder y no interceptan el scroll ni los enlaces. La preferencia de movimiento reducido omite los overlays; el colector se omite en tarjetas móviles apiladas. Capturas de verificación: `review/home-motion-desktop.jpg` y `review/home-motion-mobile.jpg` dentro de `design-proposals/web-completa-conectada`. Build y revisión de movimiento aprobados; esto no certifica fidelidad visual completa. Siguen pendientes las escenas de vapor/válvulas/vacuum y la revisión individual de las demás páginas.
