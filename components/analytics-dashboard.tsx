"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronLeft, Download, Filter, Plus } from "lucide-react"
import Link from "next/link"

export function AnalyticsDashboard() {
  const router = useRouter()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
            <p className="text-sm text-muted-foreground">Track performance metrics and trends</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              Dashboard
            </Button>
          </Link>
          <Link href="/reports">
            <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700 border-blue-200">
              Reports
            </Button>
          </Link>
          <Link href="/settings">
            <Button variant="outline" size="sm">
              Settings
            </Button>
          </Link>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Production Output</p>
                <div className="text-blue-500">📊</div>
              </div>
              <p className="text-3xl font-bold">87,429</p>
              <div className="flex items-center text-sm text-green-500">
                <span>↑ 12.5% vs last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Sales Revenue</p>
                <div className="text-green-500">💰</div>
              </div>
              <p className="text-3xl font-bold">$1.2M</p>
              <div className="flex items-center text-sm text-green-500">
                <span>↑ 8.3% vs last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Delivery Efficiency</p>
                <div className="text-purple-500">🚚</div>
              </div>
              <p className="text-3xl font-bold">94.8%</p>
              <div className="flex items-center text-sm text-green-500">
                <span>↑ 2.1% vs last month</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts & Analytics */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-medium">Sales Trends</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700 border-blue-200">
                Daily
              </Button>
              <Button variant="outline" size="sm">
                Weekly
              </Button>
              <Button variant="outline" size="sm">
                Monthly
              </Button>
            </div>
          </div>
          <CardContent className="p-6 h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Sales trend chart would render here</p>
          </CardContent>
        </Card>

        <Card>
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-medium">Stock Movement</h3>
            <Button variant="outline" size="sm" className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
          <CardContent className="p-6 h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Stock movement chart would render here</p>
          </CardContent>
        </Card>
      </div>

      {/* Logistics Performance */}
      <Card>
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-medium">Logistics Performance</h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button size="sm" className="flex items-center" onClick={() => router.push("/reports/new")}>
              <Plus className="mr-2 h-4 w-4" />
              New Report
            </Button>
          </div>
        </div>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Delivery Time</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Jan 15, 2025</TableCell>
                <TableCell className="font-medium">#ORD-2501</TableCell>
                <TableCell>New York, NY</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Delivered</Badge>
                </TableCell>
                <TableCell>2.5 hours</TableCell>
                <TableCell className="text-right">
                  <Button variant="link" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jan 15, 2025</TableCell>
                <TableCell className="font-medium">#ORD-2502</TableCell>
                <TableCell>Los Angeles, CA</TableCell>
                <TableCell>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">In Transit</Badge>
                </TableCell>
                <TableCell>1.8 hours</TableCell>
                <TableCell className="text-right">
                  <Button variant="link" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
