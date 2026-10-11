import type { ProjectItem } from "./projects"

export const commerceProjects: ProjectItem[] = [
  {
    "slug": "vera",
    "index": 0,
    "imagePath": "/images/projects/vera/01.webp",
    "imageWidth": 1536,
    "imageHeight": 1024,
    "title": "VÉRA Commerce — Store-Building Platform",
    "shortDescription": "A bilingual commerce platform for creating, customizing, migrating, and operating independent online stores.",
    "description": "VÉRA is a full-stack commerce platform covering the journey from choosing a visual direction to running a published store. Merchants sign in, build a store through resumable onboarding, customize its identity, and manage products, orders, customers, and payments. A separate owner console handles platform operations and subscriptions. The implementation includes three storefront templates, isolated store data, staged catalog migration, publishing checks, and optional provider integrations. Gallery captures use local demonstration accounts and catalog fixtures; they do not represent customer revenue or production payment activity.",
    "role": "Full-Stack Developer",
    "createdAt": "2026",
    "includeCoverInGallery": false,
    "imageCaption": "AI-generated interface illustration, based on the project’s actual screens.",
    "previewNotice": "Live preview is temporarily unavailable.",
    "gallery": [
      {
        "src": "/images/projects/vera/02.webp",
        "alt": "Platform landing — actual application capture.",
        "caption": "Platform landing — actual application capture.",
        "width": 1440,
        "height": 1000
      },
      {
        "src": "/images/projects/vera/03.webp",
        "alt": "Three storefront directions — template gallery.",
        "caption": "Three storefront directions — template gallery.",
        "width": 1440,
        "height": 1000
      },
      {
        "src": "/images/projects/vera/04.webp",
        "alt": "Merchant workspace — local demonstration stores.",
        "caption": "Merchant workspace — local demonstration stores.",
        "width": 1440,
        "height": 1000
      },
      {
        "src": "/images/projects/vera/05.webp",
        "alt": "Store onboarding — actual application capture.",
        "caption": "Store onboarding — actual application capture.",
        "width": 1440,
        "height": 1000
      }
    ],
    "features": [
      {
        "title": "Three storefront templates",
        "description": "A versioned registry offers GALA, The Atelier, and FORM, with isolated read-only demos and lazy-loaded renderers. New merchant stores begin as drafts with empty inventories."
      },
      {
        "title": "Arabic and English throughout",
        "description": "Bilingual content, RTL layouts, locally loaded fonts, language-aware navigation, and responsive merchant and shopper experiences."
      },
      {
        "title": "Resumable store onboarding",
        "description": "Three-step onboarding saves progress, checks store slugs, collects brand, currency, and language choices, and creates stores idempotently."
      },
      {
        "title": "Publishing readiness",
        "description": "Checks identity, products, shipping, payments, policies, and mobile presentation. Draft stores have private owner previews before publication."
      },
      {
        "title": "Multi-store workspace",
        "description": "Store cards, search, sorting, last-updated information, readiness indicators, store links, direct dashboard access, pause/resume controls, and password reset."
      },
      {
        "title": "Store operations",
        "description": "Catalogs, collections, variants, stock, orders, shipping rules, tax, discounts, customer accounts, moderated reviews, return requests, messages, newsletters, and analytics."
      },
      {
        "title": "Trial and subscription billing",
        "description": "A 14-day trial, USD/EGP pricing snapshots, Paymob hosted subscription checkout, renewal cancellation that preserves the paid period, and an optional Stripe adapter for eligible accounts."
      },
      {
        "title": "Catalog migration",
        "description": "CSV imports support bilingual headers and Shopify, WooCommerce, and native export formats. Products are staged for mapping, editing, selection, and review before committing to a new draft store."
      },
      {
        "title": "Public URL imports",
        "description": "Best-effort extraction from public Shopify data, sitemaps, HTML, and structured product data. Imported media is processed locally; imports do not bypass JavaScript challenges or access protections."
      },
      {
        "title": "Durable import jobs",
        "description": "SQLite-backed leases, worker heartbeats, cancellation, retries with backoff, idempotent commits, and persisted mapping reports make long catalog jobs observable."
      },
      {
        "title": "Owner operations console",
        "description": "Merchant/store search and pagination, subscription monitoring, activity and onboarding funnels, readiness, import job supervision, payment retries, and audited exports."
      },
      {
        "title": "Custom-domain integration",
        "description": "Cloudflare custom-hostname verification, TXT/CNAME and TLS status, and a signed proxy flow. Activation requires a configured provider account and DNS records."
      }
    ],
    "architecture": [
      {
        "title": "React application",
        "description": "React 18, Vite 7, React Router 7, Tailwind CSS, Radix UI, Lucide icons, and Framer Motion provide the platform, workspace, and storefront interfaces."
      },
      {
        "title": "Express commerce services",
        "description": "Express 5 separates platform authentication, onboarding, billing, ownership, imports, retail operations, and shopper payment flows."
      },
      {
        "title": "Tenant-scoped persistence",
        "description": "Node 24’s built-in SQLite runs in WAL mode. Immutable store IDs, namespaced tables, AsyncLocalStorage context, and scoped queries isolate store data."
      },
      {
        "title": "Media and import pipeline",
        "description": "Sharp creates local WebP images. CSV parsing and bounded public-URL retrieval feed reviewable import stages rather than silently overwriting catalogs."
      },
      {
        "title": "Separate payment domains",
        "description": "Platform subscriptions and shopper orders use separate records and reconciliation flows. Paymob verifies signed callbacks against canonical transaction details."
      },
      {
        "title": "Deployment model",
        "description": "Persistent-volume deployment retains SQLite and uploads. Backups must include the database, media, and encryption key; this implementation uses a single replica rather than horizontal database scaling."
      }
    ],
    "security": [
      "Google OAuth uses authorization code flow with PKCE, one-time state, nonce, and verified ID tokens.",
      "Sessions are hashed server-side and delivered in HttpOnly cookies; owner privileges are assigned server-side through an email allowlist.",
      "Merchant password access and shopper accounts have separate session boundaries. Store-specific cookies, caches, exports, cart data, and receipts are scoped to the store.",
      "Origin checks and rate limits protect mutations and authentication. Provider credentials are encrypted at rest.",
      "Public URL imports enforce SSRF protections, redirect checks, and resource limits.",
      "Signed payment callbacks are reconciled on the server. Provider credentials and domain configuration are required before activating external integrations."
    ],
    "tech": [
      "JavaScript",
      "Node.js 24",
      "React 18",
      "Vite 7",
      "React Router",
      "Express 5",
      "SQLite",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Google OAuth",
      "Paymob",
      "Stripe",
      "Sharp",
      "Cloudflare",
      "Docker"
    ],
    "githubUrl": "",
    "liveDemoUrl": "",
    "isPrivateRepo": true
  },
  {
    "slug": "merchant-studio",
    "index": 0,
    "imagePath": "/images/projects/merchant-studio/01.webp",
    "imageWidth": 1536,
    "imageHeight": 1024,
    "title": "Merchant Studio — E-Commerce Dashboard",
    "shortDescription": "A forest-green merchant dashboard for products, orders, brand customization, customers, and store performance.",
    "description": "Merchant Studio presents store management through a quiet forest-green and ivory interface with serif typography, clear operational priorities, and responsive Arabic/English layouts. Its overview surfaces orders needing attention, low inventory, and notification problems, while dedicated workspaces handle the catalog, brand identity, commerce settings, and customer service. This case study focuses on the dashboard experience and its server-backed operations. Screens include original project preview assets; empty states and demonstration inventory are shown without invented sales results.",
    "role": "Full-Stack Developer",
    "createdAt": "2026",
    "includeCoverInGallery": false,
    "imageCaption": "AI-generated interface illustration, based on the project’s actual screens.",
    "previewNotice": "Live preview is temporarily unavailable.",
    "gallery": [
      {
        "src": "/images/projects/merchant-studio/02.webp",
        "alt": "Green dashboard — overview, inventory watch, and order empty state.",
        "caption": "Green dashboard — overview, inventory watch, and order empty state.",
        "width": 1440,
        "height": 2011
      },
      {
        "src": "/images/projects/merchant-studio/03.webp",
        "alt": "Brand studio — identity and storefront customization.",
        "caption": "Brand studio — identity and storefront customization.",
        "width": 1440,
        "height": 1981
      },
      {
        "src": "/images/projects/merchant-studio/04.webp",
        "alt": "Private merchant access — AI-generated interface illustration.",
        "caption": "Private merchant access — AI-generated interface illustration.",
        "width": 1536,
        "height": 1024
      },
      {
        "src": "/images/projects/merchant-studio/05.webp",
        "alt": "Arabic mobile dashboard — responsive RTL interface.",
        "caption": "Arabic mobile dashboard — responsive RTL interface.",
        "width": 390,
        "height": 844
      }
    ],
    "features": [
      {
        "title": "Operational overview",
        "description": "Recent orders, orders awaiting preparation, inventory counts, low-stock warnings, and failed notifications. Empty states remain clear when the store has no orders."
      },
      {
        "title": "Product and variant editor",
        "description": "Bilingual names and descriptions, draft/published status, ordering, galleries, categories, sale prices, SKU, up to three variant axes, and per-variant inventory."
      },
      {
        "title": "Brand studio",
        "description": "Store identity and logo, four curated palettes or custom tokens, contrast checks, serif/sans typography, corner styles, bilingual announcements, hero and story content, and live previews."
      },
      {
        "title": "Order management",
        "description": "Search and status history, immutable order snapshots, shipment carrier and tracking information, private customer receipt updates, and cancellation that restores stock only once."
      },
      {
        "title": "Shipping, tax, and discounts",
        "description": "Delivery charges, free-shipping thresholds, minimum order values, allowed countries, exclusive tax, and fixed/percentage discounts with expiry, minimum spend, and usage caps."
      },
      {
        "title": "Collections and content",
        "description": "Bilingual collection names, descriptions, imagery, membership, publication state, SEO, policies, footer contacts, social links, and language-safe content drafts."
      },
      {
        "title": "Customer service",
        "description": "Customer accounts and saved items, delivered-purchase review moderation, private review photos, and merchant-reviewed return and exchange requests."
      },
      {
        "title": "Payment operations",
        "description": "Cash on delivery and optional per-store Paymob configuration, signed transaction reconciliation, pending-payment expiry with stock release, and manual reconciliation. Return approval does not automatically refund a payment."
      },
      {
        "title": "First-party analytics",
        "description": "Store event counts, unique visits, page views, cart/checkout/order funnels, and performance charts. Analytics respects Do Not Track and Global Privacy Control."
      },
      {
        "title": "Notifications and exports",
        "description": "Telegram order notifications with retry and failure visibility, authenticated exports, store password changes, and session revocation."
      },
      {
        "title": "Currency changes with review",
        "description": "Explicit repricing previews avoid hidden currency conversion; historical orders preserve their original financial snapshots."
      },
      {
        "title": "Mobile and RTL interaction",
        "description": "Compact navigation and rows, dedicated product editing, sticky actions, accessible dialog focus handling, Escape support, and Arabic RTL layouts."
      }
    ],
    "architecture": [
      {
        "title": "Dashboard UI",
        "description": "React components use Tailwind CSS, Lucide icons, and motion primitives, with a consistent green/ivory visual language across overview, catalog, and brand studio."
      },
      {
        "title": "Store API and persistence",
        "description": "Express endpoints persist products, collections, settings, orders, messages, customer records, and events in SQLite with store-scoped access."
      },
      {
        "title": "Safe inventory editing",
        "description": "Optimistic version checks prevent a stale merchant form from overwriting newer stock changes; transactional order processing and idempotent cancellation protect inventory."
      },
      {
        "title": "Configurable commerce",
        "description": "Shipping, tax, promotions, branding, language, and notification settings feed the storefront and checkout through validated server-owned data."
      },
      {
        "title": "Payment boundary",
        "description": "Encrypted store payment credentials and canonical provider checks keep payment status controlled by the server. Provider setup is required for online checkout."
      },
      {
        "title": "Preview provenance",
        "description": "The gallery preserves original green dashboard preview screens, including its Arabic mobile view. The cover is an AI-generated presentation of that interface."
      }
    ],
    "security": [
      "Private merchant login uses hashed passwords, rate limiting, scoped HttpOnly sessions, and session revocation after password changes.",
      "Server authorization and store-scoped queries protect catalog, order, customer, and export access.",
      "Password recovery uses expiring, single-use hashed tokens and revokes existing sessions.",
      "Review photos remain private while pending or rejected; only approved public reviews are exposed.",
      "Financial amounts and order status are validated on the server. Provider refunds remain an explicit operational step."
    ],
    "tech": [
      "JavaScript",
      "React 18",
      "Vite 7",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide",
      "Node.js 24",
      "Express 5",
      "SQLite",
      "Paymob",
      "Sharp",
      "Telegram"
    ],
    "githubUrl": "",
    "liveDemoUrl": "",
    "isPrivateRepo": true
  },
  {
    "slug": "maison-vere",
    "index": 0,
    "imagePath": "/images/projects/maison-vere/01.webp",
    "imageWidth": 1536,
    "imageHeight": 1024,
    "title": "MAISON VERE — E-Commerce",
    "shortDescription": "An editorial fashion storefront with product discovery, variant-aware checkout, customer accounts, and a dedicated merchant dashboard.",
    "description": "MAISON VERE is a complete fashion-commerce experience pairing an editorial storefront with its own catalog, order management, customer tools, and visual design studio. Large serif headlines, a photographic collage, and collection browsing lead into searchable products, detailed purchase options, a shopping cart, and server-validated checkout. Merchants can adjust the storefront and manage day-to-day operations from a dedicated dashboard. The captured catalog is demonstration content; payment-provider activation requires merchant configuration. Storefront engineering adapts an existing editorial visual reference documented in the source.",
    "role": "Full-Stack Developer",
    "createdAt": "2026",
    "includeCoverInGallery": false,
    "imageCaption": "AI-generated interface illustration, based on the project’s actual screens.",
    "previewNotice": "Live preview is temporarily unavailable.",
    "gallery": [
      {
        "src": "/images/projects/maison-vere/02.webp",
        "alt": "Editorial home — actual storefront capture with demonstration catalog.",
        "caption": "Editorial home — actual storefront capture with demonstration catalog.",
        "width": 1440,
        "height": 1000
      },
      {
        "src": "/images/projects/maison-vere/03.webp",
        "alt": "Product catalog — search, filtering, and collection browsing.",
        "caption": "Product catalog — search, filtering, and collection browsing.",
        "width": 1440,
        "height": 1000
      },
      {
        "src": "/images/projects/maison-vere/04.webp",
        "alt": "Product detail — gallery, purchase options, and related items.",
        "caption": "Product detail — gallery, purchase options, and related items.",
        "width": 1440,
        "height": 1000
      },
      {
        "src": "/images/projects/maison-vere/05.webp",
        "alt": "Dedicated design studio — storefront configuration and live preview.",
        "caption": "Dedicated design studio — storefront configuration and live preview.",
        "width": 1440,
        "height": 1000
      }
    ],
    "features": [
      {
        "title": "Editorial home and collections",
        "description": "Responsive collage hero, six demonstration collections, featured products, lookbook, story, service promises, FAQs, newsletter, and footer. Sections and bilingual content are merchant-configurable."
      },
      {
        "title": "Searchable product catalog",
        "description": "Arabic/English search, price, availability and rating filters, featured/price/name/newest sorting, desktop filter sidebar, and mobile drawer."
      },
      {
        "title": "Product detail and variants",
        "description": "Image gallery and zoom, live stock and sale prices, SKU, quantity, up to three option dimensions, size/color choices, and a sticky purchase bar."
      },
      {
        "title": "Recommendations and saved items",
        "description": "Related products, recently viewed items, curated bundles with validated purchase options, and shopper wishlists."
      },
      {
        "title": "Cart and purchase journey",
        "description": "Cart drawer and page support quantity changes, removal, cross-sells, optional notes, and configurable free-shipping progress."
      },
      {
        "title": "Server-validated checkout",
        "description": "Guest and account checkout quote shipping, tax, discounts, and product prices on the server, reserve inventory transactionally, and use idempotent order creation."
      },
      {
        "title": "Payment choices",
        "description": "Cash on delivery works without an online provider. Optional Paymob uses encrypted merchant credentials, signed callbacks, transaction reconciliation, and pending-payment expiry."
      },
      {
        "title": "Customer accounts and receipts",
        "description": "Saved items, order history, private order receipts, status changes, and shipment tracking. Recovery links are expiring and single-use."
      },
      {
        "title": "Verified reviews and returns",
        "description": "Reviews are tied to delivered purchases, moderated before publication, and support privacy-aware display names and photo handling. Returns/exchanges are merchant-reviewed requests."
      },
      {
        "title": "Messages and newsletter",
        "description": "Contact submissions enter a merchant inbox; newsletter subscriptions record consent and can be managed from the dashboard."
      },
      {
        "title": "Dedicated design studio",
        "description": "22 groups of settings cover ten palette roles, typography, layout, spacing, collage focal points, section order, collections, lookbook, story, testimonials, FAQs, product/cart options, and footer content."
      },
      {
        "title": "Live design preview",
        "description": "Desktop/mobile published previews, same-origin preview frames, image uploads, reorderable content arrays, bilingual copy, and optimistic setting versions support careful editing."
      },
      {
        "title": "Complete merchant dashboard",
        "description": "Products, variants, inventory, collections, orders, customers, reviews, returns, messages, subscribers, shipping, payments, analytics, and integrations are administered in one workspace."
      },
      {
        "title": "Display currencies",
        "description": "Cached exchange rates support presentation currencies with a base-currency fallback; actual order totals retain the store’s base currency."
      }
    ],
    "architecture": [
      {
        "title": "Storefront application",
        "description": "React, React Router, Vite, and Tailwind CSS drive shared catalog, product, cart, and account components with responsive editorial layouts."
      },
      {
        "title": "Commerce backend",
        "description": "Express and SQLite persist catalog data, settings, customer accounts, financial snapshots, inventory movements, orders, and service requests."
      },
      {
        "title": "Design studio model",
        "description": "Structured settings control the storefront without replacing application code. Live previews use the published renderer, with version checks guarding conflicting edits."
      },
      {
        "title": "Checkout lifecycle",
        "description": "Authoritative server quotes, atomic inventory reservations, idempotency, private receipts, and payment reconciliation connect purchase intent to reliable order state."
      },
      {
        "title": "Customer service lifecycle",
        "description": "Delivered-order verification, moderated reviews, private pending media, and merchant-managed returns protect the shopper-facing experience."
      },
      {
        "title": "Visual provenance",
        "description": "The source documents an editorial storefront reference and asset origins. This case study covers implementation and customization; its cover is an AI-generated interface illustration."
      }
    ],
    "security": [
      "The server owns product prices, discounts, tax, shipping, stock checks, and order/payment transitions.",
      "Shopper sessions and private receipt access are separate from merchant dashboard authorization.",
      "One-time password recovery tokens expire, and recovery revokes existing sessions.",
      "Only approved reviews are public; pending/rejected photos require authenticated access.",
      "Content sanitization, locally loaded fonts, and content security policy reduce unsafe content exposure.",
      "Return approval and payment refunds are separate actions; online payment and notification integrations require configured credentials."
    ],
    "tech": [
      "JavaScript",
      "React 18",
      "React Router",
      "Vite 7",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide",
      "Node.js 24",
      "Express 5",
      "SQLite",
      "Paymob",
      "Sharp"
    ],
    "githubUrl": "",
    "liveDemoUrl": "",
    "isPrivateRepo": true
  }
]
