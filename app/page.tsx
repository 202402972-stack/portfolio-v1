import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "./hero"
import About from "./about"
import Experience from "./experience"
import TechStack from "./tech-stack"
import Project from "./project"
import Contact from "./contact"
import type { Metadata } from "next"
import { siteUrl, socialImage } from "@/lib/site"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abdelhamed Nada | Portfolio",
    description: "Bilingual web apps, glassmorphic WebGL interfaces, and Python developer automation.",
    siteName: "Abdelhamed Nada Portfolio",
    url: siteUrl,
    images: [socialImage],
  },
}

export default function Home() {
  return (
    <>
      <header className="cursor-default sticky top-0 z-50">
        <Header />
      </header>
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}
