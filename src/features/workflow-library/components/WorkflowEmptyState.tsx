import { SearchX, Workflow as WorkflowIcon } from "lucide-react"

type WorkflowEmptyStateProps = {
  filtered: boolean
}

export function WorkflowEmptyState({ filtered }: WorkflowEmptyStateProps) {
  const Icon = filtered ? SearchX : WorkflowIcon

  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-lg border border-dashed bg-card/30 px-6 text-center">
      <div className="mb-4 grid size-10 place-items-center rounded-lg border bg-muted/50 text-muted-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h2 className="text-sm font-medium">{filtered ? "No workflows found" : "No workflows yet"}</h2>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">
        {filtered ? "Try changing your search to find another workflow." : "Create your first workflow to get started."}
      </p>
    </div>
  )
}
