"use client"



import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeroImage from "./HeroImage"
import SocialsBadge from './SocialsBadge'
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, XCircle, Download, LucidePhoneCall, PhoneCall, PhoneCallIcon, PhoneForwarded } from "lucide-react"


const socials = [
    {
        href: "",
        image: <Facebook size={30} />
    },
    {
        href: "",
        image: <Instagram size={30} />
    },
    {
        href: "",
        image: <XCircle size={30} />
    },
]


export default function Hero() {
    return (
        <div className=''>
            <div className='flex sm:hidden items-center justify-center mb-12' >
                <div className='absolute z-10 top-[4.5rem] right-[18rem] '>
                    <SocialsBadge socials={socials} />
                </div>
                <HeroImage imgBackground="/images/shape-1.svg" imgForground="/project1/heritoky.png" />
            </div>
            <div className='flex items-center  sm:justify-between justify-center mt-12 '>
                {/* left */}
                <div className='mobile space-y-4 '>
                    <h1 className='md:text-4xl text-3xl font-bold text-slate-800 dark:text-white sm:text-start text-center'>Hi I'm <span className='text-orange-600'>Heritoky</span> Mampionona </h1>
                    <h3 className='text-2xl font-medium  sm:text-justify text-center'>Web and App Developer</h3>
                    <p className=' text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quas possimus explicabo voluptas at dolorem consequuntur hic fugit veniam accusantium sed id. Temporibus quibusdam doloremque unde deleniti, consequatur eos reiciendis.</p>

                    <div className='flex items-center md:space-x-14 space-x-2 justify-center sm:justify-start'>
                        <Button className='rounded-lg dark:bg-orange-600 text-white text-lg'>
                            <p>Contact Me</p>
                            <LucidePhoneCall />
                        </Button>
                        <Button className='rounded-lg dark:bg-orange-600 text-white text-lg' >
                            <p>Donwload CV</p>
                            <Download />
                        </Button>
                    </div>
                    <div className='hidden md:flex relative items-center justify-center top-6 md:justify-start '>
                        <SocialsBadge socials={socials} />
                    </div>
                </div>
                {/* right  */}
                <div className='hidden sm:flex' >
                    <div>
                        <HeroImage imgBackground="/images/shape-1.svg" imgForground="/project1/heritoky.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
