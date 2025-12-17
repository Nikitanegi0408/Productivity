"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Priority } from "./types"

interface TodoInputProps {
  onAddTodo: (text: string, priority: Priority) => void
}

export function TodoInput({ onAddTodo }: TodoInputProps) {
  const [newTodoText, setNewTodoText] = useState("")
  const [newTodoPriority, setNewTodoPriority] = useState<Priority>("medium")

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      onAddTodo(newTodoText, newTodoPriority)
      setNewTodoText("")
      setNewTodoPriority("medium")
    }
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex gap-3">
          <Input
            placeholder="Add a new todo..."
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTodo()
              }
            }}
            className="flex-1"
          />
          <Select
            value={newTodoPriority}
            onValueChange={(value) =>
              value && setNewTodoPriority(value as Priority)
            }
          >
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleAddTodo}>Add</Button>
        </div>
      </div>
    </Card>
  )
}
