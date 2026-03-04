import Image from "next/image"
import { CalendarDays, Users, MessageSquare, Newspaper, GraduationCap, Award } from "lucide-react"
import { MembershipForm } from "@/modules/membership/ui/components/membership-form"

const benefits = [
  {
    icon: CalendarDays,
    title: "Invitations to Cultural Events",
    subtitle: "& Arab Cinema Showcases",
  },
  {
    icon: Users,
    title: "Networking with Filmmakers",
    subtitle: "& Cultural Leaders",
  },
  {
    icon: MessageSquare,
    title: "Q&A Sessions with Filmmakers",
    subtitle: "& Industry Professionals",
  },
  {
    icon: Newspaper,
    title: "Priority Access to",
    subtitle: "Festival Programs & Newsletters",
  },
  {
    icon: GraduationCap,
    title: "Access to Workshops & Masterclasses",
    subtitle: "(Limited Seats)",
  },
  {
    icon: Award,
    title: "Digital Festival Guide",
    subtitle: "& Membership Badge",
  },
]

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-black">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gala-event.webp"
            alt="Festival gala"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#c18f2c] mb-6">
            Join AIFFA Membership
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Connect, Learn, and Celebrate Arab Cinema
          </p>
          <a
            href="#join"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors rounded-full"
          >
            Become a Member for Free!
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#c18f2c]">
              Why Become a Member?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-900 p-8 text-center hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#c18f2c] mb-1 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section id="join" className="py-24 bg-black">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#c18f2c] mb-4">
              Membership
            </h2>
            <p className="text-gray-400">
              Fill out the form below to join our community
            </p>
          </div>
          <MembershipForm />
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-black">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Questions? Contact us at{" "}
            <a href="mailto:info@iaffa.com" className="text-primary hover:underline">
              info@aiffa.com.au
            </a>
          </p>
          {/* <div className="mt-4 flex items-center justify-center gap-4 text-sm">
            <a href="/privacy" className="text-champagne/40 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span className="text-champagne/20">|</span>
            <a href="/terms" className="text-champagne/40 hover:text-primary transition-colors">
              Terms & Conditions
            </a>
          </div> */}
        </div>
      </section>
    </main>
  )
}
