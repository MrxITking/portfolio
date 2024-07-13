"use client";

import "swiper/css"
import React from 'react'
import Image from "next/image"
import "swiper/css/pagination"

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card"


const ReviewData = [
  {
    image: "/images/avatar-1.png",
    name: "Heritoky",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nisi rerum quia nulla quasi distinctio natus sequi quam, quo velit aut "
  },
  {
    image: "/images/avatar-2.png",
    name: "Heritoky",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nisi rerum quia nulla quasi distinctio natus sequi quam, quo velit aut "
  },
  {
    image: "/images/avatar-3.png",
    name: "Heritoky",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nisi rerum quia nulla quasi distinctio natus sequi quam, quo velit aut "
  },
  {
    image: "/images/avatar-4.png",
    name: "Heritoky",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nisi rerum quia nulla quasi distinctio natus sequi quam, quo velit aut "
  },
  {
    image: "/images/avatar-5.png",
    name: "Heritoky",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nisi rerum quia nulla quasi distinctio natus sequi quam, quo velit aut "
  },
]



export default function FeedBack() {
  return (
    <div className="container mx-auto xl:mx-0 relative">
      <div className="flex flex-col items-center justify-center space-y-4 ">
        <h2 className="text-3xl font-bold text-slate-700 dark:text-white  ">Positive Feedbacks</h2>
        <p className="text-center max-w-[450px] xl:max-w-[600px] text-lg ">Those are the client who are satisfied of my work Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro cupiditate laborum </p>
      </div>

      <div className="flex items-center justify-center mt-10">
        <div className=" w-[500px] xl:w-[1130px] " >
          <Swiper 
            className="h-[200px] sm:h-[250px] "
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{clickable:true}}
            breakpoints={{
              640 : {
                slidesPerView: 3
              }
            }}
          >
            {
              ReviewData.map((item, index) => {
                const {image, name, description} = item
                return (
                  <SwiperSlide key={index}>
                    <Card className='dark:bg-slate-700 shadow-md rounded-2xl flex
                      items-center space-x-3 w-[420px] md:w-[350px] py-4
                        '>
                      <CardHeader className='p-0'>
                        <div className='relative w-full h-full flex items-center justify-center '>
                          <Image
                            src={image}
                            width={450} height={120}
                            alt=''
                            priority
                            className='relative' />
                        </div>
                      </CardHeader>
                      <div className='h-full   '>
                        <h4 className='text-2xl '>{name} </h4>
                        <p>{description} </p>
                      </div>
                    </Card>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}
