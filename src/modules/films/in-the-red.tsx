"use client"

import Image from "next/image"
import Link from "next/link"

export default function InTheRedFilmPage() {
  return (
    <main className="min-h-screen w-full pt-12 bg-black">
      <div className="w-full bg-black">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12">
          <div className="relative overflow-hidden rounded-lg shadow-2xl max-w-2xl mx-auto">
            <Image
              src="/images/Films/In_the_red.webp"
              alt="In The Red - Film Poster"
              width={800}
              height={1200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-black">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4 text-champagne">In The Red</h1>

              <div className="bg-gray-900 border-l-4 border-[#C9A84F] p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-champagne">Film Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-champagne/70 font-semibold">Director</p>
                    <p className="text-lg text-champagne/90">Dawan Nawzad Majeed</p>
                  </div>
                  <div>
                    <p className="text-sm text-champagne/70 font-semibold">Country</p>
                    <p className="text-lg text-champagne/90">Iraq</p>
                  </div>
                  <div>
                    <p className="text-sm text-champagne/70 font-semibold">Language</p>
                    <p className="text-lg text-champagne/90">Arabic</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-champagne">Synopsis</h3>
                <p className="text-lg text-champagne/85 leading-relaxed">
                  A sacrifice of woman in Middle East.
                <br></br>
                <br></br>
                  Dawan Nawzad Majeed, born on 1 January 1985 in Sulaimani, Iraq, as an Iraqi filmmaker and director whose artistic journey began in 2001. Over the course of his career, he has established himself as a dedicated storyteller with a strong passion for cinema and visual expression.
Since the beginning of his artistic path, Dawan has earned significant recognition, winning a total of 26 awards for his creative work. In 2008, he achieved a historic milestone by becoming the first Iraqi to receive a notable distinction in his field. Continuing his success, he ranked second in Iraq in 2023, further solidifying his reputation as an accomplished filmmaker.
Dawan has directed five short films, each reflecting his commitment to authentic storytelling and meaningful cinematic narratives. His work often highlights cultural identity, human emotion, and social themes, drawing inspiration from his roots in Sulaimani and the broader Iraqi experience.
With over two decades of artistic dedication, Dawan Nawzad Majeed continues to contribute to the growth of Iraqi cinema while pursuing new creative horizons.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
