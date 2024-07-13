"use client";


import React from 'react'
import Image from 'next/image';
import HeroImage from './HeroImage';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { User2, Briefcase, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, } from "lucide-react"


const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Heritoky Mampionona",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+261 34 25 085 70",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Cognitoprog@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 20 Juin 2000",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Lot FS2 53A Bis Ambohidra",
  },
]

const quallificationData = [
  {
    title: "education",
    data: [
      {
        university: "ISSTM",
        qualification: "Bachelor Degree",
        years: "2023 - 2024"
      },
      {
        university: "Another University",
        qualification: "Master of Arts",
        years: "2022 - 2023"
      },
      {
        university: "Another university ",
        qualification: "Business and Entrepreneurship ",
        years: "2021 - 2022"
      },
    ]
  },
  {
    title: "experience",
    data: [
      {
        company: "ADA School ",
        role: "Junior DEV",
        years: "2023 - 2024",
        description: "To get started, please allow us to manage data on the 'daily.dev' domain. This is solely for technical purposes, like login and authentication. We value your privacy -- no fishy stuff here"
      },
      {
        company: "AGAPE Church",
        role: "Assistant",
        years: "2022 - 2023",
        description: "To get started, please allow us to manage data on the 'daily.dev' domain. This is solely for technical purposes, like login and authentication. We value your privacy -- no fishy stuff here"
      },
      {
        company: "WideGMH Company ",
        role: "Web Developer ",
        years: "2021 - 2022",
        description: "To get started, please allow us to manage data on the 'daily.dev' domain. This is solely for technical purposes, like login and authentication. We value your privacy -- no fishy stuff here"
      },
      {
        company: "WideGMH Company ",
        role: "Web Developer ",
        years: "2021 - 2022",
        description: "To get started, please allow us to manage data on the 'daily.dev' domain. This is solely for technical purposes, like login and authentication. We value your privacy -- no fishy stuff here"
      },
      {
        company: "WideGMH Company ",
        role: "Web Developer ",
        years: "2021 - 2022",
        description: "To get started, please allow us to manage data on the 'daily.dev' domain. This is solely for technical purposes, like login and authentication. We value your privacy -- no fishy stuff here"
      },
    ]
  }
]

const skillData = [
  {
    title: "Front-End Development",
    data : [
      {
        technology : "ReactJS",
        image : "/images/reactjs.png"
      },
      {
        technology : "NextJS",
        image : "/images/nextjs.jpg"
      },
      {
        technology : "HTML & CSS",
        image : "/images/htmlcss.png"
      },
    ],
  },
  {
    title: "Back-End Development",
    data : [
      {
        technology : "NodeJS",
        image : "",
      },
      {
        technology : "Python",
        image : "",
      },
    ],
  },
  {
    title: "Mobile Application",
    data: [
      {
        technology : "React Native"
      },
    ]
  },
  {
    title: "Tools",
    data: [
      { image: "/images/figma.svg" },
      { image: "/images/notion.svg" },
      { image: "/images/vscode.svg" },
      { image: "/images/git.png" },
    ]
  },
]

