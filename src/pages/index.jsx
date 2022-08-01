import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Gallery } from '@/components/Gallery'

export default function Home() {
  const paragraphs = [
    'Welcome',
    'tutaj cos innego',
    'Home page !!! Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker',
  ]

  return (
    <>
      <Head>
        <title>Projekt na zaliczenie Amadeusz K.</title>
        <meta name="description" content="projekt na zaliczenie Amadeusz K." />
      </Head>
      <Header />
      <main>
        <Hero headline="Welcome from home page" paragraphs={paragraphs} />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
