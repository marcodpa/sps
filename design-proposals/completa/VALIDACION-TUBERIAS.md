# Recorrido SPS · Implementación local

Entrada principal: `/` o `/?pagina=inicio`. También funciona la ruta histórica `design-proposals/completa/index.html`.

- Cinco páginas independientes: Inicio 7 secciones, Nosotros 5, Servicios 6, Proyectos 7 y Contacto 3.
- Fondo blanco con planos geométricos decorativos y una ruta SVG continua por página. Ya no se realiza un giro al final de cada sección.
- Inicio recompuesto: equipo ilustrado, historia fotográfica amplia, recorrido lateral de tres servicios en escritorio, equipos, portafolio, áreas y cierre.
- Móvil y movimiento reducido conservan una secuencia vertical.
- Formulario conserva descarga de resumen TXT; no envía información a un servidor ni correo.

Validación: compilación Vite y ESLint de los tres módulos modificados aprobados; cinco páginas revisadas a 1440 y 390 px sin desbordamiento horizontal. Fotografías comprobadas cargadas. Categorías y descarga del formulario probadas. Panel lateral 2/3 comprobado por interacción.

Revisión independiente: versión reconstruida considerada una mejora material apta para revisión del usuario, sin declarar fidelidad exacta al concepto. Corregidos y verificados: etiqueta de frac tanks, unión de tuberías lateral y fotografías vacías en capturas. La composición de páginas interiores sigue siendo menos específica que el concepto de equipos conectados; no equivale a aprobación visual del usuario.

No publicado ni subido al repositorio remoto en este cambio.

## Recurso ilustrado

`public/assets/sps-boiler-studio.png`: generado con herramienta integrada usando `public/assets/sps-field/bajo-grande-caldera.jpg` como referencia. Se identifica como visualización en Inicio. El portafolio mantiene fotos originales.

Prompt: Create a production website hero asset ONLY the actual SPS portable boiler equipment from supplied photograph, faithfully recognizable gray housing cylindrical boiler blue trailer chassis yellow stairs, three-quarter angle facing left, isolated on SOLID OPAQUE PURE WHITE #FFFFFF seamless studio background. Photorealistic clean industrial product presentation derived from actual machinery reference, no redesign of equipment, no text labels added, preserve small existing SPS decal if possible. Whole equipment visible with generous white margin 8% on all sides, wide landscape 3:2. Gentle gray ground shadow only under equipment. No extra foreground pipes, no landscape, no website UI or text, no blueprint, no transparency. Sharp premium metal materials. This is an illustrative hero asset, not documentary.
