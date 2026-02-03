import Image from "next/image"
import ScheduleGrid from "../sections/sample-programs-grid"

const sampleSchedule = [
  {
    day: 1,
    title: "Orientation & Foundations",
    focus: "Context, skills, and community",
    dayActivities: [
      "Festival welcome and programme overview",
      "Foundational filmmaking workshops (story, directing, producing)",
      "Additional workshop session",
    ],
    eveningActivities: [
      "Opening networking gathering",
      "Welcome reception",
    ],
  },
  {
    day: 2,
    title: "Mentorship & Talent Exchange",
    focus: "Individual growth and collaboration",
    dayActivities: [
      "One-on-one and small-group mentorship sessions",
      "Talent exchange across writing, directing, producing, and crew roles",
      "Collaborative project discussions",
    ],
    eveningActivities: [
      "Curated film screening",
      "Q&A with filmmakers",
    ],
  },
  {
    day: 3,
    title: "Industry & Career Pathways",
    focus: "Professional development",
    dayActivities: [
      "Sessions on festival strategy and international circulation",
      "Distribution, markets, and co-production pathways",
      "Industry networking session",
    ],
    eveningActivities: [
      "Curated film screening",
      "Industry panel discussion",
    ],
  },
  {
    day: 4,
    title: "From Development to Practice",
    focus: "Preparing for production",
    dayActivities: [
      "Script development and pre-production workshops",
      "Budgeting, scheduling, and production planning",
      "Production team formation",
    ],
    eveningActivities: [
      "Curated screening",
      "Production planning sessions",
    ],
  },
  {
    day: 5,
    title: "Practical Film Production",
    focus: "Hands-on filmmaking",
    dayActivities: [
      "Commencement of practical film production",
      "On-set mentorship covering directing, camera, sound, and workflow",
      "Production documentation",
    ],
    eveningActivities: [
      "Informal team check-ins and networking",
    ],
  },
  {
    day: 6,
    title: "Completion & Post-Production Foundations",
    focus: "Refinement and reflection",
    dayActivities: [
      "Continued filming and pickups",
      "Introduction to editing and post-production workflows",
      "Post-production planning",
    ],
    eveningActivities: [
      "Final curated film screening",
      "Reflection and feedback session",
    ],
  },
  {
    day: 7,
    title: "Showcase, Awards & Closing",
    focus: "Outcomes and celebration",
    dayActivities: [
      "Final presentation of practical film projects",
      "Group feedback and learning review",
      "Talent and industry reflection session",
    ],
    eveningActivities: [
      "Practical Film Showcase screening",
      "Awards presentation and recognition",
      "Closing ceremony and networking reception",
    ],
  },
]

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-cinema.jpg"
            alt="Theater interior"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-libre-baskerville text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            Program & Schedule
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto">
            Seven days of exceptional Arab cinema, workshops, panels, mentorship, and networking opportunities.
          </p>
        </div>
      </section>

      {/* Festival Program */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-libre-baskerville text-3xl sm:text-4xl font-bold text-champagne">
              Festival Program
            </h2>
          </div>

          <ScheduleGrid sampleSchedule={sampleSchedule} />
        </div>
      </section>

      {/* Programme Approach */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-libre-baskerville text-3xl sm:text-4xl font-bold text-champagne mb-6 text-center">
            Programme Approach
          </h2>
          <p className="text-champagne/70 leading-relaxed text-center">
            The Arab International Film Festival of Australia's programme is designed to guide participants from learning and mentorship into collaboration and real-world production. By integrating curated screenings, industry engagement, and hands-on filmmaking, AIFFA creates a structured pathway that supports creative growth, professional readiness, and long-term career sustainability for Arab filmmakers.
          </p>
        </div>
      </section>



    </main >
  )
}
