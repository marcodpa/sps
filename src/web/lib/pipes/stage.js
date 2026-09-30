// A PipeStage owns two SVG layers (under / over the page content) and re-draws the routes
// whenever layout changes. Pages describe routes as a function of measured geometry, so the
// pipes always dock to real elements and every joint shares one diameter.
import { stageMarkup } from './engine.js'

const clamp = (a, x, b) => Math.max(a, Math.min(b, x))

export class PipeStage {
  /**
   * @param {HTMLElement} host   positioned element that wraps the whole page content
   * @param {(ctx:object)=>object[]} plan  returns route specs
   */
  constructor(host, plan, opts = {}) {
    this.host = host
    this.plan = plan
    this.opts = opts
    this.under = this.layer('pipes-under')
    this.over = this.layer('pipes-over')
    this.raf = 0
    this.schedule = this.schedule.bind(this)
    this.ro = new ResizeObserver(this.schedule)
    this.ro.observe(host)
    window.addEventListener('resize', this.schedule)
    document.fonts?.ready.then(this.schedule)
    host.querySelectorAll('img').forEach(img => { if (!img.complete) img.addEventListener('load', this.schedule, { once: true }) })
    this.schedule()
  }

  layer(cls) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', `pipes ${cls}`)
    svg.setAttribute('aria-hidden', 'true')
    svg.setAttribute('focusable', 'false')
    this.host.appendChild(svg)
    return svg
  }

  schedule() {
    if (this.raf) return
    this.raf = requestAnimationFrame(() => { this.raf = 0; this.draw() })
  }

  context() {
    const host = this.host
    const hb = host.getBoundingClientRect()
    const W = hb.width
    const H = host.scrollHeight
    const mobile = W < 760
    const D = this.opts.D ? this.opts.D(W) : clamp(28, W * 0.053, 86)
    const U = W / 1440 // design scale for desktop coordinates
    const rect = (sel, index = 0) => {
      const el = typeof sel === 'string' ? host.querySelectorAll(sel)[index] : sel
      if (!el) return null
      const b = el.getBoundingClientRect()
      const l = b.left - hb.left, t = b.top - hb.top
      return { l, t, r: l + b.width, b: t + b.height, w: b.width, h: b.height, cx: l + b.width / 2, cy: t + b.height / 2 }
    }
    return { W, H, D, U, mobile, rect, hb }
  }

  draw() {
    const ctx = this.context()
    if (!ctx.W) return
    let routes = []
    try { routes = this.plan(ctx) || [] } catch (e) { console.error('[pipes] plan failed', e) }
    const defaults = { D: ctx.D, r: ctx.D * 0.95 }
    for (const [svg, layer] of [[this.under, 'under'], [this.over, 'over']]) {
      svg.setAttribute('viewBox', `0 0 ${ctx.W} ${ctx.H}`)
      svg.setAttribute('width', ctx.W)
      svg.setAttribute('height', ctx.H)
      svg.innerHTML = stageMarkup(routes, defaults, layer)
    }
    this.host.dispatchEvent(new CustomEvent('pipes:drawn', { detail: ctx }))
  }

  destroy() {
    this.ro.disconnect()
    window.removeEventListener('resize', this.schedule)
    this.under.remove()
    this.over.remove()
  }
}
