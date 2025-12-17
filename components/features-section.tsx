import { CheckCircle2, Clock, Flame, ListTodo, Target, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: ListTodo,
      title: "Priority-based Tasks",
      description: "Organize tasks by high, medium, and low priority. Focus on what matters most.",
    },
    {
      icon: Clock,
      title: "Pomodoro Timer",
      description: "Built-in 25-minute focus sessions with breaks. Maximize your productivity cycles.",
    }
  ]

  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to stay productive
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Simple yet powerful features designed to help you focus on what truly matters.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-secondary transition-colors group-hover:bg-accent/10">
                <feature.icon className="h-6 w-6 text-foreground transition-colors group-hover:text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
