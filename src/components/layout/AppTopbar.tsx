import { CheckCircle2, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AppTopbar() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b bg-background px-4">
      <div className="flex min-w-0 items-center gap-2 text-sm">
        <span className="hidden text-muted-foreground sm:inline">Workflows</span>
        <span className="hidden text-muted-foreground/50 sm:inline">/</span>
        <h1 className="truncate font-medium">Untitled workflow</h1>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="mr-1 hidden items-center gap-1.5 text-xs text-muted-foreground sm:flex"><CheckCircle2 className="size-3.5" aria-hidden="true" />Saved</span>
        <Button variant="outline" size="sm">Validate</Button>
        <Button size="sm"><Play data-icon="inline-start" />Run</Button>
      </div>
    </header>
  )
}
