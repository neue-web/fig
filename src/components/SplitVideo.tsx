import { VertVideo } from '~/components'
import { scrolltoHash } from '~/lib/utils'

/* eslint-disable @next/next/no-img-element */
export default function SplitVideo() {
  return (
    <section className="bg-black py-10 px-4 md:px-0">
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-y-4 w-full max-w-[1020px] mx-auto">
        <div className="border border-gold flex items-center justify-center h-[282px] max-w-full relative">
          <VertVideo />
        </div>
        <div className="md:px-10 text-white flex flex-col items-center md:items-start justify-between gap-y-4">
          <h2 className="text-[37px] leading-none">Be Part of the Show</h2>
          <p className="text-[15px]">
            Are you ready to be a part of something extraordinary? The FIG
            Fashion Show invites designers, hair and makeup specialists, and
            volunteers to join us in creating an unforgettable event that
            celebrates Buffalo&rsquo;s thriving fashion community. Whether
            you&rsquo;re a seasoned professional or an emerging talent,
            there&rsquo;s a place for you at the FIG Fashion Show.
          </p>
          <a
            href="#tickets"
            className="btn !border-white !border-[1px] w-max uppercase text-[33px] p-0 cursor-pointer"
            onClick={(e) => scrolltoHash(e, 'tickets')}
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  )
}
