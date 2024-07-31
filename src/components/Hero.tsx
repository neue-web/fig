'use client'
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import { useMediaQuery } from '~/lib/use-media-query'

export default function Hero() {
  const isDesktopScreen = useMediaQuery('(min-width: 768px)')
  // const isXLScreen = useMediaQuery('(min-width: 1280px)')

  return (
    <div className="relative -mt-1 -mb-1 z-[1] w-full">
      {isDesktopScreen ? (
        <div className="w-full h-[calc(100vh_-_20vh)] relative aspect-video">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover outline-none"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <>
          <Image
            src="/hero-bg.jpg"
            quality={80}
            priority
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional
            alt=""
          />
          <img
            src="/fig-vol2.svg"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 lg:w-full h-auto max-w-[467px] z-[3]"
          />
        </>
      )}
    </div>
  )
}
