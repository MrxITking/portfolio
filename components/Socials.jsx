"use client";


import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Socials({ containerStyle, iconStyle }) {
    const socials = [
        {icon: <Facebook /> , href: "/facebook"},
        {icon: <Youtube />  , href: "/facebook"},
        {icon: <Linkedin />, href: "/facebook"},
        {icon: <Twitter />, href: "/facebook"},
    ]
  return (
    <div className={`${containerStyle}`} >
      {socials.map((social, index) => {
        return(
          <Link href={social.href} key={index} className={`${iconStyle}`} >
            {social.icon}
          </Link>
        )
      })}
    </div>
  )
}
