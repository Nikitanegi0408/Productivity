"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play, Pause, RotateCcw, Pencil, Check } from "lucide-react"

type TimerMode = "focus" | "shortBreak" | "longBreak"

export default function PomodoroPage() {
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [mode, setMode] = useState<TimerMode>("focus")
  const [cyclesCompleted, setCyclesCompleted] = useState(0)
  const [currentTask, setCurrentTask] = useState("Deep Work Session")
  const [isEditingTask, setIsEditingTask] = useState(false)
  const [taskInput, setTaskInput] = useState(currentTask)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const FOCUS_TIME = 25 * 60 // 25 minutes
  const SHORT_BREAK = 5 * 60 // 5 minutes
  const LONG_BREAK = 15 * 60 // 15 minutes

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimerComplete()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, timeLeft])

  const handleTimerComplete = () => {
    setIsRunning(false)

    if (mode === "focus") {
      const newCycles = cyclesCompleted + 1
      setCyclesCompleted(newCycles)

      // After 4 focus sessions, take a long break
      if (newCycles % 4 === 0) {
        setMode("longBreak")
        setTimeLeft(LONG_BREAK)
      } else {
        setMode("shortBreak")
        setTimeLeft(SHORT_BREAK)
      }
    } else {
      setMode("focus")
      setTimeLeft(FOCUS_TIME)
    }
  }

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    if (mode === "focus") {
      setTimeLeft(FOCUS_TIME)
    } else if (mode === "shortBreak") {
      setTimeLeft(SHORT_BREAK)
    } else {
      setTimeLeft(LONG_BREAK)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const getProgress = () => {
    const total = mode === "focus" ? FOCUS_TIME : mode === "shortBreak" ? SHORT_BREAK : LONG_BREAK
    return ((total - timeLeft) / total) * 100
  }

  const getModeColor = () => {
    if (mode === "focus") {
      return "text-[hsl(var(--timer-focus))]"
    }
    return "text-[hsl(var(--timer-rest))]"
  }

  const getStrokeColor = () => {
    if (mode === "focus") {
      return "stroke-[hsl(var(--timer-focus))]"
    }
    return "stroke-[hsl(var(--timer-rest))]"
  }

  const getModeLabel = () => {
    if (mode === "focus") return "Focus"
    if (mode === "shortBreak") return "Short Break"
    return "Long Break"
  }

  const handleEditTask = () => {
    if (isEditingTask) {
      setCurrentTask(taskInput)
    }
    setIsEditingTask(!isEditingTask)
  }

  const handleTaskKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCurrentTask(taskInput)
      setIsEditingTask(false)
    }
    if (e.key === "Escape") {
      setTaskInput(currentTask)
      setIsEditingTask(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Mode Label */}
        <div className={`text-xl font-medium transition-colors ${getModeColor()}`}>{getModeLabel()}</div>

        {/* Circular Progress Timer */}
        <div className="relative">
          {/* Glow effect */}
          <div
            className={`absolute inset-0 rounded-full blur-2xl opacity-30 ${mode === "focus" ? "bg-[hsl(var(--timer-focus))]" : "bg-[hsl(var(--timer-rest))]"}`}
          />

          {/* SVG Circle */}
          <svg className="relative -rotate-90 transform" width="320" height="320">
            {/* Background circle */}
            <circle
              cx="160"
              cy="160"
              r="140"
              stroke="hsl(var(--border))"
              strokeWidth="8"
              fill="none"
              className="opacity-20"
            />
            {/* Progress circle */}
            <circle
              cx="160"
              cy="160"
              r="140"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className={`transition-all duration-1000 ${getStrokeColor()}`}
              style={{
                strokeDasharray: `${2 * Math.PI * 140}`,
                strokeDashoffset: `${2 * Math.PI * 140 * (1 - getProgress() / 100)}`,
                filter: "drop-shadow(0 0 8px currentColor)",
              }}
            />
          </svg>

          {/* Timer Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-7xl font-bold tracking-tight transition-colors ${getModeColor()}`}>
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        {/* Current Task */}
        <div className="flex items-center gap-3">
          {!isEditingTask ? (
            <>
              <div className="text-lg text-muted-foreground">
                Current Task: <span className="font-medium text-foreground">{currentTask}</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleEditTask}>
                <Pencil className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Input
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                onKeyDown={handleTaskKeyDown}
                className="max-w-xs"
                autoFocus
                placeholder="Enter task name"
              />
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleEditTask}>
                <Check className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {/* Cycle Tracking Dots */}
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full transition-colors ${
                index < cyclesCompleted % 4 ? "bg-[hsl(var(--timer-focus))]" : "bg-border"
              }`}
            />
          ))}
        </div>

        {/* Control Buttons */}
        <div className="flex gap-4">
          <Button
            size="lg"
            className={`h-14 w-14 rounded-full shadow-lg transition-all hover:scale-110 ${
              mode === "focus"
                ? "bg-[hsl(var(--timer-focus))] hover:bg-[hsl(var(--timer-focus))]/90"
                : "bg-[hsl(var(--timer-rest))] hover:bg-[hsl(var(--timer-rest))]/90"
            }`}
            onClick={toggleTimer}
          >
            {isRunning ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
          </Button>
          <Button size="lg" variant="outline" className="h-14 w-14 rounded-full bg-transparent" onClick={resetTimer}>
            <RotateCcw className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
