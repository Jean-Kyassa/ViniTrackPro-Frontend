"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Beaker, Calendar, Check, Clock, MoreVertical, Package, Plus, Tag } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NewProductionSchedule() {
  const router = useRouter()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => router.push("/production/schedule")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">New Production Schedule</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Clock className="h-4 w-4 mr-2" />
            Draft
          </Button>
          <Button>
            <Check className="h-4 w-4 mr-2" />
            Create Schedule
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-6">Schedule Details</h3>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Schedule Name</label>
                <Input placeholder="Enter schedule name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Production Line</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Line A - Bottling" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="line-a">Line A - Bottling</SelectItem>
                    <SelectItem value="line-b">Line B - Labeling</SelectItem>
                    <SelectItem value="line-c">Line C - Packaging</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Start Date</label>
                <div className="relative">
                  <Input placeholder="mm/dd/yyyy" />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">End Date</label>
                <div className="relative">
                  <Input placeholder="mm/dd/yyyy" />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <h3 className="text-lg font-medium mb-4">Production Items</h3>
            <div className="mb-4 flex justify-end">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-500">Product</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500">Quantity</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500">Current Stock</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500">Forecast Demand</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Product A</td>
                    <td className="py-3 px-4">1,000 units</td>
                    <td className="py-3 px-4">500 units</td>
                    <td className="py-3 px-4">2,000 units</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-6">Inventory Status</h3>
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
                  <span className="text-sm font-medium">60%</span>
                </div>
                <Progress value={60} className="h-2 w-full" />
              </div>
            </div>

            <h3 className="text-lg font-medium mt-6 mb-4">Workflow Steps</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Beaker className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-medium">Preparation</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Package className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-medium">Bottling</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Tag className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-medium">Labeling</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Package className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-medium">Packaging</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
