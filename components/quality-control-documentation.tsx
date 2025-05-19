"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Plus, Download, Share } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function QualityControlDocumentation() {
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
            <h1 className="text-2xl font-bold">Quality Control Documentation</h1>
            <p className="text-sm text-muted-foreground">
              Manage and track quality control processes and documentation
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            New Document
          </Button>
        </div>
      </div>

      {/* Documents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg overflow-hidden p-6">
          <div className="flex items-start">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="font-medium">Production Line A - QC Report</h3>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-0 mb-4">Approved</Badge>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Last updated: March 15, 2025</p>
                <p className="flex items-center space-x-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>John Anderson</span>
                </p>
              </div>
              <div className="mt-4">
                <Button variant="link" className="p-0 h-auto text-blue-600">
                  View Details
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden p-6">
          <div className="flex items-start">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="font-medium">Quality Inspection Checklist</h3>
              </div>
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-0 mb-4">Pending</Badge>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Last updated: March 14, 2025</p>
                <p className="flex items-center space-x-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Sarah Miller</span>
                </p>
              </div>
              <div className="mt-4">
                <Button variant="link" className="p-0 h-auto text-blue-600">
                  View Details
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden p-6">
          <div className="flex items-start">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="font-medium">Material Testing Results</h3>
              </div>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-0 mb-4">Review Required</Badge>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Last updated: March 13, 2025</p>
                <p className="flex items-center space-x-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Mike Thompson</span>
                </p>
              </div>
              <div className="mt-4">
                <Button variant="link" className="p-0 h-auto text-blue-600">
                  View Details
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="border rounded-lg overflow-hidden p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-full p-2">
              <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Quality check completed for Production Line A</p>
              <p className="text-sm text-muted-foreground">2 hours ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-amber-100 rounded-full p-2">
              <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium">New inspection scheduled for Line B</p>
              <p className="text-sm text-muted-foreground">4 hours ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-green-100 rounded-full p-2">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium">Quality report updated by Sarah Miller</p>
              <p className="text-sm text-muted-foreground">6 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
