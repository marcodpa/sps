# Graph Report - .  (2026-09-30)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 63 nodes · 240 edges · 9 communities (8 shown, 1 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c03da106`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- field
- heading
- app.js
- icon
- hero
- image
- link
- network.js
- art

## God Nodes (most connected - your core abstractions)
1. `link()` - 18 edges
2. `heading()` - 17 edges
3. `scene()` - 17 edges
4. `icon()` - 17 edges
5. `contactEnd()` - 16 edges
6. `serviceDetail()` - 15 edges
7. `field()` - 15 edges
8. `image()` - 13 edges
9. `hero()` - 13 edges
10. `projectDetail()` - 13 edges

## Surprising Connections (you probably didn't know these)
- `textLink()` --calls--> `icon()`  [EXTRACTED]
  app.js → icons.js
- `serviceList()` --calls--> `icon()`  [EXTRACTED]
  app.js → icons.js
- `projectCard()` --calls--> `icon()`  [EXTRACTED]
  app.js → icons.js
- `articleCard()` --calls--> `icon()`  [EXTRACTED]
  app.js → icons.js
- `hero()` --calls--> `icon()`  [EXTRACTED]
  app.js → icons.js

## Import Cycles
- None detected.

## Communities (9 total, 1 thin omitted)

### Community 0 - "field"
Cohesion: 0.23
Nodes (9): groups, articles, details, field(), groups, projects, services, galleryPages() (+1 more)

### Community 1 - "heading"
Cohesion: 0.47
Nodes (12): about(), areas(), catalogue(), categories(), control(), equipment(), featured(), heading() (+4 more)

### Community 2 - "app.js"
Cohesion: 0.18
Nodes (9): gallery, id, main, menu, nav, navigation, network, q (+1 more)

### Community 3 - "icon"
Cohesion: 0.90
Nodes (5): btn(), contact(), contactEnd(), serviceDetail(), icon()

### Community 4 - "hero"
Cohesion: 0.60
Nodes (5): editorial(), filters(), hero(), photo(), portfolio()

### Community 5 - "image"
Cohesion: 0.80
Nodes (5): esc(), image(), projectCard(), projectDetail(), serviceList()

### Community 6 - "link"
Cohesion: 0.83
Nodes (4): articleCard(), articleDetail(), crumb(), link()

### Community 7 - "network.js"
Cohesion: 0.83
Nodes (3): clamp(), mountNetwork(), roundedRoute()

## Knowledge Gaps
- **11 isolated node(s):** `q`, `id`, `main`, `nav`, `gallery` (+6 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `mountNetwork()` connect `network.js` to `app.js`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `icon()` connect `icon` to `field`, `heading`, `app.js`, `hero`, `image`, `link`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `field()` connect `field` to `heading`, `app.js`, `icon`, `hero`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `q`, `id`, `main` to the rest of the system?**
  _11 weakly-connected nodes found - possible documentation gaps or missing edges._