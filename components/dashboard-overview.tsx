"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpIcon, Box, CheckCircle, DollarSign, Package, Truck } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function DashboardOverview() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("dashboardOverview")}</h1>
        <p className="text-muted-foreground">{t("welcomeBack")}, Admin</p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t("totalStock")}</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,543</div>
            <div className="flex items-center pt-1 text-xs text-emerald-500">
              <ArrowUpIcon className="mr-1 h-3 w-3" />
              <span>2% {t("fromLastMonth")}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t("pendingOrders")}</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">164</div>
            <div className="flex items-center pt-1 text-xs text-blue-500">
              <ArrowUpIcon className="mr-1 h-3 w-3" />
              <span>5% {t("fromLastMonth")}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t("qualityChecks")}</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <div className="flex items-center pt-1 text-xs text-emerald-500">
              <span>✓ {t("allTestsPassed")}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t("revenue")}</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$284,392</div>
            <div className="flex items-center pt-1 text-xs text-amber-500">
              <ArrowUpIcon className="mr-1 h-3 w-3" />
              <span>15% {t("fromLastMonth")}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{t("stockOverview")}</CardTitle>
            <Select defaultValue="7days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t("selectTimeframe")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">{t("last7Days")}</SelectItem>
                <SelectItem value="30days">{t("last30Days")}</SelectItem>
                <SelectItem value="90days">{t("last90Days")}</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="text-muted-foreground text-sm">Stock chart would render here</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{t("qualityMetrics")}</CardTitle>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t("selectBatch")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("allBatches")}</SelectItem>
                <SelectItem value="batch1">Batch #2458</SelectItem>
                <SelectItem value="batch2">Batch #2459</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="text-muted-foreground text-sm">Quality metrics chart would render here</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>{t("recentActivity")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Truck className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">New shipment dispatched to Client A</p>
                <p className="text-sm text-muted-foreground">2 {t("hoursAgo")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium">Quality check completed for Batch #2458</p>
                <p className="text-sm text-muted-foreground">4 {t("hoursAgo")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-2 rounded-full">
                <Box className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="font-medium">Stock update: 200 bottles added to inventory</p>
                <p className="text-sm text-muted-foreground">6 {t("hoursAgo")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
