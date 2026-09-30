import '../styles/nosotros.css'
import { icon } from '../lib/icons.js'
import { PipeStage } from '../lib/pipes/stage.js'

const field = f => `/assets/sps-field/${f}`
const web = f => `/assets/web/${f}`

const capabilities = [
  { icon: 'steam', title: 'Vapor y<br>recuperación de crudo', text: 'Soluciones térmicas y de proceso para la recuperación eficiente de crudo y optimización de la producción.', img: field('bajo-grande-caldera-card.jpg'), pos: '50% 34%', alt: 'Caldera portátil de vapor en campo' },
  { icon: 'drop', title: 'Manejo de fluidos', text: 'Diseño, instalación y operación de sistemas de bombeo, filtrado y transferencia de hidrocarburos y otros fluidos industriales.', img: web('card-valve.jpg'), pos: '50% 50%', alt: 'Válvula azul sobre tubería de acero' },
  { icon: 'gear', title: 'Automatización<br>y control', text: 'Integración de sistemas de control y automatización para operaciones más seguras, eficientes y confiables.', img: web('card-control.jpg'), pos: '50% 40%', alt: 'Gabinete de control con PLC' },
]

const blueprintSvg = `
<svg class="n-site-art" viewBox="0 0 1030 452" role="img" aria-label="Esquema del sitio de trabajo: pozos, estaciones, patios, fosas y plantas" fill="none" stroke="#2f6fdc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <g transform="translate(150 -6) scale(.86)">
  <g opacity=".85">
    <!-- ground & pipe rack -->
    <path d="M30 350 H880 M30 358 H880" stroke-opacity=".55"/>
    <path d="M120 350 V330 M300 350 V326 M470 350 V330 M640 350 V326 M820 350 V330" stroke-opacity=".5"/>
    <!-- pumpjack -->
    <path d="M150 348 H330"/>
    <path d="M212 348 L246 196 L280 348 M224 300 H268 M232 262 H260"/>
    <path d="M140 176 L346 204 M140 188 L346 216"/>
    <path d="M140 176 Q114 180 112 214 L134 218 Q146 200 156 190"/>
    <path d="M124 216 V318 M114 318 H134 V348 H114 Z"/>
    <path d="M340 208 L326 300"/><circle cx="318" cy="316" r="30"/><path d="M288 316 A30 30 0 0 1 348 316" stroke-width="3"/>
    <path d="M360 318 H414 V348 H360 Z M372 318 V300 H402 V318"/>
    <!-- stations -->
    <path d="M470 348 V318 Q470 300 490 300 H590 Q610 300 610 318 V348"/>
    <path d="M500 300 V282 M560 300 V282"/>
    <path d="M626 348 V206 Q626 190 646 190 Q666 190 666 206 V348 M626 236 H666 M626 280 H666"/>
    <path d="M486 282 H538 V232 H486 Z M480 232 L512 208 L544 232"/>
    <path d="M610 320 H626"/>
    <!-- patios -->
    <g transform="translate(688 150)">
      <path d="M0 20 v150 a34 11 0 0 0 68 0 v-150 M0 20 a34 11 0 0 1 68 0 a34 11 0 0 1 -68 0 M0 60 a34 11 0 0 0 68 0"/>
    </g>
    <g transform="translate(772 176)">
      <path d="M0 20 v124 a30 10 0 0 0 60 0 v-124 M0 20 a30 10 0 0 1 60 0 a30 10 0 0 1 -60 0 M0 60 a30 10 0 0 0 60 0"/>
    </g>
    <!-- plantas -->
    <g transform="translate(776 236)">
      <path d="M0 40 v88 a52 14 0 0 0 104 0 v-88 M0 40 a52 14 0 0 1 104 0 a52 14 0 0 1 -104 0 M14 30 L52 4 L90 30"/>
      <path d="M96 40 V120 M96 70 h12 M96 100 h12" stroke-opacity=".7"/>
    </g>
    <!-- fosa -->
    <path d="M330 424 L540 410 L622 462 L408 488 Z"/>
    <path d="M352 432 L528 420 L594 460 L420 478 Z" stroke-opacity=".8"/>
    <path d="M372 438 L470 452 M400 434 L498 448 M432 431 L528 446 M470 428 L566 450 M340 428 L428 482 M362 426 L446 480" stroke-opacity=".35"/>
    <path d="M408 488 V510 M622 462 V492" stroke-opacity=".5"/>
    <!-- interconnecting pipes -->
    <path d="M414 336 H470 M610 334 H626 M666 330 H700 V318 M420 348 V400 H476"/>
  </g>
  <!-- labels -->
  <g stroke-width="1.2" fill="#2f6fdc" font-family="'Source Serif 4 Variable',Georgia,serif" font-size="27" stroke="none">
    <text x="322" y="60">Pozos</text>
    <text x="580" y="128">Estaciones</text>
    <text x="722" y="60">Patios</text>
    <text x="808" y="148" text-anchor="start">Plantas</text>
    <text x="392" y="512">Fosas</text>
  </g>
  <g stroke-width="1.1">
    <path d="M246 196 L300 84 L318 68"/><circle cx="246" cy="196" r="3" fill="#2f6fdc"/>
    <path d="M540 232 L570 132"/><circle cx="540" cy="232" r="3" fill="#2f6fdc"/>
    <path d="M722 168 L740 70"/><circle cx="722" cy="168" r="3" fill="#2f6fdc"/>
    <path d="M828 236 L836 158"/><circle cx="828" cy="236" r="3" fill="#2f6fdc"/>
    <path d="M470 452 L440 496"/><circle cx="470" cy="452" r="3" fill="#2f6fdc"/>
  </g>
  </g>
</svg>`

