# Commerce case studies: source and image provenance

Reviewed source: `202402972-stack/vera`, commit `82eb60e3f33c3344ee36fe3465bc2e94b2ea8dbf`.
Review and capture date: 2026-10-11.

The portfolio presents three focused case studies. Merchant Studio and MAISON VERE are separate portfolio entries; they share implementation origins with the reviewed commerce repository. Presentation does not imply that three unrelated codebases were built.

## Technical evidence

- Platform: `server/platform/` authentication, core, onboarding, billing, owner, pricing, domains, and features modules; `server/imports/`; platform/workspace React pages; `docs/ARCHITECTURE.md` and integration documentation.
- Merchant dashboard: `src/pages/AdminPage.jsx`, `src/components/admin/`, retail and shopper-payment server modules.
- MAISON VERE: `src/templates/gala/`, `src/data/gala.js`, `server/gala.js`, and `docs/GALA-IMPLEMENTATION.md` / `docs/gala-reference/AUDIT.md`.
- Runtime/dependencies: source package manifest; Node 24, React 18, Vite 7, Express 5, built-in SQLite. Do not substitute the portfolio's Next.js/TypeScript stack for these projects.
- External OAuth, payment, custom-domain, and notification providers were reviewed in source, not exercised against production accounts. No production transaction, revenue, customer, or load claims are made.

## Image inventory

All final assets are optimized WebP files under `public/images/projects/`.

| Entry | Asset | Origin |
| --- | --- | --- |
| VÉRA | `vera/cover-original.webp` | Actual platform landing screenshot; replaces the initial AI cover |
| VÉRA | `vera/02.webp`–`05.webp` | Locally captured landing, template gallery, merchant workspace, and onboarding |
| Merchant Studio | `merchant-studio/cover-original.webp` | Original user-supplied flat desktop login image; replaces the initial AI cover |
| Merchant Studio | `merchant-studio/02.webp` | Source `previews/boutique-dashboard.png` |
| Merchant Studio | `merchant-studio/03.webp` | Source `previews/boutique-brand-studio.png` |
| Merchant Studio | `merchant-studio/04.webp` | AI login illustration based on source `previews/login-desktop.png` and the user’s flat desktop login reference |
| Merchant Studio | `merchant-studio/mobile-triptych.webp` | AI-generated three-phone presentation based on the user’s three-phone reference |
| MAISON VERE | `maison-vere/01.webp` | AI interface illustration using actual home/catalog captures and the user's supplied visual reference |
| MAISON VERE | `maison-vere/02.webp`–`05.webp` | Locally captured home, catalog, product detail, and dedicated design studio |

Local capture used synthetic accounts and seeded catalog fixtures. Captures contain no actual customer data, credentials, or successful provider transactions. Zero-order dashboard states are intentional. The original green dashboard previews represent the repository's saved visual iteration; current template styling can differ.

MAISON VERE's source documents a Banzena editorial reference and product/photo origins. The portfolio describes storefront implementation and customization without claiming exclusive authorship of the reference design or photography. Refer to the source's reference audit and existing asset notices for provenance; AI illustrations are distinguished from actual application screenshots in visible captions.

VÉRA uses an actual landing screenshot as its cover and four actual gallery views. Merchant Studio uses the supplied login cover and a generated three-phone gallery presentation. MAISON VERE retains its flat cover and now has an additional generated three-phone gallery presentation. The two tall Merchant Studio captures use bounded, proportional top-aligned thumbnails; original full images remain available in the viewer. Source/live links are disabled for the three entries, with a temporary live-preview notice. Existing project records and galleries are preserved; `green-webgl` follows the three new case studies.

Revision: generated three-phone Maison presentation is stored in `maison-vere/06.webp`.
