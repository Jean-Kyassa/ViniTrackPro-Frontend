import { AuthLayout } from "@/components/auth-layout"
import { ForgotPasswordInstructions } from "@/components/forgot-password-instructions"

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <ForgotPasswordInstructions />
    </AuthLayout>
  )
}