function render({ link }) {
  return `
<div class="page p-nosotros" id="stage">
  <div class="bp bp-a" aria-hidden="true"></div>
  <div class="bp bp-b" aria-hidden="true"></div>
  <div class="bp bp-c" aria-hidden="true"></div>
  <div class="bp bp-d" aria-hidden="true"></div>

  <section class="sec n-hero" id="n-hero" aria-labelledby="n-h1">
    <div class="n-hero-sky" aria-hidden="true"></div>
    <div class="n-hero-photo"><img src="${field('bajo-grande-caldera-wide.jpg')}" alt="Caldera portátil de SPS en el patio de Bajo Grande" fetchpriority="high" decoding="async"></div>
    <p class="n-kicker">Servicio<br>con experiencia<br>en la realidad<br>del campo.</p>
    <span class="n-desde">Desde</span>
    <div class="n-year" role="img" aria-label="1990">1990</div>
    <div class="n-hero-copy">
      <h1 id="n-h1">Una historia<br>hecha <em>en campo.</em></h1>
      <p>Vapor, recuperación de crudo<br>y automatización al servicio<br>de la industria petrolera venezolana.</p>
    </div>
  </section>

  <section class="sec n-who" id="n-who" aria-labelledby="n-who-h">
    <div class="n-who-copy">
      <p class="eyebrow">Quiénes somos</p>
      <h2 class="h2" id="n-who-h">Somos Service<br>Petroleum and Supply C.A.</h2>
      <p class="lead">Empresa venezolana de servicios petroleros con base en San Francisco, estado Zulia. Nos especializamos en soluciones de vapor, recuperación de crudo, manejo de fluidos, sanidad de instalaciones y automatización para la operación en campo.</p>
      <p class="lead">Acompañamos a nuestros clientes en la ejecución de proyectos eficientes y confiables, con equipos y conocimiento adaptados a las condiciones reales de la industria en Venezuela.</p>
      <p class="n-place">${icon('pin')}<span>San Francisco,<br>Zulia, Venezuela.</span></p>
    </div>
    <figure class="n-who-photo">
      <img src="${field('frac-tanks-modern-01.jpg')}" alt="Frac tanks con escaleras amarillas en el patio de SPS" loading="lazy" decoding="async">
      <figcaption><strong>Infraestructura para la operación en campo.</strong><span>Tanques de almacenamiento y manejo de fluidos para soluciones integrales.</span></figcaption>
    </figure>
  </section>

  <section class="sec n-link" id="n-link" aria-labelledby="n-link-h">
    <div class="n-link-head">
      <p class="eyebrow">Nuestra experiencia</p>
      <h2 class="h2" id="n-link-h">Se conecta.</h2>
      <p>Integramos capacidades para dar soluciones completas en la operación.</p>
    </div>
    <ul class="n-cards">
      ${capabilities.map(c => `
      <li class="n-card">
        <div class="n-card-photo"><img src="${c.img}" alt="${c.alt}" style="object-position:${c.pos}" loading="lazy" decoding="async"></div>
        <div class="n-card-body">
          <div class="n-card-title"><span class="n-ico">${icon(c.icon)}</span><h3>${c.title}</h3></div>
          <p>${c.text}</p>
          <a class="round-arrow" href="${link('servicios')}" aria-label="Ver servicios: ${c.title.replace(/<br>/g, ' ')}">${icon('arrow')}</a>
        </div>
      </li>`).join('')}
    </ul>
  </section>

  <section class="sec n-team" id="n-team" aria-labelledby="n-team-h">
    <div class="n-team-head">
      <p class="eyebrow">Nuestros equipos</p>
      <h2 class="h2" id="n-team-h">Equipos y conocimiento<br>de la operación.</h2>
      <p class="lead">Contamos con equipos de vapor, tanques, sistemas de manejo de fluidos y automatización, respaldados por la experiencia en campo y el conocimiento de la operación petrolera venezolana.</p>
    </div>
    <div class="n-team-photos">
      <img src="${field('bajo-grande-caldera-wide.jpg')}" alt="Caldera portátil en Bajo Grande" loading="lazy" decoding="async">
      <img src="${field('frac-tanks-modern-01-wide.jpg')}" alt="Frac tanks del patio SPS" loading="lazy" decoding="async">
    </div>
  </section>

  <section class="sec n-where" id="n-where" aria-labelledby="n-where-h">
    <div class="n-where-copy">
      <p class="eyebrow">Nuestra presencia</p>
      <h2 class="h2" id="n-where-h">Desde Zulia,<br>para el trabajo en campo.</h2>
      <p class="lead">Operamos en las principales áreas de la industria petrolera, llevando soluciones adaptadas a cada entorno de trabajo.</p>
      <p class="n-place">${icon('pin')}<span>San Francisco<br>Zulia, Venezuela.</span></p>
    </div>
    ${blueprintSvg}
  </section>

  <section class="sec n-work" id="n-work" aria-labelledby="n-work-h">
    <div class="n-work-copy">
      <p class="eyebrow">Nuestros proyectos</p>
      <h2 class="h2" id="n-work-h">Soluciones reales<br>en campo.</h2>
      <p class="lead">Hemos participado en proyectos en distintas áreas de la industria petrolera, realizando trabajos de vapor, recuperación de crudo, manejo de fluidos, sanidad de instalaciones y automatización.</p>
      <a class="n-work-link" href="${link('proyectos')}">Conoce nuestro trabajo <span class="round-arrow">${icon('arrow')}</span></a>
    </div>
    <div class="n-work-cards">
      <a class="n-proj" href="${link('proyecto', 'campo-boscan')}">
        <img src="${field('boscan-slop-antes-card.jpg')}" alt="Fosa de recuperación de crudo en Campo Boscán" loading="lazy" decoding="async">
        <span class="n-proj-cap"><strong>Fosa Boscán</strong><span>Manejo de fluidos y recuperación de crudo en condiciones reales de operación.</span><i class="round-arrow">${icon('arrow')}</i></span>
      </a>
      <a class="n-proj" href="${link('proyecto', 'bajo-grande')}">
        <img src="${field('bajo-grande-caldera-card.jpg')}" alt="Caldera portátil en Bajo Grande" loading="lazy" decoding="async">
        <span class="n-proj-cap"><strong>Bajo Grande</strong><span>Soluciones de vapor para la recuperación de crudo y optimización de la producción.</span><i class="round-arrow">${icon('arrow')}</i></span>
      </a>
    </div>
  </section>

  <section class="sec n-cta" id="n-cta" aria-labelledby="n-cta-h">
    <div class="n-cta-copy">
      <p class="eyebrow">Hablemos</p>
      <h2 class="h2" id="n-cta-h">Hablemos<br>de tu operación.</h2>
      <p class="lead">Estamos listos para apoyar tus proyectos con soluciones de vapor, manejo de fluidos y automatización, adaptadas a la realidad de tu operación.</p>
    </div>
    <div class="n-cta-card">
      <h3>Contáctanos</h3>
      <a href="tel:+582613226494">${icon('phone')}<span>0261 322 6494</span></a>
      <a href="https://wa.me/584146361373" rel="noopener">${icon('whatsapp')}<span>+58 414 636 1373</span><i class="round-arrow">${icon('arrow')}</i></a>
    </div>
  </section>
</div>`
}

