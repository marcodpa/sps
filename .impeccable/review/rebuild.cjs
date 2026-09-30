const fs=require('fs');
const root='src/experience/';
let s=fs.readFileSync(root+'network.js','utf8');
let start=s.indexOf('    function pipe('),end=s.indexOf('    const trunk=',start);
s=s.slice(0,start)+`    // Photographic steel stays raster; SVG owns only the route and clipping.
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
        return '<image href="/assets/experience/steel-ring.png" x="'+(piece.center[0]-half)+'" y="'+(piece.center[1]-half)+'" width="'+half*2+'" height="'+half*2+'" mask="url(#'+id+')"/>';
      }).join('');
      return '<g><path class="pipe-shadow" d="'+route.d+'" stroke-width="'+(diameter+5)+'"/><path d="'+route.d+'" stroke="#b1b0aa" stroke-width="'+diameter+'"/>'+shapes+'</g>';
    }
`+s.slice(end);
start=s.indexOf('    const flange='),end=s.indexOf('    const valve=',start);
s=s.slice(0,start)+`    const flange=f=>'<g transform="translate('+f.x+' '+f.y+') rotate('+(f.vertical?90:0)+')"><svg x="'+(-f.w*.49)+'" y="'+(-f.w*.92)+'" width="'+f.w*.98+'" height="'+f.w*1.84+'" viewBox="300 50 690 1160" preserveAspectRatio="none"><image href="/assets/experience/steel-flange.png" width="1254" height="1254"/></svg></g>';
`+s.slice(end);
fs.writeFileSync(root+'network.js',s);
s=fs.readFileSync(root+'app.js','utf8').replaceAll('/assets/experience/hero.png','/assets/experience/hero-faithful.png').replace('<span>Desde</span>','').replace('/assets/experience/transmitter-cutout.png','/assets/experience/sensor-assembly.png');
s=s.replace("${image(art('control-console'),'Ilustración de gabinete PLC y monitor de supervisión')}","${image('/assets/experience/console-process.png','Ilustración de gabinete PLC y monitor de supervisión')}");
start=s.indexOf('<div class="scada-screen">');end=s.indexOf('<div class="console-labels">',start);s=s.slice(0,start)+s.slice(end);
s=s.replace('Vapor, recuperación de crudo y automatización para las necesidades del trabajo en campo.','Vapor, recuperación de crudo y automatización para una operación más segura y eficiente.');
fs.writeFileSync(root+'app.js',s);
