import AuthWrapper from "@/app/components/auth/AuthWrapper"
import LoginForm from "@/app/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthWrapper>
      <LoginForm/>
    </AuthWrapper>
  );
}