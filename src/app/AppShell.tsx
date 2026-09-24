import { AppSidebar } from "@/components/layout/AppSidebar"
import { WorkflowLibraryPage } from "@/features/workflow-library/components/WorkflowLibraryPage"

export function AppShell() {
  return (
    <div className="dark grid h-dvh min-h-[520px] grid-cols-[64px_minmax(0,1fr)] overflow-hidden bg-background text-foreground md:grid-cols-[232px_minmax(0,1fr)]">
      <AppSidebar />
      <main className="min-w-0 overflow-y-auto">
        <WorkflowLibraryPage />
      </main>
    </div>
  )
}
