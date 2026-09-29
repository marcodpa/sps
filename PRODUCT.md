# Product
<!-- impeccable:product-schema 1 -->
## Platform
web
## Product Purpose
SPS, Service Petroleum and Supply C.A., presents petroleum and industrial services in Venezuela. The user requests a professional redesign of the entire site that makes its experience and years in the field visible.
## Users
Inferred from existing content: industrial and petroleum operations teams evaluating a service provider and requesting technical assistance.
## Capabilities and Constraints
Preserve the six main routes: Inicio, Nosotros, Servicios, Proyectos, Artículos, Contacto. The replacement implementation covers 22 service details, six project details and six article details, for 40 content routes. Preserve all service offerings, project evidence, contact numbers, address, company history and brand logo. Root index.html boots src/site/app.js: vanilla JavaScript and CSS served/built by Vite. React dependencies and older source remain in the repository but are not the root page's rendering stack. The contact form downloads a local text summary; it has no delivery backend and must not claim submissions are received.
## Evidence on Hand
src/site/content.js supplies service, project and article records; its service groups derive from design-proposals/completa/data.js. public/assets/sps-field contains supplied project photography. Foundation in 1990 is a repository claim, not an independently verified fact. The logo is public/assets/sps-oil-logo.png. Contact numbers and the Zulia address are rendered by src/site/app.js. Generated assets in public/assets/connected are conceptual illustration and decorative architecture, not additional evidence of completed work.
## Brand Commitments
SPS name and logo. Spanish language. User wants a professional presentation emphasizing experience and longevity. The nine approved compositions in design-proposals/web-completa-conectada are the visual authority; the implementation remains under visual review.
## Product Principles
Show actual field evidence. Make service scope clear. Make contact honest and actionable. Preserve content without inventing certifications or achievements.
