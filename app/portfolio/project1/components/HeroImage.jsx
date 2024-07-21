"use client";


import React from 'react'
import Image from 'next/image';



export default function HeroImage({ imgBackground, imgForground }) {
    return (
        <div className='relative -mt-4'>
            {/* background image */}
            <div className='absolute inset-0'>
                <Image src={imgBackground}
                    alt='Backgroud Image'
                    width={400} height={400}
                    objectFit='cover'
                    className='' />
            </div>
            {/* forground image */}
            <div className='relative flex justify-center items-center h-full' >
                <Image src={imgForground}
                    alt='Forground Image'
                    width={350}
                    height={350}
                    objectFit='cover'
                    priority
                    className='w-[250px] mt-0' />
            </div>
        </div>
    )
}
