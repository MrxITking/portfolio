"use client"

import React from 'react'
import Link from "next/link"
import {motion} from "framer-motion"
import { usePathname } from 'next/navigation'



export default function Navbar({className}) {
    const path = usePathname();

    const links = [
        {title: "home", href:"/"},
        {title: "My Project", href:"/project"},
        {title: "Let's Chat", href:"/contact"},
    ]
  return (
    <div className={`${className}`}>
        {links.map((link, index)=> {
            return(
                <Link href={link.href} key={index} className="hover:underline" > 
                    {link.href === path && (
                        <motion.span initial={{y: "-188%"}}
                            animate={{y: 8}}
                            transition={{type: "tween"}}
                            layoutId='underline' 
                        />
                    )}
                    {link.title}
                </Link>
            )
        })}
    </div>
  )
}
