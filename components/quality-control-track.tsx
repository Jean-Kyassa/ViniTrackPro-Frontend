"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight, Download, Eye, FileText, History } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function QualityControlTrack() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="border-b pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">QualityControl Track</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-blue-600 hover:underline">
              Dashboard
            </Link>
            <Link href="/quality-control/reports" className="text-sm text-blue-600 hover:underline">
              Reports
            </Link>
            <Link href="/quality-control/documentation" className="text-sm text-blue-600 hover:underline">
              Documentation
            </Link>
            <Link href="/quality-control/settings" className="text-sm text-blue-600 hover:underline">
              Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Total Inspections</p>
                <h2 className="text-3xl font-bold mt-1">1,234</h2>
              </div>
              <div className="bg-blue-50 p-2 rounded-full">
                <Eye className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Pass Rate</p>
                <h2 className="text-3xl font-bold mt-1 text-emerald-600">94.5%</h2>
              </div>
              <div className="bg-emerald-50 p-2 rounded-full">
                <svg
                  className="h-5 w-5 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Defects</p>
                <h2 className="text-3xl font-bold mt-1 text-red-600">68</h2>
              </div>
              <div className="bg-red-50 p-2 rounded-full">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Pending Reviews</p>
                <h2 className="text-3xl font-bold mt-1 text-orange-600">23</h2>
              </div>
              <div className="bg-orange-50 p-2 rounded-full">
                <svg
                  className="h-5 w-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Production Stages */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Production Stages Quality Control</h2>

        <div className="bg-white rounded-lg border">
          <div className="p-4">
            <Tabs defaultValue="all-stages">
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger
                  value="all-stages"
                  className="bg-blue-600 text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  All Stages
                </TabsTrigger>
                <TabsTrigger value="raw-materials">Raw Materials</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="assembly">Assembly</TabsTrigger>
                <TabsTrigger value="packaging">Packaging</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-sm text-muted-foreground">
                    <th className="text-left font-medium py-2 px-4">Stage</th>
                    <th className="text-left font-medium py-2 px-4">Status</th>
                    <th className="text-left font-medium py-2 px-4">Inspector</th>
                    <th className="text-left font-medium py-2 px-4">Date</th>
                    <th className="text-left font-medium py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-3 px-4">Raw Materials Inspection</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Passed</span>
                    </td>
                    <td className="py-3 px-4">John Smith</td>
                    <td className="py-3 px-4">2025-01-15</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Processing Phase 1</td>
                    <td className="py-3 px-4">
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Failed</span>
                    </td>
                    <td className="py-3 px-4">Sarah Johnson</td>
                    <td className="py-3 px-4">2025-01-15</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Documents and Records */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-lg border">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Recent Documents</h3>
              <Link href="/quality-control/documentation" className="text-sm text-blue-600 hover:underline">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-red-500">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Quality Control Guidelines 2025</p>
                    <p className="text-xs text-muted-foreground">Updated 2 days ago</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-green-500">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Monthly QC Report - January</p>
                    <p className="text-xs text-muted-foreground">Updated 5 days ago</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Historical Records</h3>
              <Link href="/quality-control/reports" className="text-sm text-blue-600 hover:underline">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-blue-500">
                    <History className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Q4 2024 Analysis</p>
                    <p className="text-xs text-muted-foreground">Dec 31, 2024</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-blue-500">
                    <History className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Q3 2024 Analysis</p>
                    <p className="text-xs text-muted-foreground">Sep 30, 2024</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
