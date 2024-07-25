import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { ContactForm, Container, SiteFooter } from '~/components/'

export default function SponsorsPage() {
  return (
    <Container>
      <div className="flex flex-col gap-y-10 md:gap-y-20 bg-white pt-32">
        <div className="mx-auto max-w-[1020px] w-full p-10 flex flex-col gap-y-4 justify-center items-center text-center">
          <h1 className="text-4xl text-center mb-8">Sponsors</h1>
        </div>
      </div>
    </Container>
  )
}