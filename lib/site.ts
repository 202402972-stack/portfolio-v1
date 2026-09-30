// Use the live portfolio URL even when deployment configuration is omitted.
// An explicit URL remains available for custom domains and other deployments.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_BASE_URL?.trim() || "https://abdelhamed-nada.vercel.app",
).origin

export const socialImage = {
  url: "/og",
  width: 1200,
  height: 630,
  alt: "Abdelhamed Nada — Full-Stack Developer portfolio",
}
