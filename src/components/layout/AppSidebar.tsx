import { CircleHelp, FileCode2, LayoutTemplate, Plus, Settings, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const mainNavigation = [
  { label: "Workflows", icon: Workflow, active: true },
  { label: "Templates", icon: LayoutTemplate },
]
const recentWorkflows = ["Research Assistant", "Content Pipeline", "API Analyzer"]
const bottomNavigation = [
  { label: "Settings", icon: Settings },
  { label: "Help", icon: CircleHelp },
]

export function AppSidebar() {
  return (
    <aside className="flex min-h-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      <div className="flex h-14 items-center gap-2.5 border-b border-sidebar-border px-3 md:px-4">
        <div className="grid size-7 shrink-0 place-items-center rounded-md border border-sidebar-border bg-sidebar-accent text-sidebar-accent-foreground">
          <Workflow className="size-4" aria-hidden="true" />
        </div>
        <span className="hidden truncate text-sm font-semibold tracking-tight md:block">AI Workflow Studio</span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-5 px-2 py-3 md:px-3">
        <Button className="w-full md:justify-start" aria-label="New workflow">
          <Plus data-icon="inline-start" /><span className="hidden md:inline">New workflow</span>
        </Button>
        <nav aria-label="Primary navigation" className="space-y-1">
          {mainNavigation.map(({ label, icon: Icon, active }) => (
            <button type="button" key={label} aria-current={active ? "page" : undefined} title={label}
              className={cn("flex h-8 w-full items-center justify-center gap-2 rounded-md px-2 text-sm text-sidebar-foreground/65 outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring md:justify-start", active && "bg-sidebar-accent font-medium text-sidebar-accent-foreground")}>
              <Icon className="size-4 shrink-0" aria-hidden="true" /><span className="hidden md:inline">{label}</span>
            </button>
          ))}
        </nav>
        <div className="hidden min-h-0 md:block">
          <p className="mb-2 px-2 text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Workspace</p>
          <nav aria-label="Recent workflows" className="space-y-0.5">
            {recentWorkflows.map((workflow) => (
              <button type="button" key={workflow} className="flex h-8 w-full items-center gap-2 rounded-md px-2 text-sm text-sidebar-foreground/65 outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring">
                <FileCode2 className="size-3.5 shrink-0" aria-hidden="true" /><span className="truncate">{workflow}</span>
              </button>
            ))}
          </nav>
        </div>
        <nav aria-label="Support navigation" className="mt-auto space-y-1">
          {bottomNavigation.map(({ label, icon: Icon }) => (
            <button type="button" key={label} title={label} className="flex h-8 w-full items-center justify-center gap-2 rounded-md px-2 text-sm text-sidebar-foreground/65 outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring md:justify-start">
              <Icon className="size-4 shrink-0" aria-hidden="true" /><span className="hidden md:inline">{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}
