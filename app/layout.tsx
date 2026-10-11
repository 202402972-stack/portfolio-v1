import type { Metadata } from "next"
import localFont from "next/font/local"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"
import { siteUrl, socialImage } from "@/lib/site"
import { profileDescription } from "@/lib/profile"

const poppins = localFont({
  src: [
    { path: "../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Abdelhamed Nada | Portfolio", template: "%s | Abdelhamed Nada" },
  description: profileDescription,
  keywords: ["Abdelhamed Nada", "Portfolio", "Full-Stack Developer", "E-Commerce SaaS", "React", "Next.js", "TypeScript", "Python", "REST APIs", "PostgreSQL", "Stripe", "Paymob", "LLM", "Playwright", "WebGL"],
  authors: [{ name: "Abdelhamed Nada" }],
  creator: "Abdelhamed Nada",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abdelhamed Nada | Portfolio",
    description: profileDescription,
    siteName: "Abdelhamed Nada Portfolio",
    images: [socialImage],
  },
  icons: { icon: "/logo.svg", shortcut: "/logo.svg", apple: "/logo.svg" },
  twitter: {
    card: "summary_large_image",
    title: "Abdelhamed Nada | Portfolio",
    description: profileDescription,
    images: [socialImage],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}
