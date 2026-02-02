import PrizeCategoryPage from "@/modules/prizes/ui/pages/prize-category-page"
import { prizeCategories } from "@/modules/prizes/ui/pages/prizes-page"

export function generateStaticParams() {
  return prizeCategories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  return <PrizeCategoryPage slug={slug} />
}

