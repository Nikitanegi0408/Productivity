export type Priority = "low" | "medium" | "high"

export interface Todo {
  id: string
  text: string
  priority: Priority
  completed: boolean
}

export const priorityColors = {
  low: "text-blue-500",
  medium: "text-yellow-500",
  high: "text-red-500",
}

export const priorityOrder: Record<Priority, number> = {
  high: 0,
  medium: 1,
  low: 2,
}
