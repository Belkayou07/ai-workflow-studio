import type { Workflow } from "./workflow.schema"

export function createWorkflow(
  name = "Untitled workflow",
): Workflow {
  const timestamp = new Date().toISOString()
  const workflowName = name.trim() || "Untitled workflow"

  return {
    schemaVersion: 1,
    id: crypto.randomUUID(),
    name: workflowName,
    description: "",
    createdAt: timestamp,
    updatedAt: timestamp,
    nodes: [],
    edges: [],
  }
}