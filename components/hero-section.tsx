import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-32 lg:py-40">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent)/0.05,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,var(--accent)/0.03,transparent_50%)]" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:bg-secondary">
          <Sparkles className="h-4 w-4 text-accent" />
          <span>Now with smart task prioritization</span>
        </div>

        {/* Main heading */}
        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Focus better.
          <br />
          <span className="text-muted-foreground">Achieve more.</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Combine the power of prioritized todo lists with the pomodoro technique. Stay focused, manage your tasks, and
          boost your productivity.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="group gap-2 px-8 text-base">
            Start for free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 text-base bg-transparent">
            See how it works
          </Button>
        </div>

        {/* Social proof */}
        <p className="mt-12 text-sm text-muted-foreground">
          Trusted by <span className="font-semibold text-foreground">10,000+</span> productive minds
        </p>
      </div>
    </section>
  )
}
