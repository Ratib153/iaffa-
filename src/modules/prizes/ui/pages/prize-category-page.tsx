import Link from "next/link"
import { prizeCategories } from "../../data/prize-categories"

interface PrizeCategoryPageProps {
  slug: string
}

export default function PrizeCategoryPage({ slug }: PrizeCategoryPageProps) {
  const category = prizeCategories.find((cat) => cat.slug === slug)

  if (!category) {
    return (
      <main className="min-h-screen bg-background">
        <div className="pt-32 pb-24 text-center">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">Category Not Found</h1>
          <Link href="/prizes" className="text-primary hover:underline">
            Return to Prizes
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-libre-baskerville text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-500 mb-6">
            {category.title}
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 leading-relaxed text-center text-lg mb-12">
            {category.detailedDescription}
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <Link
              href="/prizes"
              className="px-8 py-4 border border-yellow-500/30 text-yellow-500 font-medium tracking-wide hover:border-primary hover:text-primary transition-colors text-center"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

