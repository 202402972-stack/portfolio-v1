export interface ProjectItem {
  slug: string
  imageWidth: number
  imageHeight: number
  index: number
  imagePath: string
  title: string
  shortDescription: string
  description: string
  role?: string
  gallery: { src: string; alt: string; caption?: string; width: number; height: number }[]
  createdAt: string
  features: (string | { title: string; description: string })[]
  architecture?: { title: string; description: string }[]
  security?: string[]
  commands?: { command: string; category: string; description: string }[]
  tech: string[]
  githubUrl: string
  sourceLinks?: { label: string; url: string }[]
  liveDemoUrl: string
  isPrivateRepo: boolean
}
export const projectList: ProjectItem[] = [
  {
    index: 0,
    slug: "newabdate-performance",
    imagePath: "/images/projects/newabdate/01.webp",
    imageWidth: 1440,
    imageHeight: 900,
    title: "Newabdate Performance",
    shortDescription: "An editorial portfolio with a luminous 3D glass hero, bilingual storytelling, and carefully budgeted motion.",
    description: "A personal portfolio built to make rich visual design feel effortless. A refractive WebGL sculpture sets the tone while an editorial layout carries the story through selected work and a direct path to contact. The experience supports Arabic and English and adapts rendering, scrolling, and motion to the device and the viewer's preferences.",
    gallery: [
      { src: "/images/projects/newabdate/02.webp", alt: "about and capabilities", width: 1440, height: 900 },
      { src: "/images/projects/newabdate/03.webp", alt: "selected work", width: 1440, height: 900 },
      { src: "/images/projects/newabdate/04.webp", alt: "contact section", width: 1440, height: 900 },
      { src: "/images/projects/newabdate/05.webp", alt: "footer and contact details", width: 1440, height: 900 },
    ],
    createdAt: "2026",
    features: [
      "Refractive, animated 3D hero with adaptive render budgets",
      "Arabic and English content with a polished editorial layout",
      "Selected-work stories, live links, and clear contact journey",
      "Reduced-motion support, visibility-aware rendering, and mobile-friendly scrolling",
      "Optimized image delivery and locally loaded typography",
    ],
    tech: ["TanStack Start", "React", "TypeScript", "Tailwind CSS", "React Three Fiber", "Three.js", "Lenis"],
    githubUrl: "https://github.com/abbn7/newabdate-performance",
    liveDemoUrl: "https://newabdate-performance.vercel.app/",
    isPrivateRepo: false,
  },
  {
    index: 1,
    slug: "reelkeep",
    imagePath: "/images/projects/reelkeep/01.webp",
    imageWidth: 893,
    imageHeight: 768,
    title: "Reelkeep — Telegram Media Downloader",
    shortDescription: "A bilingual Telegram bot for public TikTok and Instagram media, with batch downloads, resilient delivery, and an editorial product website.",
    description: "An end-to-end media downloading product combining an asynchronous Python Telegram bot with a Next.js landing website. Send a public TikTok or Instagram link, choose a quality, and receive playable videos, photos, or carousel albums directly in chat. The bot coordinates queued downloads, retries temporary failures, switches Instagram extraction engines when needed, and cleans up temporary files. The companion website presents the workflow, supported media, commands, and privacy policy through a warm ivory and vermilion editorial design. Instagram Stories require an owner-configured session, and availability remains subject to platform access and upload limits.",
    role: "Designer + Full-Stack Developer",
    gallery: [
      { src: "/images/projects/reelkeep/04.webp", alt: "download workflow and supported platforms", caption: "How it works — send a link, choose a quality, receive your media.", width: 893, height: 768 },
      { src: "/images/projects/reelkeep/05.webp", alt: "Instagram support and batch downloading", caption: "Supported media and five-link batch downloads.", width: 893, height: 768 },
      { src: "/images/projects/reelkeep/06.webp", alt: "Telegram call to action and developer footer", caption: "Telegram onboarding and the product website footer.", width: 893, height: 768 },
      { src: "/images/projects/reelkeep/02.webp", alt: "download qualities and batch features", caption: "Features — Best, Balanced, and Small download modes.", width: 893, height: 768 },
      { src: "/images/projects/reelkeep/03.webp", alt: "privacy policy and data handling", caption: "Privacy — public links, optional sessions, and temporary-file handling.", width: 893, height: 768 },
      { src: "/images/projects/reelkeep/07.webp", alt: "privacy FAQ and Telegram onboarding", caption: "Frequently asked questions and a direct path to Telegram.", width: 893, height: 768 },
    ],
    createdAt: "2026",
    features: [
      { title: "TikTok and Instagram media", description: "Download public TikTok videos, Instagram Reels, video posts, photos, and carousels of up to ten items by default. Stories need an owner-configured Instagram session." },
      { title: "Batch downloads", description: "Process up to five unique links per batch by default, remove duplicates, ignore unsupported links, and show per-item progress and a final delivery summary." },
      { title: "Three quality choices", description: "Choose Best, Balanced targeting up to 720p, or Small targeting up to 480p. Available formats and file-size limits still apply." },
      { title: "Resilient extraction", description: "Retry temporary errors with exponential backoff and switch between yt-dlp and gallery-dl for Instagram media. Deliver valid items from partial carousels." },
      { title: "Telegram delivery recovery", description: "Send playable videos, photos, and albums, retry temporary upload failures, and fall back to documents when Telegram rejects a media format." },
      { title: "Arabic and English chat", description: "Localized onboarding, help, settings, and privacy flows, with personal statistics and recent download history." },
      { title: "Progress and cancellation", description: "Follow live progress, cancel an active download or an entire batch, and retry failed requests from the chat interface." },
      { title: "Editorial product website", description: "Responsive Next.js pages for the product, features, and privacy, with subtle reveals and direct Telegram onboarding." },
    ],
    architecture: [
      { title: "Telegram interaction", description: "Aiogram handlers, inline keyboards, and finite-state flows coordinate link input, quality selection, settings, and localized responses." },
      { title: "Async download supervisor", description: "A worker queue, bounded concurrency, per-user locks, and in-flight URL tracking coordinate downloads while recreating stopped workers." },
      { title: "Extraction and media processing", description: "yt-dlp handles video extraction; gallery-dl preserves Instagram photos and carousels. FFmpeg and media inspection prepare and validate video output." },
      { title: "Persistence and operations", description: "An aiosqlite repository stores users, settings, and download records; admin statistics and health/readiness endpoints expose operational state." },
      { title: "Cleanup lifecycle", description: "Auto-delete removes temporary media after delivery by default, while scheduled cleanup clears retained files and runtime session cookies are removed on shutdown." },
      { title: "Product presentation", description: "Next.js App Router, React, TypeScript, and Tailwind CSS power the three-page website. Docker and Railway configuration support the bot deployment." },
    ],
    security: [
      "Only supported public TikTok and Instagram links are processed; private accounts and access controls are not bypassed.",
      "URL validation rejects local and private network targets, and request limits help prevent abuse.",
      "The bot never asks users for passwords. Optional owner-provided Instagram cookies are loaded at runtime rather than committed to the project.",
      "Temporary media is deleted after delivery when auto-delete is enabled, which is the default. Basic user settings, history, and operational statistics can persist in SQLite.",
    ],
    commands: [
      { command: "/start", category: "Onboarding", description: "Start the bot and open the main dashboard." },
      { command: "/download", category: "Download", description: "Send a public TikTok or Instagram media link." },
      { command: "/batch", category: "Download", description: "Download multiple links with one quality setting." },
      { command: "/cancel", category: "Download", description: "Cancel the current operation or active batch." },
      { command: "/stats", category: "Activity", description: "View personal download statistics." },
      { command: "/history", category: "Activity", description: "Browse recent downloads." },
      { command: "/settings", category: "Preferences", description: "Change language and temporary-file auto-delete settings." },
      { command: "/privacy", category: "Help", description: "Read the bot's privacy and data-handling policy." },
      { command: "/help", category: "Help", description: "View supported links and usage instructions." },
      { command: "/admin", category: "Admin", description: "Open operational statistics for configured administrators." },
    ],
    tech: ["Python 3.12", "Aiogram 3", "asyncio", "yt-dlp", "gallery-dl", "FFmpeg", "aiohttp", "aiosqlite", "SQLite", "Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Docker", "Railway", "Vercel"],
    githubUrl: "https://github.com/abdelhamednada631-del/reels-downloader",
    sourceLinks: [
      { label: "Bot Source", url: "https://github.com/abdelhamednada631-del/reels-downloader" },
      { label: "Website Source", url: "https://github.com/abdelhamednada631-del/Reels-Downloader-Landing" },
    ],
    liveDemoUrl: "https://reels-landing-zeta.vercel.app/",
    isPrivateRepo: false,
  },
  {
    index: 2,
    slug: "glass-morphic-brilliance",
    imagePath: "/images/projects/glass-morphic/01.webp",
    imageWidth: 1440,
    imageHeight: 900,
    title: "Glass Morphic Brilliance",
    shortDescription: "A bilingual glassmorphic portfolio where translucent 3D layers, light, and motion turn a software stack into an experience.",
    description: "A bold visual identity built around glass, depth, and a live WebGL scene. Floating interface layers and animated data particles make the hero feel like a product in motion, while the surrounding portfolio remains readable in both English and Arabic. Theme-aware visuals and a non-WebGL fallback keep the presentation usable across devices.",
    gallery: [
      { src: "/images/projects/glass-morphic/02.webp", alt: "glass visual language and skills", width: 1440, height: 900 },
      { src: "/images/projects/glass-morphic/03.webp", alt: "Arabic selected work", width: 1440, height: 900 },
      { src: "/images/projects/glass-morphic/04.webp", alt: "Arabic education timeline", width: 1440, height: 900 },
      { src: "/images/projects/glass-morphic/05.webp", alt: "Arabic contact section", width: 1440, height: 900 },
    ],
    createdAt: "2026",
    features: [
      "Layered 3D glass interface with a custom shader field and particle motion",
      "Dedicated Arabic and English routes with RTL presentation",
      "Theme-aware lighting, server-rendered pages, and shareable metadata",
      "Adaptive visual quality, reduced-motion handling, and scene fallback",
    ],
    tech: ["TanStack Start", "React", "TypeScript", "Tailwind CSS", "React Three Fiber", "Three.js", "GLSL", "Glassmorphism"],
    githubUrl: "https://github.com/abbn7/glass-morphic-brilliance",
    liveDemoUrl: "https://glass-morphic-brilliance.vercel.app",
    isPrivateRepo: false,
  },
  {
    index: 3,
    slug: "green-webgl",
    imagePath: "/images/projects/green-webgl/01.webp",
    imageWidth: 1440,
    imageHeight: 900,
    title: "Marmo Verde — Green WebGL",
    shortDescription: "An art-directed portfolio pairing procedural marble, a refractive glass arch, and a striking light-to-dark theme shift.",
    description: "A portfolio conceived as a digital material study. Procedural marble moves between Carrara light and Verde Alpi dark palettes, while a glass arch anchors the composition across page transitions. The WebGL scene adjusts to device performance, letting the visual atmosphere support the core home, projects, and contact routes.",
    gallery: [
      { src: "/images/projects/green-webgl/02.webp", alt: "light-mode projects page", width: 1440, height: 900 },
      { src: "/images/projects/green-webgl/03.webp", alt: "light-mode contact page", width: 1440, height: 900 },
      { src: "/images/projects/green-webgl/04.webp", alt: "Verde Alpi dark-mode hero", width: 1440, height: 900 },
      { src: "/images/projects/green-webgl/05.webp", alt: "projects page and work in progress", width: 1440, height: 900 },
    ],
    createdAt: "2026",
    features: [
      "Procedural marble shader with Carrara and Verde Alpi palettes",
      "Transmissive 3D glass arch integrated into the page composition",
      "Light and dark themes with animated route transitions",
      "Adaptive GPU quality and reduced-motion support",
      "Dedicated home, projects, and contact routes",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Three Fiber", "Three.js", "GLSL", "GSAP"],
    githubUrl: "https://github.com/abbn7/green-webgl",
    liveDemoUrl: "https://green-webgl.vercel.app",
    isPrivateRepo: false,
  },
  {
    index: 4,
    slug: "vanish-mail",
    imagePath: "/images/projects/vanish-mail/01.webp",
    imageWidth: 893,
    imageHeight: 768,
    title: "Vanish Mail — Premium Disposable Inbox",
    shortDescription: "A real, bilingual temporary inbox that brings privacy, mailbox controls, and a quietly polished interface together.",
    description: "A working disposable email product powered by the live mail.tm service. Its server-side proxy handles provider requests, account limits, and localized errors, while a focused inbox makes verification mail easy to manage. The product is explicit about mailbox retention and gives people direct control over creating and deleting addresses.",
    role: "Designer + Full-Stack Developer",
    gallery: [
      { src: "/images/projects/vanish-mail/02.webp", alt: "light theme inbox", caption: "Light mode — temporary address workspace.", width: 893, height: 768 },
      { src: "/images/projects/vanish-mail/03.webp", alt: "dark theme inbox", caption: "Dark mode — inbox and address controls.", width: 893, height: 768 },
      { src: "/images/projects/vanish-mail/04.webp", alt: "inbox reading view", caption: "Inbox reading and product explanation.", width: 893, height: 768 },
      { src: "/images/projects/vanish-mail/05.webp", alt: "privacy comparison", caption: "Product comparison and privacy details.", width: 893, height: 768 },
    ],
    createdAt: "2026",
    features: [
      { title: "Five live inboxes", description: "Manage up to five labelled mailboxes at once, each with its own unread badge." },
      { title: "OTP extraction", description: "Detect verification codes in Arabic and English messages and copy them in one action." },
      { title: "Keyboard-first inbox", description: "Use j/k, Enter, Escape, r, and c with an in-product shortcut sheet." },
      { title: "Safe message reader", description: "Read sanitized HTML, plain text, or raw source while external images stay blocked by default." },
      { title: "Privacy utilities", description: "Share addresses by QR, play browser-generated notification sounds, and opt into web notifications." },
      { title: "Sage Villa design system", description: "Three Sage, Clay, and Slate palettes, each available in light and dark modes." },
      { title: "Truthful mailbox lifecycle", description: "Shows time active instead of a false expiry countdown, with a real destroy-and-regenerate action." },
      { title: "Search-ready pages", description: "Localized metadata, hreflang, and WebApplication, FAQPage, and HowTo structured data." },
    ],
    architecture: [
      { title: "Server proxy", description: "TanStack Start server functions send all provider requests; the browser never calls mail.tm directly." },
      { title: "Rate-limit boundary", description: "Account creation is capped at eight accounts per IP every ten minutes." },
      { title: "Error translation", description: "RFC7807 provider errors are mapped to useful Arabic and English messages." },
      { title: "Mailbox state", description: "Zustand coordinates local multi-inbox state while TanStack Query manages remote freshness." },
      { title: "Message safety", description: "DOMPurify sanitizes rendered HTML and external images require an explicit opt-in." },
    ],
    security: [
      "Provider access is routed through server functions, avoiding direct browser coupling and CORS failures.",
      "DOMPurify sanitizes message HTML; remote images remain blocked unless the reader enables them.",
      "Destroy and regenerate calls the actual provider API instead of simulating a reset in the interface.",
    ],
    commands: [
      { command: "j / k", category: "Navigate", description: "Move through messages from the keyboard." },
      { command: "Enter / Esc", category: "Read", description: "Open a message or return to the inbox." },
      { command: "r", category: "Refresh", description: "Refresh the current inbox." },
      { command: "c", category: "Copy", description: "Copy a selected verification code." },
    ],
    tech: ["TanStack Start v1", "React 19", "Vite", "TypeScript", "Tailwind CSS v4", "Zustand", "TanStack Query", "Framer Motion", "DOMPurify", "mail.tm API", "Vercel"],
    githubUrl: "https://github.com/abbn7/newabdate-performance",
    sourceLinks: [{ label: "Case Study Repo", url: "https://github.com/abbn7/newabdate-performance" }],
    liveDemoUrl: "https://temporary-zeta-one.vercel.app/",
    isPrivateRepo: false,
  },
  {
    index: 5,
    slug: "github-management-telegram-bot",
    imagePath: "/images/projects/github-bot/01.webp",
    imageWidth: 893,
    imageHeight: 768,
    title: "GitHub Management Telegram Bot",
    shortDescription: "Manage GitHub repositories from Telegram through an encrypted, multi-user bot and a dedicated product website.",
    description: "An end-to-end repository management product built around Telegram. People can connect GitHub, manage repositories, and move ZIP files between local work and GitHub, while the companion website explains the workflow and onboarding. The bot stores user credentials encrypted and confirms destructive actions before carrying them out.",
    role: "Designer + Full-Stack Developer",
    gallery: [
      { src: "/images/projects/github-bot/02.webp", alt: "product feature overview", caption: "Product overview — repository workflows and features.", width: 893, height: 768 },
      { src: "/images/projects/github-bot/03.webp", alt: "bot command reference", caption: "Telegram command reference for repository management.", width: 893, height: 768 },
    ],
    createdAt: "2024",
    features: [
      { title: "Secure GitHub linking", description: "Connect a GitHub account with a Personal Access Token stored encrypted per user." },
      { title: "Repository management", description: "List, download as ZIP, and delete repositories from Telegram." },
      { title: "ZIP upload as a repo", description: "Upload a ZIP and create a GitHub repository with its contents pushed automatically." },
      { title: "Privacy toggle", description: "Change repository visibility between public and private with a command." },
      { title: "Fetch public repositories", description: "Download any public repository by URL for research and learning." },
      { title: "Safe deletion", description: "Confirmation prompts help prevent accidental destructive actions." },
      { title: "Multi-user SaaS", description: "Separate user sessions and encrypted credentials support concurrent users." },
      { title: "Containerized deployment", description: "Docker deployment to Railway with persistent volumes." },
    ],
    architecture: [
      { title: "Telegram interface", description: "python-telegram-bot receives commands and sends replies." },
      { title: "Bot logic handler", description: "Coordinates command modules and conversational state." },
      { title: "GitHub service", description: "A service layer wraps GitHub API operations for repositories and files." },
      { title: "User management", description: "SQLite stores user records and encrypted Personal Access Tokens." },
      { title: "File processing", description: "Uploads and downloads use ZIP extraction, validation, and staged GitHub writes." },
    ],
    security: [
      "Personal Access Tokens are encrypted with the Python cryptography library before storage.",
      "Temporary upload and download files are cleaned up after processing.",
      "Tokens are revalidated when used, and deletion commands require confirmation.",
    ],
    commands: [
      { command: "/start", category: "Basic", description: "Start the bot and connect a GitHub account." },
      { command: "/repos", category: "Repository", description: "List all GitHub repositories." },
      { command: "/uploadzip", category: "Repository", description: "Create a new repository from an uploaded ZIP." },
      { command: "/downloadrepo", category: "Repository", description: "Download a repository as a ZIP file." },
      { command: "/deleterepo", category: "Repository", description: "Delete a repository after confirmation." },
      { command: "/setprivacy", category: "Settings", description: "Change a repository's public or private visibility." },
      { command: "/fetchrepo", category: "Utility", description: "Download a public repository from its URL." },
      { command: "/help", category: "Basic", description: "Show the complete command reference." },
      { command: "/cancel", category: "Basic", description: "Cancel the current operation." },
    ],
    tech: ["Python 3.11", "python-telegram-bot", "PyGithub", "cryptography", "SQLite", "React", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Docker", "Railway", "Vercel"],
    githubUrl: "https://github.com/abbn7/GIT5",
    sourceLinks: [
      { label: "Bot Source", url: "https://github.com/abbn7/GIT5" },
      { label: "Website Source", url: "https://github.com/abbn7/github-bot-website" },
    ],
    liveDemoUrl: "https://giit-website.vercel.app/",
    isPrivateRepo: false,
  },
]

export function getProject(slug: string) {
  return projectList.find((project) => project.slug === slug)
}
