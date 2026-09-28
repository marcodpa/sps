const serviceCaptions = ['Caldera portátil · Bajo Grande','Frac tanks · Patio SPS','Equipos de campo · Bajo Grande']
import {groups} from './data.js'

const arrow='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>'
const photo=(name,alt)=>`<img src="/assets/sps-field/${name}" alt="${alt}" loading="lazy">`
export function composeHome(content){
  const sections=[...content.querySelectorAll(':scope>.screen')]
  sections[0].className='screen new-hero'
  sections[0].innerHTML=`<div class="new-hero-copy"><h1>Experiencia<br>que mueve tu<br><span>operación.</span></h1><p>Vapor, recuperación de crudo y automatización.<br>Capacidad técnica para el trabajo en campo.</p><a class="button" href="?pagina=servicios">Conoce nuestros servicios ${arrow}</a></div><figure class="new-machine"><img src="/assets/sps-boiler-studio.png" width="1536" height="1024" alt="Ilustración de una caldera portátil basada en el equipo SPS"><figcaption>Caldera portátil SPS <span>Visualización del equipo</span></figcaption><span class="machine-port" aria-hidden="true"></span></figure><a class="journey-cue" href="#inicio-2">Sigue el recorrido ${arrow}</a>`
  sections[1].className='screen new-history'
  sections[1].innerHTML=`<div class="history-intro"><h2>Una historia<br><span>hecha en campo.</span></h2><div><p>Service Petroleum and Supply C.A. es una empresa venezolana enfocada en servicios petroleros, recuperación de crudo, vapor, automatización y soporte industrial.</p><a class="text-link" href="?pagina=nosotros">Conoce a SPS ${arrow}</a></div></div><div class="history-numerals history-monument"><svg viewBox="0 0 1332 500" role="img" aria-label="1990: una trayectoria construida en campo"><defs><clipPath id="home-history-mask"><text x="0" y="435" textLength="1332" lengthAdjust="spacingAndGlyphs">1990</text><path d="M0 315H1080V400H1190V435H0Z"/></clipPath></defs><image href="/assets/sps-field/bajo-grande-caldera.jpg" width="1332" height="500" preserveAspectRatio="xMidYMid slice" clip-path="url(#home-history-mask)"/></svg></div><div class="history-bottom"><p>Equipos, personal y conocimiento de la operación.</p><p>San Francisco · Zulia · Venezuela</p></div>`
  sections[2].className='screen service-journey'
  sections[2].innerHTML=`<div class="journey-sticky"><div class="journey-heading"><h2>Todo conectado.<br><span>Cada servicio cuenta.</span></h2><div class="journey-controls"><button type="button" data-journey="-1" aria-label="Servicio anterior">${arrow}</button><span class="journey-count" aria-live="polite">1 / 3</span><button type="button" data-journey="1" aria-label="Servicio siguiente">${arrow}</button></div></div><div class="journey-window"><div class="journey-track">${groups.map((g,i)=>`<article class="journey-panel" aria-label="${g.name}"><figure>${photo(['bajo-grande-caldera.jpg','frac-tanks-modern-01.jpg','bajo-grande-patio-04.jpg'][i],serviceCaptions[i])}<figcaption>${serviceCaptions[i]}</figcaption></figure><div><h3>${g.title}</h3><p>${g.intro}</p><ul>${g.items.slice(0,3).map(s=>`<li>${s}</li>`).join('')}</ul><a class="text-link" href="?pagina=servicios&seccion=${i+1}">Explorar este servicio ${arrow}</a></div></article>`).join('')}</div></div><div class="journey-rail" aria-hidden="true"><span></span></div><p class="journey-instruction">Continúa bajando: el recorrido te lleva al siguiente servicio.</p></div>`
  sections[3].classList.add('equipment-editorial')
  sections[4].classList.add('work-editorial')
  sections[5].classList.add('areas-editorial')
  sections[6].classList.add('closing-editorial')
}

export function mountServiceJourney(content){
  const section=content.querySelector('.service-journey')
  if(!section)return
  const track=section.querySelector('.journey-track')
  const count=section.querySelector('.journey-count')
  const media=matchMedia('(min-width:1000px) and (prefers-reduced-motion:no-preference)')
  let current=0,queued=false
  function update(){
    queued=false
    section.classList.toggle('is-spatial',media.matches)
    if(!media.matches){track.style.removeProperty('transform');return}
    const start=section.getBoundingClientRect().top+scrollY-88
    const range=section.offsetHeight-section.querySelector('.journey-sticky').offsetHeight
    const progress=Math.max(0,Math.min(1,(scrollY-start)/Math.max(1,range)))
    track.style.transform=`translate3d(${-progress*2/3*100}%,0,0)`
    const next=Math.round(progress*2)
    if(next!==current){current=next;count.textContent=`${current+1} / 3`}
  }
  const schedule=()=>{if(!queued){queued=true;requestAnimationFrame(update)}}
  addEventListener('scroll',schedule,{passive:true})
  addEventListener('resize',schedule)
  media.addEventListener('change',schedule)
  section.querySelectorAll('[data-journey]').forEach(button=>button.addEventListener('click',()=>{
    const next=Math.max(0,Math.min(2,current+Number(button.dataset.journey)))
    const start=section.getBoundingClientRect().top+scrollY-88
    const range=section.offsetHeight-section.querySelector('.journey-sticky').offsetHeight
    scrollTo({top:start+next/2*range,behavior:'smooth'})
  }))
  track.addEventListener('focusin',event=>{
    if(!media.matches)return
    const panel=event.target.closest('.journey-panel')
    const index=[...track.children].indexOf(panel)
    const start=section.getBoundingClientRect().top+scrollY-88
    const range=section.offsetHeight-section.querySelector('.journey-sticky').offsetHeight
    scrollTo({top:start+index/2*range,behavior:'instant'})
  })
  update()
}