function mount(root) {
  const stage = new PipeStage(root, ctx => plan(ctx))
  return () => stage.destroy()
}

// Pipe route: one continuous line that threads the sections and docks into the content.
function plan({ W, D, U, rect, mobile }) {
  if (mobile) return []
  const s = id => rect(id)
  const hero = s('#n-hero'), who = s('#n-who'), link = s('#n-link'), team = s('#n-team'), where = s('#n-where'), work = s('#n-work'), cta = s('#n-cta')
  if (!hero || !cta) return []
  const r = D * 0.95
  // y helpers: offsets in design px (1440 canvas) from the top of a section
  const at = (sec, y) => sec.t + y * U
  return [
    // 1 · hero: left edge → gentle bump → right, then rises beside the boiler
    { layer: 'over', pts: [[-D, at(hero, 702)], [500 * U, at(hero, 702)], [610 * U, at(hero, 640)], [770 * U, at(hero, 640)], [880 * U, at(hero, 702)], [1392 * U, at(hero, 702)], [1392 * U, at(hero, 300)]], r: r * 0.95,
      parts: [{ at: 150 * U, type: 'pair' }, { at: 1005 * U, type: 'pair' }, { at: -D * 0.3, type: 'flange', face: -1 }] },
    // 2 · quiénes somos: valve line that docks under the photo
    { layer: 'under', pts: [[-D, at(who, 570)], [590 * U, at(who, 570)], [590 * U, at(who, 502)], [1375 * U, at(who, 502)], [1375 * U, at(who, 330)]], r: r * 0.7,
      parts: [{ at: 470 * U, type: 'valve', id: 'wheel-who' }, { at: 250 * U, type: 'pair' }] },
    // 3 · experiencia: loop that feeds the capability cards, then falls down the right edge
    { layer: 'under', pts: [[-D, at(link, 290)], [640 * U, at(link, 290)], [640 * U, at(link, 193)], [1362 * U, at(link, 193)], [1362 * U, at(team, 660)], [60 * U, at(team, 660)], [-D, at(team, 660)]], r,
      parts: [{ at: 130 * U, type: 'pair' }] },
    // 4 · presencia → proyectos: pipe from the left that docks behind the first project card
    { layer: 'under', pts: [[-D, at(where, 400)], [575 * U, at(where, 400)], [575 * U, at(work, 100)]], r,
      parts: [{ at: 140 * U, type: 'pair' }] },
    // 5 · cierre: manifold that frames the contact card, valve on the vertical
    { layer: 'under', pts: [[W + D, at(cta, 50)], [660 * U, at(cta, 50)], [660 * U, at(cta, 260)], [W + D, at(cta, 260)]], r: r * 0.8,
      parts: [{ at: '50%', type: 'valve-front', id: 'wheel-cta' }, { at: '50%', off: -D * 1.05, type: 'pair' }, { at: '50%', off: D * 1.05, type: 'pair' }] },
  ]
}

export default { title: 'Quiénes somos', render, mount }
