import { Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center bg-foreground">
            <span className="text-sm font-bold text-background">F</span>
          </div>
          <span className="font-semibold text-foreground">FocusFlow</span>
        </div>

        <nav className="flex items-center gap-2">
          <Link
            href="/todo"
            className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            Todo List
          </Link>
          <Link
            href="/pomodoro"
            className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            Pomodoro
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={social.label}
            >
              <social.icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-6xl text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 FocusFlow. Your data stays in your browser — always private, always yours.
        </p>
      </div>
    </footer>
  )
}
