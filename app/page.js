import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Image from "next/image";
import Contact from "@/components/Contact";
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <>
   <Navbar bgColor={'#ecf0f3'} linkColor={'#1f2937'}></Navbar>
   <Main></Main>
   <About></About>
   <Skills></Skills>
   <Project></Project>
   <Contact></Contact>
    </>
  )
}
