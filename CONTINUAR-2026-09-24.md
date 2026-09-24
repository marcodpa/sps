# SPS · Trabajo del 24 de septiembre de 2026

Rama: `codex/2026-09-24`.

## Continuar desde otro equipo

```sh
git clone --branch codex/2026-09-24 https://github.com/marcodpa/sps.git
cd sps
npm ci
npm run dev -- --port 5175
```

Abrir http://localhost:5175/design-proposals/completa/galeria.html

Si ya tienes el repositorio, usa `git fetch origin` y `git switch codex/2026-09-24` (conserva tus cambios locales antes de cambiar de rama).

## Estado actual

- Propuesta vigente: `design-proposals/completa/`, cinco páginas y 28 secciones.
- Vista interactiva: `design-proposals/completa/index.html`.
- Imágenes individuales: `design-proposals/completa/capturas/`.
- Último ajuste solicitado: Nosotros / La empresa muestra 1990 con fotografía dentro de los números y una franja fotográfica continua abajo, siguiendo la referencia del usuario.
- Dirección: clara y elegante, azul y blanco, fotografías del proyecto, efectos sutiles en el fondo y más texto explicativo.
- Propuestas anteriores se conservan como historial; no son la versión vigente.
- El rediseño sigue como propuesta independiente. La aplicación React original aún no ha sido sustituida. El formulario de la propuesta descarga un resumen local y no envía datos.
- Se incluyen las imágenes y fondos añadidos al espacio de trabajo.

Consulta `PRODUCT.md`, `design-proposals/completa/CONTENIDO.md` y `design-proposals/completa/DESIGN.md` para contenido y decisiones.
