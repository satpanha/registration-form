import Header from '@/components/header'
import RegistrationForm from '@/components/registration-form'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <Header />
      <RegistrationForm />
    </main>
  )
}
