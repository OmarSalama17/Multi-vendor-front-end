import AuthWrapper from "@/app/components/auth/AuthWrapper"
import RegisterForm from "@/app/components/auth/RegisterForm";


export default function RegisterPage() {
  return (
    <AuthWrapper>
      <RegisterForm/>
    </AuthWrapper>
  );
}