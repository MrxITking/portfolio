"use client";


import React from 'react'
import Link from 'next/link'

export default function Navlinks({ 
    navlinks,
    className="flex items-center gap-x-4"
     }) {
    return (
        <div className={className}  >
            {navlinks.map((item, index) => {
                const {href, title} = item
                return (
                    <Link 
                        key={index} href={href}
                        className='text-xl' >
                        {title}
                    </Link>
                )
            })}
        </div>
    )
}

