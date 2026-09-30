# Graph Report - src/site  (2026-09-29)

## Corpus Check
- Corpus is ~4,804 words - fits in a single context window. You may not need a graph.

## Summary
- 61 nodes · 204 edges · 9 communities (7 shown, 2 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.52)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Comunidad 0
- Comunidad 1
- Comunidad 2
- Comunidad 3
- Comunidad 4
- Comunidad 5
- Comunidad 6
- Comunidad 7
- Comunidad 8

## God Nodes (most connected - your core abstractions)
1. `img()` - 18 edges
2. `title()` - 18 edges
3. `section()` - 17 edges
4. `link()` - 16 edges
5. `home()` - 14 edges
6. `serviceDetail()` - 14 edges
7. `cta()` - 13 edges
8. `articleDetail()` - 12 edges
9. `field()` - 12 edges
10. `art()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `services` --indirect_call--> `title()`  [INFERRED]
  content.js → app.js
- `categories()` --calls--> `art()`  [EXTRACTED]
  app.js → content.js
- `categories()` --calls--> `field()`  [EXTRACTED]
  app.js → content.js
- `manifold()` --calls--> `art()`  [EXTRACTED]
  app.js → content.js
- `equipment()` --calls--> `field()`  [EXTRACTED]
  app.js → content.js

## Import Cycles
- None detected.

## Communities (9 total, 2 thin omitted)

### Community 0 - "Comunidad 0"
Cohesion: 0.30
Nodes (15): about(), articleCard(), articleDetail(), breadcrumb(), catalogue(), categories(), esc(), img() (+7 more)

### Community 1 - "Comunidad 1"
Cohesion: 0.18
Nodes (9): dialog, id, main, menu, nav, plateCuts, q, routes (+1 more)

### Community 2 - "Comunidad 2"
Cohesion: 0.31
Nodes (7): heroScene(), articles, details, field(), groups, projects, services

### Community 3 - "Comunidad 3"
Cohesion: 0.62
Nodes (7): controls(), equipment(), recovery(), section(), serviceDetail(), steam(), art()

### Community 4 - "Comunidad 4"
Cohesion: 0.50
Nodes (5): button(), contact(), history(), home(), textLink()

### Community 5 - "Comunidad 5"
Cohesion: 0.70
Nodes (4): approvedHome(), btn(), field(), icon()

### Community 6 - "Comunidad 6"
Cohesion: 0.83
Nodes (4): cta(), editorial(), portfolio(), title()

## Knowledge Gaps
- **10 isolated node(s):** `q`, `id`, `main`, `nav`, `routes` (+5 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `approvedHome()` connect `Comunidad 5` to `Comunidad 1`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Why does `img()` connect `Comunidad 0` to `Comunidad 1`, `Comunidad 2`, `Comunidad 3`, `Comunidad 4`, `Comunidad 6`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `title()` connect `Comunidad 6` to `Comunidad 0`, `Comunidad 1`, `Comunidad 2`, `Comunidad 3`, `Comunidad 4`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `home()` (e.g. with `app.js` and `projectCard()`) actually correct?**
  _`home()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `q`, `id`, `main` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._