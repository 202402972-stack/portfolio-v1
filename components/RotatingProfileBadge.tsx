"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useState, type ReactNode } from "react"

type Badge = { message: string; icon: ReactNode }
type Rotation = { indices: number[]; nextSlot: number; latest: number }

export function advanceProfileHighlights(current: Rotation, itemCount: number): Rotation {
  if (itemCount <= current.indices.length) return current

  // Replace just one slot with the hidden highlight; the other stays readable.
  let next = (current.latest + 1) % itemCount
  while (current.indices.includes(next)) next = (next + 1) % itemCount

  const indices = [...current.indices]
  indices[current.nextSlot] = next
  return { indices, nextSlot: (current.nextSlot + 1) % indices.length, latest: next }
}

export default function RotatingProfileBadge({ items }: { items: readonly Badge[] }) {
  const [rotation, setRotation] = useState<Rotation>({ indices: [0, 1], nextSlot: 0, latest: 1 })
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (paused || items.length < 3) return

    const timer = window.setInterval(() => {
      setRotation((current) => advanceProfileHighlights(current, items.length))
    }, 4000)

    return () => window.clearInterval(timer)
  }, [paused, items.length])

  if (!items.length) return null

  return (
    <div
      role="group"
      aria-label="Profile highlights"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="flex w-full max-w-[320px] flex-col gap-2 rounded-2xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-text-primary"
    >
      <span className="sr-only">{items.map((item) => item.message).join(". ")}</span>
      {rotation.indices.map((itemIndex, slot) => {
        const active = items[itemIndex]
        if (!active) return null

        return (
          <div key={slot} className="relative h-16 w-full overflow-hidden rounded-2xl border border-text-secondary/10 bg-background/90 shadow-xl backdrop-blur-md" style={{ perspective: 700 }}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={active.message}
                aria-hidden="true"
                className="absolute inset-0 flex items-center gap-3 px-3 pr-5"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 44, rotateX: -65, scale: 0.9, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -36, rotateX: 55, scale: 0.94, filter: "blur(6px)" }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-text-primary text-background"
                  initial={reduceMotion ? false : { rotate: -100, scale: 0.45 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 480, damping: 24, delay: 0.02 }}
                >
                  {active.icon}
                </motion.div>
                <span className="whitespace-nowrap text-xs font-semibold text-text-primary md:text-sm">{active.message}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
