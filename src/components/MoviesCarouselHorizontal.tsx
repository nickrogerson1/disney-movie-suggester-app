// Split into Horizontal section so can 
// use embla-carousel on client side


"use client"

import { Movie } from "@/typings"
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import getImagePath from "@/lib/getImagePath"

type Props = {
    title: string
    movies: Movie[]
    direction: "forward" | "backward"
}

export default function HorizontalMoviesCarousel({title, movies, direction}: Props) {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    duration: 2000,
    dragFree: true,
    align: "start"
    // containScroll: true
    
}, 
[AutoScroll({ 
    // startDelay: 0, 
    speed: 0.3, 
    direction,
    stopOnInteraction: false 
})]
)

  return (
    <div className="z-50">
      <h2 className="px-10 text-2xl">{title}</h2>

        <div ref={emblaRef} className="overflow-hidden">
            <div className="flex space-x-4 px-5 lg:px-10 py-5">

            {movies?.map(movie => (
            // Uses its own modified MovieCard 
                <div key={movie.id} className="relative cursor-pointer">
            {/* Tried to use this hover but causes a layout shift/flicker: hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg */}
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0
                    via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10" />
            
                    <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>
                    <Image
                        className="w-fit min-w-[300px] lg:min-w-[400px] h-56 object-cover 
                        object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
                        src={getImagePath(movie.backdrop_path || movie.poster_path)}
                        alt={movie.title}
                        width={1920}
                        height={1080}
                    />
                </div>
            ))}
            </div>
        </div>  
    </div>
  )
}