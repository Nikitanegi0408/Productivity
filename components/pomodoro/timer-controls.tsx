"use client"

import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"
import { TimerMode, isFocusMode } from "./types"

interface TimerControlsProps {
  isRunning: boolean
  mode: TimerMode
  onToggle: () => void
  onReset: () => void
}

export function TimerControls({
  isRunning,
  mode,
  onToggle,
  onReset,
}: TimerControlsProps) {
  const isFocus = isFocusMode(mode)

  return (
    <div className="flex gap-4">
      <Button
        size="lg"
        className={`h-14 w-14 rounded-full shadow-lg transition-all hover:scale-110 ${
          isFocus
            ? "bg-timer-focus hover:bg-timer-focus/90 shadow-timer-focus/30"
            : "bg-timer-rest hover:bg-timer-rest/90 shadow-timer-rest/30"
        }`}
        onClick={onToggle}
      >
        {isRunning ? (
          <Pause className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6 ml-0.5" />
        )}
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="h-14 w-14 rounded-full bg-transparent"
        onClick={onReset}
      >
        <RotateCcw className="h-5 w-5" />
      </Button>
    </div>
  )
}
