"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

export default function AnimatedProfileMark({ gradientId, className, active = true }: { gradientId: string; className?: string; active?: boolean }) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { amount: 0.25 })
  const reduceMotion = useReducedMotion()
  const moving = active && inView && !reduceMotion
  const shineId = `${gradientId}-shine`
  const aPath = "M8 54 L24 10 L40 54 M14 38 H34"
  const nPath = "M36 54 V14 L56 54 V14"

  return (
    <motion.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      role="img"
      aria-label="Abdelhamed Nada logo"
      preserveAspectRatio="xMidYMid meet"
      className={`text-text-primary ${className ?? ""}`}
      initial={false}
      animate={moving ? { y: [0, -5, 0], rotate: [0, -1.5, 0, 1.5, 0], scale: [1, 1.025, 1] } : { y: 0, rotate: 0, scale: 1 }}
      transition={moving ? { duration: 5.2, ease: "easeInOut" } : { duration: 0 }}
      whileHover={moving ? { scale: 1.06, rotate: -2, transition: { duration: 0.25 } } : undefined}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#37ebda" />
          <stop offset="1" stopColor="#fc65b6" />
        </linearGradient>
        <mask id={shineId} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
          <g fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
            <path d={aPath} />
            <path d={nPath} />
          </g>
        </mask>
      </defs>
      <g fill="none" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          d={aPath}
          stroke={`url(#${gradientId})`}
          initial={false}
          animate={{ pathLength: moving ? [1, 1, 0.08, 1, 1] : 1 }}
          transition={moving ? { duration: 4.8, times: [0, 0.6, 0.64, 0.88, 1], ease: "easeInOut" } : { duration: 0 }}
        />
        <motion.path
          d={nPath}
          stroke="currentColor"
          initial={false}
          animate={{ pathLength: moving ? [1, 1, 0.08, 1, 1] : 1 }}
          transition={moving ? { duration: 4.8, times: [0, 0.64, 0.68, 0.94, 1], ease: "easeInOut" } : { duration: 0 }}
        />
      </g>
      {moving && (
        <g mask={`url(#${shineId})`} aria-hidden="true" pointerEvents="none">
          <motion.g animate={{ x: [-70, 90] }} transition={{ duration: 1.2, repeat: 1, repeatDelay: 2.8, ease: "easeInOut" }}>
            <rect x="0" y="-20" width="12" height="104" fill="#fff" opacity="0.45" transform="rotate(22 32 32)" />
          </motion.g>
        </g>
      )}
    </motion.svg>
  )
}
