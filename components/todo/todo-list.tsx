"use client"

import { Card } from "@/components/ui/card"
import { TodoItem } from "./todo-item"
import { Todo } from "./types"

interface TodoListProps {
  title: string
  todos: Todo[]
  emptyMessage?: string
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoList({
  title,
  todos,
  emptyMessage,
  onToggle,
  onDelete,
}: TodoListProps) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="space-y-2">
        {todos.length === 0 ? (
          emptyMessage && (
            <Card className="p-6">
              <p className="text-center text-muted-foreground">{emptyMessage}</p>
            </Card>
          )
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  )
}
