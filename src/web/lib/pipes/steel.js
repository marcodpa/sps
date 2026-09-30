// SVG rendering of satin-steel pipes and their fittings.
// A tube is a stack of nested strokes along the same centre line: the widest is the dark rim,
// each narrower one is lighter and shifted toward the light (upper left), which gives a
// cylindrical shading that follows straight runs and elbows identically.
import { r2 } from './geometry.js'

const LIGHT = [-0.62, -0.78] // toward the light source (upper left)

const RAMP = [ // [t, rgb] — brushed stainless: dark rim, mid body, bright specular
  [0.00, [52, 62, 74]],
  [0.09, [86, 98, 112]],
  [0.26, [128, 141, 155]],
  [0.48, [170, 182, 195]],
  [0.72, [214, 223, 232]],
  [0.90, [244, 248, 252]],
  [1.00, [255, 255, 255]]
]

function ramp(t) {
  for (let i = 1; i < RAMP.length; i++) {
    if (t <= RAMP[i][0]) {
      const [t0, c0] = RAMP[i - 1], [t1, c1] = RAMP[i]
      const k = (t - t0) / (t1 - t0)
      return `rgb(${c0.map((v, j) => Math.round(v + (c1[j] - v) * k)).join(',')})`
    }
  }
  return 'rgb(255,255,255)'
}

/** Nested strokes that shade a tube along path id `ref`. */
export function tube(ref, D, { steps = 26, reach = 0.5 } = {}) {
  let out = ''
  for (let i = 0; i < steps; i++) {
    const u = i / (steps - 1)
    const w = D * (1 - 0.95 * u)
    const m = ((D - w) / 2) * reach
    const tx = LIGHT[0] * m, ty = LIGHT[1] * m
    const move = i ? ` transform="translate(${r2(tx)} ${r2(ty)})"` : ''
    out += `<use href="#${ref}" stroke="${ramp(Math.pow(u, 0.85))}" stroke-width="${r2(w)}"${move}/>`
  }
  // dark reflection band between the specular streak and the shadow edge (what makes steel read as metal)
  const dx = -LIGHT[0] * D * 0.15, dy = -LIGHT[1] * D * 0.15
  out += `<use href="#${ref}" stroke="#2d3948" stroke-opacity=".30" stroke-width="${r2(D * 0.15)}" transform="translate(${r2(dx)} ${r2(dy)})"/>`
  // reflected light kissing the shadow-side edge
  const bx = -LIGHT[0] * D * 0.36, by = -LIGHT[1] * D * 0.36
  out += `<use href="#${ref}" stroke="#dbe4ec" stroke-opacity=".22" stroke-width="${r2(D * 0.13)}" transform="translate(${r2(bx)} ${r2(by)})"/>`
  out += `<use href="#${ref}" stroke="#eef3f8" stroke-opacity=".28" stroke-width="${r2(D * 0.05)}" transform="translate(${r2(bx * 1.03)} ${r2(by * 1.03)})"/>`
  return out
}

/** Shared gradients used by fittings (declared once per svg). */
export function defs() {
  const stops = ramp2()
  return `
<linearGradient id="stH" x1="0" y1="0" x2="0" y2="1">${stops}</linearGradient>
<linearGradient id="stV" x1="0" y1="0" x2="1" y2="0">${stops}</linearGradient>
<linearGradient id="blH" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#3d8bff"/><stop offset=".18" stop-color="#9ccaff"/><stop offset=".34" stop-color="#2f78ee"/>
  <stop offset=".62" stop-color="#0a4cc4"/><stop offset=".86" stop-color="#083a97"/><stop offset="1" stop-color="#062a6c"/>
</linearGradient>
<linearGradient id="blV" x1="0" y1="0" x2="1" y2="0">
  <stop offset="0" stop-color="#3d8bff"/><stop offset=".18" stop-color="#9ccaff"/><stop offset=".34" stop-color="#2f78ee"/>
  <stop offset=".62" stop-color="#0a4cc4"/><stop offset=".86" stop-color="#083a97"/><stop offset="1" stop-color="#062a6c"/>
</linearGradient>
<radialGradient id="bolt" cx=".36" cy=".32" r=".8">
  <stop offset="0" stop-color="#f4f7fa"/><stop offset=".45" stop-color="#a7b3bf"/><stop offset="1" stop-color="#4d5a67"/>
</radialGradient>
<radialGradient id="face" cx=".4" cy=".35" r=".9">
  <stop offset="0" stop-color="#f6f9fc"/><stop offset=".6" stop-color="#c9d3dc"/><stop offset="1" stop-color="#8794a1"/>
</radialGradient>
<radialGradient id="dial" cx=".4" cy=".35" r=".85">
  <stop offset="0" stop-color="#ffffff"/><stop offset=".8" stop-color="#eef2f6"/><stop offset="1" stop-color="#cfd8e0"/>
</radialGradient>
<linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#ffe9a8"/><stop offset=".25" stop-color="#f2b01f"/><stop offset=".65" stop-color="#c47b06"/><stop offset="1" stop-color="#8a4f00"/>
</linearGradient>`
}

