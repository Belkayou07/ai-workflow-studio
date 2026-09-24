import { AppSidebar } from "@/components/layout/AppSidebar"
import { AppTopbar } from "@/components/layout/AppTopbar"
import { InspectorPanel } from "@/features/workflow-editor/components/InspectorPanel"
import { WorkflowWorkspace } from "@/features/workflow-editor/components/WorkflowWorkspace"

export function AppShell() {
  return (
    <div className="dark grid h-dvh min-h-[520px] grid-cols-[64px_minmax(0,1fr)] overflow-hidden bg-background text-foreground md:grid-cols-[232px_minmax(0,1fr)] xl:grid-cols-[232px_minmax(0,1fr)_320px]">
      <AppSidebar />
      <main className="flex min-w-0 flex-col">
        <AppTopbar />
        <WorkflowWorkspace />
      </main>
      <InspectorPanel />
    </div>
  )
}
