# PROMPT: SPS WEBSITE — Service Petroleum and Supply C.A.

Build a complete professional website for **SPS (Service Petroleum and Supply C.A.)**, a Venezuelan company specialized in oil services, industrial automation, and telecommunications. The site must be fully built with **Vite + React + Tailwind CSS**, with no animation libraries (no framer-motion, no GSAP). Use only CSS transitions, hover effects, and scroll listeners.

---

## TECH STACK

```json
{
  "framework": "Vite 8 + React 19 + React Router DOM 7",
  "styling": "Tailwind CSS 3",
  "icons": "@phosphor-icons/react v2",
  "noAnimationLibs": true,
  "CSSOnlyAnimations": "Tailwind animate-pulse, CSS transitions, keyframes"
}
```

## BRAND IDENTITY

### Color Palette (exact Tailwind values)

```js
colors: {
  brand: {
    blue: '#0057B8',       // Primary — deep engineering blue
    blueLight: '#3D8BE8',  // Accent — bright blue for highlights
    red: '#C5192D',        // CTA, urgency, flagships
    redLight: '#E23B4E',   // Secondary red
  },
  ink: {
    950: '#070D18',        // Hero bg, footer, dark sections
    900: '#0B1426',        // Card bg on dark
    800: '#101D35',
    700: '#16294A',
    600: '#1E3961',
  },
  steel: {
    50:  '#F6F8FB',        // Page bg light
    100: '#EDF1F7',        // Borders light
    200: '#DCE3EE',
    300: '#C2CDDD',        // Text secondary on dark
    400: '#94A4BC',
    500: '#677893',        // Text secondary on light
    600: '#4C5C76',        // Body text on light
    700: '#39465C',
    800: '#27313F',
    900: '#1A212C',
  }
}
```

### Typography

```css
font-display: 'Space Grotesk', system-ui, sans-serif; /* For headings */
font-body:    'Inter', system-ui, sans-serif;          /* For body text */
font-mono:    'JetBrains Mono', ui-monospace, monospace; /* For technical data, labels */
```

Load fonts from Google Fonts in `index.html`.

### Design Tokens
- **Shadows**: `shadow-lift` = `0 18px 50px -20px rgba(11,20,38,0.35)`, `shadow-lift-blue` = `0 18px 50px -18px rgba(0,87,184,0.45)`
- **Border radius**: Use `rounded-xl` (12px) consistently for cards, buttons, containers
- **Section padding**: `py-24 lg:py-28`
- **Max width**: `max-w-[1400px]` for all section containers
- **Scroll margin**: `scroll-mt-20` for anchor-linked sections
- **Selection color**: `background: #0057B8; color: white`

---

## COMPONENT ARCHITECTURE

```
src/
├── main.jsx             # React root mount
├── App.jsx              # BrowserRouter + Routes
├── index.css            # Tailwind layers + custom utilities
├── lib/
│   ├── motion.jsx       # Reveal, Stagger, StaggerItem (CSS only — NO framer-motion)
│   └── animations.js    # useInView (IntersectionObserver) + useReducedMotion hooks
├── components/
│   ├── Layout.jsx       # Header + Outlet + Footer (scroll-top on route change)
│   ├── Header.jsx       # Fixed nav, scroll detection, mobile menu
│   ├── Footer.jsx       # Logo, nav links, contact info
│   ├── PageHero.jsx     # Reusable page hero for inner pages
│   ├── MagneticButton.jsx   # Link/button with magnetic hover effect (pure JS + CSS)
│   ├── Marquee.jsx      # Infinite horizontal scroll for brand names
│   ├── SpotlightCard.jsx    # Card with radial-gradient cursor-following border
│   └── AnimatedCounter.jsx  # Number counter animation on scroll entry (RAF-based)
└── pages/
    ├── Home.jsx         # Landing pagewith hero, about, services, projects, CTA
    ├── Nosotros.jsx     # About: mission, vision, values sections
    ├── Servicios.jsx    # Services: detailed clickable cards with expandable modals
    ├── Proyectos.jsx    # Projects: project listing with images and tags
    └── Contacto.jsx     # Contact: form with validation, info cards, map
```

---

## ANIMATION RULES

**NO framer-motion, NO GSAP, NO motion/react.** Use only:

