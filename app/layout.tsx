import type { Metadata } from "next"
import localFont from "next/font/local"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = localFont({
  src: [
    { path: "../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_BASE_URL ? { metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL) } : {}),
  title: { default: "Abdelhamed Nada | Portfolio", template: "%s | Abdelhamed Nada" },
  description: "Abdelhamed Nada builds bilingual web apps, WebGL interfaces, a live temporary inbox, and GitHub automation with React, TypeScript, and Python.",
  keywords: ["Abdelhamed Nada", "Portfolio", "Frontend Developer", "Full-Stack Developer", "React", "Next.js", "TypeScript", "TanStack Start", "Three.js", "WebGL", "GLSL", "Python", "Telegram Bot API", "Glassmorphism"],
  authors: [{ name: "Abdelhamed Nada" }],
  creator: "Abdelhamed Nada",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abdelhamed Nada | Portfolio",
    description: "Bilingual web apps, glassmorphic WebGL interfaces, and Python developer automation.",
    siteName: "Abdelhamed Nada Portfolio",
  },
  icons: { icon: "/logo.svg", shortcut: "/logo.svg", apple: "/logo.svg" },
  twitter: {
    card: "summary",
    title: "Abdelhamed Nada | Portfolio",
    description: "Bilingual web apps, glassmorphic WebGL interfaces, and Python developer automation.",
  },
  ...(process.env.NEXT_PUBLIC_BASE_URL ? { alternates: { canonical: "/" } } : {}),
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
