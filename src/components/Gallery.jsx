import { useEffect, useId, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import Modal from './Modal'

const days = [
  {
    name: 'Day 1',
    date: '2022-04-04',
    dateTime: '2022-04-04',
    images: [
      {
        name: 'Van Hohenheim',
        role: 'Ojciec',
        image: '/images/assets/Van Hohenheim.png',
      },
      {
        name: 'Trisha',
        role: 'Matka',
        image: '/images/assets/Trisha.png',
      },
      {
        name: 'Edward',
        role: 'Starszy syn',
        image: '/images/assets/Edward.png',
      },
      {
        name: 'Alfonso',
        role: 'Młodszy syn',
        image: '/images/assets/Alfonso.jpg',
      },
      {
        name: 'Winry',
        role: 'Mechanik',
        image: '/images/assets/Winry.png',
      },
      {
        name: 'Greed',
        role: 'Homunculus',
        image: '/images/assets/Greed.jpg',
      },
    ],
  }
]

export function Gallery() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <Tab.Panels className="lg:col-span-4">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][imageIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${imageIndex % 3})` }}
                      >
                        <img
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={image.image}
                          alt=""
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {image.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {image.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
