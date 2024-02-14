'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 
    lg:mb-10 lg:py-20 xl:mb-20 bg-stone-100'>
      <div className="max-w-4xl mx-auto">
        <Carousel autoPlay useKeyboardArrows={true} infiniteLoop className="text-center">
          {PROJECTS.map(Project => (
            <div className="slide" key={Project.id}>
              <img 
                alt={Project.alt} 
                src={Project.src} 
                className="mx-auto max-w-full h-auto" // Center images and ensure they fit within the container
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Projects