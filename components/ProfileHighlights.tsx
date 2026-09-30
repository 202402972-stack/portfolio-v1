"use client"

import { useInView } from "framer-motion"
import { useEffect, useRef, useState, type ReactNode } from "react"
import AnimatedProfileMark from "@/components/AnimatedProfileMark"
import RotatingProfileBadge, { advanceProfileHighlights } from "@/components/RotatingProfileBadge"

type Highlight = { message: string; icon: ReactNode }
type Sequence = {
  phase: "idle" | "logo" | "cards"
  rotation: { indices: number[]; nextSlot: number; latest: number }
}

export const profileMotionDelay = { beforeLogo: 6000, beforeCards: 7000 }

export function advanceProfileSequence(current: Sequence, itemCount: number): Sequence {
  return current.phase === "logo"
    ? { phase: "cards", rotation: advanceProfileHighlights(current.rotation, itemCount) }
    : { phase: "logo", rotation: current.rotation }
}

export default function ProfileHighlights({ items }: { items: readonly Highlight[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.25 })
  const [paused, setPaused] = useState(false)
  const [sequence, setSequence] = useState<Sequence>({
    phase: "idle",
    rotation: { indices: [0, 1], nextSlot: 0, latest: 1 },
  })

  useEffect(() => {
    if (!inView || paused) return

    // One clock keeps the logo and cards in separate animation windows.
    const delay = sequence.phase === "logo" ? profileMotionDelay.beforeCards : profileMotionDelay.beforeLogo
    const timer = window.setTimeout(() => {
      setSequence((current) => advanceProfileSequence(current, items.length))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [inView, paused, sequence.phase, items.length])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center relative">
      <div className="relative z-10 w-full max-w-[288px] sm:max-w-[320px] md:max-w-[416px]">
        <AnimatedProfileMark gradientId="hero-profile-gradient" className="block w-full h-auto aspect-square" active={inView && !paused && sequence.phase === "logo"} />
      </div>
      <div className="relative z-20 mt-4 flex w-full justify-center md:mt-5">
        <RotatingProfileBadge items={items} visibleIndices={sequence.rotation.indices} onPauseChange={setPaused} />
      </div>
    </div>
  )
}
