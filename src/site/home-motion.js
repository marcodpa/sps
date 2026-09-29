import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Coordinates follow the pictured cable and manifold, not a generic page curve.
function overlay(section, box, paths, className) {
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg')
 svg.setAttribute('viewBox',box)
 svg.setAttribute('preserveAspectRatio','none')
 svg.setAttribute('aria-hidden','true')
 svg.classList.add('ch-motion',className)
 svg.innerHTML=paths.map(d=>`<path d="${d}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`).join('')
 section.append(svg)
 return svg
}

export function mountHomeMotion(root){
 if(!root||new URLSearchParams(location.search).has('captura'))return
 const matches=gsap.matchMedia()
 matches.add('(prefers-reduced-motion: no-preference)',()=>{
  const control=root.querySelector('.ch-control')
  const svg=overlay(control,'0 0 727 228',[
   'M363 112 C386 113 370 171 389 178 C400 185 424 181 430 163',
   'M464 164 C467 185 487 181 509 182 C535 183 551 182 561 174'
  ],'ch-signal')
  const cables=[...svg.querySelectorAll('path')]
  const labels=[...root.querySelectorAll('.ch-control-labels a')]
  cables.forEach(path=>{
   const length=path.getTotalLength()
   gsap.set(path,{strokeDasharray:length,strokeDashoffset:length})
  })
  const signal=gsap.timeline({scrollTrigger:{trigger:control,start:'top 75%',end:'bottom 35%',scrub:.35}})
  signal.to(labels[0],{backgroundColor:'#00479d',duration:.15})
   .to(cables[0],{strokeDashoffset:0,duration:1,ease:'none'})
   .to(labels[1],{backgroundColor:'#00479d',duration:.15})
   .to(cables[1],{strokeDashoffset:0,duration:1,ease:'none'})
   .to(labels[2],{backgroundColor:'#00479d',duration:.15})

  // Stacked mobile cards retain their natural reading order.
  const desktop=gsap.matchMedia()
  desktop.add('(min-width: 761px)',()=>{
   const services=root.querySelector('.ch-services')
   const manifold=overlay(services,'0 0 727 257',[
    'M254 0 L254 34 Q254 68 290 68 L647 68',
    'M324 68 L324 117','M486 68 L486 117','M632 68 L632 117'
   ],'ch-manifold-flow')
   const pipes=[...manifold.querySelectorAll('path')]
   pipes.forEach(path=>{const length=path.getTotalLength();gsap.set(path,{strokeDasharray:length,strokeDashoffset:length})})
   const flow=gsap.timeline({scrollTrigger:{trigger:services,start:'top 75%',end:'bottom 55%',scrub:.4}})
   flow.to(pipes[0],{strokeDashoffset:0,duration:1,ease:'none'})
   root.querySelectorAll('.ch-service').forEach((card,i)=>{
    flow.to(pipes[i+1],{strokeDashoffset:0,duration:.3,ease:'none'},.25+i*.35)
     .to(card,{backgroundColor:'#edf5ff',duration:.2},.55+i*.35)
   })
   return()=>manifold.remove()
  })
  return()=>{desktop.revert();svg.remove()}
 })
 let disposed=false
 const refresh=()=>{if(!disposed)ScrollTrigger.refresh()}
 document.fonts.ready.then(refresh)
 const images=[...root.querySelectorAll('img')]
 images.forEach(img=>img.addEventListener('load',refresh,{once:true}))
 return()=>{disposed=true;images.forEach(img=>img.removeEventListener('load',refresh));matches.revert()}
}
