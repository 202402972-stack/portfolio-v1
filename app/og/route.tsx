import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: "80px", background: "#111827", color: "#fdfdfd" }}>
      <div style={{ display: "flex", fontSize: 24, color: "#9ca3af", marginBottom: 32 }}>PORTFOLIO</div>
      <div style={{ display: "flex", fontSize: 80, fontWeight: 700, letterSpacing: -3 }}>Abdelhamed Nada</div>
      <div style={{ display: "flex", fontSize: 32, marginTop: 32, color: "#d1d5db" }}>Full-Stack Developer · Frontend Specialist</div>
    </div>,
    { width: 1200, height: 630 },
  )
}
