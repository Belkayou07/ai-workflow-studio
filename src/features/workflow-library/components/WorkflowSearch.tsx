import { Search } from "lucide-react"

type WorkflowSearchProps = {
  value: string
  onChange: (value: string) => void
}

export function WorkflowSearch({ value, onChange }: WorkflowSearchProps) {
  return (
    <div className="relative w-full sm:max-w-sm">
      <label htmlFor="workflow-search" className="sr-only">Search workflows</label>
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <input
        id="workflow-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search workflows..."
        className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
      />
    </div>
  )
}
