"use client";


import Project from "@/components/Project"
import AboutMe from "@/components/AboutMe"
import Services from "@/components/Services"
import FeedBack from "@/components/FeedBack"
import Header from "@/components/Header";



export default function Home() {
  return (
    <main className=" ">
      <Header className="relative" />
      <AboutMe />
      <Services />
      <Project />
      <FeedBack />
    </main>
  );
}
