import { useMemo, useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SAMPLE_WORKFLOWS } from "../data/sample-workflows"
import { WorkflowList } from "./WorkflowList"
import { WorkflowSearch } from "./WorkflowSearch"

export function WorkflowLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase()
  const filteredWorkflows = useMemo(() => {
    if (!normalizedQuery) return SAMPLE_WORKFLOWS

    return SAMPLE_WORKFLOWS.filter((workflow) =>
      `${workflow.name} ${workflow.description}`.toLocaleLowerCase().includes(normalizedQuery),
    )
  }, [normalizedQuery])

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      <header className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Workflows</h1>
          <p className="mt-1 text-sm text-muted-foreground">Create, organize, and manage your AI workflows.</p>
        </div>
        <Button>
          <Plus data-icon="inline-start" />
          New workflow
        </Button>
      </header>
      <section className="mt-8" aria-label="Workflow library">
        <div className="mb-4 flex items-center justify-between gap-4">
          <WorkflowSearch value={searchQuery} onChange={setSearchQuery} />
          <p className="hidden shrink-0 text-xs text-muted-foreground sm:block">
            {filteredWorkflows.length} {filteredWorkflows.length === 1 ? "workflow" : "workflows"}
          </p>
        </div>
        <WorkflowList workflows={filteredWorkflows} isFiltered={normalizedQuery.length > 0} />
      </section>
    </div>
  )
}
