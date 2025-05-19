"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export function NewQualityControlDocument() {
  const router = useRouter()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Link href="/quality-control/documentation">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">New Quality Control Document</h1>
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-lg border">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28133%29-LJ9EpbdwsVFdYbdFYH6vTxum7smedO.png"
          alt="New Quality Control Document Form"
          className="w-full"
        />
      </div>
    </div>
  )
}
