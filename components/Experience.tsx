'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PROJECTS } from "@/constants";
import SkillBox from "./SkillBox";

const Projects = () => {
  return (
    <section className='2xl:max-container relative flex flex-col padding-container 
    py-16 bg-stone-50 px-36 text-gray-600'>
      <div className="pl-12 pb-5 bold-32 lg:bold-50 text-gray-600">
        Experience
      </div>
    </section>
  )
}

export default Projects