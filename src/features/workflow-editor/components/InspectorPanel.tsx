import { MessageSquare, MousePointer2 } from "lucide-react"

export function InspectorPanel() {
  return (
    <aside className="hidden min-h-0 flex-col border-l bg-card xl:flex">
      <div className="flex h-14 shrink-0 items-end gap-5 border-b px-4" role="tablist" aria-label="Details panel">
        <button type="button" role="tab" aria-selected="true" className="relative h-full px-0.5 text-sm font-medium outline-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-foreground focus-visible:ring-2 focus-visible:ring-ring">Inspector</button>
        <button type="button" role="tab" aria-selected="false" className="h-full px-0.5 text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">Assistant</button>
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-4">
        <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
          <div className="mb-3 grid size-9 place-items-center rounded-lg border bg-background text-muted-foreground"><MousePointer2 className="size-4" aria-hidden="true" /></div>
          <h2 className="text-sm font-medium">Nothing selected</h2>
          <p className="mt-1.5 max-w-[230px] text-xs leading-5 text-muted-foreground">Select a node on the canvas and its settings will appear here.</p>
        </div>
        <div className="border-t pt-4">
          <div className="flex gap-3">
            <MessageSquare className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <div><p className="text-xs font-medium">AI Assistant</p><p className="mt-1 text-xs leading-4 text-muted-foreground">Ask for help designing your workflow</p></div>
          </div>
        </div>
      </div>
    </aside>
  )
}
