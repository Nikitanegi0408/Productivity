"use client"

import { TimerMode, getModeTime, isFocusMode } from "./types"

interface TimerDisplayProps {
  timeLeft: number
  mode: TimerMode
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}

export function TimerDisplay({ timeLeft, mode }: TimerDisplayProps) {
  const total = getModeTime(mode)
  const progress = ((total - timeLeft) / total) * 100
  const isFocus = isFocusMode(mode)

  const colorClass = isFocus ? "text-timer-focus" : "text-timer-rest"
  const strokeClass = isFocus ? "stroke-timer-focus" : "stroke-timer-rest"
  const glowBgClass = isFocus ? "bg-timer-focus" : "bg-timer-rest"

  const circumference = 2 * Math.PI * 140
  const strokeDashoffset = circumference * (1 - progress / 100)

  return (
    <div className="relative">
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-full blur-2xl opacity-30 transition-colors duration-500 ${glowBgClass}`}
      />

      {/* SVG Circle */}
      <svg className="relative -rotate-90 transform" width="320" height="320">
        {/* Background circle */}
        <circle
          cx="160"
          cy="160"
          r="140"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-border opacity-20"
        />
        {/* Progress circle */}
        <circle
          cx="160"
          cy="160"
          r="140"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className={`transition-all duration-1000 ${strokeClass}`}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            filter: "drop-shadow(0 0 8px currentColor)",
          }}
        />
      </svg>

      {/* Timer Display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`text-7xl font-bold tracking-tight transition-colors duration-500 ${colorClass}`}
        >
          {formatTime(timeLeft)}
        </div>
      </div>
    </div>
  )
}
