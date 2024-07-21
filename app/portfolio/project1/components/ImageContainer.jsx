"use client";


import React from 'react'
import Image from 'next/image';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ImageContainer({
  imageRight, image, title, subtitle,
  description, outline,
  texBtn,
  link,
  bgBtn = "bg-orange-500 text-lg rounded-xl ",
}) {
  return (
    <div>
      <div className={` mb-12 mobile 
        ${outline ? "border-2 border-gray-200 dark:border-gray-500 shadow-xl rounded-lg md:px-4  "
          : ""}`} >
        {
          imageRight ? (
            <>
              {/* image in the right */}
              <div className='flex flex-col items-center md:flex-row justify-between
                py-4 '>
                <div>
                  <div className='space-y-2 pl-2'>
                    <h1 className='text-2xl capitalize text-center md:text-left '>{title} </h1>
                    <h2 className='text-lg capitalize text-center md:text-left'>{subtitle}</h2>
                    <p className='max-w-[380px] md:max-w-[500px] text-justify '>{description} </p>
                    <div className='mt-5 flex items-center justify-center md:justify-start'>
                      <Link href={link}  >
                        <Button className={bgBtn} >{texBtn}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={image}
                    width={250} height={250}
                    className='w-[250px] lg:w-[350px]  mt-8 ' />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* image in left side */}
              <div className='flex flex-col items-center md:flex-row justify-between
                py-4 '>
                <div className='mb-4'>
                  <Image src={image}
                    width={250} height={250}
                    className='w-[250px] lg:w-[350px]  mt-8 ' />
                </div>
                <div className=''>
                  <div className='space-y-2 pl-2'>
                    <h1 className='text-2xl capitalize text-center md:text-left '>{title} </h1>
                    <h2 className='text-lg capitalize  text-center md:text-left'>{subtitle}</h2>
                    <p className='max-w-[380px] md:max-w-[500px] text-justify '>{description} </p>
                    <div className='mt-5  flex items-center justify-center md:justify-start'>
                      <Link href={link}  >
                        <Button className={bgBtn} >{texBtn}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}
