"use client"

import { useState, useEffect } from "react"
import {
  TodoInput,
  TodoList,
  Todo,
  Priority,
  priorityOrder,
} from "@/components/todo"

const STORAGE_KEY_ACTIVE = "todo-active"
const STORAGE_KEY_COMPLETED = "todo-completed"
const MAX_COMPLETED_TODOS = 5

export default function TodoPage() {
  const [activeTodos, setActiveTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load todos from localStorage on mount
  useEffect(() => {
    const storedActive = localStorage.getItem(STORAGE_KEY_ACTIVE)
    const storedCompleted = localStorage.getItem(STORAGE_KEY_COMPLETED)

    if (storedActive) {
      setActiveTodos(JSON.parse(storedActive))
    }
    if (storedCompleted) {
      setCompletedTodos(JSON.parse(storedCompleted))
    }
    setIsLoaded(true)
  }, [])

  // Save active todos to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(activeTodos))
    }
  }, [activeTodos, isLoaded])

  // Save completed todos to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedTodos))
    }
  }, [completedTodos, isLoaded])

  const addTodo = (text: string, priority: Priority) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      priority,
      completed: false,
    }
    setActiveTodos((prev) =>
      [...prev, newTodo].sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
      )
    )
  }

  const toggleTodo = (id: string) => {
    // Check if it's in active todos
    const activeTodo = activeTodos.find((todo) => todo.id === id)
    if (activeTodo) {
      // Move to completed
      const updatedTodo = { ...activeTodo, completed: true }
      setActiveTodos((prev) => prev.filter((todo) => todo.id !== id))
      setCompletedTodos((prev) => [updatedTodo, ...prev].slice(0, MAX_COMPLETED_TODOS))
      return
    }

    // Check if it's in completed todos
    const completedTodo = completedTodos.find((todo) => todo.id === id)
    if (completedTodo) {
      // Move back to active
      const updatedTodo = { ...completedTodo, completed: false }
      setCompletedTodos((prev) => prev.filter((todo) => todo.id !== id))
      setActiveTodos((prev) =>
        [...prev, updatedTodo].sort(
          (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
        )
      )
    }
  }

  const deleteActiveTodo = (id: string) => {
    setActiveTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const deleteCompletedTodo = (id: string) => {
    setCompletedTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // Sort active todos by priority (high first)
  const sortedActiveTodos = [...activeTodos].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  )

  if (!isLoaded) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="flex min-h-screen items-start justify-center p-8">
      <div className="w-full max-w-3xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-balance">
            Todo List
          </h1>
          <p className="mt-2 text-muted-foreground text-pretty">
            Manage your tasks with priority levels
          </p>
        </div>

        <TodoInput onAddTodo={addTodo} />

        <div className="space-y-6">
          <TodoList
            title="Active Tasks"
            todos={sortedActiveTodos}
            emptyMessage="No active tasks. Add one to get started!"
            onToggle={toggleTodo}
            onDelete={deleteActiveTodo}
          />

          {completedTodos.length > 0 && (
            <TodoList
              title="Completed"
              todos={completedTodos}
              onToggle={toggleTodo}
              onDelete={deleteCompletedTodo}
            />
          )}
        </div>
      </div>
    </div>
  )
}
