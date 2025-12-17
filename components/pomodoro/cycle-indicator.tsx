"use client"

interface CycleIndicatorProps {
  cyclesCompleted: number
  totalCycles?: number
}

export function CycleIndicator({
  cyclesCompleted,
  totalCycles = 4,
}: CycleIndicatorProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: totalCycles }).map((_, index) => (
        <div
          key={index}
          className={`h-3 w-3 rounded-full transition-colors duration-300 ${
            index < cyclesCompleted % totalCycles
              ? "bg-timer-focus shadow-[0_0_8px_hsl(var(--timer-focus))]"
              : "bg-border"
          }`}
        />
      ))}
    </div>
  )
}
