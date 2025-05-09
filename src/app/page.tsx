import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import HorizontalMoviesCarousel from "@/components/MoviesCarouselHorizontal";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {
    const upcomingMovies = await getUpcomingMovies()
    const topRatedMovies = await getTopRatedMovies()
    const popularMovies = await getPopularMovies()

  return (
      <main>
        
        <CarouselBannerWrapper />

        <div className="flex flex-col space-y-2">
          <HorizontalMoviesCarousel movies={upcomingMovies} direction="forward" title="Upcoming" />
          <HorizontalMoviesCarousel movies={topRatedMovies} direction="backward" title="Top Rated" />
          <HorizontalMoviesCarousel movies={popularMovies} direction="forward" title="Popular" />
        </div>

      </main>

  );
}
