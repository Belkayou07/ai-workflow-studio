import type { Workflow } from "@/domain/workflows"
import { WorkflowEmptyState } from "./WorkflowEmptyState"
import { WorkflowListItem } from "./WorkflowListItem"

type WorkflowListProps = {
  workflows: Workflow[]
  isFiltered: boolean
}

export function WorkflowList({ workflows, isFiltered }: WorkflowListProps) {
  if (workflows.length === 0) {
    return <WorkflowEmptyState filtered={isFiltered} />
  }

  return (
    <ul className="divide-y overflow-hidden rounded-lg border bg-card/45" aria-label="Workflows">
      {workflows.map((workflow) => <WorkflowListItem key={workflow.id} workflow={workflow} />)}
    </ul>
  )
}
