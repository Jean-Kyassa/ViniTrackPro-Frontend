import { AuthLayout } from "@/components/auth-layout"
import { LoginForm } from "@/components/login-form"

export default function Home() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}
