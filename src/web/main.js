import '@fontsource-variable/source-serif-4/opsz.css'
import '@fontsource-variable/manrope'
import '@fontsource-variable/archivo/wdth.css'
import './styles/base.css'
import './styles/shell.css'
import { icon } from './lib/icons.js'

const q = new URLSearchParams(location.search)
const requested = q.get('pagina') || 'inicio'
const page = requested === 'quienes-somos' ? 'nosotros' : requested
const id = q.get('id')

// While the new site lives at /web.html it links to itself; once promoted to index.html it uses "/".
export const BASE = location.pathname.endsWith('web.html') ? '/web.html' : '/'
export const link = (p, rid) => `${BASE}?pagina=${p}${rid ? `&id=${encodeURIComponent(rid)}` : ''}`

const NAV = [['inicio', 'Inicio'], ['nosotros', 'Quiénes somos'], ['servicios', 'Servicios'], ['proyectos', 'Proyectos'], ['articulos', 'Artículos'], ['contacto', 'Contacto']]
const parent = { servicio: 'servicios', proyecto: 'proyectos', articulo: 'articulos' }
const current = parent[page] || page

const header = document.getElementById('site-header')
header.innerHTML = `
  <a class="brand" href="${link('inicio')}" aria-label="SPS, Service Petroleum and Supply C.A. — inicio"><img src="/assets/web/logo.webp" width="942" height="561" alt="Service Petroleum and Supply C.A." decoding="async"></a>
  <nav class="nav" id="main-nav" aria-label="Principal">${NAV.map(([p, n]) => `<a href="${link(p)}" ${current === p ? 'aria-current="page"' : ''}>${n}</a>`).join('')}</nav>
  <a class="btn btn-outline btn-sm header-cta" href="${link('contacto')}">${icon('mail')}Contáctanos${icon('chevron')}</a>
  <button class="menu-toggle" aria-controls="main-nav" aria-expanded="false" aria-label="Abrir menú"><span></span></button>`

const footer = document.getElementById('site-footer')
const phones = variant => variant === 'phones'
  ? `<div class="footer-phones"><a href="tel:+582613226494">${icon('phone')}0261 322 6494</a><a href="tel:+584146361373">${icon('mobile')}+58 414 636 1373</a></div>`
  : ''
function footerHtml() {
  const variant = ['articulo', 'servicio'].includes(page) ? 'phones' : 'loc'
  return `<div class="footer-in">
    <a class="brand" href="${link('inicio')}" aria-label="SPS — inicio"><img src="/assets/web/logo.webp" width="942" height="561" alt="SPS" loading="lazy" decoding="async"></a>
    ${page === 'nosotros' ? '<p class="footer-tag">Soluciones en vapor, manejo de fluidos y automatización para la industria petrolera.</p>' : ''}
    <nav class="footer-nav" aria-label="Navegación al pie">${NAV.map(([p, n]) => `<a href="${link(p)}" ${current === p ? 'aria-current="page"' : ''}>${n}</a>`).join('')}</nav>
    ${phones(variant)}
    <p class="footer-loc">${icon('pin')}<span>San Francisco, Zulia<br>Venezuela.</span></p>
  </div>`
}

const main = document.getElementById('content')
document.body.dataset.page = page

const loaders = {
  nosotros: () => import('./pages/nosotros.js'),
}

async function boot() {
  const loader = loaders[page]
  if (!loader) {
    main.innerHTML = `<section style="padding:180px 8vw 120px"><h1>Página en construcción</h1><p style="margin-top:16px">Esta sección aún no está disponible en la nueva versión.</p></section>`
  } else {
    const mod = await loader()
    const def = mod.default
    document.title = `${def.title} · SPS`
    main.innerHTML = def.render({ q, id, link })
    footer.innerHTML = footerHtml()
    await def.mount?.(main.firstElementChild, { link, q, id })
  }
  if (!footer.innerHTML) footer.innerHTML = footerHtml()
}

// Keep the design scale in sync with the viewport.
function setScale() {
  const w = document.documentElement.clientWidth
  const u = w >= 960 ? Math.min(w / 1440, 1.5) : Math.min(w, 620) / 430
  document.documentElement.style.setProperty('--u', u + 'px')
  document.documentElement.dataset.layout = w >= 960 ? 'desktop' : 'mobile'
}
setScale()
new ResizeObserver(setScale).observe(document.documentElement)

const onScroll = () => header.classList.toggle('is-stuck', scrollY > 24)
addEventListener('scroll', onScroll, { passive: true }); onScroll()

const toggle = header.querySelector('.menu-toggle')
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true'
  toggle.setAttribute('aria-expanded', String(open))
  header.classList.toggle('menu-open', open)
})
addEventListener('keydown', e => { if (e.key === 'Escape') { toggle.setAttribute('aria-expanded', 'false'); header.classList.remove('menu-open') } })

boot()
