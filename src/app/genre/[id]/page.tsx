import MoviesCarousel from "@/components/MoviesCarousel"
import OpenAIAzureSuggestion from "@/components/OpenAIAzureSuggestion"
import LoadingSpinner from "@/components/ui/loading-spinner"
import { Suspense } from "react"

// This turns on the experimental PPR to use Suspense on the server
export const experimental_ppr = true

type Props = {
    params : Promise<{ id: string }>
    searchParams : Promise<{ genre: string }>
}

export default async function GenrePage({ params, searchParams}: Props) {
    const { id } = await params
    const { genre } = await searchParams
   
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt42">
        <h1 className="text-6xl font-bold px-10">
            Results for &ldquo;{genre}&ldquo;
        </h1>

        <Suspense fallback={<LoadingSpinner text="AI Assistant is thinking..." />}>
          <OpenAIAzureSuggestion term={genre} />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner text="Loading Movies..." />}>
          <MoviesCarousel title={'Movies'} id={id} isVertical />
        </Suspense>
      </div>
    </div>
  )
}