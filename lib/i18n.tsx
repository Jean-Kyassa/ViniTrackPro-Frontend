"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define translations
const translations = {
  en: {
    dashboard: "Dashboard",
    inventory: "Inventory",
    logistics: "Logistics",
    qualityControl: "Quality Control",
    reports: "Reports",
    production: "Production",
    settings: "Settings",
    myAccount: "My Account",
    profile: "Profile",
    logout: "Log out",
    welcomeBack: "Welcome back",
    dashboardOverview: "Dashboard Overview",
    totalStock: "Total Stock",
    pendingOrders: "Pending Orders",
    qualityChecks: "Quality Checks",
    revenue: "Revenue",
    stockOverview: "Stock Overview",
    qualityMetrics: "Quality Metrics",
    recentActivity: "Recent Activity",
    fromLastMonth: "from last month",
    allTestsPassed: "All tests passed",
    selectTimeframe: "Select timeframe",
    selectBatch: "Select batch",
    last7Days: "Last 7 days",
    last30Days: "Last 30 days",
    last90Days: "Last 90 days",
    allBatches: "All Batches",
    hoursAgo: "hours ago",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  fr: {
    dashboard: "Tableau de bord",
    inventory: "Inventaire",
    logistics: "Logistique",
    qualityControl: "Contrôle qualité",
    reports: "Rapports",
    production: "Production",
    settings: "Paramètres",
    myAccount: "Mon compte",
    profile: "Profil",
    logout: "Déconnexion",
    welcomeBack: "Bienvenue",
    dashboardOverview: "Aperçu du tableau de bord",
    totalStock: "Stock total",
    pendingOrders: "Commandes en attente",
    qualityChecks: "Contrôles qualité",
    revenue: "Revenus",
    stockOverview: "Aperçu des stocks",
    qualityMetrics: "Métriques de qualité",
    recentActivity: "Activité récente",
    fromLastMonth: "par rapport au mois dernier",
    allTestsPassed: "Tous les tests réussis",
    selectTimeframe: "Sélectionner la période",
    selectBatch: "Sélectionner le lot",
    last7Days: "7 derniers jours",
    last30Days: "30 derniers jours",
    last90Days: "90 derniers jours",
    allBatches: "Tous les lots",
    hoursAgo: "heures",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
  },
}

type Locale = "en" | "fr"
type TranslationKey = keyof typeof translations.en

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Try to get the locale from localStorage, default to 'en'
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null
    if (savedLocale && (savedLocale === "en" || savedLocale === "fr")) {
      setLocaleState(savedLocale)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const t = (key: TranslationKey): string => {
    return translations[locale][key] || translations.en[key] || key
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within an I18nProvider")
  }
  return context
}
