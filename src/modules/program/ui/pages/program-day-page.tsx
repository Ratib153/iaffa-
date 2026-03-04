import Link from "next/link"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"
import { programDays } from "@/modules/program/data/programs"

type Props = {
  day: string
}

export function ProgramDayPage({ day }: Props) {
  const normalized = day.startsWith("day-") ? day : `day-${day}`
  const key = normalized as keyof typeof programDays
  const data = programDays[key]

  if (!data) return null

  type ContentBlock =
    | {
        type: "activities"
        title?: string
        items: readonly string[]
      }
    | {
        type: "text"
        heading: string
        text: string
      }

  const contentBlocks = data.content as readonly ContentBlock[]

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-primary hover:text-champagne transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Program & Schedule
          </Link>

          {/* Header */}
          <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#c18f2c] mb-4">
                Day {data.day} – {data.title}
              </h1>

              <p className="text-[#c18f2c] text-lg italic mb-6">
                Focus: {data.focus}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">{data.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">{data.venue}</span>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 p-8 lg:p-12">

            {contentBlocks.map((block, index) => {
              if (block.type === "activities") {
                return (
                  <section key={`activities-${index}`} className="mb-12">
                    <h2 className="text-[#c18f2c] font-serif text-2xl font-semibold uppercase tracking-wider mb-8">
                      {block.title ?? "Activities"}
                    </h2>
                      {block.items.map((item) => (
                        <p key={item} className="text-[#c18f2c] text-lg font-light leading-relaxed mb-4">
                          {item}
                        </p>
                      ))}
                  </section>
                )
              }

              return (
                <section key={`text-${index}`} className="mb-12">
                  <h2 className="text-[#c18f2c] font-serif text-2xl font-semibold uppercase tracking-wider mb-6">
                    {block.heading}
                  </h2>
                  <p className="text-gray-400 text-lg font-light leading-relaxed">
                    {block.text}
                  </p>
                </section>
              )
            })}

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-champagne/10">
              <Link
                href="/program"
                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-eerie-black font-semibold px-8 py-4 rounded-lg text-center transition-all"
              >
                View All Days
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
