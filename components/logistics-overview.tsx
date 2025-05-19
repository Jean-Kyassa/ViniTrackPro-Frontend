"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Clock, Truck, Users, Plus } from "lucide-react"
import Link from "next/link"

export function LogisticsOverview() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("dashboard")

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    if (value === "orders") {
      router.push("/logistics/orders")
    } else if (value === "routes") {
      router.push("/logistics/routes")
    } else if (value === "analytics") {
      router.push("/logistics/analytics")
    }
  }

  const handleNewOrder = () => {
    router.push("/logistics/new-order")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">DeliveryOps</h1>
          <p className="text-sm text-muted-foreground">Manage your wine deliveries and logistics</p>
        </div>
        <Tabs defaultValue="dashboard" className="w-[400px]" onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="routes">Routes</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Pending Orders</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">124</span>
                <Clock className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-muted-foreground">In Transit</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">85</span>
                <Truck className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Delivered Today</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">296</span>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Active Drivers</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">18</span>
                <Users className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-medium">Recent Orders</h3>
              <div className="flex space-x-2">
                <Link href="/logistics/orders">
                  <Button variant="outline">View All Orders</Button>
                </Link>
                <Button onClick={handleNewOrder} className="flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  New Order
                </Button>
              </div>
            </div>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Driver</TableHead>
                    <TableHead>ETA</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-2025</TableCell>
                    <TableCell>John Smith</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">In Transit</Badge>
                    </TableCell>
                    <TableCell>Mike Johnson</TableCell>
                    <TableCell>14:30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-2024</TableCell>
                    <TableCell>Sarah Davis</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Delivered</Badge>
                    </TableCell>
                    <TableCell>Tom Wilson</TableCell>
                    <TableCell>13:15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-2023</TableCell>
                    <TableCell>Emma Brown</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Pending</Badge>
                    </TableCell>
                    <TableCell>Unassigned</TableCell>
                    <TableCell>--</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-medium">Active Routes</h3>
              <Link href="/logistics/routes">
                <Button variant="outline" size="sm">
                  View All Routes
                </Button>
              </Link>
            </div>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="border rounded-md p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Route #1</p>
                      <p className="text-sm text-muted-foreground">8 deliveries</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">On Track</p>
                      <p className="text-xs text-muted-foreground">ETA: 2h 15m</p>
                    </div>
                  </div>
                </div>
                <div className="border rounded-md p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Route #2</p>
                      <p className="text-sm text-muted-foreground">6 deliveries</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-amber-600">Delayed</p>
                      <p className="text-xs text-muted-foreground">ETA: 1h 45m</p>
                    </div>
                  </div>
                </div>
                <div className="border rounded-md p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Route #3</p>
                      <p className="text-sm text-muted-foreground">5 deliveries</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">On Track</p>
                      <p className="text-xs text-muted-foreground">ETA: 1h 30m</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-medium">Driver Performance</h3>
              <Link href="/logistics/analytics">
                <Button variant="outline" size="sm">
                  View Analytics
                </Button>
              </Link>
            </div>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Mike Johnson</span>
                    <span className="text-sm font-medium text-green-600">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Tom Wilson</span>
                    <span className="text-sm font-medium text-green-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
