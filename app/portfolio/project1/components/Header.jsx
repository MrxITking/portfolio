"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const navlinks = [
    {
        title: "Home",
        href: "/about"
    },
    {
        title: "services",
        href: "/service"
    },
    {
        title: "Projects",
        href: "/project"
    },
    {
        title: "Contact",
        href: "/contact"
    },
]


export default function Header() {
  return (
    <div className='fixed z-50 w-full bg-slate-700' >
        <div className='container mx-auto xl:mx-0 '>
            <div className='flex items-center justify-between '>
                {/* left */}
                <div>
                    <div>
                        <Image src="/project1/OIP.jpeg"
                            width={150} height={150} />                        
                    </div>
                </div>
                {/* center */}
                {/* right */}
            </div>
        </div>
    </div>
  )
}
