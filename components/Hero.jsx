"use client";





import React from 'react'
import Image from 'next/image';
import HeroImage from "./HeroImage"
import Link from 'next/link';
import Socials from "./Socials"
import { Button } from "./ui/button"
import { SendIcon, DownloadIcon, FacebookIcon, Instagram, Youtube, Linkedin } from "lucide-react"
import Badge from "./Badge"
import {RiBriefcase4Fill} from "react-icons/ri"


export default function Hero() {
  return (
    <>
    <section className=' py-8 px-12 xl:py-8 h-[84vh] xl:pt-20 bg-hero
        bg-no-repeat dark:bg-none bg-cover ' >
        <div className='container mx-auto '>
            <div className='flex  justify-between space-x-8' >
                {/* text */}
                <div className='flex max-w-[400px] flex-col justify-center mx-auto sm:mx-0
                    text-center sm:text-left'>
                    <div className='text-sm uppercase text-slate-700 dark:text-slate-200 
                        font-semibold mb-4 text-primary tracking-[4px] ' >
                        web developer
                    </div>
                    <h1 className='h1 text-3xl font-bold text-orange-600
                          ' >
                        Hello! My name is Heritoky
                    </h1>
                    <p className='max-w-[300px] mx-auto sm:mx-0 mb-4' >
                    To get started, please allow us to manage data on the 
                    'daily.dev' domain. This is solely for technical purposes, 
                    like login and authentication. We value your privacy -- 
                    no fishy stuff here
                    </p>
                    {/* button */}
                    <div className='flex flex-col sm:flex-row items-center space-x-4 gap-y-4
                        mx-auto md:mx-0 relative mb-4 ' >
                        <Link href="/contact" >
                            <Button className='bg-orange-600 rounded-full space-x-4 dark:text-white '>
                                <span>Contact Me</span> 
                                <SendIcon/> 
                            </Button>
                        </Link>
                        <Button className='bg-slate-700 rounded-full space-x-4 dark:text-white'>
                            <span>Donwload CV</span> 
                            <DownloadIcon/> 
                        </Button>
                    </div>
                    {/* socials */}
                    <div className='flex items-center mx-auto sm:mx-0 mb-10 ' >
                        <Socials containerStyle="flex items-center gap-x-4 " />
                    </div> 
                </div>
                <div className='hidden md:flex absolute right-20 md:right-20 ' >
                    {/* badge 1 */}
                    <Badge icon={<RiBriefcase4Fill />} badgeText="Years of Experiences" andCountText={4}
                        containerStyle="dark:bg-slate-900 absolute -left-[5rem] -top-[2rem]  " />
                    {/* badge 2 */}
                    <Badge icon={<RiBriefcase4Fill />} badgeText="Completed Projects" andCountText={10}
                        containerStyle="dark:bg-slate-900 absolute bg-red-500  top-[15.5rem] -left-[4rem]  " />
                    {/* badge 4 */}
                    <Badge icon={<RiBriefcase4Fill />} badgeText="Clients Satisfied" andCountText={"10K"}
                        containerStyle="dark:bg-slate-900 absolute bg-red-500  top-[9rem] left-[9rem]  " />
                    
                    <HeroImage bgImgSrc="/images/shape-1.svg"  imgSrc="/images/developer (1).png" />
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}


