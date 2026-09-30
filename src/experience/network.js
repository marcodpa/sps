import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const NS='http://www.w3.org/2000/svg'
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v))
const stops='<stop stop-color="#35434b"/><stop offset=".09" stop-color="#74838b"/><stop offset=".24" stop-color="#d6dfe2"/><stop offset=".34" stop-color="#fcfdfd"/><stop offset=".41" stop-color="#c4cfd4"/><stop offset=".55" stop-color="#899ba5"/><stop offset=".72" stop-color="#d5dfe3"/><stop offset=".83" stop-color="#b4c1c6"/><stop offset=".96" stop-color="#4f626d"/><stop offset="1" stop-color="#2c414c"/>'

// Convert an orthogonal network into tangent circular elbows. Adjacent pieces
// share the same endpoint; page boundaries never contain separate pipe assets.
export function roundedRoute(points,radius=48){
  const distinct=points.filter((p,i)=>i===0||p[0]!==points[i-1][0]||p[1]!==points[i-1][1])
  const clean=distinct.filter((p,i)=>!i||i===distinct.length-1||Math.abs((p[0]-distinct[i-1][0])*(distinct[i+1][1]-p[1])-(p[1]-distinct[i-1][1])*(distinct[i+1][0]-p[0]))>.1)
  if(clean.length<2)return {d:'',pieces:[]}
  const pieces=[];let cursor=clean[0],d=`M${cursor.join(' ')}`
  function line(to){if(Math.hypot(to[0]-cursor[0],to[1]-cursor[1])>.1){pieces.push({type:'line',from:cursor,to,d:`M${cursor.join(' ')}L${to.join(' ')}`});d+=`L${to.join(' ')}`}cursor=to}
  for(let i=1;i<clean.length-1;i++){
    const a=clean[i-1],b=clean[i],c=clean[i+1],ab=Math.hypot(b[0]-a[0],b[1]-a[1]),bc=Math.hypot(c[0]-b[0],c[1]-b[1])
    const cross=(b[0]-a[0])*(c[1]-b[1])-(b[1]-a[1])*(c[0]-b[0])
    if(Math.abs(cross)<.1){line(b);continue}
    const r=Math.min(radius,ab/2,bc/2),p=[b[0]+(a[0]-b[0])*r/ab,b[1]+(a[1]-b[1])*r/ab],q=[b[0]+(c[0]-b[0])*r/bc,b[1]+(c[1]-b[1])*r/bc],center=[p[0]+q[0]-b[0],p[1]+q[1]-b[1]],sweep=cross>0?1:0
    line(p);const arc=`A${r} ${r} 0 0 ${sweep} ${q.join(' ')}`;pieces.push({type:'arc',from:p,to:q,center,r,d:`M${p.join(' ')}${arc}`});d+=arc;cursor=q
  }
  line(clean.at(-1));return {d,pieces}
}

