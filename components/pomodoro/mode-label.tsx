"use client"

import { TimerMode, getModeLabel, isFocusMode } from "./types"

interface ModeLabelProps {
  mode: TimerMode
}

export function ModeLabel({ mode }: ModeLabelProps) {
  const isFocus = isFocusMode(mode)
  const colorClass = isFocus ? "text-timer-focus" : "text-timer-rest"

  return (
    <div
      className={`text-xl font-medium transition-colors duration-500 ${colorClass}`}
    >
      {getModeLabel(mode)}
    </div>
  )
}