function ramp2() {
  // cross-section profile for fittings that are drawn with a plain gradient (light on top / left)
  const pts = [[0, '#55636f'], [.10, '#8794a1'], [.22, '#e9eff5'], [.34, '#ffffff'], [.50, '#c3ced8'], [.72, '#93a0ad'], [.88, '#cbd5de'], [1, '#56626e']]
  return pts.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')
}

/** Flange disc seen slightly from the right: rim + face ellipse with bolt heads. axis 'h' or 'v'. */
export function flange(x, y, D, { axis = 'h', face = 1, scale = 1 } = {}) {
  const Rf = D * 0.80 * scale, t = D * 0.20 * scale
  const bolts = 6
  let b = ''
  const fr = D * 0.62 * scale
  for (let k = 0; k < bolts; k++) {
    const a = (Math.PI * (k + 0.5)) / bolts // front half only
    const by = -Math.cos(a) * fr
    const bx = face * (t / 2 + Math.sin(a) * D * 0.055)
    b += `<circle cx="${r2(bx)}" cy="${r2(by)}" r="${r2(D * 0.052 * scale)}" fill="url(#bolt)" stroke="#3f4a55" stroke-width="${r2(D * 0.012)}"/>`
  }
  const rim = `<rect x="${r2(-t / 2)}" y="${r2(-Rf)}" width="${r2(t)}" height="${r2(Rf * 2)}" rx="${r2(D * 0.035)}" fill="url(#stH)" stroke="#4b5763" stroke-width="${r2(D * 0.015)}"/>`
  const faceEl = `<ellipse cx="${r2(face * t / 2)}" cy="0" rx="${r2(D * 0.115 * scale)}" ry="${r2(Rf * 0.985)}" fill="url(#face)" stroke="#5a6672" stroke-width="${r2(D * 0.015)}"/>` +
    `<ellipse cx="${r2(face * (t / 2 + D * 0.035))}" cy="0" rx="${r2(D * 0.07 * scale)}" ry="${r2(D * 0.44 * scale)}" fill="none" stroke="#fafcfe" stroke-opacity=".7" stroke-width="${r2(D * 0.02)}"/>`
  const body = axis === 'h'
    ? `<g transform="translate(${r2(x)} ${r2(y)})">${rim}${faceEl}${b}</g>`
    : `<g transform="translate(${r2(x)} ${r2(y)}) rotate(90)"><g transform="scale(1 -1)">${rim}${faceEl}${b}</g></g>`
  return `<g class="fx-flange">${body}</g>`
}

/** Thin weld/coupling ring. */
export function ring(x, y, D, axis = 'h') {
  const w = D * 0.11, h = D * 1.08
  const g = axis === 'h'
    ? `<rect x="${r2(-w / 2)}" y="${r2(-h / 2)}" width="${r2(w)}" height="${r2(h)}" rx="${r2(D * 0.03)}" fill="url(#stH)" stroke="#525f6b" stroke-width="${r2(D * 0.012)}"/>`
    : `<rect x="${r2(-h / 2)}" y="${r2(-w / 2)}" width="${r2(h)}" height="${r2(w)}" rx="${r2(D * 0.03)}" fill="url(#stV)" stroke="#525f6b" stroke-width="${r2(D * 0.012)}"/>`
  return `<g transform="translate(${r2(x)} ${r2(y)})">${g}</g>`
}

