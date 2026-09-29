export function mountPipes(main,page){
 const NS='http://www.w3.org/2000/svg'
 const svg=document.createElementNS(NS,'svg');svg.classList.add('page-pipes');svg.setAttribute('aria-hidden','true');main.prepend(svg)
 const reduced=matchMedia('(prefers-reduced-motion: reduce)')
 let trunk,bead,frame=0,resizeFrame=0,total=0
 const clamp=x=>Math.max(0,Math.min(1,x))
 function rounded(points,r=42){let d=`M${points[0][0]} ${points[0][1]}`;for(let i=1;i<points.length-1;i++){const a=points[i-1],b=points[i],c=points[i+1];const ab=Math.hypot(b[0]-a[0],b[1]-a[1]),bc=Math.hypot(c[0]-b[0],c[1]-b[1]);const v=Math.min(r,ab/2,bc/2);if(!ab||!bc)continue;const p=[b[0]+(a[0]-b[0])*v/ab,b[1]+(a[1]-b[1])*v/ab],q=[b[0]+(c[0]-b[0])*v/bc,b[1]+(c[1]-b[1])*v/bc];d+=` L${p[0]} ${p[1]} Q${b[0]} ${b[1]} ${q[0]} ${q[1]}`}return d+` L${points.at(-1).join(' ')}`}
 function layers(d,w,cls=''){return `<g class="${cls}"><path class="pipe-track pipe-shadow" d="${d}" stroke-width="${w+4}"/><path class="pipe-track" d="${d}" stroke="#566570" stroke-width="${w}"/><path class="pipe-track" d="${d}" stroke="#b2bcc2" stroke-width="${w-3}"/><path class="pipe-track" d="${d}" stroke="#e8edf0" stroke-width="${w*.73}"/><path class="pipe-track" d="${d}" stroke="#fafcfd" stroke-width="${w*.35}"/><path class="pipe-track" d="${d}" stroke="#d7e0e5" stroke-width="${w*.13}"/></g>`}
 function flange(x,y,w){return `<g transform="translate(${x} ${y})"><rect x="-9" y="${-w*.7}" width="18" height="${w*1.4}" rx="3" fill="url(#fitting)" stroke="#63717c"/><path d="M-5 ${-w*.65}V${w*.65}M5 ${-w*.65}V${w*.65}" stroke="#eaf0f4" stroke-width="2"/>${[-.5,.5].map(k=>`<circle cx="0" cy="${w*k}" r="3.5" fill="#56616b" stroke="#e1e7eb"/>`).join('')}</g>`}
 function valve(x,y,size){return `<g transform="translate(${x} ${y})"><rect x="-15" y="-27" width="30" height="54" rx="7" fill="#0059ab" stroke="#093662" stroke-width="3"/><g class="valve-wheel" style="transform-origin:0px 0px"><circle r="${size}" fill="#ffffff" fill-opacity=".08" stroke="#003c73" stroke-width="9"/><circle r="${size-2}" fill="none" stroke="#1684da" stroke-width="4"/>${[0,60,120].map(a=>`<path d="M${-size} 0H${size}" transform="rotate(${a})" stroke="#086cb7" stroke-width="5"/>`).join('')}<circle r="9" fill="#136aa9" stroke="#083b65" stroke-width="3"/></g></g>`}
 function build(){
  const width=main.clientWidth,height=main.scrollHeight,mobile=width<761,w=mobile?15:36,edge=mobile?12:34
  svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.setAttribute('width',width);svg.setAttribute('height',height)
  const origin=main.getBoundingClientRect().top
  const sections=[...main.querySelectorAll('.section')].filter(s=>!s.hidden&&s.offsetHeight>0)
  if(!sections.length)return
  const first=sections[0].getBoundingClientRect(),start=first.bottom-origin-(mobile?35:65)
  const points=[[-40,start],[width-edge,start]],turns=[],segments=[];let side=width-edge,lastY=start
  const seed=[...page].reduce((n,c)=>n+c.charCodeAt(0),0)
  sections.slice(1).forEach((s,i)=>{const r=s.getBoundingClientRect(),y=r.bottom-origin-(mobile?30:55);const lane=[.08,.86,.28,.94,.12,.72,.06,.9][(i+seed)%8];const next=mobile?(i%2?edge:width-edge):width*lane;segments.push({x:side,from:lastY,to:y});points.push([side,y]);if(next!==side){points.push([next,y]);turns.push([width*(i%2?.3:.73),y])}side=next;lastY=y})
  points.push([side,height-10]);const d=rounded(points,mobile?25:48)
  let branches='';main.querySelectorAll('[data-port]').forEach(el=>{if(el.closest('[hidden]'))return;const b=el.getBoundingClientRect();if(!b.width||b.width>width*.87)return;const y=b.bottom-origin-Math.min(40,b.height*.15);const segment=segments.find(s=>y>=s.from&&y<=s.to);if(!segment)return;const from=segment.x;const x=from<width/2?b.left-main.getBoundingClientRect().left:b.right-main.getBoundingClientRect().left;if(Math.abs(from-x)>width*.5)return;branches+=layers(`M${from} ${y}H${x}`,mobile?10:20)+flange(x,y,mobile?10:22)})
  main.querySelectorAll('.category-grid').forEach(grid=>{const b=grid.getBoundingClientRect(),y=b.top-origin+5;const segment=segments.find(s=>y>=s.from&&y<=s.to);if(!segment)return;const ports=[...grid.children].map(el=>{const r=el.getBoundingClientRect();return{x:r.left-main.getBoundingClientRect().left+r.width/2,y:r.top-origin}});const xs=ports.map(p=>p.x);branches+=layers(`M${segment.x} ${y}H${segment.x<width/2?Math.max(...xs):Math.min(...xs)}`,mobile?12:23);ports.forEach(p=>{branches+=layers(`M${p.x} ${y}V${p.y}`,mobile?12:23)})})
  svg.innerHTML=`<defs><linearGradient id="fitting" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#455966"/><stop offset=".25" stop-color="#eff5f7"/><stop offset=".5" stop-color="#a4b1b8"/><stop offset=".73" stop-color="#ecf1f4"/><stop offset="1" stop-color="#4b5e68"/></linearGradient></defs>${layers(d,w,'main-pipe')}${branches}${turns.map(([x,y])=>flange(x,y,w)).join('')}${valve(width*.67,start,mobile?21:38)}${!mobile&&turns.length>2?valve(turns.at(-1)[0],turns.at(-1)[1],34):''}<path id="flow-route" d="${d}" fill="none" stroke="none"/><circle class="flow-bead" r="${mobile?3:5}"/>`
  trunk=svg.querySelector('#flow-route');bead=svg.querySelector('.flow-bead');total=trunk.getTotalLength();update()
 }
 function update(){frame=0;const r=main.getBoundingClientRect(),progress=clamp((window.innerHeight*.65-r.top)/Math.max(1,main.scrollHeight));if(trunk&&bead){const point=trunk.getPointAtLength(total*progress);bead.setAttribute('cx',point.x);bead.setAttribute('cy',point.y)}svg.querySelectorAll('.valve-wheel').forEach(v=>v.style.transform=`rotate(${reduced.matches?0:progress*160}deg)`);const recovery=main.querySelector('.recovery-scene');if(recovery){const rr=recovery.getBoundingClientRect();const p=reduced.matches?1:clamp((150-rr.top)/(Math.max(1,rr.height-window.innerHeight)));recovery.style.setProperty('--recovery',String(p))}const control=main.querySelector('.control-scene');if(control){const cr=control.getBoundingClientRect();control.style.setProperty('--signal-opacity',cr.top<window.innerHeight*.7&&cr.bottom>200?'1':'0')}}
 const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update)}
 const onResize=()=>{cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(build)}
 window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onResize);reduced.addEventListener('change',onResize)
 new ResizeObserver(onResize).observe(main)
 main.querySelectorAll('img').forEach(image=>image.addEventListener('load',onResize,{once:true}))
 document.fonts.ready.then(build);build()
}
