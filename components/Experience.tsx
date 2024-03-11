import { EXPERIENCES } from "@/constants";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";

const Experience = () => {
  return (
    <section className='2xl:max-container relative flex flex-col padding-container 
    py-16 bg-stone-50 px-38 text-gray-600 regular-18'>
      <div className="pl-12 pb-5 bold-32 lg:bold-50 text-gray-600">
        Experience
      </div>
      
      {EXPERIENCES.map(Experience => (
        <div className="flex flex-col lg:flex-row mx-8 my-3"key={Experience.id}> 
          <div className="pt-5 pl-6 lg:w-3/12 mb-2">
            {Experience.dates}
          </div>
          <div className="rounded-lg bg-white shadow-lg p-6 m-1 w-full">
            <div className="flex flex-row">
              <div className="bold-20">
                {Experience.company}
              </div>
              <div className="pt-1 ml-2">
                | {Experience.role}
              </div>
            </div>
            <ul className="pl-4 list-disc">
              {Experience.description.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience;