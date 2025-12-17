"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pencil, Check } from "lucide-react"

interface TaskDisplayProps {
  task: string
  onTaskChange: (task: string) => void
}

export function TaskDisplay({ task, onTaskChange }: TaskDisplayProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [taskInput, setTaskInput] = useState(task)

  const handleEdit = () => {
    if (isEditing) {
      onTaskChange(taskInput)
    }
    setIsEditing(!isEditing)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onTaskChange(taskInput)
      setIsEditing(false)
    }
    if (e.key === "Escape") {
      setTaskInput(task)
      setIsEditing(false)
    }
  }

  return (
    <div className="flex items-center gap-3">
      {!isEditing ? (
        <>
          <div className="text-lg text-muted-foreground">
            Current Task:{" "}
            <span className="font-medium text-foreground">{task}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleEdit}
          >
            <Pencil className="h-4 w-4" />
          </Button>
        </>
      ) : (
        <>
          <Input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="max-w-xs"
            autoFocus
            placeholder="Enter task name"
          />
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleEdit}
          >
            <Check className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  )
}
