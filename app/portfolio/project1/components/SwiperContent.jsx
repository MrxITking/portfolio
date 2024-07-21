"use client";


import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function SwiperContent({ items }) {
    return (
        <div className="flex items-center justify-center">
            <div className="sm:w-[500px] w-[500px] xl:w-[750px] xl:absolute right-8 top-0">
                <Swiper
                    className="h-[450px]"
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay
                    onDurationChange={320}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 20 },
                        480: { slidesPerView: 3, spaceBetween: 30 },
                        640: { slidesPerView: 4, spaceBetween: 40 }
                    }}
                >
                    {items.map((item, index)=> {
                        return(
                            <SwiperSlide key={index} >
                                {item}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}
