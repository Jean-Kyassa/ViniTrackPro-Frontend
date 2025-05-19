import { AlertCircle, Clock, ShoppingCart } from "lucide-react"

interface Alert {
  id: number
  type: string
  title: string
  message: string
  time: string
}

interface AlertsListProps {
  alerts: Alert[]
}

export function AlertsList({ alerts }: AlertsListProps) {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "low-stock":
        return (
          <div className="bg-red-100 p-2 rounded-full">
            <AlertCircle className="h-5 w-5 text-red-600" />
          </div>
        )
      case "expiry":
        return (
          <div className="bg-amber-100 p-2 rounded-full">
            <Clock className="h-5 w-5 text-amber-600" />
          </div>
        )
      case "reorder":
        return (
          <div className="bg-blue-100 p-2 rounded-full">
            <ShoppingCart className="h-5 w-5 text-blue-600" />
          </div>
        )
      default:
        return (
          <div className="bg-gray-100 p-2 rounded-full">
            <AlertCircle className="h-5 w-5 text-gray-600" />
          </div>
        )
    }
  }

  const getAlertClass = (type: string) => {
    switch (type) {
      case "low-stock":
        return "bg-red-50 border-l-4 border-red-500"
      case "expiry":
        return "bg-amber-50 border-l-4 border-amber-500"
      case "reorder":
        return "bg-blue-50 border-l-4 border-blue-500"
      default:
        return "bg-gray-50 border-l-4 border-gray-500"
    }
  }

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div key={alert.id} className={`p-4 rounded-md ${getAlertClass(alert.type)}`}>
          <div className="flex items-start space-x-3">
            {getAlertIcon(alert.type)}
            <div>
              <p className="font-medium">{alert.title}</p>
              <p className="text-sm text-gray-600">{alert.message}</p>
              <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
