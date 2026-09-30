# SPS: localizar antes de editar

- La web activa arranca en `index.html` → `src/experience/app.js`.
- Consultar primero `graphify-out/graph.json` con `python -m graphify query "consulta" --graph graphify-out/graph.json` para relaciones de código. No usar el grafo antiguo de `src/site` para la web activa.
- Las páginas activas se componen en `src/experience/gallery.js` mediante `galleryPages()`. `app.js` conserva funciones anteriores que no son todas rutas activas: comprobar el despacho antes de editar un resultado del grafo.
- Graphify omite CSS en esta extracción. Para estilos, recursos y referencias visuales consultar `graphify-out/SURFACE_MAP.md`.
- Actualizar tras cambios estructurales: `python -m graphify extract src/experience --code-only --out . --max-workers 2` y `python -m graphify cluster-only .`.
- El grafo localiza código; no demuestra fidelidad visual. Comparar la sección modificada con la referencia aprobada.
