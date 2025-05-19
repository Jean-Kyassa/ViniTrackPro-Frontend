"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Bell,
  ChevronDown,
  ClipboardList,
  Globe,
  Home,
  LogOut,
  Package,
  Settings,
  Truck,
  User,
  Wine,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from "@/lib/i18n"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { t, locale, setLocale } = useTranslation()

  const handleLogout = () => {
    // In a real app, you would clear auth tokens/cookies here
    // For now, just redirect to the login page
    router.push("/")
  }

  const navigation = [
    { name: t("dashboard"), href: "/dashboard", icon: Home },
    { name: t("inventory"), href: "/inventory", icon: Wine },
    { name: t("logistics"), href: "/logistics", icon: Truck },
    { name: t("qualityControl"), href: "/quality-control", icon: ClipboardList },
    { name: t("reports"), href: "/reports", icon: BarChart3 },
    { name: t("production"), href: "/production", icon: Package },
    { name: t("settings"), href: "/settings", icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white border-r transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            {!collapsed && (
              <Link href="/dashboard" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="ViniTrack Pro"
                  width={150}
                  height={40}
                  style={{ background: "transparent" }}
                />
              </Link>
            )}
            {collapsed && (
              <Link href="/dashboard" className="flex items-center mx-auto">
                <Wine className="h-8 w-8" />
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className={collapsed ? "mx-auto" : ""}
            >
              <ChevronDown className={`h-5 w-5 transition-transform ${collapsed ? "rotate-90" : "-rotate-90"}`} />
            </Button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-2 py-2 rounded-md text-sm ${
                      pathname === item.href || pathname.startsWith(`${item.href}/`)
                        ? "bg-gray-100 text-primary"
                        : "text-gray-700 hover:bg-gray-100"
                    } ${collapsed ? "justify-center" : ""}`}
                  >
                    <item.icon className={`h-5 w-5 ${collapsed ? "" : "mr-3"}`} />
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b h-16 flex items-center justify-between px-4">
          <div>{/* Mobile menu button would go here */}</div>
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLocale("en")} className={locale === "en" ? "bg-gray-100" : ""}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocale("fr")} className={locale === "fr" ? "bg-gray-100" : ""}>
                  Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.png" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  {!collapsed && <span>John Doe</span>}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t("myAccount")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>{t("profile")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>{t("settings")}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>{t("logout")}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">{children}</main>
      </div>
    </div>
  )
}
