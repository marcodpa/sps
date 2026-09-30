---
name: SPS — Operación conectada
description: Editorial industrial blanco y azul con fotografía de campo y una red de tuberías conectadas.
colors:
  blue: "#0068f5"
  ink: "#071c3e"
  text: "#405778"
  line: "#d2e1ee"
  paper: "#fff"
  primary-hover: "#0052c2"
  outline-surface: "#ffffffed"
  outline-border: "#8cb6f8"
  outline-hover: "#eaf3ff"
  outline-hover-text: "#004ebc"
  input-surface: "#fbfdff"
  input-border: "#b8cfe4"
  filter-text: "#174c8f"
  filter-border: "#a4c2e4"
  filter-hover: "#e4f0ff"
  filter-hover-text: "#084c9e"
  gallery-surface: "#fafdff"
  footer-surface: "#f8fbff"
typography:
  display:
    fontFamily: "'Source Serif 4 Variable',Georgia,serif"
    fontSize: "clamp(48px,6.6vw,96px)"
    fontWeight: 760
    lineHeight: 1.04
    letterSpacing: "-.035em"
  headline:
    fontFamily: "'Source Serif 4 Variable',Georgia,serif"
    fontSize: "clamp(38px,4.25vw,68px)"
    fontWeight: 760
    lineHeight: 1.04
    letterSpacing: "-.035em"
  title:
    fontFamily: "'Source Serif 4 Variable',Georgia,serif"
    fontSize: "clamp(23px,2.1vw,31px)"
    fontWeight: 760
    lineHeight: 1.16
    letterSpacing: "-.035em"
  body:
    fontFamily: "'Manrope Variable',Arial,sans-serif"
    fontSize: "18px"
    lineHeight: 1.7
  button:
    fontFamily: "'Manrope Variable',Arial,sans-serif"
    fontSize: "15px"
    fontWeight: 750
  navigation:
    fontFamily: "'Manrope Variable',Arial,sans-serif"
    fontSize: "15px"
    fontWeight: 650
rounded:
  field: "7px"
  card: "12px"
  panel: "14px"
  filter: "24px"
  button: "32px"
spacing:
  action-gap: "16px"
  scene-gap: "36px"
  field-padding: "13px"
  gallery-card-padding: "25px 22px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "17px 27px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-outline:
    backgroundColor: "{colors.outline-surface}"
    textColor: "{colors.blue}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "17px 27px"
  input:
    backgroundColor: "{colors.input-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "{spacing.field-padding}"
  filter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.filter-text}"
    rounded: "{rounded.filter}"
    padding: "11px 19px"
  gallery-service-card:
    backgroundColor: "{colors.gallery-surface}"
    rounded: "{rounded.panel}"
    padding: "{spacing.gallery-card-padding}"
---

# Design System: SPS — Operación conectada

## Overview

**Creative North Star: "Operación conectada"**

White space, pale industrial plans, navy editorial headings and electric-blue actions frame SPS's Spanish content. Photographic steel connections lead between scenes, branch toward service panels and connect a process instrument to a control console. Field photography supplies operational evidence; generated equipment supplies conceptual scenery.

This scan documents the active independent implementation in `src/experience`, booted by root `index.html` through `app.js`. `gallery.js` now owns page-specific compositions for five main routes and all detail types; contact stays in `app.js`. `gallery.css` loads after the shared `style.css`. The user explicitly identifies the NINE original full-page compositions in `design-proposals/web-completa-conectada` as primary visual authority: 01-inicio.png through 09-detalle-articulo.png. The 62 derived section images do not supersede those originals. The user rejected visual fidelity; this revision is not visually approved, and documentation does not certify exact equivalence or close the material-review gate. Older `src/site` and `src/web` are archival.

**Key Characteristics:**
- White and pale-blue industrial scenery with photographic steel connections.
- Source Serif 4 statements and Manrope explanations and controls.
- Live text and controls above noninteractive decorative imagery.
- Supplied field evidence distinguished from generated conceptual images.

## Colors

### Primary

Electric blue marks emphasized heading words, actions, active navigation and selected filters. Filled actions deepen on hover; outlined actions retain a light translucent surface. The frontmatter owns exact interface values extracted from `style.css`.

### Neutral

Navy ink anchors headings, slate supports paragraphs, and pale borders define controls. White content surfaces and pale gallery service panels separate content from the blueprint texture. The footer uses its own pale surface. Photographic material colors and yellow equipment details belong to images rather than the interface token palette.

**The Evidence Rule.** Keep supplied field evidence distinct from generated conceptual equipment.

## Typography

Source Serif 4 Variable and Manrope Variable are imported locally through Fontsource in `app.js`. The frontmatter records the shared heading and control hierarchy with the effective gallery section-heading override, not every template override. Paragraph measure is capped at (65ch).

