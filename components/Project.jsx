"use client"

import "swiper/css"
import "swiper/css/pagination"

import Link from "next/link"
import { Pagination } from "swiper/modules"
import {Button} from "@/components/ui/button"
import ProjectCard from "@/components/ProjectCard"

import {Swiper, SwiperSlide} from "swiper/react"

const projectData = [
  {
    image: "/images/1.png",
    name: "Nambinitsoa",
    category: "React JS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus ",
    link: "/",
    github: "/"
  },
  {
    image: "/images/2.png",
    name: "Nambinitsoa",
    category: "Next JS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus ",
    link: "/",
    github: "/"
  },
  {
    image: "/images/3.png",
    name: "Nambinitsoa",
    category: "Python ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus ",
    link: "/",
    github: "/"
  },
  {
    image: "/images/4.png",
    name: "Nambinitsoa",
    category: "NextJS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus ",
    link: "/",
    github: "/"
  },
  {
    image: "/images/1.png",
    name: "Nambinitsoa",
    category: "Next JS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus ",
    link: "/",
    github: "/"
  },
]

export default function Project() {
  return (
    <div className="relative mb-12 xl:mb-48">
      <div className="container mx-auto flex flex-col " >
        {/* text */}
        <div className="bg-pink-100 dark:bg-slate-600 max-w-[400px] mx-auto xl:mx-0 
          text-center xl:text-left mb-12 p-4 xl:h-[350px] flex flex-col 
          justify-center items-center rounded-xl shadow-2xl
          xl:items-start ">
          <h2 className="text-3xl text-slate-800 font-bold 
            dark:text-white capitalize mb-4 " >my Latest Projects</h2>
          <p className="font-semibold mb-8" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorem natus </p>
          <Link href="/projects"> 
            <Button className="bg-orange-600 rounded-xl text-lg hover:bg-orange-500 " >All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="flex items-center justify-center ">
          <div className="sm:w-[500px] w-[500px] xl:w-[750px] xl:absolute right-8 top-0" >
            <Swiper className="h-[450px] " 
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3 }}}
              spaceBetween={30} 
              modules={[Pagination]}
              pagination={{clickable: true}}  >
              {/* show only the first 4th projects for the slide */}
              { projectData.slice(0,4).map((project, index) => {
                return(
                    <SwiperSlide key={index}>
                      <ProjectCard project={project} />
                    </SwiperSlide>
                )
              }) }
            </Swiper>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}
 