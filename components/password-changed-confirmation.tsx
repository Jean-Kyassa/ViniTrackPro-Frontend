"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function PasswordChangedConfirmation() {
  const router = useRouter()

  return (
    <div className="space-y-6 text-center">
      <div className="flex justify-center">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Password Changed</h2>
        <p className="text-muted-foreground mt-2">Your password has been successfully changed.</p>
      </div>
      <Button onClick={() => router.push("/")} className="w-full">
        Proceed to Login
      </Button>
      <div className="text-center text-sm">
        <button onClick={() => router.push("/")} className="text-primary hover:underline">
          Need help?
        </button>
      </div>
    </div>
  )
}
