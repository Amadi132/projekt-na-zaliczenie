import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function About() {
  const paragraphs = [
    'Imię i Nazwisko: Amadeusz Karpiński.',
    'Numer albumu: 06997',
    'E-mail: amadeusz.filip.karpinski@gmail.com',
  ]

  return (
    <>
      <Head>
        <title>Projekt na zaliczenie Amadeusz K.</title>
        <meta name="description" content="projekt na zaliczenie Amadeusz K." />
      </Head>
      <Header />
      <main>
        <Hero headline="O mnie" paragraphs={paragraphs} />
      </main>
      <Footer />
    </>
  )
}
