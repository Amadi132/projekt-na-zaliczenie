import { Container } from '@/components/Container'
import backgroundImage from '@/images/uroboros3.jpg'
import Image from 'next/future/image'

export function Hero({ headline, paragraphs }) {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-black-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-30%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-30%] sm:translate-x-[-50%] lg:translate-x-[-55%] xl:translate-x-[-55%] blur-md
          "
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-white sm:text-7xl">
            {headline}
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-white">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
