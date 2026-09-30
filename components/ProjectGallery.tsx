"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type Screen = { src: string; alt: string; caption?: string; width: number; height: number }

export default function ProjectGallery({ title, screens }: { title: string; screens: Screen[] }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState<number | null>(null)
  const screen = selected === null ? null : screens[selected]

  useEffect(() => {
    if (selected === null) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = previous }
  }, [selected])

  function open(index: number) {
    setSelected(index)
    dialog.current?.showModal()
  }

  function move(direction: number) {
    setSelected((index) => index === null ? null : (index + direction + screens.length) % screens.length)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {screens.map((item, index) => (
          <figure key={item.src}>
            <button onClick={() => open(index)} aria-label={`Enlarge ${title}: ${item.alt}`} className="group block relative w-full rounded-2xl overflow-hidden border border-text-secondary/20 bg-thirdary/20 hover:border-text-primary/50 focus-visible:outline-2 focus-visible:outline-text-primary">
              <Image src={item.src} alt={`${title} — ${item.alt}`} width={item.width} height={item.height} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto" />
              <span className="absolute bottom-3 right-3 rounded-full px-3 py-1 bg-background/90 text-text-primary text-xs font-bold backdrop-blur-md">Enlarge ↗</span>
            </button>
            <figcaption className="mt-3 text-sm text-text-secondary leading-relaxed">{item.caption || item.alt}</figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialog} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close() }} onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1) }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1) }
      }} aria-label={`${title} image viewer`} className="fixed inset-0 m-auto max-w-[96vw] max-h-[95dvh] w-[1200px] rounded-2xl border border-text-secondary/20 p-4 md:p-6 bg-background text-text-primary backdrop:bg-black/80 backdrop:backdrop-blur-sm">
        {screen && <>
          <div className="flex justify-between items-center gap-4 mb-4">
            <p className="text-sm font-bold">Image {selected! + 1} of {screens.length}</p>
            <button autoFocus onClick={() => dialog.current?.close()} className="rounded-full border border-text-secondary/20 px-4 py-2 text-sm font-bold focus-visible:outline-2 focus-visible:outline-text-primary">Close ×</button>
          </div>
          <div className="flex justify-center">
            <Image src={screen.src} alt={`${title} — ${screen.alt}`} width={screen.width} height={screen.height} unoptimized className="w-auto h-auto max-w-full max-h-[70dvh] object-contain" />
          </div>
          <div className="flex items-center justify-between gap-3 mt-4">
            <button onClick={() => move(-1)} aria-label="Previous image" className="border border-text-secondary/20 rounded-full px-4 py-2 font-bold">←</button>
            <p className="text-xs md:text-sm text-text-secondary text-center">{screen.caption || screen.alt}</p>
            <button onClick={() => move(1)} aria-label="Next image" className="border border-text-secondary/20 rounded-full px-4 py-2 font-bold">→</button>
          </div>
        </>}
      </dialog>
    </>
  )
}
