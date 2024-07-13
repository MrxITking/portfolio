"use client";




import React from 'react'


export default function Badge({ 
    icon, 
    badgeText,
    andCountNum, 
    andCountText, 
    containerStyle, 
 }) {
  return (
    <div className={`badge  ${containerStyle}  `} >
      <div className='text-3xl text-orange-600'>{icon}</div>
      <div className='flex items-center gap-x-2'>
        {/* yeaer of experiences */}
        <div className='text-2xl text-slate-800 font-bold leading-none
          dark:text-orange-600' >
          {andCountText}
        </div>
        {/* badge */}
        <div>
          {badgeText}
        </div>
      </div>
    </div>
  )
}
