import { AuthLayout } from "@/components/auth-layout"
import { PasswordChangedConfirmation } from "@/components/password-changed-confirmation"

export default function PasswordChanged() {
  return (
    <AuthLayout>
      <PasswordChangedConfirmation />
    </AuthLayout>
  )
}
