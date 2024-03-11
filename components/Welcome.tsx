import React from 'react';

const Welcome = () => {
  return (
    <section className="2xl:max-container relative padding-container 
    pt-28 pb-20 bg-stone-50 px-36 text-gray-600">
      <div className="flex flex-col md:flex-row items-center text-gray-600">
        <div className="text-left p-8 md:w-3/5">
          <h1 className="bold-52">Alexander Kozic</h1>
          <p className="regular-20">
            Welcome to my personal website! 
            My name is Alex, and I am an aspiring software engineer, graduating 
            in May from Bowdoin College. My interests are hockey, snowboarding, guitar, 
            and singing. Recently, I have spent my time creating this website 
            and learning about the stock market.
          </p>
        </div>
        <div className="flexCenter flex-shrink-0 md:w-2/5">
          <img 
            src="/MeWCat.png"
            alt="catAndI" 
            className="w-4/5 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
