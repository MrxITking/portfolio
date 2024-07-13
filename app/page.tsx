"use client";


import Project from "@/components/Project"
import AboutMe from "@/components/AboutMe"
import Services from "@/components/Services"
import FeedBack from "@/components/FeedBack"

export default function Home() {
  return (
    <main className=" ">
      <AboutMe />
      <Services />
      <Project />
      <FeedBack />
    </main>
  );
}