export default function AboutMe() {

  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }

  return (
    <div className='container mx-auto  mb-[8rem] relative '>
      <div className='text-center mb-10 text-3xl font-bold capitalize text-slate-700 dark:text-white ' >About me</div>
      <div className='relative flex flex-col md:flex-row items-center justify-center gap-x-[12rem] '>
        <div className='relative'>
          <HeroImage bgImgSrc="/images/shape-light.svg" imgSrc="/images/developer.png" />
        </div>
        <div className='mt-10'>
          <Tabs defaultValue='personal' className='flex flex-col items-center  ' >
            <TabsList >
              <TabsTrigger className='w-[120px]  ' value='personal' >Personal Info</TabsTrigger>
              <TabsTrigger className='w-[120px]  ' value='qualification' >Qualification</TabsTrigger>
              <TabsTrigger className='w-[120px]  ' value='skills' >Skills</TabsTrigger>
            </TabsList>
            <div className='text-lg mt-4 max-w-[500px] text-left'>
              <TabsContent value='personal' >
                <h1 className='h3 text-slate-700 mb-4 dark:text-white ' >Unmatched services Quality for over 10 Years</h1>
                <h1 className='font-semibold dark:text-slate-400 mb-4' >I specialize in crafting intuitive websites with cuting-edge technology, delivering on time dynamic and engaging user experience</h1>


                <div className='grid xl:grid-cols-2 md:text-left mb-4' >
                  {infoData.map((item, index) => {
                    return (
                      <div key={index} className='flex items-center space-x-4'>
                        <div className='text-orange-600'>{item.icon}</div>
                        <div className='font-semibold text-slate-700 dark:text-slate-400' > {item.text} </div>
                      </div>
                    )
                  })}
                </div>

                {/* language skills */}
                <div className='flex flex-col gap-y-4'>
                  <div className='text-slate-900 dark:text-orange-600 text-3xl font-bold' >Langauge Skills</div>
                  <div className='border-b border-border dark:border-white'></div>
                  <div>English, French, Bahasa</div>
                </div>
              </TabsContent>

              <TabsContent value='qualification' >
                <div>
                  <h3 className='h3 text-slate-700 dark:text-white mb-4 text-center xl:text-left'> My Awesome Journey </h3>
                  <div className='grid md:grid-cols-2 md:gap-x-8 ' >
                    {/* experiences */}
                    <div>
                      <div className='flex flex-col justify-center md:justify-start gap-x-4 items-center'>
                        <div className='flex items-center gap-x-4 text-3xl text-orange-600
                           mb-4'>
                          <Briefcase />
                          <div className='capitalize font-medium'>
                            {getData(quallificationData, "experience").title}
                          </div>
                        </div>

                        {/* lists */}
                        <div>
                          {getData(quallificationData, "experience").data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div key={index} className='flex gap-x-4 group text-left  max-w-[270px] md:max-w-xl' >
                                <div className='h-[84px] w-[1px] bg-border relative ml-2 '>
                                  <div className="
                                        w-[11px] h-[11px] rounded-full bg-orange-600 absolute 
                                        -left-[5px] group-hover:translate-y-[42px] transition-all 
                                        duration-500"> </div>
                                </div>
                                <div>
                                  <div className='font-semibold text-xl leading-none mb-2' >{company} </div>
                                  <div className='text-xl leading-none text-muted-foreground' >{role} </div>
                                  <div className='text-base  mb-4'>{years} </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    {/* education */}
                    <div>
                      <div className='flex flex-col justify-center md:justify-start gap-x-4 items-center  max-w-[500px] '>
                        <div className='flex items-center gap-x-4 text-3xl text-orange-600
                           mb-4'>
                          <GraduationCap />
                          <div className='capitalize font-medium'>
                            {getData(quallificationData, "education").title}
                          </div>
                        </div>

                        {/* lists */}
                        <div className=''>
                          {getData(quallificationData, "education").data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div key={index} className='flex gap-x-4 group text-left  max-w-[220px] md:max-w-xl' >
                                <div className='h-[84px] w-[1px] bg-border relative ml-2 '>
                                  <div className='w-[11px] h-[11px] rounded-full bg-orange-600 absolute -left-[5px] group-hover:translate-y-[42px] transition-all duration-500  '> </div>
                                </div>
                                <div >
                                  <div className='font-semibold text-xl leading-none mb-2' >{university} </div>
                                  <div className='text-xl leading-none text-muted-foreground ' >{qualification} </div>
                                  <div className='text-base  mb-4'>{years} </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* SKILLS */}
              <TabsContent value='skills' >
                <div>
                  <div>
                    <div>
                      <h3 className='h3 text-slate-700 dark:text-white mb-4 text-center md:text-left'>The Cutting-Edge Technologies Behind Me</h3>
                    </div>
                    <div>
                      <div>
                        <h4 className='text-2xl text-orange-600 text-center md:text-left mb-4'>
                          {getData(skillData, "Front-End Development").title}
                        </h4>
                        <div className='mb-4'>
                          {getData(skillData, "Front-End Development").data.map((item, index) => {
                              const {technology, image} = item
                            return(
                              <div key={index} className='flex justify-center md:justify-start  '  >
                                <div className='flex items-center gap-x-4' >
                                  <Image src={image} alt='image not found' width={40} height={40} />
                                  <h4>{technology} </h4>
                                </div>
                              </div>
                            )
                          }) }
                        </div>
                      </div>
                      <div>
                        <div>
                          <h3 className='text-center md:text-left text-2xl text-orange-600'>Tools I use Every Day </h3>
                          <div className='flex items-center justify-center md:justify-start space-x-4' >
                            { getData(skillData, "Tools").data.map((item, index) => {
                                const {image} = item
                              return(
                                <div key={index}>
                                  <div className='' >
                                    <Image src={image} width={50} height={50} />
                                  </div>
                                </div>
                              )
                            }) }
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </TabsContent>
            </div>

          </Tabs>
        </div>
      </div>
    </div>
  )
}


