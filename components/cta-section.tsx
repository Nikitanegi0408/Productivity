import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ListTodo, Clock } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="border border-dashed border-border bg-card/50 p-8 text-center backdrop-blur-sm md:p-12">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Ready to boost your productivity?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            Start organizing your tasks and mastering your focus sessions. No sign up, no setup — just start.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/todo">
              <Button size="lg" className="group gap-2 px-8 text-base">
                <ListTodo className="size-4" />
                Start with Todo List
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/pomodoro">
              <Button size="lg" variant="outline" className="group gap-2 px-8 text-base bg-transparent">
                <Clock className="size-4" />
                Try Pomodoro Timer
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            100% free. No account needed. Your data never leaves your device.
          </p>
        </div>
      </div>
    </section>
  )
}
