import { DashboardLayout } from "@/components/dashboard-layout"
import { ProductionPlanner } from "@/components/production-planner"

export default function ProductionPage() {
  return (
    <DashboardLayout>
      <ProductionPlanner />
    </DashboardLayout>
  )
}
