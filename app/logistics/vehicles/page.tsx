import { DashboardLayout } from "@/components/dashboard-layout"
import { VehicleFleetManagement } from "@/components/vehicle-fleet-management"

export default function VehiclesPage() {
  return (
    <DashboardLayout>
      <VehicleFleetManagement />
    </DashboardLayout>
  )
}
