import type { Workflow } from "@shared/workflows"

// Temporary development data. Replace this with the workflow repository later.
export const SAMPLE_WORKFLOWS: Workflow[] = [
  {
    schemaVersion: 1,
    id: "research-assistant",
    name: "Research Assistant",
    description: "Collects sources, extracts key findings, and prepares a concise research brief.",
    createdAt: "2026-08-14T09:30:00.000Z",
    updatedAt: "2026-09-22T14:18:00.000Z",
    nodes: [],
    edges: [],
  },
  {
    schemaVersion: 1,
    id: "content-pipeline",
    name: "Content Pipeline",
    description: "Turns an initial topic into a structured draft ready for editorial review.",
    createdAt: "2026-07-03T11:00:00.000Z",
    updatedAt: "2026-09-18T08:42:00.000Z",
    nodes: [],
    edges: [],
  },
  {
    schemaVersion: 1,
    id: "api-analyzer",
    name: "API Analyzer",
    description: "Reviews API specifications and summarizes endpoints, schemas, and potential issues.",
    createdAt: "2026-06-21T15:45:00.000Z",
    updatedAt: "2026-09-11T16:05:00.000Z",
    nodes: [],
    edges: [],
  },
  {
    schemaVersion: 1,
    id: "support-triage",
    name: "Support Triage",
    description: "Classifies incoming support requests and prepares them for the right team.",
    createdAt: "2026-09-01T10:12:00.000Z",
    updatedAt: "2026-09-09T12:30:00.000Z",
    nodes: [],
    edges: [],
  },
]