The home hero is an explicit composition override: display weight (820), size `clamp(68px,6.9vw,116px)`, and line height (.80), with different large-desktop and mobile rules. These values describe that surface and are not a universal heading rule. Base mobile paragraphs use (16px / 1.75); gallery mobile section headings use (37px), with more specific page overrides. Article reading text receives a larger, looser treatment. Captions identify real images and context; their incidental styling is not promoted into a decorative eyebrow primitive.

## Layout

The six main pages plus 22 service, six project and six article details produce 40 content routes. Query parameters select page and record. `quienes-somos` aliases `nosotros`.

The desktop header is in normal flow at (100px), reducing to (82px) on mobile. Content is capped at (1920px). The effective shared gallery scene removes the old viewport minimum, retaining a (36px) gap and (8%) horizontal padding while setting vertical padding to (80px / 110px). Each page composition supplies its own section density, heights and columns. Breakpoints at (1700px), (1100px), and (760px) adjust column density, hero layouts and controls. At mobile widths scenes stack and the gallery base padding becomes `55px 38px 100px`; the more-specific inherited nonhero selector still reserves (40px) left and (32px) right gutters. Project/article rows explicitly use (38px) horizontal padding. Gallery service panels, alternating image-and-text project/article rows, equipment scenery and a sticky article contents rail define different compositions. The home hero has its own mobile (870px) minimum and equipment crop.

A single noninteractive SVG network per page measures scene boundaries and live content ports. Raster straight steel, ring-derived elbows, flanges and valves are placed inside its geometry. Desktop pipes use a width scaled and clamped from viewport width; mobile uses an (18px) pipe and (17px) side rail. Source asset crop regions are measured, but photographic continuity must be judged on the rendered modular network, not on an isolated plate. No full-page generated image replaces live page content.

## Elevation & Depth

White layers, translucent captions, blueprint opacity and photographic material create depth. Gallery service cards use `0 15px 24px #1435541c`; the category strip uses `0 15px 30px #133e581a`; the article contents rail uses `0 12px 24px #17354b14`; the request form uses `0 20px 50px #183b6414`. Primary action hover uses `0 8px 22px #0052c22b`. The pipe shadow is a low-opacity offset SVG stroke rather than a panel shadow.

GSAP ScrollTrigger maps scroll progress to flow and signal dash offsets. ResizeObserver, image load and font readiness rebuild the measured network. Reduced-motion disables transitions and animation, removes smooth scrolling, and hides moving flow/highlight paths while retaining static connections.

## Shapes

Pill actions and filters contrast with softly rounded rectangular panels and fields. Gallery service cards and linked work photographs crop their rectangular imagery within rounded boundaries. Most field evidence retains simple rectangular framing with a readable caption plate. Hero photography may use a fading mask, while the composed boiler hero uses its own full composition and mobile crop. Photographic elbows, flanges and valve wheels are decorative material, not interface controls.

## Components

Primary and outline actions share arrow icons, pill geometry and minimum desktop height (56px). Mobile base buttons use (50px) minimum height and smaller padding; the home hero overrides desktop button size. A global visible-focus outline (3px electric blue, 5px offset) serves links, buttons and fields. Text links underline on hover.

Navigation marks the current route with blue text and a thin underline. Below the mobile breakpoint, a toggle exposes a two-column menu with `aria-expanded`; Escape and menu-link activation close it. Filters expose `aria-pressed`, hide irrelevant entries, and rebuild pipe geometry after filtering.

Gallery category panels are fed by collector branches; project rows and linked work photographs expose supplied field evidence. The gallery service cards use a pale surface, rounded (14px) corners and body padding (25px / 22px), with mobile padding (28px). The article contents rail is sticky on desktop and placed in normal flow on mobile. Gallery buttons open a native modal dialog with a labeled close button. Fields use native validation, labels and autocomplete where appropriate. The contact action downloads `solicitud-sps.txt` and announces that it has not been sent; there is no delivery backend.

**The Live Content Rule.** Keep text, links and form controls live above decorative artwork.

## Do's and Don'ts

- Do use the nine original full-page compositions in design-proposals/web-completa-conectada as primary visual authority.
- Do keep interface text and controls live and keyboard accessible.
- Do distinguish supplied field evidence from generated conceptual imagery.
- Do keep the contact summary's unsent status explicit.
- Don't treat geometry checks as proof of photographic material fidelity.
- Don't present generated equipment as evidence of completed SPS work.
- Don't claim that a downloaded summary sends a request to SPS.

La corrección posterior del usuario para Quiénes somos fija como referencia específica design-proposals/secciones-2026-09-29/inicio/02-quienes-somos.png. Su fondo se extrajo con imagegen a public/assets/experience/history-faithful.png, conservando patio, equipos, cielo y planos; el texto y la red permanecen nativos. Esta excepción local no sustituye las nueve composiciones como autoridad general.

Aprobación del usuario (2026-09-30): Inicio y Quiénes somos están bien. Preservar estas dos páginas al comparar y corregir las restantes contra design-proposals/web-completa-conectada/index.html.
