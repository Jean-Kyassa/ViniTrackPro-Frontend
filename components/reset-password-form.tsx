"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Eye, EyeOff, Check } from "lucide-react"

export function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would validate the passwords match and meet requirements
    // Then send a request to your API to update the password

    // For now, we'll just redirect to the password changed confirmation page
    router.push("/password-changed")
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
        <p className="text-sm text-center text-muted-foreground mt-1">Please enter your new password</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="newPassword" className="text-sm font-medium">
            New Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              id="newPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              className="pl-10 pr-10"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm New Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              className="pl-10 pr-10"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Password must contain:</p>
          <ul className="space-y-1">
            <li className="text-sm flex items-center text-green-600">
              <Check className="h-4 w-4 mr-2" />
              At least 8 characters
            </li>
            <li className="text-sm flex items-center text-green-600">
              <Check className="h-4 w-4 mr-2" />
              One uppercase letter
            </li>
            <li className="text-sm flex items-center text-green-600">
              <Check className="h-4 w-4 mr-2" />
              One number
            </li>
            <li className="text-sm flex items-center text-green-600">
              <Check className="h-4 w-4 mr-2" />
              One special character
            </li>
          </ul>
        </div>
        <Button type="submit" className="w-full">
          Reset Password
        </Button>
      </form>
      <div className="text-center">
        <Link href="/" className="text-sm font-medium text-primary hover:underline">
          Return to Login
        </Link>
      </div>
    </div>
  )
}
