import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ListTodo, Clock, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-32 lg:py-40">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--primary)/0.08,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,var(--primary)/0.05,transparent_50%)]" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
          <Shield className="size-4 text-primary" />
          <span>100% private — all data stays in your browser</span>
        </div>

        {/* Main heading */}
        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Focus better.
          <br />
          <span className="text-muted-foreground">Achieve more.</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          A simple, privacy-first productivity app. Prioritized todo lists and pomodoro timer — 
          no accounts, no servers, just you and your tasks.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/todo">
            <Button size="lg" className="group gap-2 px-8 text-base">
              <ListTodo className="size-4" />
              Open Todo List
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/pomodoro">
            <Button size="lg" variant="outline" className="group gap-2 px-8 text-base bg-transparent">
              <Clock className="size-4" />
              Start Pomodoro
            </Button>
          </Link>
        </div>

        {/* Value props */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-timer-rest" />
            <span>No sign up required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-timer-rest" />
            <span>Works offline</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-timer-rest" />
            <span>Free forever</span>
          </div>
        </div>
      </div>
    </section>
  )
}