1. **CSS transitions** (opacity, transform, background-color, box-shadow)
2. **Tailwind's `animate-pulse`** for LED/blinking indicators
3. **Custom `useInView` hook** (IntersectionObserver) to trigger visibility
4. **Custom `useReducedMotion` hook** (matchMedia) for accessibility
5. **CSS hover effects** (e.g., `hover:-translate-y-1`, `hover:shadow-xl`)

The `motion.jsx` lib provides:
- `<Reveal>` — fades + slides up on scroll into view
- `<Stagger>` — container that staggers children
- `<StaggerItem>` — individual staggered element

All use plain CSS transitions with no framer-motion.

---

## HEADER (Header.jsx)

### Behavior
- **Fixed** at top (z-50), transparent initially
- On scroll > 24px: adds `bg-ink-950/85 backdrop-blur-xl border-b border-white/10`
- Logo: `/sps-logo.png` (company logo), link to `/`

### Navigation (desktop)
- Links: Inicio (/), Nosotros (/nosotros), Servicios (/servicios), Proyectos (/proyectos), Contacto (/contacto)
- Active link has white text + thin blue underline bar
- Inactive: steel-300, hover becomes white
- CTA button: "Cotizar" with ArrowUpRight icon, brand-red background, hover lift effect

### Navigation (mobile)
- Hamburger toggle button (List/X icons)
- Sliding menu with staggered link appearance (CSS transition on opacity + translateX per item, delay 0.05s * index)
- Same CTA button at bottom of menu
- Menu uses maxHeight transition: 0 → 400px with opacity

---

## FOOTER (Footer.jsx)

### Sections (4-column grid lg:grid-cols-12):
1. **Brand** (col-span-4): Logo + company description
2. **Servicios** (col-span-2): Links to service anchors on /servicios
3. **Empresa** (col-span-2): Page links
4. **Contacto** (col-span-4): Address (Av. 5, Calle 13, N 26A-162, San Francisco, Maracaibo, Zulia), phones (0261 322 6494, +58 414 636 1373), CTA link

### Design
- Dark bg (ink-950) with blueprint grid overlay
- Top accent line: gradient from brand-red to brand-blue to transparent
- Copyright line at bottom

---

## PAGES

### 1. HOME (Home.jsx)

Sections (in order):
1. **Hero** — Full-screen (min-h-[90dvh]) with background image + dark overlays. Large headline "Servicios petroleros e industriales de precision." with brand-blueLight accent word. Status badge with green LED dot. CTA buttons. Scroll indicator at bottom.
2. **Clients** — White horizontal bar listing client names: Petroboscan, Chevron, PDVSA GIV, Produsal, Petroquiriquire, Cargill, HPI LLC
3. **About** — 2-column: image of technicians on left, text + stats on right. Stats grid (4): 1.500+, 100%, 5, 7+
4. **Services** — 4 service cards in grid (2x2 md, 4x1 lg). Each has: background image, icon overlay, title, description, hover effect (translate + shadow)
5. **Projects** — Dark section (ink-950). 3 project cards with image, tag badge, title, description. Hover: translate + shadow
6. **Brands** — White section with brand name badges: Cisco, Siemens, Rockwell, Fanuc, Modicon, Omron, Wonderware
7. **CTA** — Dark section with glassmorphism card. Title "Listo para tu proximo proyecto?" Red CTA button, ghost button. Feature badges at bottom (Seguridad industrial, Excelencia operacional, Respuesta 24/7)

### 2. ABOUT (Nosotros.jsx)

Sections:
1. **PageHero** — Reusable component using the standard hero pattern
2. **Intro** — Centered text block with company name and description divider line
3. **Mission** — 2-column split: image left, text right. Blue-themed
4. **Vision** — 2-column split (reversed): image right, text left. Dark bg (ink-950) with blueprint grid
5. **Values** — 6 values in grid: Calidad e innovacion continua, Seguridad e higiene industrial, Talento humano motivado, Respuesta rapida ante emergencias, Coordinacion con empresas aliadas, Armonia con el ambiente
6. **CTA** — Dark section with MagneticButton

### 3. SERVICES (Servicios.jsx) — MOST IMPORTANT PAGE

**This page must show ALL services with clickable cards that open detailed modals.**

