"use client"


import React from 'react'
import Card from './Card'

import "swiper/css"
import "swiper/css/pagination"
import {Pagination} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
 


export default function Services() {
  return (
    <div className='container mb-12 mx-auto xl:mx-0 relative mt-8'>
      <div>
        <h2 className=' mb-8 text-2xl font-bold text-center text-slate-800 dark:text-white'>Hey! Do you want any of these services?</h2>
        <div className='flex items-center justify-center '>
            <div className=' sm:w-[450px] w-[570px] xl:w-[900px]'>
              <Swiper className='h-[430px]'
                slidesPerView={2}
                breakpoints={{
                  640: {slidesPerView: 3}
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{clickable: true}}  >
                <SwiperSlide>
                  <Card 
                      cardImage={"1.png"} 
                      cardTitle="Portfolio"
                      cardDescription="I can Craft beautifull Professional website for you or your organization"     
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Card 
                      cardImage={"1.png"} 
                      cardTitle="Ecommerce plateform"
                      cardDescription="A vertically stacked set of interactive headings that each reveal a section of content."     
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Card 
                      cardImage={"1.png"} 
                      cardTitle="your Android app"
                      cardDescription="A vertically stacked set of interactive headings that each reveal a section of content."     
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Card 
                      cardImage={"1.png"} 
                      cardTitle="your Software "
                      cardDescription="A vertically stacked set of interactive headings that each reveal a section of content."     
                  />
                </SwiperSlide>
              </Swiper>
            </div>
        </div>
      </div>
    </div>
  )
}

