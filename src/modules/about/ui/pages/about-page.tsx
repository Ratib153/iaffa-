import Image from "next/image"
import Link from "next/link"

const team = [
  {
    name: "Amira El-Sayed",
    role: "Festival Director",
    bio: "Film curator with 15 years of experience in international cinema.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Hassan Mansour",
    role: "Program Director",
    bio: "Award-winning filmmaker and programming specialist.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Leila Khoury",
    role: "Industry Coordinator",
    bio: "Film industry professional with expertise in Arab cinema.",
    image: "/images/team-3.jpg",
  },
  {
    name: "Omar Badawi",
    role: "Marketing Director",
    bio: "Communications expert passionate about cultural storytelling.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Yasmin Farah",
    role: "Community Liaison",
    bio: "Building bridges between communities through film.",
    image: "/images/team-3.jpg",
  },
  {
    name: "Karim Rashid",
    role: "Technical Director",
    bio: "Cinema technology specialist ensuring perfect screenings.",
    image: "/images/team-2.jpg",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-cinema.jpg"
            alt="Cinema interior"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            About the Festival
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto">
            A platform for Arab voices, stories, and cinematic excellence
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 text-center">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Our Mission</p>
            <p className="text-champagne/80 leading-relaxed text-lg">
              We connect Australian audiences with the vibrant world of Arab cinema through carefully curated film programs, industry events, and cultural exchanges. Our mission is to provide a platform that elevates Arab voices, supports emerging filmmakers, and builds bridges between cultures through the universal language of cinema.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 text-center">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Our Vision</p>
            <p className="text-champagne/80 leading-relaxed text-lg">
              To be Australia&apos;s premier showcase of Arab cinema, fostering cross-cultural understanding and celebrating the artistic achievements of Arab filmmakers. We envision a future where Arab stories are recognized, appreciated, and celebrated as essential contributions to world cinema.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Our Goals</p>
            <h2 className="font-libre-baskerville text-3xl sm:text-4xl font-bold text-champagne mb-6">
              What We Strive For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-8">
              <h3 className="font-libre-baskerville text-xl font-semibold text-champagne mb-3">Cultural Bridge</h3>
              <p className="text-champagne/70 text-sm leading-relaxed">
                Create meaningful connections between Arab and Australian cultures through the power of storytelling and shared cinematic experiences.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-libre-baskerville text-xl font-semibold text-champagne mb-3">Filmmaker Support</h3>
              <p className="text-champagne/70 text-sm leading-relaxed">
                Provide emerging and established Arab filmmakers with platforms, resources, and opportunities to showcase their work and advance their careers.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-libre-baskerville text-xl font-semibold text-champagne mb-3">Audience Engagement</h3>
              <p className="text-champagne/70 text-sm leading-relaxed">
                Engage diverse audiences across Australia, introducing them to the richness and diversity of Arab cinema and cultural narratives.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-libre-baskerville text-xl font-semibold text-champagne mb-3">Industry Development</h3>
              <p className="text-champagne/70 text-sm leading-relaxed">
                Foster professional development through workshops, masterclasses, and networking opportunities that strengthen the global film industry.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-libre-baskerville text-xl font-semibold text-champagne mb-3">Recognition & Excellence</h3>
              <p className="text-champagne/70 text-sm leading-relaxed">
                Recognize and celebrate excellence in Arab cinema through awards, showcases, and critical appreciation of outstanding filmmaking.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-libre-baskerville text-xl font-semibold text-champagne mb-3">Long-term Impact</h3>
              <p className="text-champagne/70 text-sm leading-relaxed">
                Build a sustainable, long-term platform that continues to grow and evolve, leaving a lasting legacy for Arab cinema in Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Our Objectives</p>
            <h2 className="font-libre-baskerville text-3xl sm:text-4xl font-bold text-champagne mb-6">
              How We Achieve Our Goals
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="font-libre-baskerville text-xl font-semibold text-champagne mb-4">Curate Exceptional Programs</h3>
              <ul className="space-y-3 text-champagne/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Select and showcase 50+ films annually from across the Arab world</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Present diverse genres including features, documentaries, shorts, and animations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Ensure representation from all 22 Arab countries</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-libre-baskerville text-xl font-semibold text-champagne mb-4">Foster Industry Connections</h3>
              <ul className="space-y-3 text-champagne/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Organize networking events connecting filmmakers with industry professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Facilitate co-production and collaboration opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Create mentorship programs pairing emerging talent with established filmmakers</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-libre-baskerville text-xl font-semibold text-champagne mb-4">Provide Educational Opportunities</h3>
              <ul className="space-y-3 text-champagne/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Conduct masterclasses and workshops on filmmaking techniques and industry practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Offer training programs in scriptwriting, directing, cinematography, and post-production</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Host panel discussions and Q&A sessions with filmmakers and industry experts</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-libre-baskerville text-xl font-semibold text-champagne mb-4">Build Community Engagement</h3>
              <ul className="space-y-3 text-champagne/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Engage with Arab diaspora communities across Australia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Partner with cultural organizations, universities, and community centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Create accessible programming that welcomes audiences of all backgrounds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Arab Cinema in Australia */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-primary tracking-[0.2em] uppercase text-sm">Our Purpose</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne leading-tight">
                Why Arab Cinema in Australia
              </h2>
              <p className="text-champagne/70 leading-relaxed">
                Arab cinema represents a rich tapestry of cultures, languages, and perspectives from across 22 countries. In Australia, home to a vibrant Arab diaspora, these films provide both a connection to heritage and an opportunity for broader audiences to discover new perspectives.
              </p>
              <p className="text-champagne/70 leading-relaxed">
                By showcasing Arab cinema, we celebrate diversity, challenge stereotypes, and highlight the creativity and resilience of Arab storytellers who continue to push boundaries in one of the world&apos;s most dynamic film traditions.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/arab-culture.jpg"
                alt="Arab cultural heritage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30">
                  {/* <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  /> */}
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

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-champagne/70 text-lg mb-10">
            Join us in celebrating the power of Arab storytelling
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/program"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors text-center"
            >
              View Program
            </Link>
            <Link
              href="/membership"
              className="w-full sm:w-auto px-8 py-4 border border-champagne/30 text-champagne font-medium tracking-wide hover:border-primary hover:text-primary transition-colors text-center"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

