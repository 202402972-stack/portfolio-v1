import ScrollVelocity from "@/components/ScrollVelocity"
import FadeDown from "@/components/animations/FadeDown"
import Fade from "@/components/animations/Fade"
import FadeLeft from "@/components/animations/FadeLeft"
import ProfileMark from "@/components/ProfileMark"

export default function About() {
  const velocity = 50

  return (
    <>
      <section id="about" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background overflow-hidden border-t border-text-secondary/10">
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Discover</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">About Me</h3>
          </div>
        </FadeDown>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 px-6 md:px-12">
          
          <div className="lg:col-span-5 hidden lg:flex flex-col items-center lg:items-center justify-center relative">
            <div className="w-full max-w-[350px] lg:max-w-[450px] relative">
              <Fade>
                <div className="relative z-10 aspect-[4/5] w-full group transition-transform duration-500 hover:-translate-y-1">
                  <ProfileMark gradientId="about-profile-gradient" className="absolute inset-0 w-full h-full p-6 transition-transform duration-700 scale-100 group-hover:scale-105" />
                </div>
                <div className="absolute -bottom-8 -left-8 text-8xl lg:text-9xl font-black text-text-secondary/5 select-none pointer-events-none tracking-tighter mix-blend-multiply dark:mix-blend-screen z-0">DEV.</div>
              </Fade>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="flex flex-col">
                <Fade>
                  <h4 className="text-lg md:text-xl font-bold text-text-primary mb-4 flex items-center border-b border-text-secondary/20 pb-4">Who Am I</h4>
                  <p className="text-base text-text-secondary leading-relaxed font-medium">I am a Full-Stack Developer building bilingual products with React, TypeScript, TanStack Start, and Next.js. My five featured projects span glassmorphic WebGL interfaces, a live temporary inbox, and Python-based GitHub automation through Telegram.</p>
                </Fade>
              </div>
              
              <div className="flex flex-col">
                <Fade>
                  <h4 className="text-lg md:text-xl font-bold text-text-primary mb-4 flex items-center border-b border-text-secondary/20 pb-4">My Approach</h4>
                  <p className="text-base text-text-secondary leading-relaxed font-medium">I combine visual design with practical engineering: adaptive 3D rendering, accessible motion, server-side API integration, and safer data handling. My projects use sanitized email content, encrypted credentials, and clear controls for destructive actions.</p>
                </Fade>
              </div>
            </div>

            <div className="mt-16 md:mt-20">
              <Fade>
                <h4 className="text-lg md:text-xl font-bold text-text-primary mb-8 border-b border-text-secondary/20 pb-4 border-l-4 border-l-text-primary pl-4">Personal Details</h4>
              </Fade>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
                <FadeLeft delay={0.1}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">Name</span>
                    <span className="text-base font-semibold text-text-primary">Abdelhamed Nada</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.2}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">Location</span>
                    <span className="text-base font-semibold text-text-primary">Egypt</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.3}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">Phone</span>
                    <span className="text-base font-semibold text-text-primary">+20 109 614 4345</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.4}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">Availability</span>
                    <span className="text-base font-semibold text-text-primary">Open to remote work</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.5}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">Email</span>
                    <a href="mailto:dior53634@gmail.com" className="text-base font-semibold text-text-primary hover:text-text-secondary transition-colors underline decoration-text-secondary/30 underline-offset-4">
                      dior53634@gmail.com
                    </a>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.6}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">Education</span>
                    <span className="text-base font-semibold text-text-primary">Tanta University · Computer Science & AI</span>
                  </div>
                </FadeLeft>
              </div>
            </div>
          </div>
        </div>

        <Fade>
          <div className="mt-24 md:mt-32 pb-6 border-text-secondary/10">
            <ScrollVelocity texts={["Hello I'm Abdelhamed", "Fullstack Web Developer"]} velocity={velocity} className="font-black tracking-tighter text-thirdary dark:text-button-hover opacity-50" />
          </div>
        </Fade>
      </section>
    </>
  )
}
