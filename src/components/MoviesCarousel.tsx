// Original way to handle Movies server-side
// Either horizontally or vertically

import { cn } from "@/lib/utils"
import { Movie } from "@/typings"
import MovieCard from "./MovieCard"
import { getDiscoverMovies } from "@/lib/getMovies"

type Props = {
    title: string
    movies?: Movie[]
    id?: string
    isVertical?: boolean
}

export default async function MoviesCarousel({title, movies, id, isVertical}: Props) {

  if(!movies) movies = await getDiscoverMovies(id)

  return (
    <div>
      <h2 className="px-10 text-2xl">{title}</h2>        

        <div className={cn("flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 no-scrollbar",
          isVertical && "flex-col space-x-0 space-y-12"
        )} >

        {isVertical
          ? movies.map(movie => (
            <div
              key={movie.id}
              className={cn(
                isVertical &&
                  "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
              )}
            >
              <MovieCard movie={movie} />
              <div className="max-w-2xl">
                <p>
                  {movie.title} ({movie.release_date?.split("-")[0]})
                </p>
                <hr className="mb-3" />
                <p className="">{movie.overview}</p>
              </div>
            </div>
          ))
        : movies?.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>
    </div>
  )
}