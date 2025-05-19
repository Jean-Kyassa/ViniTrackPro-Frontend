"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, Calendar, CircleAlert, Database, FileText, HelpCircle, Info } from "lucide-react"

export function ProductionPlanner() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard")}>
            <ArrowUp className="h-5 w-5 rotate-90" />
          </Button>
          <h1 className="text-2xl font-bold">Production Planner</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/production"
            className={`px-4 py-2 ${activeTab === "dashboard" ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </Link>
          <Link
            href="/production/schedule"
            className={`px-4 py-2 ${activeTab === "schedule" ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}
            onClick={() => setActiveTab("schedule")}
          >
            Schedule
          </Link>
          <Link
            href="/production/inventory"
            className={`px-4 py-2 ${activeTab === "inventory" ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}
            onClick={() => setActiveTab("inventory")}
          >
            Inventory
          </Link>
          <Link
            href="/production/reports"
            className={`px-4 py-2 ${activeTab === "reports" ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}
            onClick={() => setActiveTab("reports")}
          >
            Reports
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Info className="h-5 w-5" />
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon">
              <CircleAlert className="h-5 w-5" />
            </Button>
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </div>
          <img src="/placeholder.svg?height=32&width=32" alt="User" className="h-8 w-8 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Daily Production</div>
                <div className="text-2xl font-bold mt-1">12,450 units</div>
                <div className="flex items-center text-sm text-green-500 mt-1">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>3.2% vs yesterday</span>
                </div>
              </div>
              <div className="bg-blue-50 p-2 rounded-full">
                <FileText className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Efficiency Rate</div>
                <div className="text-2xl font-bold mt-1">94.3%</div>
                <div className="flex items-center text-sm text-green-500 mt-1">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>2.1% vs target</span>
                </div>
              </div>
              <div className="bg-blue-50 p-2 rounded-full">
                <HelpCircle className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Current Orders</div>
                <div className="text-2xl font-bold mt-1">89</div>
                <div className="flex items-center text-sm text-amber-500 mt-1">
                  <span>12 pending</span>
                </div>
              </div>
              <div className="bg-blue-50 p-2 rounded-full">
                <FileText className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Inventory Level</div>
                <div className="text-2xl font-bold mt-1">78%</div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span>Optimal range</span>
                </div>
              </div>
              <div className="bg-blue-50 p-2 rounded-full">
                <Database className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Production Schedule</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Today
            </Button>
            <Link href="/production/schedule/new">
              <Button size="sm">
                <span className="mr-1">+</span> New Schedule
              </Button>
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-500">Product</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Batch</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Quantity</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Start Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Premium Water 500ml</td>
                <td className="py-3 px-4">#B2025-001</td>
                <td className="py-3 px-4">5,000</td>
                <td className="py-3 px-4">08:00 AM</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">In Progress</span>
                </td>
                <td className="py-3 px-4">
                  <Progress value={75} className="h-2 w-full" />
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">Sparkling Water 750ml</td>
                <td className="py-3 px-4">#B2025-002</td>
                <td className="py-3 px-4">3,000</td>
                <td className="py-3 px-4">10:30 AM</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">Pending</span>
                </td>
                <td className="py-3 px-4">
                  <Progress value={0} className="h-2 w-full" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-4">Production Line Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Bottling Line 1</div>
                <div className="text-sm text-gray-500">Running at optimal speed</div>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm font-medium">Active</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Labeling Station</div>
                <div className="text-sm text-gray-500">Maintenance scheduled</div>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 bg-amber-500 rounded-full mr-2"></span>
                <span className="text-sm font-medium">Warning</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Packaging Unit</div>
                <div className="text-sm text-gray-500">Operating normally</div>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-4">Inventory Forecast</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">Raw Materials</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2 w-full" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">Packaging Materials</span>
                <span className="text-sm font-medium">62%</span>
              </div>
              <Progress value={62} className="h-2 w-full" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">Finished Products</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
