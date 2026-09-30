// Route geometry for the pipe network: a polyline whose corners are filleted with arcs.
// Everything is expressed in page pixels. `at(s)` returns the point and heading at distance s.

const hypot = Math.hypot

export function buildRoute(points, radius = 60) {
  const pts = points.map(([x, y]) => ({ x, y }))
  const segs = []
  let cur = { x: pts[0].x, y: pts[0].y }
  let d = `M${r2(cur.x)} ${r2(cur.y)}`

  for (let i = 1; i < pts.length; i++) {
    const b = pts[i]
    const next = pts[i + 1]
    if (!next) {
      pushLine(segs, cur, b)
      d += ` L${r2(b.x)} ${r2(b.y)}`
      cur = b
      break
    }
    const a = pts[i - 1]
    const ux = a.x - b.x, uy = a.y - b.y
    const vx = next.x - b.x, vy = next.y - b.y
    const lu = hypot(ux, uy), lv = hypot(vx, vy)
    if (!lu || !lv) continue
    const nux = ux / lu, nuy = uy / lu, nvx = vx / lv, nvy = vy / lv
    const dot = Math.max(-1, Math.min(1, nux * nvx + nuy * nvy))
    const alpha = Math.acos(dot) // interior angle
    if (alpha > Math.PI - 0.001 || alpha < 0.001) { // straight through / doubled back
      pushLine(segs, cur, b)
      d += ` L${r2(b.x)} ${r2(b.y)}`
      cur = b
      continue
    }
    let t = radius / Math.tan(alpha / 2)
    const maxT = Math.min(lu, lv) / 2 + (i === 1 ? lu / 2 : 0) // first corner may use the whole lead-in
    const tt = Math.min(t, maxT * 0.98)
    const rr = tt * Math.tan(alpha / 2)
    const p = { x: b.x + nux * tt, y: b.y + nuy * tt }
    const q = { x: b.x + nvx * tt, y: b.y + nvy * tt }
    pushLine(segs, cur, p)
    d += ` L${r2(p.x)} ${r2(p.y)}`
    const cross = nux * nvy - nuy * nvx
    const sweep = cross < 0 ? 1 : 0
    // arc centre lies along the bisector
    const bx = nux + nvx, by = nuy + nvy, bl = hypot(bx, by)
    const dist = rr / Math.sin(alpha / 2)
    const c = { x: b.x + (bx / bl) * dist, y: b.y + (by / bl) * dist }
    const a0 = Math.atan2(p.y - c.y, p.x - c.x)
    const a1 = Math.atan2(q.y - c.y, q.x - c.x)
    let da = a1 - a0
    if (sweep === 1) { while (da < 0) da += Math.PI * 2 } else { while (da > 0) da -= Math.PI * 2 }
    segs.push({ type: 'A', cx: c.x, cy: c.y, r: rr, a0, da, len: Math.abs(da) * rr })
    d += ` A${r2(rr)} ${r2(rr)} 0 0 ${sweep} ${r2(q.x)} ${r2(q.y)}`
    cur = q
  }

  const length = segs.reduce((n, s) => n + s.len, 0)
  return { d, segs, length, at: s => pointAt(segs, s), start: pts[0], end: pts[pts.length - 1] }
}

function pushLine(segs, a, b) {
  const len = hypot(b.x - a.x, b.y - a.y)
  if (len < 0.01) return
  segs.push({ type: 'L', x0: a.x, y0: a.y, x1: b.x, y1: b.y, len, ang: Math.atan2(b.y - a.y, b.x - a.x) })
}

function pointAt(segs, s) {
  let acc = 0
  for (const g of segs) {
    if (s <= acc + g.len || g === segs[segs.length - 1]) {
      const u = Math.max(0, Math.min(1, (s - acc) / g.len))
      if (g.type === 'L') return { x: g.x0 + (g.x1 - g.x0) * u, y: g.y0 + (g.y1 - g.y0) * u, ang: g.ang }
      const a = g.a0 + g.da * u
      const sign = g.da > 0 ? 1 : -1
      return { x: g.cx + Math.cos(a) * g.r, y: g.cy + Math.sin(a) * g.r, ang: a + sign * Math.PI / 2 }
    }
    acc += g.len
  }
  return { x: 0, y: 0, ang: 0 }
}

export const r2 = n => Math.round(n * 100) / 100
