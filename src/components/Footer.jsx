import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-white" />
        <p className="mt-6 text-base text-white md:mt-0">
          Prawa zastrzeżone &copy; {new Date().getFullYear()} Amadeusz K.
        </p>
      </Container>
    </footer>
  )
}
