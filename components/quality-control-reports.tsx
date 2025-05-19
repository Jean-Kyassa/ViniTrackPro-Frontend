"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Plus, Download, Filter, ArrowUpDown } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function QualityControlReports() {
  const router = useRouter()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/quality-control">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Quality Control Reports</h1>
            <p className="text-sm text-muted-foreground">Track and analyze production quality metrics</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      {/* Quality metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Quality Score</span>
                <span className="text-xs text-green-600 font-medium">+4.6%</span>
              </div>
              <div className="mt-2">
                <span className="text-3xl font-bold">98.5%</span>
                <p className="text-xs text-muted-foreground mt-1">vs 93.9% last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Defect Rate</span>
                <span className="text-xs text-red-600 font-medium">+1.2%</span>
              </div>
              <div className="mt-2">
                <span className="text-3xl font-bold">1.5%</span>
                <p className="text-xs text-muted-foreground mt-1">vs 0.3% last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Inspections</span>
                <span className="text-xs text-green-600 font-medium">+12.3%</span>
              </div>
              <div className="mt-2">
                <span className="text-3xl font-bold">1,284</span>
                <p className="text-xs text-muted-foreground mt-1">vs 1,143 last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Open Issues</span>
                <span className="text-xs text-amber-600 font-medium">8 new</span>
              </div>
              <div className="mt-2">
                <span className="text-3xl font-bold">24</span>
                <p className="text-xs text-muted-foreground mt-1">vs 16 last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports Table */}
      <div className="border rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Quality Reports</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#QC-2025-001</TableCell>
                <TableCell>Product A</TableCell>
                <TableCell>Assembly</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-0">Passed</Badge>
                </TableCell>
                <TableCell>Jan 15, 2025</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#QC-2025-002</TableCell>
                <TableCell>Product B</TableCell>
                <TableCell>Testing</TableCell>
                <TableCell>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-0">Failed</Badge>
                </TableCell>
                <TableCell>Jan 14, 2025</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#QC-2025-003</TableCell>
                <TableCell>Product C</TableCell>
                <TableCell>Packaging</TableCell>
                <TableCell>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-0">Pending</Badge>
                </TableCell>
                <TableCell>Jan 14, 2025</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#QC-2025-004</TableCell>
                <TableCell>Product D</TableCell>
                <TableCell>Final QC</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-0">Passed</Badge>
                </TableCell>
                <TableCell>Jan 13, 2025</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Issues by Category */}
      <div className="border rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Issues by Category</h2>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Assembly Issues</span>
                <span className="text-sm text-muted-foreground">8 open</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-red-500 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Material Quality</span>
                <span className="text-sm text-muted-foreground">6 open</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-orange-500 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Testing Failures</span>
                <span className="text-sm text-muted-foreground">5 open</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-amber-500 rounded-full" style={{ width: "35%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Packaging Defects</span>
                <span className="text-sm text-muted-foreground">5 open</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: "35%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
