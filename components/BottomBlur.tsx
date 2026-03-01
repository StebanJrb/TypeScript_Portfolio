"use client"

export function BottomBlur() {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0
        h-40
        z-40
        pointer-events-none
        backdrop-blur-[6px]
        mask-gradient
      "
    />
  )
}