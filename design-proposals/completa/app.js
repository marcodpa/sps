import {pages,explorerHtml} from './views.js'
import {mountIndustrialScene} from './industrial.js'
import {composeHome,mountServiceJourney} from './home.js'
import './industrial.css'
import './editorial.css'
const params=new URLSearchParams(location.search)
const anchor=(page,index=0)=>index?`${page}-${index+1}`:page
const page=pages.find(item=>item.id===(params.get('pagina')||location.pathname.split('/').filter(Boolean).at(-1)))||pages[0]
const content=document.getElementById('content')
document.body.classList.add('scroll-site')
document.title=`SPS · ${page.name}`
document.getElementById('main-nav').innerHTML=pages.map(item=>`<a href="?pagina=${item.id}" ${item.id===page.id?'aria-current="page"':''}>${item.name}</a>`).join('')
content.innerHTML=page.sections.map((section,index)=>section.html.replace('<section ',`<section id="${anchor(page.id,index)}" data-page="${page.id}" aria-label="${section.name}" `)).join('')
if(page.id==='inicio') composeHome(content)
const skip=document.createElement('a');skip.className='skip-link';skip.href='#content';skip.textContent='Saltar al contenido';document.body.prepend(skip)
content.tabIndex=-1
const siteFooter=document.createElement('footer');siteFooter.className='site-footer';siteFooter.innerHTML=`<span>Service Petroleum and Supply C.A.<br>San Francisco, Zulia · Venezuela</span><nav aria-label="Navegación al pie">${pages.map(item=>`<a href="?pagina=${item.id}">${item.name}</a>`).join('')}</nav><a href="#content">Volver arriba ↑</a>`;content.after(siteFooter)
document.querySelector('.review-nav')?.remove()
// Each repeated component operates only on its own section.
content.querySelectorAll('[id="service-explorer"]').forEach(explorer=>explorer.removeAttribute('id'))
content.querySelectorAll('[id="evidence-image"]').forEach(image=>image.removeAttribute('id'))
content.querySelectorAll('h1').forEach((heading,index)=>{if(!index)return;const h2=document.createElement('h2');h2.className='section-title';h2.innerHTML=heading.innerHTML;heading.replaceWith(h2)})
function convertLinks(root){root.querySelectorAll('a[href^="?pagina="]').forEach(link=>{const query=new URLSearchParams(link.getAttribute('href'));const destination=query.get('pagina');const section=Number(query.get('seccion'))||0;link.href=destination===page.id?'#'+anchor(destination,section):'?pagina='+destination+(section?'#'+anchor(destination,section):'')})}
convertLinks(content)
content.querySelectorAll('.service-explorer').forEach(explorer=>{
 const render=active=>{explorer.innerHTML=explorerHtml(active);convertLinks(explorer);explorer.querySelectorAll('[role="tab"]').forEach(tab=>tab.tabIndex=tab.getAttribute('aria-selected')==='true'?0:-1)}
 render(1)
 explorer.addEventListener('click',event=>{const button=event.target.closest('[data-category]');if(!button)return;const active=Number(button.dataset.category);render(active);explorer.querySelector(`[data-category="${active}"]`).focus({preventScroll:true})})
 explorer.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key))return;const button=event.target.closest('[data-category]');if(!button)return;event.preventDefault();const current=Number(button.dataset.category);const next=event.key==='Home'?0:event.key==='End'?2:(current+(['ArrowLeft','ArrowUp'].includes(event.key)?2:1))%3;render(next);explorer.querySelector(`[data-category="${next}"]`).focus({preventScroll:true})})
})
content.querySelectorAll('.evidence').forEach(evidence=>evidence.addEventListener('click',event=>{const button=event.target.closest('[data-evidence]');if(!button)return;const image=evidence.querySelector('img');image.src='/assets/sps-field/'+button.dataset.evidence;image.alt=button.dataset.caption;evidence.querySelectorAll('[data-evidence]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)))}))
content.querySelectorAll('img').forEach(image=>{image.loading='eager';image.decoding='async'})
// Old gallery links still open the requested section within its own page.
if(params.has('seccion')){const target=document.getElementById(anchor(page.id,Number(params.get('seccion'))||0));if(target){history.replaceState(null,'','?pagina='+page.id+'#'+target.id);document.fonts.ready.then(()=>requestAnimationFrame(()=>target.scrollIntoView({behavior:'instant'})))}}
else if(location.hash){document.fonts.ready.then(()=>requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView({behavior:'instant'})))}
document.getElementById('request-form')?.addEventListener('submit',event=>{event.preventDefault();const values=new FormData(event.currentTarget);const body='Solicitud de servicio · SPS\n\n'+[...values].map(([key,value])=>key+': '+value).join('\n');const blob=new Blob([body],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='solicitud-sps.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.getElementById('form-status').textContent='Resumen descargado. Aún no se ha enviado a SPS.'})
mountServiceJourney(content)
mountIndustrialScene(content)