export function mountNetwork(main,page){
  const svg=document.createElementNS(NS,'svg');svg.classList.add('network');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');main.prepend(svg)
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');let scheduled=0,trigger,measurements=[],lastSize='',buildCount=0
  function build(){
    scheduled=0;trigger?.kill();const width=main.clientWidth,origin=main.getBoundingClientRect(),mobile=width<=760,w=mobile?18:page==='nosotros'?clamp(width*.025,28,48):clamp(width*.048,40,80),rail=mobile?17:width*.045
    const sections=[...main.querySelectorAll('.scene')].filter(s=>!s.hidden&&!s.closest('[hidden]'))
    if(!sections.length)return
    const rect=el=>{const b=el.getBoundingClientRect();return{x:b.left-origin.left,y:b.top-origin.top,width:b.width,height:b.height,bottom:b.bottom-origin.top}}
    main.querySelectorAll('.control-system').forEach(system=>{const consoleEl=system.querySelector('.console'),sensor=system.querySelector('.transmitter img'),screen=consoleEl?.querySelector('img');if(consoleEl&&sensor&&screen){consoleEl.style.transform='none';if(!mobile){const a=rect(sensor),b=rect(screen);consoleEl.style.transform=`translateY(${a.y+a.height*.455-b.y-b.height*.458}px)`}}});
    const rows=sections.map(s=>({el:s,...rect(s)}));const height=main.offsetHeight;svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.setAttribute('width',width);svg.setAttribute('height',height)
    const lane=value=>value<.13?rail:value>.87?width-rail:width*value
    let exit=mobile?width-rail:lane(Number(rows[0].el.dataset.exit||.93)),points=[[-w,rows[0].bottom-(mobile?55:110)],[exit,rows[0].bottom-(mobile?55:110)],[exit,rows[0].bottom]],branches=[],flanges=[],valves=[],signals=[]
    const aboutLayout=page==='nosotros'&&!mobile
    if(aboutLayout){const base=rows[0].bottom-90,lift=Math.min(110,width*.065);points=[[-w,base],[width*.37,base],[width*.37,base-lift],[width*.49,base-lift],[width*.49,base],[exit,base],[exit,rows[0].bottom]]}
    measurements=[]
    rows.forEach((s,i)=>{
      const boundaryEntry=exit;let next=mobile?(i%2?rail:width-rail):lane(Number(s.el.dataset.exit|| (i%2?.07:.93)))
      if(aboutLayout&&i){next=s.el.classList.contains('gallery-company')?rail:s.el.classList.contains('category-photo')?width*.65:s.el.classList.contains('gallery-fleet')?rail:s.el.classList.contains('gallery-presence')?width*.32:width-rail}
      let entry=boundaryEntry
      if(i){
        const collector=s.el.querySelector('.pipe-collector'),ports=[...s.el.querySelectorAll('[data-pipe-port]')].filter(p=>!p.closest('[hidden]'))
        const y=s.bottom-(mobile?48:65)
        if(aboutLayout){
          const cls=s.el.classList
          if(cls.contains('gallery-company')){
            const picture=rect(s.el.querySelector('.field-photo')),upper=picture.bottom+45,lower=Math.max(upper+100,y)
            points.push([entry,upper],[width*.38,upper],[width*.38,lower],[next,lower],[next,s.bottom])
          }else if(cls.contains('category-photo')){
            const cr=rect(collector),busY=cr.y-70,right=width-rail
            points.push([entry,busY],[right,busY],[right,y],[next,y],[next,s.bottom])
            ports.forEach(port=>{const b=rect(port),x=b.x+b.width*.5;branches.push({points:[[x,busY],[x,b.y+8]],width:w*.72});flanges.push({x,y:b.y-3,w:w*.72,vertical:true})})
          }else if(cls.contains('gallery-fleet')){
            points.push([entry,s.y+24],[width-rail,s.y+24],[width-rail,y],[next,y],[next,s.bottom])
          }else if(cls.contains('gallery-presence')){
            points.push([entry,y],[next,y],[next,s.bottom])
          }else if(cls.contains('gallery-work')){
            points.push([entry,y],[next,y],[next,s.bottom])
            ports.forEach(port=>{const b=rect(port),x=b.x+b.width*.5;branches.push({points:[[x,y],[x,b.bottom+8]],width:w*.7});flanges.push({x,y:b.bottom+6,w:w*.7,vertical:true})})
          }else if(cls.contains('gallery-close')){
            const card=rect(s.el.querySelector('.phone-card')),side=card.x-110,top=s.y+30
            points.push([entry,top],[side,top],[side,y],[width+w,y])
            branches.push({points:[[card.x+card.width*.5,y],[card.x+card.width*.5,card.bottom+5]],width:w*.75})
            valves.push({x:side,y:card.y+card.height*.5,size:w*.7,rotate:90})
          }
        }else if(s.el.dataset.network==='control'){

          const sensor=rect(s.el.querySelector('.transmitter')),sx=sensor.x+sensor.width*.49
          if(mobile)points.push([entry,sensor.y-35],[sx,sensor.y-35],[sx,sensor.bottom+30],[next,sensor.bottom+30],[next,s.bottom])
          else points.push([entry,s.y+110],[sx,s.y+110],[sx,y],[next,y],[next,s.bottom])
        }else if(s.el.classList.contains('gallery-history')&&!mobile){
          const bendY=s.y+s.height*.60;
          // Align the drop with the next section: a short lateral offset cannot
          // accommodate two full-diameter elbows and their fittings.
          points.push([entry,bendY],[next,bendY],[next,s.bottom]);
        }else if(s.el.dataset.network==='terminal'&&!mobile){
          const card=rect(s.el.querySelector('.phone-card')),tx=card.x+card.width*.5,ty=s.bottom-65
          // Finish at the contact port, with one spacious bend below the card.
          if(i===rows.length-1)points.push([entry,ty],[tx,ty],[tx,card.bottom+4])
          else{points.push([entry,ty],[next,ty],[next,s.bottom]);branches.push({points:[[tx,ty],[tx,card.bottom+4]],width:w})}
          flanges.push({x:tx,y:card.bottom+12,w,vertical:true})
        }else if(collector&&!mobile&&(s.el.classList.contains('category-strip')||s.el.classList.contains('contact-methods'))){
          points.push([entry,y],[next,y],[next,s.bottom]);
        }else if(collector&&!mobile){
          const cr=rect(collector),busY=cr.y-75,isSideCollector=s.el.classList.contains('categories')||s.el.classList.contains('category-home'),other=entry>width/2?(isSideCollector?width*.375:rail):width-rail
          points.push([entry,busY],[other,busY],[other,y],[next,y],[next,s.bottom])
          ports.forEach(p=>{const b=rect(p),x=b.x+b.width/2;branches.push({points:[[x,busY],[x,b.y+20]],width:w*.55});flanges.push({x,y:b.y+3,w:w*.55,vertical:true})})
          valves.push({x:entry>width/2?width*.53:width*.72,y:busY,size:mobile?16:27})
        }else{
          if(!mobile&&entry>width*.13&&entry<width*.87){const side=entry>width/2?width-rail:rail;points.push([entry,s.y+42],[side,s.y+42]);entry=side}
          points.push([entry,y],[next,y],[next,s.bottom])
          ports.forEach((p,n)=>{const b=rect(p);if(b.width>width*.9)return
            if(mobile){const py=b.y+b.height*.55,portX=entry<width/2?b.x:b.x+b.width;branches.push({points:[[entry,py],[portX,py]],width:w*.55});flanges.push({x:portX,y:py,w:w*.55,vertical:false})}
            else{const x=b.x+b.width*.5,fromX=clamp(x,Math.min(entry,next),Math.max(entry,next));if(Math.abs(next-entry)>w){branches.push({points:[[fromX,y],[fromX,b.bottom+4]],width:w*.6});flanges.push({x:fromX,y:b.bottom+15,w:w*.6,vertical:true})}else{const px=b.x+b.width*.5;branches.push({points:[[entry,y],[px,y],[px,b.bottom+4]],width:w*.6})}}
          })
          if(Math.abs(entry-next)>width*.3){const lo=Math.min(entry,next),span=Math.abs(entry-next);flanges.push({x:lo+span*.27,y,w,vertical:false},{x:lo+span*.72,y,w,vertical:false});}
        }
      }else{flanges.push({x:width*.11,y:points[0][1],w,vertical:false},{x:width*.73,y:points[0][1],w,vertical:false});if(!aboutLayout)valves.push({x:width*.35,y:points[0][1],size:mobile?20:49})}
      measurements.push({section:s.el.className,entry:[i?boundaryEntry:points[0][0],s.y],exit:[next,s.bottom]});exit=next
      if(i<rows.length-1)flanges.push({x:exit,y:s.bottom,w,vertical:true})
      const sensor=s.el.querySelector('.transmitter img'),consoleEl=s.el.querySelector('.console>img');if(sensor&&consoleEl){const a=rect(sensor),b=rect(consoleEl);signals.push(mobile?[[a.x+a.width,a.y+a.height*.455],[a.x+a.width+12,a.y+a.height*.455],[a.x+a.width+12,b.y-20],[b.x-8,b.y-20],[b.x-8,b.y+b.height*.458],[b.x+2,b.y+b.height*.458]]:[[a.x+a.width,a.y+a.height*.455],[b.x+2,b.y+b.height*.458]])}
    })
    const route=roundedRoute(points,mobile?32:w*1.72);let defs='',serial=0
    // Photographic steel stays raster; SVG owns only the route and clipping.
    function pipe(route,diameter){
      const shapes=route.pieces.map(piece=>{
        const id='metal-'+serial++;
        if(piece.type==='line'){
          const horizontal=Math.abs(piece.to[0]-piece.from[0])>Math.abs(piece.to[1]-piece.from[1]);
          const length=Math.hypot(piece.to[0]-piece.from[0],piece.to[1]-piece.from[1]);
          const x=Math.min(piece.from[0],piece.to[0]),y=Math.min(piece.from[1],piece.to[1]);
          const transform=horizontal?'translate('+x+' '+(y-diameter/2)+')':'translate('+(x+diameter/2)+' '+y+') rotate(90)';
          return '<g transform="'+transform+'"><svg width="'+(length+.6)+'" height="'+diameter+'" viewBox="0 209 2172 302" preserveAspectRatio="none"><image href="/assets/experience/steel-straight.png" width="2172" height="724"/></svg></g>';
        }
        // A clipped quadrant of the photographed ring supplies the elbow.
        const half=(piece.r+diameter/2)*1.068;
        defs+='<mask id="'+id+'" maskUnits="userSpaceOnUse" x="'+(piece.center[0]-half)+'" y="'+(piece.center[1]-half)+'" width="'+half*2+'" height="'+half*2+'"><path d="'+piece.d+'" fill="none" stroke="white" stroke-width="'+(diameter+.5)+'"/></mask>';
        const innerHalf=Math.max(1,piece.r-diameter/2)*1.97;
        return [innerHalf,(innerHalf+half)/2,half].map(h=>'<image href="/assets/experience/steel-ring.png" x="'+(piece.center[0]-h)+'" y="'+(piece.center[1]-h)+'" width="'+h*2+'" height="'+h*2+'" mask="url(#'+id+')"/>').join('');
      }).join('');
      return '<g><path class="pipe-shadow" d="'+route.d+'" stroke-width="'+(diameter+5)+'"/><path d="'+route.d+'" stroke="#b1b0aa" stroke-width="'+diameter+'"/>'+shapes+'</g>';
    }
    const trunk=pipe(route,w),branchMarkup=branches.map(b=>pipe(roundedRoute(b.points,30),b.width)).join('')
    route.pieces.filter(p=>p.type==='arc').forEach(p=>{[p.from,p.to].forEach(point=>{flanges.push({x:point[0],y:point[1],w:w*.86,vertical:Math.abs(point[0]-p.center[0])>Math.abs(point[1]-p.center[1])})})});
    defs+=`<linearGradient id="flange-steel" x1="0" y1="0" x2="0" y2="1">${stops}</linearGradient><linearGradient id="valve-blue" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#42a8f9"/><stop offset=".35" stop-color="#066cbf"/><stop offset=".75" stop-color="#004886"/><stop offset="1" stop-color="#2b8edb"/></linearGradient>`
    const flange=f=>'<g transform="translate('+f.x+' '+f.y+') rotate('+(f.vertical?90:0)+')"><svg x="'+(-f.w*.49)+'" y="'+(-f.w*.92)+'" width="'+f.w*.98+'" height="'+f.w*1.84+'" viewBox="300 50 690 1160" preserveAspectRatio="none"><image href="/assets/experience/steel-flange.png" width="1254" height="1254"/></svg></g>';
    const valve=v=>{const vw=v.size*7.2,vh=vw*2/3;return `<g transform="rotate(${v.rotate||0} ${v.x} ${v.y})"><image href="/assets/experience/valve.png" x="${v.x-vw/2}" y="${v.y-vh*.70}" width="${vw}" height="${vh}"/></g>`}
    svg.innerHTML=`<defs>${defs}</defs>${trunk}${branchMarkup}${flanges.filter((f,i)=>!flanges.slice(0,i).some(g=>g.vertical===f.vertical&&Math.hypot(g.x-f.x,g.y-f.y)<Math.min(g.w,f.w)*1.1)).map(flange).join('')}${valves.map(valve).join('')}<path class="flow" d="${route.d}"/>${signals.map(p=>{const d=roundedRoute(p,24).d;return `<path class="signal-path" d="${d}"/><path class="signal-light" d="${d}" stroke-dasharray="12 90"/>`}).join('')}`
    const flow=svg.querySelector('.flow'),length=flow.getTotalLength();flow.style.strokeDasharray=`${mobile?40:80} ${length}`;flow.style.strokeDashoffset='0'
    if(!reduced.matches){trigger=ScrollTrigger.create({trigger:main,start:'top center',end:'bottom bottom',onUpdate:self=>{flow.style.strokeDashoffset=String(-self.progress*length);svg.querySelectorAll('.signal-light').forEach(p=>p.style.strokeDashoffset=String(-self.progress*800));main.style.setProperty('--journey',String(self.progress))}})}
    main.dataset.networkReady='true';buildCount++;svg.dataset.joints=String(Math.max(0,rows.length-1));svg.dataset.routeCount='1';lastSize=`${width}:${height}`
  }
  function rebuild(){if(!scheduled)scheduled=requestAnimationFrame(build)}
  const observer=new ResizeObserver(()=>{if(lastSize!==`${main.clientWidth}:${main.offsetHeight}`)rebuild()});observer.observe(main)
  window.addEventListener('resize',rebuild,{passive:true});reduced.addEventListener('change',rebuild)
  document.fonts.ready.then(rebuild);main.querySelectorAll('img').forEach(img=>{if(!img.complete)img.addEventListener('load',rebuild,{once:true})});build()
  // Exposes geometry, rather than pixel guesses, for route continuity checks.
  window.__spsNetwork={get sections(){return measurements},get builds(){return buildCount},page}
  return {rebuild,destroy(){observer.disconnect();trigger?.kill();cancelAnimationFrame(scheduled);window.removeEventListener('resize',rebuild);reduced.removeEventListener('change',rebuild);svg.remove()}}
}
