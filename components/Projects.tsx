'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <section className='2xl:max-container relative flex flex-col padding-container 
    lg:mb-10 lg:py-20 xl:mb-20 bg-stone-100 px-36'>

      <div className="pl-12 pb-1 bold-32 lg:bold-50 text-gray-600">
        Projects
      </div>

      <Carousel showIndicators={false} showThumbs={false} infiniteLoop className="px-16">
        {PROJECTS.map(Project => (
          <div className="slide rounded-lg shadow-sm bg-white p-6 m-1" key={Project.id}>
            <div className="flex flex-row">
              <div className="flex-shrink-0 w-1/2 mr-2">
                <img 
                  alt={Project.alt} 
                  src={Project.src} 
                  className="max-w-full h-auto rounded-lg" // Ensure the image fits within the container
                />
              </div>
              
              <div className="w-1/2 flex-grow p-2 ml-2 text-left">
                <div className="bold-40 text-gray-600">{Project.name}</div>
                <div className="pt-2">{Project.type}</div>
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