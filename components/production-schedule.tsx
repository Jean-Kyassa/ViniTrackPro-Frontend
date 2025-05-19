"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Filter } from "lucide-react"

export function ProductionSchedule() {
  const router = useRouter()
  const [view, setView] = useState("week")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => router.push("/production")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Production Schedule</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/production/schedule/new">
            <Button>
              <span className="mr-1">+</span> New Schedule
            </Button>
          </Link>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-1">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Inventory Status</h3>
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
            </div>

            <h3 className="text-lg font-medium mt-6 mb-4">Demand Forecast</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">This Week</span>
                <span className="font-medium">12,500 units</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Next Week</span>
                <span className="font-medium">15,800 units</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">This Month</span>
                <span className="font-medium">48,000 units</span>
              </div>
            </div>

            <h3 className="text-lg font-medium mt-6 mb-4">Production Lines</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm">Line A - Operating</span>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm">Line B - Operating</span>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 bg-amber-500 rounded-full mr-2"></span>
                <span className="text-sm">Line C - Maintenance</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <h3 className="text-lg font-medium">Week 28 (July 8-14, 2025)</h3>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-md">
                <Button
                  variant={view === "day" ? "secondary" : "ghost"}
                  size="sm"
                  className="rounded-md"
                  onClick={() => setView("day")}
                >
                  Day
                </Button>
                <Button
                  variant={view === "week" ? "secondary" : "ghost"}
                  size="sm"
                  className="rounded-md"
                  onClick={() => setView("week")}
                >
                  Week
                </Button>
                <Button
                  variant={view === "month" ? "secondary" : "ghost"}
                  size="sm"
                  className="rounded-md"
                  onClick={() => setView("month")}
                >
                  Month
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              <div className="text-center font-medium p-2">Mon</div>
              <div className="text-center font-medium p-2">Tue</div>
              <div className="text-center font-medium p-2">Wed</div>
              <div className="text-center font-medium p-2">Thu</div>
              <div className="text-center font-medium p-2">Fri</div>
              <div className="text-center font-medium p-2">Sat</div>
              <div className="text-center font-medium p-2">Sun</div>

              <div className="bg-blue-100 p-3 rounded-md">
                <div className="font-medium text-sm">Line A</div>
                <div className="text-xs">Bottling - 5000 units</div>
                <div className="text-xs text-gray-500">08:00 - 16:00</div>
              </div>
              <div className="bg-purple-100 p-3 rounded-md">
                <div className="font-medium text-sm">Line C</div>
                <div className="text-xs">Packaging - 3000 units</div>
                <div className="text-xs text-gray-500">07:00 - 15:00</div>
              </div>
              <div className="bg-blue-100 p-3 rounded-md">
                <div className="font-medium text-sm">Line A</div>
                <div className="text-xs">Bottling - 5500 units</div>
                <div className="text-xs text-gray-500">08:00 - 16:00</div>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <div className="font-medium text-sm">Maintenance</div>
                <div className="text-xs">Line C</div>
                <div className="text-xs text-gray-500">All Day</div>
              </div>
              <div className="bg-green-100 p-3 rounded-md">
                <div className="font-medium text-sm">Line B</div>
                <div className="text-xs">Labeling - 4500 units</div>
                <div className="text-xs text-gray-500">09:00 - 17:00</div>
              </div>
              <div className="p-3 rounded-md border border-dashed border-gray-300"></div>
              <div className="p-3 rounded-md border border-dashed border-gray-300"></div>

              <div className="bg-green-100 p-3 rounded-md">
                <div className="font-medium text-sm">Line B</div>
                <div className="text-xs">Labeling - 4000 units</div>
                <div className="text-xs text-gray-500">09:00 - 17:00</div>
              </div>
              <div className="p-3 rounded-md border border-dashed border-gray-300"></div>
              <div className="p-3 rounded-md border border-dashed border-gray-300"></div>
              <div className="p-3 rounded-md border border-dashed border-gray-300"></div>
              <div className="p-3 rounded-md border border-dashed border-gray-300"></div>
              <div className="p-3 rounded-md border border-dashed border-gray-300"></div>
              <div className="p-3 rounded-md border border-dashed border-gray-300"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
