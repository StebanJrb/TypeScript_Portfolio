"use client"

import Silk from "./Silk"

export default function SilkBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Silk
        speed={7}
        scale={1.5}
        color="#00167a"
        noiseIntensity={2.1}
        rotation={0}
      />

      {/* Overlay del theme (esto reemplaza bg-background en body) */}
      <div className="absolute inset-0 bg-background/80" />
    </div>
  )
}

