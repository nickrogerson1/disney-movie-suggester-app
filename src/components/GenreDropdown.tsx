import { Genres } from "@/typings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react";
import Link from "next/link";


const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

const options: RequestInit = {
  method: 'GET', 
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
  },
  next: {
    revalidate: 60 * 60 * 24 // Cache result for 24 hours
  }
};

export default async function GenreDropdown() {

  const res = await fetch(url, options)
  const data = (await res.json()) as Genres

  return (
    <DropdownMenu>
      {/* focus-visible:outline-none - hacky way to remove the white outline in dark mode */}
      <DropdownMenuTrigger className="text-white flex justify-center items-center focus-visible:outline-none" >
          Genre <ChevronDown className="ml-1" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>

        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {data.genres.map(genre => (
          // Moved the Link outside to make the dropdown snapback when clicked
          <Link href={`/genre/${genre.id}?genre=${genre.name}`} key={genre.id}>
            <DropdownMenuItem >
              {genre.name}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}