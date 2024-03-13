'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PROJECTS } from "@/constants";
import SkillBox from "./SkillBox";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";
import { SetStateAction, useState } from 'react';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handleSlideChange = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <section id="projects" className='2xl:max-container relative flex flex-col padding-container 
    py-16 bg-stone-100 px-36 text-gray-600'>
      <div className="pl-12 pb-5 bold-32 lg:bold-5">
        Projects
      </div>

      <div className="flexCenter flex-row relative mx-[-50px] p-6">
        <button onClick={handlePrevClick} className="p-4">
          <TbChevronLeft size={30} className="font-bold"/>
        </button>
        
        <div className="carousel w-full min-w-4 flex md:flex-col rounded-lg shadow-lg">
          <Carousel
            autoPlay={true}
            showIndicators={false}
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
            interval={7000}
            transitionTime={1000}
            selectedItem={currentSlide}
            onChange={handleSlideChange}
            className="w-full"
          >
            {PROJECTS.map(Project => (
              <div className="slide rounded-lg bg-white p-6 m-1" key={Project.id}>
                <div className="flex md:flex-row flex-col">
                  <div className="flex-shrink-0 md:w-1/2 mr-2">
                    <img 
                      src={Project.src} 
                      className="w-full h-auto rounded-lg" 
                    />
                  </div>
                  
                  <div className="regular-18 md:w-1/2 flex-grow p-2 ml-2 text-left text-gray-500">
                    <div className="bold-40 text-gray-600 pb-2">{Project.name}</div>
                    <div className="pb-2">{Project.type}</div>
                    <SkillBox skills={Project.skills}></SkillBox>
                    <div className="">{Project.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        
        <button onClick={handleNextClick} className="p-4">
          <TbChevronRight size={30} className="font-bold"/>
        </button>
      </div>
    </section>
  )
}

export default Projects;
