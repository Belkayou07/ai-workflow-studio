import { MoreHorizontal, Workflow as WorkflowIcon } from "lucide-react"
import type { Workflow } from "@/domain/workflows"

type WorkflowListItemProps = {
  workflow: Workflow
}

const updatedDateFormatter = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "short",
  day: "numeric",
})

export function WorkflowListItem({ workflow }: WorkflowListItemProps) {
  const nodeLabel = `${workflow.nodes.length} ${workflow.nodes.length === 1 ? "node" : "nodes"}`

  return (
    <li className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 transition-colors hover:bg-accent/40 sm:gap-4 sm:px-5">
      <div className="grid size-9 place-items-center rounded-md border bg-muted/45 text-muted-foreground transition-colors group-hover:text-foreground">
        <WorkflowIcon className="size-4" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <h2 className="truncate text-sm font-medium">{workflow.name}</h2>
          <span className="hidden text-border sm:block" aria-hidden="true">•</span>
          <span className="shrink-0 text-xs text-muted-foreground">{nodeLabel}</span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm leading-5 text-muted-foreground">{workflow.description}</p>
        <p className="mt-2 text-xs text-muted-foreground/80">
          Updated <time dateTime={workflow.updatedAt}>{updatedDateFormatter.format(new Date(workflow.updatedAt))}</time>
        </p>
      </div>
      <button
        type="button"
        aria-label={`More options for ${workflow.name}`}
        title={`More options for ${workflow.name}`}
        className="grid size-8 shrink-0 place-items-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <MoreHorizontal className="size-4" aria-hidden="true" />
      </button>
    </li>
  )
}
