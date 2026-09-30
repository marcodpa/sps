# Mapa de la web activa

Complemento manual al grafo AST, revisado el 2026-09-30. CSS e imágenes no fueron extraídos por Graphify. El grafo contiene también funciones anteriores todavía presentes en app.js: no confundirlas con las composiciones activas de gallery.js.

| Elemento | Implementación activa | Estilo / recurso |
|---|---|---|
| Despacho, navegación y formulario | src/experience/app.js | style.css; gallery.css se importa después |
| Inicio: portada | gallery.js, home() → hero() de app.js | .home-hero; public/assets/experience/hero-faithful.png |
| Inicio: Quiénes somos | gallery.js, history() | .gallery-history, .gallery-history-photo; public/assets/experience/history-faithful.png |
| Inicio: servicios | gallery.js, categories() | .gallery-categories, .category-home, .gallery-cards |
| Inicio: equipos | gallery.js, equipment() | .gallery-equipment; public/assets/experience/equipment-world.png |
| Inicio: automatización | app.js, control(), utilizado desde gallery.js | .control; sensor-assembly.png y console-process.png |
| Inicio: trabajos, áreas y cierre | gallery.js, work(), areas(), close() | .gallery-work, .gallery-areas, .gallery-close |
| Nosotros | gallery.js, about() | .about-gallery-hero, .gallery-company, .gallery-fleet |
| Servicios y detalle | gallery.js, catalogue(), serviceDetail() | .gallery-service-chapter, .gallery-service-function |
| Proyectos y detalle | gallery.js, portfolio(), projectDetail() | .portfolio-heading, .gallery-project-row, .gallery-operation |
| Artículos y detalle | gallery.js, editorial(), articleDetail() | .gallery-article-row, .gallery-reading, .article-process |
| Contacto | app.js, contact() | .contact-form, .contact-methods, .location |
| Geometría, uniones, ramales y animación | src/experience/network.js, mountNetwork(), roundedRoute() | raster steel-straight.png, steel-ring.png, steel-flange.png, valve.png |
| Datos y fotos documentales | src/experience/content.js y catalogue.js | public/assets/experience/field/ |

## Autoridad visual

General: nueve imágenes en design-proposals/web-completa-conectada/.
Excepción específica confirmada por el usuario: fondo de Quiénes somos en Inicio usa design-proposals/secciones-2026-09-29/inicio/02-quienes-somos.png.

## Consulta concreta

Para cambiar el fondo de Quiénes somos, editar history() en gallery.js y .gallery-history-photo en gallery.css; la ruta metálica se controla con la rama gallery-history de network.js. No editar la antigua history() de app.js.

Corrección de conexiones (2026-09-30): work() sale por la derecha; areas() devuelve el recorrido a la izquierda. La rama terminal de mountNetwork() termina bajo phone-card cuando es la última sección y conserva la continuación cuando hay otra sección después. gallery.css reserva 180px bajo trabajos y 190px bajo el cierre en escritorio. Capturas: .impeccable/review/pipe-fix-*.png. Build y seis comprobaciones funcionales correctos.

Quiénes somos dispone de rutas propias de escritorio en aboutLayout dentro de network.js: arco de portada, cambio de altura bajo empresa, colector de tres tarjetas, paso lateral de equipos, salida bajo presencia, ramales de proyectos y válvula vertical junto a contacto. Diámetro 2.5vw limitado a 28–48px. Móvil conserva geometría adaptada.
