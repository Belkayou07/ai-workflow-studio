import { Focus, Minus, Plus, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WorkflowWorkspace() {
  return (
    <section aria-label="Workflow canvas" className="workflow-canvas relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
      <div className="mx-6 flex max-w-sm flex-col items-center text-center">
        <div className="mb-4 grid size-10 place-items-center rounded-lg border bg-card text-muted-foreground shadow-sm"><Workflow className="size-5" aria-hidden="true" /></div>
        <h2 className="text-base font-semibold tracking-tight">Build your first workflow</h2>
        <p className="mt-1.5 text-sm leading-5 text-muted-foreground">Add nodes and connect them here to shape how your workflow runs.</p>
        <Button className="mt-5"><Plus data-icon="inline-start" />Add first node</Button>
      </div>
      <div className="absolute bottom-4 left-4 flex items-center rounded-lg border bg-background p-0.5 shadow-sm" role="group" aria-label="Canvas zoom controls">
        <Button variant="ghost" size="icon-sm" aria-label="Zoom out" title="Zoom out"><Minus /></Button>
        <span className="w-11 text-center text-xs tabular-nums text-muted-foreground">100%</span>
        <Button variant="ghost" size="icon-sm" aria-label="Zoom in" title="Zoom in"><Plus /></Button>
        <div className="mx-0.5 h-4 w-px bg-border" aria-hidden="true" />
        <Button variant="ghost" size="icon-sm" aria-label="Fit view" title="Fit view"><Focus /></Button>
      </div>
    </section>
  )
}
