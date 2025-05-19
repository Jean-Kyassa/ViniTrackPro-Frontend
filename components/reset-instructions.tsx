"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Mail, AlertCircle, ArrowRight } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ResetInstructions() {
  const router = useRouter()

  const handleContinue = () => {
    // In a real app, this would be a link in the email
    // For demo purposes, we'll just redirect to the reset password page
    router.push("/reset-password")
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-center">Check Your Email</h2>
        <p className="text-sm text-center text-muted-foreground mt-1">
          We've sent password reset instructions to your email
        </p>
      </div>

      <div className="flex justify-center">
        <Mail className="h-16 w-16 text-primary" />
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          If you don't see the email in your inbox, please check your spam folder or request another reset link.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <p className="text-sm text-center text-muted-foreground">
          The link in the email will expire in 30 minutes for security reasons.
        </p>

        {/* This button is for demo purposes only */}
        <Button onClick={handleContinue} className="w-full">
          Continue to Reset Password
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="text-center">
          <Button variant="link" onClick={() => router.push("/forgot-password")}>
            Didn't receive the email? Try again
          </Button>
        </div>
      </div>

      <div className="text-center">
        <Link href="/" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 h-4 w-4"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Login
        </Link>
      </div>
    </div>
  )
}
