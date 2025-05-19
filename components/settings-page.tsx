"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

export function SettingsPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleSave = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      })
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="logistics">Logistics</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your basic application settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc-8">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                    <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                    <SelectItem value="utc+0">Greenwich Mean Time (UTC+0)</SelectItem>
                    <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateFormat">Date Format</Label>
                <Select defaultValue="mm-dd-yyyy">
                  <SelectTrigger id="dateFormat">
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY/MM/DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="darkMode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark mode for the application</p>
                </div>
                <Switch id="darkMode" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage your security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Enable two-factor authentication for added security</p>
                </div>
                <Switch id="twoFactor" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Company Settings */}
        <TabsContent value="company" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Manage your company details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" defaultValue="ViniTrack Winery" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Vineyard Lane" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="Napa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" defaultValue="California" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip/Postal Code</Label>
                  <Input id="zipCode" defaultValue="94558" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select defaultValue="us">
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="it">Italy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="taxId">Tax ID/VAT Number</Label>
                <Input id="taxId" defaultValue="US123456789" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Branding</CardTitle>
              <CardDescription>Customize your company branding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Company Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-md border border-input flex items-center justify-center">
                    <img src="/images/logo.png" alt="Company Logo" className="max-h-16 max-w-16" />
                  </div>
                  <Button variant="outline">Upload New Logo</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryColor">Primary Color</Label>
                <div className="flex gap-2">
                  <Input id="primaryColor" defaultValue="#7C3AED" />
                  <div className="h-10 w-10 rounded-md bg-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondaryColor">Secondary Color</Label>
                <div className="flex gap-2">
                  <Input id="secondaryColor" defaultValue="#10B981" />
                  <div className="h-10 w-10 rounded-md bg-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Production Settings */}
        <TabsContent value="production" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Production Settings</CardTitle>
              <CardDescription>Configure your production parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="defaultProductionLine">Default Production Line</Label>
                <Select defaultValue="line-a">
                  <SelectTrigger id="defaultProductionLine">
                    <SelectValue placeholder="Select production line" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="line-a">Line A - Bottling</SelectItem>
                    <SelectItem value="line-b">Line B - Labeling</SelectItem>
                    <SelectItem value="line-c">Line C - Packaging</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="batchNumberPrefix">Batch Number Prefix</Label>
                <Input id="batchNumberPrefix" defaultValue="B" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="minimumBatchSize">Minimum Batch Size</Label>
                <Input id="minimumBatchSize" type="number" defaultValue="500" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autoSchedule">Auto-Schedule Production</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically schedule production based on inventory levels
                  </p>
                </div>
                <Switch id="autoSchedule" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="qualityChecks">Mandatory Quality Checks</Label>
                  <p className="text-sm text-muted-foreground">Require quality checks for all production batches</p>
                </div>
                <Switch id="qualityChecks" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inventory Thresholds</CardTitle>
              <CardDescription>Set inventory alert thresholds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="lowStockThreshold">Low Stock Threshold (%)</Label>
                <Input id="lowStockThreshold" type="number" defaultValue="20" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="criticalStockThreshold">Critical Stock Threshold (%)</Label>
                <Input id="criticalStockThreshold" type="number" defaultValue="10" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="overStockThreshold">Over Stock Threshold (%)</Label>
                <Input id="overStockThreshold" type="number" defaultValue="90" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autoReorder">Auto-Reorder</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically create purchase orders for low stock items
                  </p>
                </div>
                <Switch id="autoReorder" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Logistics Settings */}
        <TabsContent value="logistics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Settings</CardTitle>
              <CardDescription>Configure your delivery parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="defaultDeliveryMethod">Default Delivery Method</Label>
                <Select defaultValue="own-fleet">
                  <SelectTrigger id="defaultDeliveryMethod">
                    <SelectValue placeholder="Select delivery method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="own-fleet">Own Fleet</SelectItem>
                    <SelectItem value="third-party">Third-Party Logistics</SelectItem>
                    <SelectItem value="customer-pickup">Customer Pickup</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="routeOptimization">Route Optimization Method</Label>
                <Select defaultValue="distance">
                  <SelectTrigger id="routeOptimization">
                    <SelectValue placeholder="Select optimization method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distance">Shortest Distance</SelectItem>
                    <SelectItem value="time">Shortest Time</SelectItem>
                    <SelectItem value="fuel">Fuel Efficiency</SelectItem>
                    <SelectItem value="combined">Combined Factors</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxDeliveryRadius">Maximum Delivery Radius (miles)</Label>
                <Input id="maxDeliveryRadius" type="number" defaultValue="100" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="realTimeTracking">Real-Time Delivery Tracking</Label>
                  <p className="text-sm text-muted-foreground">Enable real-time GPS tracking for deliveries</p>
                </div>
                <Switch id="realTimeTracking" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="customerNotifications">Customer Delivery Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Send automated notifications to customers about delivery status
                  </p>
                </div>
                <Switch id="customerNotifications" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vehicle Maintenance</CardTitle>
              <CardDescription>Configure vehicle maintenance settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="maintenanceInterval">Maintenance Interval (miles)</Label>
                <Input id="maintenanceInterval" type="number" defaultValue="5000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maintenanceSchedule">Maintenance Schedule</Label>
                <Select defaultValue="mileage">
                  <SelectTrigger id="maintenanceSchedule">
                    <SelectValue placeholder="Select schedule type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mileage">Based on Mileage</SelectItem>
                    <SelectItem value="time">Based on Time</SelectItem>
                    <SelectItem value="combined">Combined Factors</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenanceAlerts">Maintenance Alerts</Label>
                  <p className="text-sm text-muted-foreground">Send alerts when vehicles are due for maintenance</p>
                </div>
                <Switch id="maintenanceAlerts" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="inventoryAlerts">Inventory Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive alerts when inventory levels are low</p>
                  </div>
                  <Switch id="inventoryAlerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="productionAlerts">Production Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive alerts about production issues or delays</p>
                  </div>
                  <Switch id="productionAlerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="qualityAlerts">Quality Control Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive alerts about quality control issues</p>
                  </div>
                  <Switch id="qualityAlerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="deliveryAlerts">Delivery Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive alerts about delivery issues or delays</p>
                  </div>
                  <Switch id="deliveryAlerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="orderAlerts">New Order Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive alerts when new orders are placed</p>
                  </div>
                  <Switch id="orderAlerts" defaultChecked />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-sm font-medium">In-App Notifications</h3>
                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="inAppInventory">Inventory Alerts</Label>
                    <p className="text-sm text-muted-foreground">Show in-app notifications for inventory alerts</p>
                  </div>
                  <Switch id="inAppInventory" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="inAppProduction">Production Alerts</Label>
                    <p className="text-sm text-muted-foreground">Show in-app notifications for production alerts</p>
                  </div>
                  <Switch id="inAppProduction" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="inAppQuality">Quality Control Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Show in-app notifications for quality control alerts
                    </p>
                  </div>
                  <Switch id="inAppQuality" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="inAppDelivery">Delivery Alerts</Label>
                    <p className="text-sm text-muted-foreground">Show in-app notifications for delivery alerts</p>
                  </div>
                  <Switch id="inAppDelivery" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="inAppOrder">New Order Alerts</Label>
                    <p className="text-sm text-muted-foreground">Show in-app notifications for new orders</p>
                  </div>
                  <Switch id="inAppOrder" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Schedule</CardTitle>
              <CardDescription>Configure when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notificationFrequency">Notification Frequency</Label>
                <Select defaultValue="real-time">
                  <SelectTrigger id="notificationFrequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="real-time">Real-Time</SelectItem>
                    <SelectItem value="hourly">Hourly Digest</SelectItem>
                    <SelectItem value="daily">Daily Digest</SelectItem>
                    <SelectItem value="weekly">Weekly Digest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quietHours">Quiet Hours</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quietHoursStart">Start Time</Label>
                    <Select defaultValue="22">
                      <SelectTrigger id="quietHoursStart">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }).map((_, i) => (
                          <SelectItem key={i} value={i.toString()}>
                            {i.toString().padStart(2, "0")}:00
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quietHoursEnd">End Time</Label>
                    <Select defaultValue="7">
                      <SelectTrigger id="quietHoursEnd">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }).map((_, i) => (
                          <SelectItem key={i} value={i.toString()}>
                            {i.toString().padStart(2, "0")}:00
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enableQuietHours">Enable Quiet Hours</Label>
                  <p className="text-sm text-muted-foreground">Pause notifications during specified hours</p>
                </div>
                <Switch id="enableQuietHours" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  )
}
