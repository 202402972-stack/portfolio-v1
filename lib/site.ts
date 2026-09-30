// Use the live portfolio URL even when deployment configuration is omitted.
// An explicit URL remains available for custom domains and other deployments.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_BASE_URL?.trim() || "https://abdelhamed-nada.vercel.app",
).origin

export const socialImage = {
  url: `${siteUrl}/images/social/portfolio-share-v3.png`,
  secureUrl: `${siteUrl}/images/social/portfolio-share-v3.png`,
  type: "image/png",
  width: 1733,
  height: 907,
  alt: "Abdelhamed Nada — Full-Stack Developer portfolio",
}
