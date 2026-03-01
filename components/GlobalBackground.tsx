"use client"

import Silk from "@/components/Silk"
import GradualBlur from "@/components/GradualBlur"

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Silk animado */}
      <Silk
        speed={5}
        scale={1}
        color="#062ecb"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>
  )
}