/** Cobalt gate valve on a horizontal run, hand wheel on top. */
export function valve(x, y, D, { wheel = true, id = '' } = {}) {
  const w = D * 1.05
  const bodyH = D * 0.98
  const spokes = [0, 45, 90, 135].map(a => `<line x1="${r2(-D * 0.5)}" y1="0" x2="${r2(D * 0.5)}" y2="0" transform="rotate(${a})" stroke="#0a3f9e" stroke-width="${r2(D * 0.045)}" stroke-linecap="round"/>`).join('')
  return `<g class="fx-valve" transform="translate(${r2(x)} ${r2(y)})">
  <rect x="${r2(-D * 0.12)}" y="${r2(-D * 1.36)}" width="${r2(D * 0.24)}" height="${r2(D * 0.78)}" rx="${r2(D * 0.03)}" fill="url(#stV)" stroke="#4b5763" stroke-width="${r2(D * 0.012)}"/>
  <path d="M${r2(-D * 0.52)} ${r2(-D * 0.30)} L${r2(-D * 0.30)} ${r2(-D * 0.86)} H${r2(D * 0.30)} L${r2(D * 0.52)} ${r2(-D * 0.30)} Z" fill="url(#blH)" stroke="#06265f" stroke-width="${r2(D * 0.02)}" stroke-linejoin="round"/>
  <rect x="${r2(-w / 2)}" y="${r2(-bodyH / 2)}" width="${r2(w)}" height="${r2(bodyH)}" rx="${r2(D * 0.22)}" fill="url(#blH)" stroke="#06265f" stroke-width="${r2(D * 0.02)}"/>
  <path d="M${r2(-w / 2 + D * 0.12)} ${r2(-bodyH / 2 + D * 0.10)} H${r2(w / 2 - D * 0.12)}" stroke="#d3e8ff" stroke-opacity=".75" stroke-width="${r2(D * 0.05)}" stroke-linecap="round"/>
  <rect x="${r2(-D * 0.36)}" y="${r2(-D * 0.90)}" width="${r2(D * 0.72)}" height="${r2(D * 0.10)}" rx="${r2(D * 0.04)}" fill="url(#blH)" stroke="#06265f" stroke-width="${r2(D * 0.015)}"/>
  ${wheel ? `<g transform="translate(0 ${r2(-D * 1.42)}) scale(1 .3)"><g class="fx-wheel${id ? ' ' + id : ''}" style="transform-box:fill-box;transform-origin:center">
     <circle r="${r2(D * 0.52)}" fill="none" stroke="#06265f" stroke-width="${r2(D * 0.12)}"/>
     <circle r="${r2(D * 0.52)}" fill="none" stroke="url(#blH)" stroke-width="${r2(D * 0.085)}"/>
     ${spokes}<circle r="${r2(D * 0.10)}" fill="#0b47b8" stroke="#06265f" stroke-width="${r2(D * 0.03)}"/></g></g>` : ''}
</g>`
}

/** Valve seen from the front: hand wheel faces the viewer (used on vertical runs). */
export function valveFront(x, y, D, { id = '' } = {}) {
  const spokes = [0, 60, 120].map(a => `<line x1="${r2(-D * 0.56)}" y1="0" x2="${r2(D * 0.56)}" y2="0" transform="rotate(${a})" stroke="#0a3f9e" stroke-width="${r2(D * 0.075)}" stroke-linecap="round"/>`).join('')
  return `<g class="fx-valve" transform="translate(${r2(x)} ${r2(y)})">
  <rect x="${r2(-D * 0.78)}" y="${r2(-D * 0.5)}" width="${r2(D * 1.56)}" height="${r2(D * 1.0)}" rx="${r2(D * 0.2)}" fill="url(#blH)" stroke="#06265f" stroke-width="${r2(D * 0.02)}"/>
  <path d="M${r2(-D * 0.62)} ${r2(-D * 0.36)} H${r2(D * 0.62)}" stroke="#d3e8ff" stroke-opacity=".7" stroke-width="${r2(D * 0.05)}" stroke-linecap="round"/>
  <circle r="${r2(D * 0.44)}" fill="url(#blH)" stroke="#06265f" stroke-width="${r2(D * 0.025)}"/>
  <g class="fx-wheel${id ? ' ' + id : ''}" style="transform-box:fill-box;transform-origin:center">
    <circle r="${r2(D * 0.66)}" fill="none" stroke="#06265f" stroke-width="${r2(D * 0.15)}"/>
    <circle r="${r2(D * 0.66)}" fill="none" stroke="url(#blH)" stroke-width="${r2(D * 0.115)}"/>
    <path d="M${r2(-D * 0.6)} ${r2(-D * 0.22)} A${r2(D * 0.64)} ${r2(D * 0.64)} 0 0 1 ${r2(-D * 0.12)} ${r2(-D * 0.63)}" fill="none" stroke="#cfe6ff" stroke-opacity=".85" stroke-width="${r2(D * 0.03)}" stroke-linecap="round"/>
    ${spokes}
    <circle r="${r2(D * 0.14)}" fill="#0b47b8" stroke="#06265f" stroke-width="${r2(D * 0.03)}"/>
    <circle r="${r2(D * 0.05)}" fill="#bcd8ff"/>
  </g>
</g>`
}

