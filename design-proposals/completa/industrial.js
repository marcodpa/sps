const NS = 'http://www.w3.org/2000/svg'

export function prepareHome(content) {
  const hero=content.querySelector('.hero')
  hero.className='screen pipeline-hero'
  hero.innerHTML=`<div class="hero-copy"><h1>Experiencia que mueve tu <span class="blue">operación.</span></h1><p>Vapor, recuperación de crudo, manejo de fluidos y automatización para operaciones petroleras.</p><p>Equipos y experiencia de campo desde San Francisco, Zulia.</p><div class="actions"><a class="button" href="?pagina=servicios">Explorar servicios <span aria-hidden="true">↗</span></a><a class="text-link" href="?pagina=proyectos">Ver nuestros proyectos <span aria-hidden="true">↗</span></a></div></div><figure class="hero-art"><img src="/assets/sps-boiler-studio.png" width="1536" height="1024" alt="Ilustración de la caldera portátil SPS, basada en sus equipos de campo"><figcaption>Calderas portátiles · Vapor y recuperación</figcaption></figure><a class="scroll-hint" href="#inicio-2"><svg viewBox="0 0 20 26" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M10 1V23M3 16l7 7 7-7"/></svg>Conoce la experiencia SPS</a>`
  const editorial=content.querySelector('#inicio-2 .editorial')
  editorial.className='home-history'
  editorial.querySelector('.overlap-photo').outerHTML=`<div class="history-numerals"><svg viewBox="0 0 1332 500" role="img" aria-label="Desde 1990, una trayectoria construida en campo"><defs><clipPath id="home-history-mask"><text x="0" y="435" textLength="1332" lengthAdjust="spacingAndGlyphs">1990</text><path d="M0 315H1080V400H1190V435H0Z"/></clipPath></defs><image href="/assets/sps-field/bajo-grande-caldera.jpg" width="1332" height="500" preserveAspectRatio="xMidYMid slice" clip-path="url(#home-history-mask)"/></svg></div>`
}

