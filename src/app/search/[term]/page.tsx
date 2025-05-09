import AISuggestion from "@/components/AISuggestion"
import MoviesCarousel from "@/components/MoviesCarousel"
import LoadingSpinner from "@/components/ui/loading-spinner"
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies"
import { notFound } from "next/navigation"
import { Suspense } from "react"

// This turns on the experimental PPR to use Suspense on the server
export const experimental_ppr = true

type Props = {
  params : Promise<{ term: string }>
}

export default async function SearchPage({ params }: Props) {

    const { term } = await params
    console.log(term)

    if (!term) return notFound()

    const termToUse = decodeURI(term)

    // API call to get search movies
    const movies = await getSearchMovies(termToUse)

    // API call to get popular movies
    const popularMovies = await getPopularMovies()

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt42">
        <h1 className="text-6xl font-bold px-10">
          Results for &ldquo;{termToUse}&ldquo;
        </h1>

        <Suspense fallback={<LoadingSpinner text="AI Assistant is thinking..." />}>
          < AISuggestion term={termToUse} />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading Movies..." />}>
          <MoviesCarousel title="Movies" movies={movies} isVertical />
          <MoviesCarousel title="You may also like:" movies={popularMovies} />
        </Suspense>
      </div>
    </div>
  )
}