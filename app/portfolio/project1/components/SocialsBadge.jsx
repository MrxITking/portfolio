"use client";

import React from 'react'
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';


export default function SocialsBadge({ socials }) {
    return (
        <div className='flex items-center space-x-8 bg-white
             py-2 px-4 border-2 rounded-full absolute
             justify-center shadow-lg dark:border-slate-500 '>
            {socials.map((item, index) => {
                const { href, image } = item
                return (
                    <Link href={href} key={index} className='text-slate-500 ' >
                        {image}
                    </Link>
                )
            })}
        </div>
    )
}
