"use client"


import React from 'react'
import Link from 'next/link'
import Hero from './components/Hero'
import { Pagination } from 'swiper/modules'
import { Button } from '@/components/ui/button'
import { projectData } from "./components/Data"
import { Swiper, SwiperSlide } from "swiper/react"
import ProjectCard from './components/ProjectCard'
import SwiperContent from "./components/SwiperContent"
import ImageContainer from "./components/ImageContainer"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

import Volunteer from "./components/Volunteer"



import { AboutMe } from './components/Data'


export default function page() {
  const getData= (arr, title) => {
    return arr.find((item) => item.title === title)
  }
  return (
    <div>
      <Hero />
      <div className='mb-12 mt-12 '>
        <div>
          <div className='mb-8 space-y-4 '>
            <h1 className='text-3xl text-slate-700 dark:text-white font-semibold text-center md:text-left'>My Previous Experiences</h1>
            <div className='flex items-center justify-center md:justify-start'>
              <p className='text-justify max-w-[380px] md:max-w-[600px] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo, repellat, quam tempore molestiae earum cupiditate dolores cumque velit consequatur quos! Sunt voluptatum quidem deserunt. Nam aliquid optio culpa deleniti?</p>
            </div>
          </div>
          {/* PREVIOUS WORK EXPERIENCES */}
          <div className='flex flex-col items-center justify-center'>
            <ImageContainer
              image="/project1/1.png"
              outline
              imageRight
              title="Organization Name"
              subtitle="My Role: Assistant"
              texBtn="Learn More"
              link="/more"
              description="
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consequuntur minima perferendis officiis omnis amet blanditiis 
              odit ad repellendus repellat corporis, corrupti veritatis possimus at 
              eveniet ipsa ex quis magnam rem.
            "  />

            <ImageContainer
              image="/project1/1.png"
              outline
              title="Organization Name"
              subtitle="My Role: Assistant"
              texBtn="Learn More"
              link="/more"
              description="
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consequuntur minima perferendis officiis omnis amet blanditiis 
              odit ad repellendus repellat corporis, corrupti veritatis possimus at 
              eveniet ipsa ex quis magnam rem.
            "  />
            <div className=' flex space-y-4 flex-col items-center justify-center mb-8 '>
              <h1 className='capitalize text-3xl text-center dark:text-orange-600 text-blue-700 font-semibold'> Other experiences</h1>
              <p className='mobile '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum sapiente enim facere voluptas labore inventore commodi odio excepturi obcaecati, quos, mollitia quod eius hic, harum odit ratione rem maxime?</p>
              <Link href="/portfolio/project1/pages/experience">
                <Button className='text-lg dark:bg-red-500 dark:text-white '>
                  Discover
                </Button>
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center '>
            <div className='mobile '>
              <h1 className='h3 text-center '>My awesom projects </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum nostrum maiores. Consequuntur ipsa tempora exercitationem, nemo quia nam, maiores, dicta vero eaque saepe qui autem? Porro qui error rerum!</p>
            </div>
            <div className='center mt-8'>
              <div>
                <Swiper
                  className='h-[470px]  md:h-[550px] w-[350px] xl:w-[1100px] '
                  slidesPerView={1}
                  spaceBetween={10}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 4, spaceBetween: 10 }
                  }}
                >
                  {projectData.map((project, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ProjectCard project={project} />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          <div className='' >
            <div className='center'>
              <h1 className='capitalize h3 mb-4 text-orange-600'>About me</h1>
              <div>
                <Tabs defaultValue='adress' className='mobile  dark:bg-slate-700 rounded-xl' >
                  <TabsList className='center md:flex-row '>
                    <TabsTrigger value='adress' className='w-[150px] '>adress</TabsTrigger>
                    <TabsTrigger value='experience' className='w-[150px]'>Experiences</TabsTrigger>
                    <TabsTrigger value='voluntarism' className='w-[150px]'>Voluntarism</TabsTrigger>
                    <TabsTrigger value='education' className='w-[150px]'>Education</TabsTrigger>
                    <TabsTrigger value='skill' className='w-[150px]'>Skills</TabsTrigger>
                    <TabsTrigger value='qualification' className='w-[150px]'>Qualification</TabsTrigger>
                  </TabsList>
                  <div>
                    <TabsContent value='adress' >
                      <div>
                        <h3 className='h3 mb-4 text-slate-700 text-center md:text-left capitalize'> my current  {getData(AboutMe, "adress").title}</h3>
                        <div className='space-y-4'>
                          {getData(AboutMe, "adress").data.map((item, index) => {
                            return(
                              <div key={index} className='flex items-center space-x-5'>
                                <div className='text-orange-600'>{item.icon} </div>
                                <div className=''>{item.text} </div>
                              </div>
                            )
                          }) }  
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value='experience'>
                      <div>
                        <h3 className='h3 mb-4 text-slate-700 text-center md:text-left capitalize'> My Awesome Journey </h3>
                        <div className='space-y-4 '>
                          {getData(AboutMe, "experience").data.map((item, index) => {
                            return(
                              <div key={index} className='hover:border-2 hover:border-slate-700 
                              hover:shadow-xl dark:hover:bg-slate-900 p-4 rounded-xl'> 
                                <h3 className='h2 dark:text-white'> {item.company} </h3>
                                <h2 className='text-xl text-green-600'> {item.role} </h2>
                                <h1 className='text-red-600'> {item.year} </h1>
                                <p> {item.description } </p>
                              </div>
                            )
                          }) }
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value='voluntarism'>
                      <div>
                        <Volunteer/>
                      </div>
                    </TabsContent>
                    <TabsContent value='education'>Education</TabsContent>
                    <TabsContent value='skill'>Skills</TabsContent>
                    <TabsContent value='sualification'>Qualification</TabsContent>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
