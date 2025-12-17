export type TimerMode = "focus" | "shortBreak" | "longBreak"

export const TIMER_CONSTANTS = {
  FOCUS_TIME: 25 * 60, // 25 minutes
  SHORT_BREAK: 5 * 60, // 5 minutes
  LONG_BREAK: 15 * 60, // 15 minutes
  CYCLES_BEFORE_LONG_BREAK: 4,
} as const

export function getModeLabel(mode: TimerMode): string {
  switch (mode) {
    case "focus":
      return "Focus"
    case "shortBreak":
      return "Short Break"
    case "longBreak":
      return "Long Break"
  }
}

export function getModeTime(mode: TimerMode): number {
  switch (mode) {
    case "focus":
      return TIMER_CONSTANTS.FOCUS_TIME
    case "shortBreak":
      return TIMER_CONSTANTS.SHORT_BREAK
    case "longBreak":
      return TIMER_CONSTANTS.LONG_BREAK
  }
}

export function isFocusMode(mode: TimerMode): boolean {
  return mode === "focus"
}
