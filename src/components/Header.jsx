import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        
        <div className="hidden sm:mt-10 sm:flex sm:space-between lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://github.com/Amadi132/projekt-na-zaliczenie">
            <span className="p-1">Github</span>
          </Button>
          <span className="p-1">|</span>
          <Button href="/about-me">
            <span className="p-1">O mnie</span>
          </Button>
        </div>
      </Container>
    </header>
  )
}
