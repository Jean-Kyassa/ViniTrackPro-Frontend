"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Plus, X } from "lucide-react"
import Link from "next/link"

export function CreateRouteForm() {
  const router = useRouter()
  const [orders, setOrders] = useState([
    { id: "#ORD-1234", address: "123 Main St, City" },
    { id: "#ORD-1235", address: "456 Oak Ave, Town" },
  ])

  const handleSaveRoute = () => {
    // In a real app, this would save the route data
    router.push("/logistics/routes")
  }

  const handleCancel = () => {
    router.push("/logistics/routes")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/logistics/routes">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Create Delivery Route</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSaveRoute}>Save Route</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Route Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Route Name</label>
                  <Input placeholder="Enter route name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Driver</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select driver" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mike-johnson">Mike Johnson</SelectItem>
                      <SelectItem value="sarah-wilson">Sarah Wilson</SelectItem>
                      <SelectItem value="david-brown">David Brown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Vehicle</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="van-1">Delivery Van #1</SelectItem>
                      <SelectItem value="truck-1">Cargo Truck #1</SelectItem>
                      <SelectItem value="van-2">Delivery Van #2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Date</label>
                  <Input type="date" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Delivery Orders</h2>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Plus className="h-4 w-4 mr-1" /> Add Order
                </Button>
              </div>
              <div className="space-y-3">
                {orders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gray-100 p-2 rounded">
                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-gray-500">{order.address}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Route Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-blue-600">Total Distance</p>
                  <p className="text-xl font-semibold">24.5 km</p>
                </div>
                <div>
                  <p className="text-sm text-green-600">Est. Duration</p>
                  <p className="text-xl font-semibold">1h 45m</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600">Total Stops</p>
                  <p className="text-xl font-semibold">8</p>
                </div>
                <div>
                  <p className="text-sm text-orange-600">Total Load</p>
                  <p className="text-xl font-semibold">245 kg</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Route Map</h2>
            <div className="bg-gray-100 rounded-lg h-[500px] flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-muted-foreground mb-2">Route map visualization</p>
                <p className="text-xs text-muted-foreground">
                  Interactive map will display delivery route with multiple stops
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