/** Pressure gauge on a short stem, dial facing the viewer. */
export function gauge(x, y, D, { up = true } = {}) {
  const r = D * 0.36
  const dir = up ? -1 : 1
  let ticks = ''
  for (let i = 0; i <= 10; i++) {
    const a = (-225 + i * 27) * Math.PI / 180
    ticks += `<line x1="${r2(Math.cos(a) * r * 0.78)}" y1="${r2(Math.sin(a) * r * 0.78)}" x2="${r2(Math.cos(a) * r * 0.92)}" y2="${r2(Math.sin(a) * r * 0.92)}" stroke="#33404d" stroke-width="${r2(D * 0.014)}"/>`
  }
  return `<g class="fx-gauge" transform="translate(${r2(x)} ${r2(y)})">
  <rect x="${r2(-D * 0.08)}" y="${r2(dir > 0 ? 0 : -D * 0.58)}" width="${r2(D * 0.16)}" height="${r2(D * 0.58)}" fill="url(#stV)" stroke="#525f6b" stroke-width="${r2(D * 0.012)}"/>
  <g transform="translate(0 ${r2(dir * (D * 0.58 + r * 0.85))})">
   <circle r="${r2(r)}" fill="url(#stH)" stroke="#4b5763" stroke-width="${r2(D * 0.02)}"/>
   <circle r="${r2(r * 0.84)}" fill="url(#dial)" stroke="#8b97a4" stroke-width="${r2(D * 0.012)}"/>
   ${ticks}
   <path d="M${r2(-r * 0.52)} ${r2(r * 0.36)} A${r2(r * 0.6)} ${r2(r * 0.6)} 0 0 1 ${r2(-r * 0.3)} ${r2(-r * 0.5)}" fill="none" stroke="#1d6de0" stroke-width="${r2(D * 0.02)}"/>
   <g class="fx-needle" style="transform-box:fill-box;transform-origin:0 100%"><line x1="0" y1="0" x2="${r2(r * 0.6)}" y2="${r2(-r * 0.42)}" stroke="#d63b2f" stroke-width="${r2(D * 0.022)}" stroke-linecap="round"/></g>
   <circle r="${r2(D * 0.03)}" fill="#222c36"/>
   <ellipse cx="${r2(-r * 0.3)}" cy="${r2(-r * 0.55)}" rx="${r2(r * 0.4)}" ry="${r2(r * 0.16)}" fill="#fff" fill-opacity=".45" transform="rotate(-25 ${r2(-r * 0.3)} ${r2(-r * 0.55)})"/>
  </g>
</g>`
}

/** Glass inspection section with amber liquid, replaces a piece of pipe between two flanges. */
export function sight(x, y, D, len = D * 1.5) {
  return `<g class="fx-sight" transform="translate(${r2(x)} ${r2(y)})">
  <rect x="${r2(-len / 2)}" y="${r2(-D * 0.5)}" width="${r2(len)}" height="${r2(D)}" fill="#e9f1f8" fill-opacity=".55" stroke="#93a2b1" stroke-width="${r2(D * 0.015)}"/>
  <rect x="${r2(-len / 2)}" y="${r2(-D * 0.36)}" width="${r2(len)}" height="${r2(D * 0.72)}" fill="url(#glass)"/>
  <g class="fx-bubbles">${[.12, .3, .5, .72, .88].map((k, i) => `<circle cx="${r2(-len / 2 + len * k)}" cy="${r2((i % 2 ? -1 : 1) * D * 0.14)}" r="${r2(D * (0.045 + (i % 3) * 0.015))}" fill="#fff3c9" fill-opacity=".8"/>`).join('')}</g>
  <path d="M${r2(-len / 2)} ${r2(-D * 0.42)} H${r2(len / 2)}" stroke="#fff" stroke-opacity=".8" stroke-width="${r2(D * 0.05)}"/>
</g>`
}
