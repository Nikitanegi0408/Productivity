"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CheckSquare, Timer, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Todo List",
    href: "/todo",
    icon: CheckSquare,
  },
  {
    title: "Pomodoro",
    href: "/pomodoro",
    icon: Timer,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-16 border-r border-sidebar-border bg-sidebar">
      <div className="flex h-full flex-col items-center justify-between py-6">
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/"
            className="mb-6 flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground"
          >
            <span className="text-sm font-bold">F</span>
          </Link>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                  title={item.title}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </nav>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-10 w-10 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          title="Toggle theme"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </aside>
  )
}
