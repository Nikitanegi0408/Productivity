import { Clock, ListTodo, Zap, Shield, RefreshCw, Sparkles } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: ListTodo,
      title: "Priority-based Tasks",
      description: "Organize tasks by high, medium, and low priority. High priority items always appear at the top.",
      color: "text-timer-focus",
      bgColor: "bg-timer-focus/10",
    },
    {
      icon: Clock,
      title: "Pomodoro Timer",
      description: "25-minute focus sessions with short and long breaks. Visual cues help you stay in the zone.",
      color: "text-timer-rest",
      bgColor: "bg-timer-rest/10",
    },
    {
      icon: Shield,
      title: "100% Private",
      description: "All data stays in your browser. No accounts, no servers, no tracking. Your tasks are yours alone.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: RefreshCw,
      title: "Persistent Storage",
      description: "Your tasks and progress are saved locally. Come back anytime and pick up where you left off.",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      icon: Zap,
      title: "Instant & Fast",
      description: "No loading screens or network delays. Everything runs locally for lightning-fast performance.",
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
    {
      icon: Sparkles,
      title: "Simple by Design",
      description: "No clutter, no distractions. Just a clean interface to help you focus on getting things done.",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
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
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative border border-dashed border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className={`flex size-12 items-center justify-center ${feature.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
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
