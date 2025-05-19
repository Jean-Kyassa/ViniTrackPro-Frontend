import { InventoryManagement } from "@/components/inventory-management"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function InventoryPage() {
  return (
    <DashboardLayout>
      <InventoryManagement />
    </DashboardLayout>
  )
}
