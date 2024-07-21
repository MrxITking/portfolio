import React from 'react'
import {MoonIcon, SunIcon} from "lucide-react"
import {Button} from "./ui/button"
import {useTheme} from "next-themes"


export default function ThemeToogler({
  className="hover:bg-white text-orange-600 bg-white dark:bg-slate-700 w-10 h-10 border-2 rounded-full border-orange-600 "
}) {
    const {theme, setTheme} = useTheme();
    return (
    <Button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}
        className={className} >
      {theme === "dark" ? (
        <SunIcon className='absolute'size={24}/>
      ) : (
        <MoonIcon className='absolute ' size={24} />
      )
      }
    </Button>
  )
}
