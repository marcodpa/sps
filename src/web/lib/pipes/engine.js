// Turns route specs into SVG markup. Coordinates are page pixels.
//
// route = {
//   pts: [[x, y], ...]           // polyline, corners are filleted with radius `r`
//   r: 70, D: 84                 // corner radius / diameter (defaults from the stage)
//   parts: [{ at, type, ... }]   // fittings along the run (at: px from start, negative from end, '40%')
//   ends: { start, end }         // 'flange' | 'ring' | 'open'
// }
import { buildRoute, r2 } from './geometry.js'
import { tube, defs, flange, ring, valve, valveFront, gauge, sight } from './steel.js'

let uid = 0

function place(route, at) {
  if (typeof at === 'string' && at.endsWith('%')) return route.length * (parseFloat(at) / 100)
  return at < 0 ? route.length + at : at
}

function partMarkup(route, spec, D) {
  const s = place(route, spec.at) + (spec.off || 0)
  const p = route.at(s)
  const horizontal = Math.abs(Math.cos(p.ang)) > 0.7
  const axis = horizontal ? 'h' : 'v'
  switch (spec.type) {
    case 'flange': return flange(p.x, p.y, D, { axis, face: spec.face ?? 1, scale: spec.scale ?? 1 })
    case 'pair': { // two flanges bolted together
      const g = D * 0.2
      const a = horizontal ? [p.x - g, p.y] : [p.x, p.y - g]
      const b = horizontal ? [p.x + g, p.y] : [p.x, p.y + g]
      return flange(a[0], a[1], D, { axis, face: -1 }) + flange(b[0], b[1], D, { axis, face: 1 })
    }
    case 'ring': return ring(p.x, p.y, D, axis)
    case 'valve': return valve(p.x, p.y, D * (spec.scale ?? 1.12), { id: spec.id })
    case 'valve-front': return valveFront(p.x, p.y, D * (spec.scale ?? 1.32), { id: spec.id })
    case 'gauge': return gauge(p.x + (spec.dx ?? 0), p.y + (horizontal ? (spec.up === false ? D * 0.5 : -D * 0.5) : 0), D, { up: spec.up !== false })
    case 'sight': return sight(p.x, p.y, D, spec.len ?? D * 1.6)
    default: return ''
  }
}

export function routeMarkup(spec, defaults) {
  const D = spec.D ?? defaults.D
  const r = spec.r ?? defaults.r ?? D * 0.9
  const route = buildRoute(spec.pts, r)
  const id = `pr${++uid}`
  let out = `<path id="${id}" d="${route.d}" fill="none"/>`
  out += `<g class="fx-pipe" fill="none" stroke-linecap="butt" stroke-linejoin="round">${tube(id, D)}</g>`
  const parts = [...(spec.parts || [])]
  const ends = spec.ends || {}
  if (ends.start === 'flange') parts.push({ at: D * 0.05, type: 'flange', face: -1 })
  if (ends.end === 'flange') parts.push({ at: route.length - D * 0.05, type: 'flange', face: 1 })
  out += parts.map(p => partMarkup(route, p, D)).join('')
  return out
}

export function stageMarkup(routes, defaults, layer) {
  const body = routes.filter(r => (r.layer || 'over') === layer).map(r => routeMarkup(r, defaults)).join('')
  return `<defs>${defs()}</defs>${body}`
}
