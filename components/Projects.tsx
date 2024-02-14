'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 
    lg:mb-10 lg:py-20 xl:mb-20 bg-stone-100'>
      <Carousel useKeyboardArrows={true}>
        {PROJECTS.map(Project => (
          <div className="slide">
            <img 
              alt={Project.alt} 
              src={Project.src} 
              key={Project.id} 
            />
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default Projects