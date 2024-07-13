"use client";

import React from 'react'
import Image from "next/image"
import {useRouter} from "next/navigation"


export default function Logo({src, width, height, className}) {
  const router = useRouter();
  return (
    <div className='cursor-pointer' onClick={()=> router.push("/") }>
      <Image src={src} alt='here is your logo' width={width} height={height} className={className} />
    </div>
  )
}
