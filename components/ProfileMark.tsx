export default function ProfileMark({ gradientId, className }: { gradientId: string; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Abdelhamed Nada logo" preserveAspectRatio="xMidYMid meet" className={`text-text-primary ${className ?? ""}`}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#37ebda" />
          <stop offset="1" stopColor="#fc65b6" />
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 54 L24 10 L40 54 M14 38 H34" stroke={`url(#${gradientId})`} />
        <path d="M36 54 V14 L56 54 V14" stroke="currentColor" />
      </g>
    </svg>
  )
}
