"use client"

import { useState, useEffect, useRef } from "react"
import {
  CycleIndicator,
  ModeLabel,
  TaskDisplay,
  TimerControls,
  TimerDisplay,
  TimerMode,
  TIMER_CONSTANTS,
  getModeTime,
} from "@/components/pomodoro"

export default function PomodoroPage() {
  const [timeLeft, setTimeLeft] = useState(TIMER_CONSTANTS.FOCUS_TIME)
  const [isRunning, setIsRunning] = useState(false)
  const [mode, setMode] = useState<TimerMode>("focus")
  const [cyclesCompleted, setCyclesCompleted] = useState(0)
  const [currentTask, setCurrentTask] = useState("Deep Work Session")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

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
      if (newCycles % TIMER_CONSTANTS.CYCLES_BEFORE_LONG_BREAK === 0) {
        setMode("longBreak")
        setTimeLeft(TIMER_CONSTANTS.LONG_BREAK)
      } else {
        setMode("shortBreak")
        setTimeLeft(TIMER_CONSTANTS.SHORT_BREAK)
      }
    } else {
      setMode("focus")
      setTimeLeft(TIMER_CONSTANTS.FOCUS_TIME)
    }
  }

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(getModeTime(mode))
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8 text-center">
        <ModeLabel mode={mode} />

        <TimerDisplay timeLeft={timeLeft} mode={mode} />

        <TaskDisplay task={currentTask} onTaskChange={setCurrentTask} />

        <CycleIndicator cyclesCompleted={cyclesCompleted} />

        <TimerControls
          isRunning={isRunning}
          mode={mode}
          onToggle={toggleTimer}
          onReset={resetTimer}
        />
      </div>
    </div>
  )
}
