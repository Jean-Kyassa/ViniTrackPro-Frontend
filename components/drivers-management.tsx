"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MoreVertical, Plus, Search, ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function DriversManagement() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  // Mock driver data
  const drivers = [
    {
      id: "DRV-001",
      name: "John Smith",
      vehicle: {
        type: "Van - Toyota",
        id: "ABC 123",
      },
      status: "active",
      currentRoute: {
        name: "Downtown Route",
        remaining: "8 stops remaining",
      },
      deliveries: "12/15 completed",
      rating: 4.9,
      avatar: "JS",
    },
    {
      id: "DRV-002",
      name: "Sarah Johnson",
      vehicle: {
        type: "Van - Ford",
        id: "XYZ 789",
      },
      status: "on-break",
      currentRoute: {
        name: "Suburban Route",
        remaining: "5 stops remaining",
      },
      deliveries: "8/13 completed",
      rating: 4.7,
      avatar: "SJ",
    },
  ]

  const handleAddDriver = () => {
    router.push("/drivers/new")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Drivers Management</h1>
          <p className="text-muted-foreground">Monitor and manage your delivery fleet</p>
        </div>
        <Button onClick={handleAddDriver} className="flex items-center">
          <Plus className="mr-2 h-4 w-4" />
          Add New Driver
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Active Drivers</span>
            <div className="flex items-center justify-between mt-2">
              <span className="text-3xl font-bold">24</span>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">On Delivery</span>
            <div className="flex items-center justify-between mt-2">
              <span className="text-3xl font-bold">18</span>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Completed Today</span>
            <div className="flex items-center justify-between mt-2">
              <span className="text-3xl font-bold">142</span>
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Average Rating</span>
            <div className="flex items-center justify-between mt-2">
              <span className="text-3xl font-bold">4.8</span>
              <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-600 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Active Drivers</h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search drivers..."
                  className="pl-8 w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="on-break">On Break</SelectItem>
                  <SelectItem value="off-duty">Off Duty</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left py-3 px-6 text-sm font-medium">Driver</th>
                <th className="text-left py-3 px-6 text-sm font-medium">Vehicle</th>
                <th className="text-left py-3 px-6 text-sm font-medium">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium">Current Route</th>
                <th className="text-left py-3 px-6 text-sm font-medium">Deliveries</th>
                <th className="text-left py-3 px-6 text-sm font-medium">Rating</th>
                <th className="text-right py-3 px-6 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => (
                <tr key={driver.id} className="border-b">
                  <td className="py-3 px-6">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{driver.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{driver.name}</div>
                        <div className="text-sm text-muted-foreground">ID: {driver.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6">
                    <div>
                      <div>{driver.vehicle.type}</div>
                      <div className="text-sm text-muted-foreground">{driver.vehicle.id}</div>
                    </div>
                  </td>
                  <td className="py-3 px-6">
                    <Badge
                      className={
                        driver.status === "active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                      }
                    >
                      {driver.status === "active" ? "Active" : "On Break"}
                    </Badge>
                  </td>
                  <td className="py-3 px-6">
                    <div>
                      <div>{driver.currentRoute.name}</div>
                      <div className="text-sm text-muted-foreground">{driver.currentRoute.remaining}</div>
                    </div>
                  </td>
                  <td className="py-3 px-6">{driver.deliveries}</td>
                  <td className="py-3 px-6">
                    <div className="flex items-center">
                      <span className="mr-1">{driver.rating}</span>
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    </div>
                  </td>
                  <td className="py-3 px-6 text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon">
                        <MapPin className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit Details</DropdownMenuItem>
                          <DropdownMenuItem>Assign Route</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing 1-10 of 24 entries</p>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
              <span className="ml-1">Previous</span>
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              <span className="mr-1">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
