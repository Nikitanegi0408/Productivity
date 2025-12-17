"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical, Trash2 } from "lucide-react"
import { Todo, priorityColors } from "./types"

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <Card
      className={`p-4 transition-colors hover:bg-accent/50 ${
        todo.completed ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
        />
        <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
        <span
          className={`text-sm font-medium capitalize ${priorityColors[todo.priority]}`}
        >
          {todo.priority}
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger>
              <MoreVertical className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => onDelete(todo.id)}
              className="text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  )
}
