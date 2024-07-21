"use client"

import React from 'react'
import Image from 'next/image'
import Navlinks from "./Navlinks"
import { Button } from '@/components/ui/button'
import { MessageCircleIcon } from "lucide-react"
import ThemeToogler from '@/components/ThemeToogler'



const navlinks = [
    {
        title: "Home",
        href: "/about"
    },
    {
        title: "Missions",
        href: "/service"
    },
    {
        title: "Stories",
        href: "/project"
    },
    {
        title: "Projects",
        href: "/contact"
    },
]


export default function Header() {
    return (
        <div className='fixed top-0 z-50 w-full shadow-md bg-white dark:bg-slate-700 ' >
            <div className='container mx-auto xl:mx-0 '>
                <div className='flex items-center justify-between '>
                    {/* left */}
                    <div>
                        <div className='relative'>
                            <Image
                                src="/project1/logos/Expert-Custom-Logo-Designer.png"
                                width={150} height={150}
                            />
                        </div>
                    </div>
                    {/* center */}
                    <div>
                        <div className='hidden md:block'>
                            <Navlinks navlinks={navlinks} />
                        </div>
                    </div>
                    {/* right */}
                    <div className='flex items-center space-x-4 '>
                        <Button className='space-x-2 dark:text-white dark:bg-slate-900'>
                            <h1 className='text-xl'>Let's Chat</h1>
                            <MessageCircleIcon />
                        </Button>
                        <div>
                            <ThemeToogler className="
                        text-slate-700 bg-white dark:text-white dark:bg-slate-900 hover:bg-white
                        " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