// One path in document coordinates, never one decoration per section.
export function mountIndustrialScene(content) {
  document.querySelector('.ambient')?.remove()
  document.body.classList.add('industrial-site')
  const sections = [...content.querySelectorAll(':scope > .screen')]
  const scene = document.createElementNS(NS, 'svg')
  scene.classList.add('continuous-pipe')
  scene.setAttribute('aria-hidden', 'true')
  scene.setAttribute('focusable', 'false')
  content.prepend(scene)
  sections.forEach((section, index) => {
    const drawing = document.createElement('div')
    drawing.className = `engineering-plan plan-${index % 3}`
    drawing.setAttribute('aria-hidden', 'true')
    drawing.innerHTML = blueprint(index % 3)
    section.prepend(drawing)
  })
  const flange = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-20" y="-5" width="40" height="10" rx="2" fill="url(#steel-joint)" stroke="#79838c" stroke-width=".7"/><path d="M-18-2H18M-18 3H18" stroke="#f9fbfc" stroke-width="1"/><circle cx="-16" cy="0" r="1.5" fill="#626d76"/><circle cx="16" cy="0" r="1.5" fill="#626d76"/></g>`
  const wheel = (x,y) => `<g transform="translate(${x} ${y})"><rect x="-7" y="-21" width="14" height="42" rx="4" fill="url(#steel-joint)" stroke="#75818c"/><path d="M0 0H27" stroke="#83909b" stroke-width="7"/><circle cx="31" cy="0" r="14" fill="#fafcff" stroke="#075b9d" stroke-width="5"/><path d="M17 0H45M31-14V14" stroke="#075b9d" stroke-width="3"/><circle cx="31" cy="0" r="4" fill="#183e60"/></g>`
  let pending = 0
  function draw() {
    pending = 0
    const width = content.clientWidth
    const height = content.offsetHeight
    const mobile = width < 761
    const margin = mobile ? 15 : Math.max(34, Math.min(58, width * .04))
    const left = margin, right = width - margin
    const radius = mobile ? 17 : 44
    let side = right
    let d = `M ${side} 0`
    const heroImage = content.querySelector('.new-machine img, .hero-art img')
    if (heroImage) {
      const rect = heroImage.getBoundingClientRect()
      const origin = content.getBoundingClientRect()
      const startX = rect.left - origin.left + rect.width * .26
      const startY = rect.top - origin.top + rect.height * .66
      const bendY = rect.top - origin.top + rect.height * .94
      d = `M ${startX} ${startY} V ${bendY-radius} Q ${startX} ${bendY} ${startX+radius} ${bendY} H ${right-radius} Q ${right} ${bendY} ${right} ${bendY+radius}`
    }
    let fittings = ''
    sections.forEach((section, index) => {
      const bottom = section.offsetTop + section.offsetHeight
      const turn = bottom - (mobile ? 35 : 60)
      const next = [right,left,left,right,right,left,left][index] ?? side
      const sign = next > side ? 1 : -1
      if(next===side) d += ` V ${bottom}`
      else d += ` V ${turn-radius} Q ${side} ${turn} ${side+sign*radius} ${turn} H ${next-sign*radius} Q ${next} ${turn} ${next} ${turn+radius}`
      if (!mobile) {
        if (!heroImage || index > 0) fittings += flange(side, section.offsetTop + section.offsetHeight * .34)
        if (index === 1 || index === sections.length-1) fittings += wheel(side, section.offsetTop + section.offsetHeight * .68)
      }
      side = next
    })
    d += ` V ${height}`
    scene.setAttribute('viewBox', `0 0 ${width} ${height}`)
    scene.setAttribute('width', width)
    scene.setAttribute('height', height)
    const thick = mobile ? 9 : 23
    scene.innerHTML = `<defs><linearGradient id="steel-joint" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#616d77"/><stop offset=".23" stop-color="#d1d7dc"/><stop offset=".45" stop-color="#fff"/><stop offset=".68" stop-color="#bcc5cb"/><stop offset="1" stop-color="#697680"/></linearGradient></defs><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="${d}" stroke="#233a4f" stroke-opacity=".10" stroke-width="${thick+7}" transform="translate(3 6)"/><path class="pipe-route" d="${d}" stroke="#737f87" stroke-width="${thick}"/><path d="${d}" stroke="#c0c9cf" stroke-width="${thick-2}"/><path d="${d}" stroke="#e6ebee" stroke-width="${thick-6}" transform="translate(-1 -1)"/><path d="${d}" stroke="#fff" stroke-opacity=".92" stroke-width="${mobile?1.5:4}" transform="translate(-3 -3)"/></g>${fittings}`
  }
  const queue = () => { if (!pending) pending = requestAnimationFrame(draw) }
  const observer = new ResizeObserver(queue)
  sections.forEach(section => observer.observe(section))
  observer.observe(content)
  document.fonts.ready.then(queue)
  queue()
  // Progress is navigation feedback; the physical pipe is always visible.
  const progress = document.createElement('div')
  progress.className = 'reading-progress'
  progress.setAttribute('aria-hidden', 'true')
  document.querySelector('.header').append(progress)
  let scrolling = false
  function updateProgress() {
    const total = document.documentElement.scrollHeight - innerHeight
    progress.style.transform = `scaleX(${total > 0 ? Math.max(0, Math.min(1, scrollY / total)) : 0})`
    scrolling = false
  }
  addEventListener('scroll', () => { if (!scrolling) { scrolling = true; requestAnimationFrame(updateProgress) } }, { passive: true })
  updateProgress()
}

function blueprint(type) {
  const tank = `<rect x="140" y="130" width="340" height="180" rx="72"/><ellipse cx="212" cy="220" rx="42" ry="90"/><path d="M140 220H480M220 130V310M400 130V310M190 310V348H230V310M390 310V348H430V310M310 130V95H340V130M320 95V65H330V95M480 200H535V235H480M140 200H95V235H140"/><path d="M140 380H480M140 355V392M480 330V392M70 130V310M58 130H130M58 310H130"/><path d="m140 380 9-4m-9 4 9 4m322-4-9-4m9 4-9 4"/>`
  const valve = `<circle cx="310" cy="220" r="150"/><circle cx="310" cy="220" r="125"/><path d="M110 220H510M310 30V420M190 265H430V310H190ZM250 265V190L278 155H342L370 190V265M285 265V150H335V265M300 150V83H320V150M260 75H360V85H260ZM190 260V320M205 260V320M415 260V320M430 260V320"/><path d="M245 335H375M245 325V348M375 325V348M470 150V310M455 150H482M440 310H482"/>`
  const control = `<rect x="165" y="65" width="290" height="335"/><rect x="180" y="82" width="260" height="302"/><rect x="208" y="110" width="85" height="60"/><circle cx="340" cy="133" r="12"/><circle cx="384" cy="133" r="12"/><path d="M208 208H414M208 290H414M208 350H414M200 190V370M420 190V370"/>${[220,252,284,316,348,380].map(x=>`<rect x="${x}" y="218" width="22" height="56"/><path d="M${x+11} 274V325"/>`).join('')}<path d="M140 65V400M125 65H158M125 400H158M165 427H455M165 410V440M455 410V440"/>`
  return `<svg viewBox="0 0 620 460" fill="none" xmlns="${NS}"><g stroke="currentColor" stroke-width="1.1">${[80,160,240,320,400,480,560].map(x=>`<path opacity=".35" d="M${x} 20V440"/>`).join('')}${[60,140,220,300,380].map(y=>`<path opacity=".35" d="M30 ${y}H590"/>`).join('')}${[tank,valve,control][type]}</g></svg>`
}
