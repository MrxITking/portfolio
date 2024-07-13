"use client";

import React,{useState} from 'react'
import Logo from './Logo';
import Navbar from './Navbar';
import MobileMenu from "./MobileMenu"
import ThemeToogler from "./ThemeToogler"
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card"
import Hero from "./Hero"


export default function Header( {className} ) {
  return (
    <>
    <div className={`${className} container mx-auto fixed z-50 w-full flex items-center 
      justify-between p-4 shadow-md rounded-lg dark:bg-slate-700 `}>
      {/* logo */}
      <Logo src="/images/logo.svg" width={50} height={50}/>
      {/* navbar */}
      <Navbar className="hidden sm:block absolute right-20 text-[1.2rem] space-x-8" />
      
      {/* menu icon for mobile */}
      <HoverCard>
        <HoverCardTrigger>
          <MobileMenu className="sm:hidden ml-[20rem]" />
        </HoverCardTrigger>
        <HoverCardContent className='w-full px-8 flex items-center justify-center' >
          <Navbar className="w-full flex items-center space-x-4 " />
        </HoverCardContent>
      </HoverCard>

    {/* theme toogler */}
      <ThemeToogler />
    </div>
    <div>
      <Hero />
    </div>
    </>
  )
}
