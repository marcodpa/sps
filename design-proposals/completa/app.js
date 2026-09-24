import {pages,explorerHtml} from './views.js'
const params=new URLSearchParams(location.search)
const page=pages.find(item=>item.id===params.get('pagina'))||pages[0]
const sectionIndex=Math.max(0,Math.min(page.sections.length-1,Number(params.get('seccion'))||0))
const current=page.sections[sectionIndex]
document.title=`SPS · ${page.name} · ${current.name}`
document.getElementById('main-nav').innerHTML=pages.map(item=>`<a href="?pagina=${item.id}" ${item.id===page.id?'aria-current="page"':''}>${item.name}</a>`).join('')
document.getElementById('content').innerHTML=current.html
document.getElementById('page-name').textContent=page.name
document.getElementById('section-name').textContent=`${sectionIndex+1} / ${page.sections.length} · ${current.name}`
const pageIndex=pages.indexOf(page)
const previous=sectionIndex?{page:page.id,section:sectionIndex-1}:{page:pages[(pageIndex+pages.length-1)%pages.length].id,section:pages[(pageIndex+pages.length-1)%pages.length].sections.length-1}
const next=sectionIndex<page.sections.length-1?{page:page.id,section:sectionIndex+1}:{page:pages[(pageIndex+1)%pages.length].id,section:0}
document.getElementById('prev').href=`?pagina=${previous.page}&seccion=${previous.section}`
document.getElementById('next').href=`?pagina=${next.page}&seccion=${next.section}`
const explorer=document.getElementById('service-explorer')
if(explorer){explorer.innerHTML=explorerHtml();explorer.addEventListener('click',event=>{const button=event.target.closest('[data-category]');if(button){const active=Number(button.dataset.category);explorer.innerHTML=explorerHtml(active);explorer.querySelector(`[data-category="${active}"]`).focus()}});explorer.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key))return;const button=event.target.closest('[data-category]');if(!button)return;event.preventDefault();const current=Number(button.dataset.category);const next=event.key==='Home'?0:event.key==='End'?2:(current+(['ArrowLeft','ArrowUp'].includes(event.key)?2:1))%3;explorer.innerHTML=explorerHtml(next);explorer.querySelector(`[data-category="${next}"]`).focus()})}
document.querySelectorAll('[data-evidence]').forEach(button=>button.addEventListener('click',()=>{const image=document.getElementById('evidence-image');image.src='/assets/sps-field/'+button.dataset.evidence;image.alt=button.dataset.caption;document.querySelectorAll('[data-evidence]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)))}))
document.getElementById('request-form')?.addEventListener('submit',event=>{event.preventDefault();const values=new FormData(event.currentTarget);const body='Solicitud de servicio · SPS\n\n'+[...values].map(([key,value])=>key+': '+value).join('\n');const blob=new Blob([body],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='solicitud-sps.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.getElementById('form-status').textContent='Resumen descargado. Aún no se ha enviado a SPS.'})
if(matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches){let queued=false;let x=70,y=30;document.addEventListener('pointermove',event=>{x=event.clientX/innerWidth*100;y=event.clientY/innerHeight*100;if(!queued){queued=true;requestAnimationFrame(()=>{document.documentElement.style.setProperty('--mx',x+'%');document.documentElement.style.setProperty('--my',y+'%');queued=false})}},{passive:true})}
