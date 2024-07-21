"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Card({linkBtn,bgBtn }) {
    return (
        <div className={`flex items-center bg-slate-300 rounded-lg shadow-lg p-4`} >
            {/* left */}
            <div className="mobile">
                <h3 className="h3 text-slate-900 dark:text-white capitalize">Boot Camp Program</h3>
                <h2 className="">2022-2023 : Volunteer Leader </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus repudiandae facilis neque, aspernatur inventore tenetur omnis saepe eos quisquam voluptates dolores beatae eius a doloremque esse officia nobis. Ad?</p>
                <Link href={linkBtn}>
                    <Button className={bgBtn} >Read More</Button>
                </Link>
            </div>
            {/* right bg-image front-image*/}
            <div>
                <div>

                </div>
            </div>

        </div>
    )
}

export function Toky() {
    return (
        <div>
            Toky
        </div>
    )
}