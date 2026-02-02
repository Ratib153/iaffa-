import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Trophy, Film, Camera } from "lucide-react"

const stats = [
  { value: "6", label: "Award Categories" },
  { value: "15+", label: "Films Recognized" },
  { value: "1", label: "Grand Prize Winner" },
]

const prizeCategories = [
  {
    title: "Best Feature Film",
    description: "Outstanding narrative feature film",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="10" width="36" height="28" rx="2" />
        <circle cx="24" cy="24" r="8" />
        <circle cx="24" cy="24" r="3" />
        <line x1="6" y1="16" x2="42" y2="16" />
        <line x1="6" y1="32" x2="42" y2="32" />
      </svg>
    ),
  },
  {
    title: "Best Documentary",
    description: "Excellence in non-fiction filmmaking",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="6" />
        <line x1="24" y1="8" x2="24" y2="14" />
        <line x1="24" y1="34" x2="24" y2="40" />
        <line x1="8" y1="24" x2="14" y2="24" />
        <line x1="34" y1="24" x2="40" y2="24" />
      </svg>
    ),
  },
  {
    title: "Best Short Film",
    description: "Exceptional short-form storytelling",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="12" width="32" height="24" rx="2" />
        <polygon points="20,18 32,24 20,30" />
      </svg>
    ),
  },
  {
    title: "Best Director",
    description: "Outstanding directorial achievement",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="14" r="8" />
        <path d="M8 42 L24 32 L40 42" />
        <line x1="24" y1="32" x2="24" y2="22" />
      </svg>
    ),
  },
  {
    title: "Best Cinematography",
    description: "Excellence in visual storytelling",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="16" width="24" height="18" rx="2" />
        <circle cx="16" cy="25" r="6" />
        <path d="M28 20 L40 14 L40 36 L28 30 Z" />
      </svg>
    ),
  },
  {
    title: "Audience Choice Award",
    description: "Selected by festival attendees",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 6 L28 18 L40 18 L30 26 L34 38 L24 30 L14 38 L18 26 L8 18 L20 18 Z" />
      </svg>
    ),
  },
]

const juryPanel = [
  {
    name: "Amira El-Sayed",
    role: "Festival Director & Jury Chair",
    bio: "Film curator with 15 years of experience in international cinema.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Hassan Mansour",
    role: "Award-Winning Filmmaker",
    bio: "Director of multiple acclaimed Arab films.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Leila Khoury",
    role: "Film Critic & Scholar",
    bio: "Expert in Arab cinema and cultural studies.",
    image: "/images/team-3.jpg",
  },
]

const winners2024 = [
  { category: "Best Feature Film", title: "The Last Dance", director: "Layla Hassan" },
  { category: "Best Documentary", title: "Echoes of Sand", director: "Omar Khalil" },
  { category: "Best Short Film", title: "Cairo Nights", director: "Sara Mansour" },
]

const winners2023 = [
  { category: "Best Feature Film", title: "Desert Roads", director: "Ahmed Nasser" },
  { category: "Best Documentary", title: "Threads of Memory", director: "Fatima Al-Qasimi" },
  { category: "Best Short Film", title: "Between Two Shores", director: "Karim Rashid" },
]

export default function PrizesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ceremony-1.jpg"
            alt="Awards ceremony"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-eerie-black via-eerie-black/90 to-eerie-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            Prizes
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto">
            Celebrating excellence in Arab cinema
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-champagne/70 leading-relaxed text-center mb-12">
            The International Arab Film Festival of Australia recognizes outstanding achievements in filmmaking through our annual awards ceremony. Our awards celebrate the artistry, innovation, and cultural significance of Arab cinema, honoring filmmakers who push boundaries and tell compelling stories that resonate with audiences worldwide.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center glass-card p-6">
                <p className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-champagne/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Categories */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Prize Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prizeCategories.map((prize) => (
              <div
                key={prize.title}
                className="glass-card p-8 text-center hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {prize.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-champagne mb-2 group-hover:text-primary transition-colors">
                  {prize.title}
                </h3>
                <p className="text-champagne/60 text-sm">{prize.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jury Panel */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Jury Panel
            </h2>
          </div>
          <p className="text-center text-champagne/70 mb-12 max-w-2xl mx-auto">
            Our distinguished jury panel consists of renowned filmmakers, critics, and industry professionals who bring decades of experience and expertise to the selection process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {juryPanel.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-champagne mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-champagne/60 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winners Archive */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Winners Archive
            </h2>
          </div>
          
          {/* 2024 Winners */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-semibold text-primary mb-6">2024 Winners</h3>
            <div className="space-y-4">
              {winners2024.map((winner) => (
                <div key={winner.title} className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-champagne/60 text-sm mb-1">{winner.category}</p>
                    <p className="font-serif text-lg text-champagne">{winner.title}</p>
                  </div>
                  <p className="text-champagne/60 text-sm">Dir. {winner.director}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2023 Winners */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-primary mb-6">2023 Winners</h3>
            <div className="space-y-4">
              {winners2023.map((winner) => (
                <div key={winner.title} className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-champagne/60 text-sm mb-1">{winner.category}</p>
                    <p className="font-serif text-lg text-champagne">{winner.title}</p>
                  </div>
                  <p className="text-champagne/60 text-sm">Dir. {winner.director}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne mb-4">
              Ceremony Photos & Videos
            </h2>
            <p className="text-champagne/70">
              Relive the magic of our awards ceremonies through photos and videos from past festivals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-video overflow-hidden group cursor-pointer">
                <Image
                  src="/images/ceremony-1.jpg"
                  alt={`2024 Awards Ceremony ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-eerie-black/40 group-hover:bg-eerie-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-champagne text-sm font-medium">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
