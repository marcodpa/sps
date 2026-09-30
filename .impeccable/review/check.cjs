const {chromium}=require('C:/Users/home/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage({viewport:{width:1672,height:941},reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(String(e)));
 const origin='http://127.0.0.1:5175';
 const settle=async()=>{await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].filter(i=>i.getAttribute('src')).map(async i=>{i.loading='eager';try{await i.decode()}catch{}}));await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))});await page.waitForTimeout(150)};
 await page.goto(origin);await page.evaluate(()=>document.fonts.ready);await page.waitForSelector('[data-network-ready="true"]');
 await settle();await page.screenshot({path:'.impeccable/review/desktop.png'});
 await page.locator('.history').screenshot({path:'.impeccable/review/history.png'});
 await page.locator('.categories').screenshot({path:'.impeccable/review/categories.png'});
 await page.locator('.control').screenshot({path:'.impeccable/review/control.png'});
 const routes=await page.evaluate(async()=>{const {services,projects,articles}=await import('/src/experience/content.js');return ['inicio','nosotros','servicios','proyectos','articulos','contacto'].map(p=>'/?pagina='+p).concat(services.map(s=>'/?pagina=servicio&id='+s.id),projects.map(s=>'/?pagina=proyecto&id='+s.id),articles.map(s=>'/?pagina=articulo&id='+s.id))});
 const results=[];
 for(const width of [1440,390]){
  await page.setViewportSize({width,height:900});
  for(const route of routes){
   await page.goto(origin+route);await page.evaluate(()=>document.fonts.ready);await page.waitForSelector('[data-network-ready="true"]');
   const r=await page.evaluate(()=>{const s=window.__spsNetwork.sections;return {title:document.title,sections:s.length,overflow:document.documentElement.scrollWidth>innerWidth+1,joints:s.slice(1).map((n,i)=>Math.hypot(n.entry[0]-s[i].exit[0],n.entry[1]-s[i].exit[1])),broken:[...document.images].filter(i=>i.getAttribute('src')&&i.complete&&!i.naturalWidth).map(i=>i.src),h1:document.querySelectorAll('h1').length}});
   results.push({width,route,...r});
  }
 }
 for(const route of ['inicio','nosotros','servicios','proyectos','articulos','contacto']){
  await page.setViewportSize({width:1440,height:900});await page.goto(origin+'/?pagina='+route);await settle();await page.screenshot({path:'.impeccable/review/'+route+'-desktop.png'});
 }
 for(const [name,route] of [['service','servicio&id=calderas-portatiles'],['project','proyecto&id=bajo-grande'],['article','articulo&id=instrumento-scada']]){await page.goto(origin+'/?pagina='+route);await settle();await page.screenshot({path:'.impeccable/review/'+name+'-desktop.png'})}
 await page.setViewportSize({width:390,height:844});await page.goto(origin);await settle();await page.screenshot({path:'.impeccable/review/mobile.png'});
 await page.locator('.categories').screenshot({path:'.impeccable/review/categories-mobile.png'});
 await page.goto(origin+'/?pagina=contacto');await settle();await page.locator('#request-form').screenshot({path:'.impeccable/review/contact-mobile.png'});
 fs.writeFileSync('.impeccable/review/results.json',JSON.stringify({errors,results},null,2));
 console.log(JSON.stringify({routes:routes.length,checks:results.length,errors,failures:results.filter(r=>r.overflow||r.broken.length||r.h1!==1||r.joints.some(n=>n>.5))},null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
