import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Gallery } from '@/components/Gallery'

export default function Home() {
  const paragraphs = [
    'WITAJ',
    'Krótki opis co znajdziemy na stronie:',
    'Po prawej Github który przenosi do kodu źródłowego strony, O mnie przenosi nas na stronę z informacjami o mnie. Napis Projekt przenosi nas do storony tytułowej. Jest tu też kilka zdjęć',
  ]

  return (
    <>
      <Head>
        <title>Projekt na zaliczenie Amadeusz K.</title>
        <meta name="description" content="projekt na zaliczenie Amadeusz K." />
      </Head>
      <Header />
      <main>
        <Hero headline="MOJA STRONA" paragraphs={paragraphs} />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
