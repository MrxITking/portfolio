"use client"

import React from 'react'
import Image from 'next/image'




export default function Card({cardImage, cardTitle, cardDescription}) {
  return (
    <div className="
        relative border rounded-lg flex justify-center
        w-[270px] h-[370px] xl:w-[270px]  shadow-xl mb-8 overflow-hidden
    " >
        <div className='space-y-2'>
            <div>
                <Image 
                    src={`/images/${cardImage}`} 
                    width={230} height={200} 
                    objectFit='cover'
                    className='w-full'   />
            </div>
            <div >
                <h2 className="
                    text-center text-2xl font-semibold
                    text-slate-800 capitalize dark:text-white
                " >{cardTitle} </h2>
                <h3 className="
                    text-center text-md max-w-[230px] 
                    font-semibold px-2 capitalize text-slate-400
                " >{cardDescription} </h3>
            </div>
        </div>
      
    </div>
  )
}