#### Hero
- Background image with overlays, headline "Servicios petroleros e industriales especializados."
- Quick-nav buttons: Calderas portátiles (#calderas), Servicios petroleros (#petroleros), Automatización (#automatizacion)

#### Section: Alquiler de Calderas Portátiles
- Dark section with image background and gradient overlay
- 2-column layout: text left, image right
- Spec cards: Capacidad (Hasta 50 MMBTU/h), Presión (Hasta 1.500 PSI), Disponibilidad (Inmediata), Operación (24/7)

#### Section: Servicios Petroleros (11 services)
Each service renders as a **clickable card** in a 3-column grid. When clicked, opens a **modal overlay** with detailed info.

The 11 services:

1. **Inyección de vapor a pozos** (icon: Drop)
   - Equipment: Calderas portátiles hasta 50 MMBTU/h, Cabezales de inyección, Manifolds de distribución, Sistemas de monitoreo
   - Applications: Recuperación mejorada de crudo pesado, Inyección cíclica CSS, Steam flooding, Crudo extrapesado
   - Benefits: Incremento de producción hasta 70%, Reducción de viscosidad, Operación 24/7, Monitoreo remoto

2. **Inyección de vapor para patio de tanques** (icon: Tank)
   - Equipment: Calderas portátiles, Serpentines de calentamiento, Trazas de vapor, Control de temperatura
   - Applications: Calentamiento de tanques, Mantenimiento de temperatura, Calentamiento de líneas, Estaciones de flujo
   - Benefits: Optimización de bombeo, Reducción de tiempos, Prevención de solidificación, Eficiencia energética

3. **Alquiler de Frac Tank 500 bls** (icon: Tank)
   - Equipment: Frac Tank 500 barriles, Válvulas de alivio, Medidores de nivel, Venteo
   - Applications: Almacenamiento temporal de crudo, Aguas de producción, Lodos petrolizados, Fractura
   - Benefits: Disponibilidad inmediata, Capacidad certificada, Movilización rápida, Mantenimiento incluido

4. **Bombeo de crudo** (icon: GasPump)
   - Equipment: Bombas centrífugas, Bombas desplazamiento positivo, Motores eléctricos/diésel, Mangueras
   - Applications: Transferencia entre tanques, Carga de buques/gandolas, Descarga, Respaldo
   - Benefits: Movilización rápida, Equipos de respaldo, Operadores capacitados, Conexión rápida

5. **Saneamiento con hidrojet** (icon: Drop)
   - Equipment: Unidad hidrojet alta presión, Boquillas rotativas, Tanques recuperación, EPP
   - Applications: Limpieza de losas/patios, Descontaminación de suelos, Limpieza estructuras, Saneamiento fosas
   - Benefits: Alta eficiencia, Mínimo uso de químicos, Recuperación de residuos, Cumplimiento ambiental

6. **Trasegado con vacuum 160 bls** (icon: Truck)
   - Equipment: Unidad vacuum 160 bls, Mangueras succión/descarga, Sistema vacío, Válvulas
   - Applications: Recolección en pozos, Extracción de fosas, Limpieza tanques API, Trasiego emergencia
   - Benefits: Alta capacidad succión, Movilización autónoma, Zonas remotas, Respuesta inmediata

7. **Camiones con equipos de soldadura** (icon: Wrench)
   - Equipment: Soldadoras inverter, Corte plasma, Oxicorte, Generadores
   - Applications: Reparación tuberías, Fabricación estructuras, Mantenimiento tanques, Plataformas
   - Benefits: Movilización inmediata, Personal certificado, Equipos autónomos, Cobertura nacional

8. **Vapor para calentamiento de sellos** (icon: Wind)
   - Equipment: Calderas portátiles, Mangueras aisladas, Reguladores presión/temperatura, Trazas flexibles
   - Applications: Terminales marítimos, Muelles descarga, Sellos de bombas grandes, Calentamiento previo
   - Benefits: Prevención daños sellos, Continuidad operativa, Reducción paradas, Personal especializado

9. **Recuperación de crudo en fosas** (icon: Recycle)
   - Equipment: Unidades vacuum, Separadores gas-líquido, Bombas neumáticas, Equipos contención
   - Applications: Fosas pasivos ambientales, Derrames, Pozos abandonados, Áreas antigua producción
   - Benefits: Crudo recuperable aprovechable, Saneamiento ambiental, Cumplimiento normativas, Reducción pasivos

10. **Reparación y mantenimiento a calentadores** (icon: Tool)
    - Equipment: Herramientas diagnóstico, Limpieza tubos, Pruebas hidrostáticas, Instrumentos calibrados
    - Applications: Calentadores de crudo, Intercambiadores de calor, Calentadores tanques, Sistemas calentamiento
    - Benefits: Extensión vida útil, Eficiencia térmica, Reducción paradas, Programas mantenimiento

11. **Reparación y mantenimiento a calderas** (icon: Tool)
    - Equipment: Ultrasonido, Cámaras inspección, Limpieza química, Herramientas calibración
    - Applications: Calderas portátiles, Calderas estacionarias, Generadores vapor, Recuperación calor
    - Benefits: Certificación equipos, Operación segura, Optimización combustible, Mantenimiento a medida

#### Section: Automatización Industrial (8 services)
Same clickable-card pattern in 4-column grid on dark background with image overlay.

1. **Rehabilitación de telemetría** (icon: Radio)
   - Equipment: RTU, Radios UHF/VHF, Sensores/transmisores, Sistemas solares
   - Applications: Pozos producción, Estaciones flujo, Patios tanques, Áreas remotas
   - Benefits: Monitoreo tiempo real, Detección temprana fallas, Reducción visitas campo, Optimización producción

2. **Programación de PLC** (icon: Circuitry)
   - Equipment: Allen Bradley (ControlLogix, CompactLogix), Siemens (S7-1200/1500), Modicon, HMI PanelView/WinCC
   - Applications: Control estaciones flujo, Automatización patios tanques, Sistemas seguridad (ESD), Control procesos
   - Benefits: Automatización completa, Integración SCADA, Confiabilidad operativa, Soporte y actualizaciones

3. **Programación de RTU** (icon: Cpu)
   - Equipment: RTU Allen Bradley, RTU Siemens, RTU Bristol/Emerson, Sensores presión/temperatura/nivel
   - Applications: Pozos producción crudo, Pozos inyección agua, Pozos inyección vapor, Baterías pozos
   - Benefits: Control remoto pozos, Optimización producción, Reducción intervenciones, Datos tiempo real

4. **Servicio SCADA Wonderware** (icon: Monitor)
   - Equipment: System Platform, InTouch, Historian, Servidores OPC
   - Applications: Supervisión estaciones, Control procesos, Gestión alarmas, Reportes producción
   - Benefits: Visualización centralizada, Históricos producción, Alarmas inteligente, Acceso remoto seguro

5. **Variadores y bombas BCP** (icon: Gauge)
   - Equipment: PowerFlex, Sinamics, Bombas BCP, RTU integradas
   - Applications: Pozos crudo pesado BCP, Optimización producción, Control velocidad, Protección equipos
   - Benefits: Ahorro energético, Mayor vida útil bomba, Optimización producción, Monitoreo remoto

6. **Instrumentación de campo** (icon: Ruler)
   - Equipment: Transmisores presión Rosemount, RTD/termocupla, Medidores flujo másico, Sensores nivel
   - Applications: Cabezales pozos, Líneas producción, Separadores gas-líquido, Tanques almacenamiento
   - Benefits: Mediciones precisas, Calibración certificada, Integración PLC/SCADA, Reducción incertidumbre

7. **Sistemas de puesta a tierra** (icon: Plug)
   - Equipment: Varillas copperweld, Cable cobre desnudo, Pararrayos PDC, Medidores resistencia
   - Applications: Estaciones producción, Patios tanques, Salas control, Torres telecomunicaciones
   - Benefits: Protección equipos, Seguridad personal, Cumplimiento normativas, Reducción daños

8. **Paneles solares para telemetría** (icon: SolarRoof)
   - Equipment: Paneles fotovoltaicos, Reguladores MPPT, Baterías ciclo profundo, Gabinete hermético
   - Applications: Pozos inyección agua remotos, Telemetría pozos, RTU solar, Áreas sin tendido
   - Benefits: Operación autónoma, Cero emisiones, Mantenimiento mínimo, Instalación rápida

#### Modal Detail Design
When a service card is clicked, a **fixed overlay** appears (z-50, bg-ink-950/80 backdrop-blur) with:
- Header: icon + title + close button (X icon)
- Full description paragraph
- 3-column card grid: Equipment, Applications, Benefits
- CTA button "Solicitar este servicio" linking to /contacto
- Clicking outside the modal closes it

#### Section: Brand badges
Tech stack tags: Allen Bradley, Wonderware, Siemens, Modicon, Omron, Fanuc

#### Benefits row
3 cards: Seguridad industrial, Soporte 24/7, Excelencia operacional

### 4. PROJECTS (Proyectos.jsx)

Simple project listing with images, descriptions, tags. Same design language.

### 5. CONTACT (Contacto.jsx)

#### Left Column (info):
- Address card with MapPin icon
- Phone numbers (clickable tel: links)
- Support hours note
- Google Maps embed iframe

#### Right Column (form):
- Name, Email (required), Company (optional), Message (required)
- Validation with inline error messages (WarningCircle icon)
- Submit button with loading spinner state
- On success: checkmark animation + "Mensaje enviado" confirmation
- Form uses `useState` for controlled inputs and error state

---

## SERVICE MODAL BEHAVIOR (Critical for Servicios.jsx)

```jsx
const [selected, setSelected] = useState(null)
// Each card: <button onClick={() => setSelected(serviceObj)}>
// Modal: {selected && <DetailModal service={selected} onClose={() => setSelected(null)} />}
// Modal closes on backdrop click (e.stopPropagation on the modal content)
```

---

## CUSTOM COMPONENTS

### PageHero.jsx
Reusable hero for inner pages (Nosotros, Servicios, Proyectos, Contacto):
- Props: kicker (small label), title (big text), accent (highlighted word with brand-blueLight), subtitle (description), children (optional extra content below subtitle)
- Background image with dark overlay
- Standard padding and typography scale

### MagneticButton.jsx
- Wraps `<Link>` or `<a>` tag
- On mousemove: calculates distance from cursor to center, applies CSS `transform: translate(x, y)` via RAF
- On mouseleave: resets transform with 0.3s transition
- Uses `useRef` and ref-based style updates (no framer-motion spring)
- Respects `prefers-reduced-motion`

### SpotlightCard.jsx
- Card with a radial-gradient border that follows cursor
- Uses CSS custom properties `--mx` and `--my` updated via mousemove
- `radial-gradient(220px circle at var(--mx, 50%) var(--my, 0%), rgba(0,87,184,0.55), transparent 60%)`
- Applied via `::before` pseudo-element with `mask-composite: exclude`
- Opacity: 0 by default, 1 on hover

### Marquee.jsx
- Infinite horizontal scroll of items (brand names)
- Uses `animate-marquee` keyframe (translateX 0 to -50%)
- Two cloned rows for seamless loop
- Pauses on hover

### AnimatedCounter.jsx
- On scroll into view: animates from 0 to target value
- Uses `requestAnimationFrame` with ease-out cubic timing
- Handles thousand-separator formatting
- Respects reduced motion (renders final value immediately)

---

## KEY CSS UTILITIES (in index.css)

```css
.bp-grid          /* Blueprint grid overlay pattern */
.bp-grid-fade     /* Radial mask that fades grid edges */
.crt-scan         /* Horizontal scan line overlay for hero */
.clip-corner      /* Diagonal clip-path for image corners */
.glow-hover       /* Hover glow effect with box-shadow */
```

---

## IMPORTANT RULES

1. **NO framer-motion, NO motion/react** — do not install or import. Remove them from package.json if present. Build without animation libraries.
2. **External images** — use Unsplash URLs for background and content images. Use industrial/oil & gas themed photos.
3. **Logo** — use `/sps-logo.png` path
4. **Responsive** — mobile-first, all sections must work from mobile to desktop
5. **Accessibility** — proper aria-labels, semantic HTML, keyboard navigation, `prefers-reduced-motion`
6. **Scroll detection for header** — plain `window.addEventListener('scroll', ...)` with passive flag
7. **Scroll to top on route change** — use `useLocation` from react-router-dom + `useEffect`
8. **Smooth scroll anchors** — `html { scroll-behavior: smooth }` in CSS, `scroll-mt-20` on sections
9. **No framer-motion in deps** — can keep installed but nothing imports from it. All animation via CSS transitions + RAF.
10. **Build command**: `npx vite build` — must succeed without errors