import React from 'react'
import Image from 'next/image'

const Welcome = () => {
  return (
    <section className="max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 
    bg-stone-200 border-red-500">      
      <div>
        {/* TODO: Ensure this new styling works well with different screen sizes */}
        {/* <div className="relative z-20 flex flex-1 flex-col xl:w-1/2"> */}

        <div className="inline-block pl-40 pr-40">
          <h1 className="bold-52 lg:bold-50">Alexander Kozic</h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            Welcome to my personal Website
          </p>
        </div>

        <Image
            src="/MeWCat.png"
            alt="catAndI"
            width={300}
            height={300}
            className='inline-block'
          />

      </div>
      
    </section>
  )
}

export default Welcome