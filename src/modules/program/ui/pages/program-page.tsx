import Image from "next/image"
import { programDays } from "@/modules/program/data/programs"
import ScheduleGrid from "../sections/sample-programs-grid"

const sampleSchedule = Object.values(programDays).map((d) => ({
  day: d.day,
  title: d.title,
  focus: d.focus,
  dayActivities: d.dayActivities,
  eveningActivities: d.eveningActivities,
}))

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-black">

      {/* Hero Section */}
      <section className="relative pt-32  overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-cinema.jpg"
            alt="Theater interior"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-libre-baskerville text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-500 mb-6">
            Program & Schedule
          </h1>
          <p className="text-yellow-500 text-lg max-w-2xl mx-auto">
            Seven days of exceptional Arab cinema, workshops, panels, mentorship, and networking opportunities.
          </p>
        </div>
      </section>

      {/* Festival Program */}
      <section className="py-20 bg-black">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="font-libre-baskerville text-3xl sm:text-4xl font-bold text-gray-400">
              Festival Program
            </h2>
          </div>

          <ScheduleGrid sampleSchedule={sampleSchedule} />
        </div>
      </section>

      {/* Programme Approach */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-libre-baskerville text-3xl sm:text-4xl font-bold text-yellow-500 mb-6 text-center">
            Programme Approach
          </h2>
          <p className="text-gray-400 leading-relaxed text-center">
            The Arab International Film Festival of Australia's programme is designed to guide participants from learning and mentorship into collaboration and real-world production. By integrating curated screenings, industry engagement, and hands-on filmmaking, AIFFA creates a structured pathway that supports creative growth, professional readiness, and long-term career sustainability for Arab filmmakers.
          </p>
        </div>
      </section>



    </main >
  )
}
