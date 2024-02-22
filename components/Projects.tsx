'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <section className='2xl:max-container relative flex flex-col padding-container 
    lg:mb-10 lg:py-20 xl:mb-20 bg-stone-100 px-36'>

      <div className="pl-12 pb-4 bold-32 lg:bold-50 text-orange-200">
        Projects
      </div>

      <Carousel useKeyboardArrows={true} infiniteLoop className="text-center px-16">
        {PROJECTS.map(Project => (
          <div className="slide" key={Project.id}>
            <div className="flex items-center flex-row">
              <div className="flex-shrink-0 w-1/2">
                <img 
                  alt={Project.alt} 
                  src={Project.src} 
                  className="max-w-full h-auto rounded-lg" // Ensure the image fits within the container
                />
              </div>
              
              <div className="w-1/2 flex-grow">
                <div>{Project.name}</div>
                <div>{Project.year}</div>
                <div>{Project.skills}</div>
                <div>{Project.description}</div>
              </div>
            </div>
            
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default Projects