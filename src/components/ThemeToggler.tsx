"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggler() {
  const { theme, setTheme } = useTheme()
  const [ mounted, setMounted ] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

 return (
  // Easily switch between themes
   <Button
     variant="outline"
     size="icon"
     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
     title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    //  aria-label={title}
   >
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}