import React from 'react';

const Welcome = () => {
  return (
    <section id="about_me" className="2xl:max-container relative padding-container 
    md:pt-28 pt-12 pb-20 bg-stone-50 px-36 text-gray-600">
      <div className="flex flex-col md:flex-row items-center text-gray-600">
        <div className="text-left p-8 md:w-3/5">
          <h1 className="bold-52 mb-2">About Me</h1>
          <p className="regular-24">
            Welcome to my personal website! 
            My name is Alex, and I am an aspiring software engineer, graduating 
            from Bowdoin College in May. My interests are hockey, snowboarding, guitar, 
            and singing. Not to mention I am always up for a game of chess. Recently, 
            I have spent my time creating this website and learning about the stock market
            in my financial machine learning class.
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
      <div id="projects"></div>
    </section>
  );
};

export default Welcome;
