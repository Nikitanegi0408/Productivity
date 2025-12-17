import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Ready to boost your productivity?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
          Join thousands of people who have transformed how they work. Start focusing on what matters today.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="group gap-2 px-8 text-base">
            Get started free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 text-base bg-transparent">
            Learn more
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">No credit card required. Free forever for personal use.</p>
      </div>
    </section>
  )
}
