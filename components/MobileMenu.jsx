"use client";

import {MenuIcon} from "lucide-react"
import React, { useState } from 'react'
import Navbar from "./Navbar";



export default function MobileMenu({className}) {
    const [toggle, setToggle] = useState(false);
    console.log(toggle)
  return (
    <button
        onClick={()=> setToggle(!toggle)} 
        className={`${className} bg-orange-500 text-white rounded-md`} >
      <MenuIcon size={30} />
    </button>
  )
}
