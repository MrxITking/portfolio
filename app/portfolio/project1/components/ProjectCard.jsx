"use client"


import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Github, Eye } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'


export default function ProjectCard({ project }) {
    const { image, name, category, description, link, github } = project;
    return (
        <div>
            <Card className='mobile dark:bg-slate-700 pb-3 shadow-md rounded-2xl
                 '>
                <CardHeader className='p-0'>
                    <div className='relative w-full h-[200px] flex items-center justify-center mb-4 '>
                        <Image
                            src={image}
                            width={200} height={200}
                            alt=''
                            priority
                            className='absolute top-0 shadow-lg rounded-xl  ' />
                    </div>
                </CardHeader>
                <div className='h-full px-2 text-center '>
                    <Badge className='bg-green-500 uppercase text-sm font-medium absolute top-4 left-4 '>{category} </Badge>
                    <h4 className='text-2xl '>{name} </h4>
                    <p className='text-justify'>{description} </p>
                </div>
                <div>
                    <div className='flex items-center justify-between mt-2 px-2 '>
                        <Link href={link} >
                            <Button className=' dark:text-white hover:bg-orange-400 rounded-3xl bg-red-500'>
                                <p className='text-lg'>Visit</p>
                                <Eye />
                            </Button>
                        </Link>
                        <Link href={github}>
                            <Button className=' hover:bg-orange-400 
                                rounded-3xl bg-slate-700 dark:bg-slate-900 dark:text-white '>
                                <p className='text-lg'>View</p>
                                <Github />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    )
}
