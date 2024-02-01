import React from 'react';
import Image from 'next/image';

const Welcome = () => {
  return (
    <section className="max-container padding-container flex flex-col 
      items-center lg:flex-row lg:justify-center gap-8 pt-24 pb-8
      md:gap-12 lg:gap-20 xl:flex-row bg-stone-50">
      <div className="flex items-center lg:flex-row lg:w-full xl:w-full">
        <div className="flex-1 text-left px-4 lg:px-8 xl:px-12">
          <h1 className="bold-52 lg:bold-50">Alexander Kozic</h1>
          <p className="regular-20 mt-6 text-gray-30 max-w-[720px]">
            Welcome to my personal website! 
            My name is Alex, and I am an aspiring software engineer, graduating 
            in May from Bowdoin College. My interests are hockey, skiing, guitar, 
            and singing. Recently, I have spent my time creating this website 
            and learning about the stock market.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/MeWCat.png"
              alt="catAndI"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
