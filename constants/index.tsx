// NAVIGATION
export const NAV_LINKS = [
  { href: '#about_me', key: 'about', label: 'About Me' },
  { href: '#projects', key: 'projects', label: 'Projects' },
  { href: '#experience', key: 'experience', label: 'Experience' },
  { href: '#contact', key: 'contact', label: 'Contact' },
];

export const PROJECTS = [
  {
    id: 1, 
    src:"/NOTAMWeb.png", 
    name:"NOTAM Web Viewer", 
    type:"SWE Intern, Foreflight | 2023",
    skills:"React, Typescript, Web Development, Github, Agile, CSS",
    description:`Upgraded ForeFlight's internal tooling from a dated
      desktop application to a modern web application using TypeScript 
      and React, expediting internal teams' ability to find and scrub
      NOTAMs (Notices to Airmen), a mission-critical product.`
  },
  {
    id: 2, 
    src: "/MUSESLAM.png", 
    name:"MUSESLAM", 
    type:"Class Project | 2023",
    skills:"Python, Flask, Web Scraping, Spacy",
    description:`An interactive poem generator taking inspiration from 
    9 Muse songs, analyzing the lyrics, and producing poetry through
    random selection within inspired sentence structures.`
  },
  {
    id: 3, 
    src: "/AlexWeb.png", 
    name:"Alex's Website",
    type:"Personal Project | 2024",
    skills:"React, Typescript, Next.js, Tailwind CSS",
    description:`Website providing insight into my professional,
    academic, and recreational pursuits`
  },
];

export const EXPERIENCES = [
  {
    id: 1, 
    dates:"Aug 2021 - Present",
    company:"Bowdoin College",
    role:"Proctor",
    description: [
      "Shape the culture of residential life staff by directly overseeing and mentoring 6 other members of staff with a 95% satisfaction rate",
      "Create an inclusive campus environment by gauging campus needs and addressing them at 4 weekly meetings with professional staff",
      "Managed 3 student crises requiring emergency services for intoxication and/or unconsciousness by implementing crisis action plan",
      "Organize 3 monthly programming events by coordinating with multiple departments on campus to foster a community of curiosity",
    ],
  },
  {
    id: 2, 
    dates:"May 2023 - Aug 2023",
    company:"Foreflight",
    role:"SWE Intern",
    description: [
      "Upgraded ForeFlights internal tooling from a dated desktop application to a modern web application using TypeScript and React, expediting internal teams ability to find and scrub NOTAMs (Notices to Airmen), a mission-critical product",
      "Practiced agile development cycle through attending daily team stand-ups, receiving feedback on JIRA tickets, and completing a robust webpage adhering to user stories while catering to scalability",
      "Utilized hybrid work model to complete 40-hour weeks on a fully remote team",
      "Communicated with back-end lead to achieve a smooth user experience with efficient API response times",
    ],
  },
  {
    id: 3, 
    dates:"Jul 2021 - Aug 2021",
    company:"Tyrus Capital",
    role:"Marketing Intern",
    description: [
      "Forecasted structured trades fund profitability by building a cash flow model in excel providing marketing insights",
      "Analyzed key asset performance drivers and how they work within the funds €500 million structure",
      "Researched the market and built a database of 1000 potential investors through Preqin database",
      "Tailored the product to meet customers needs through understanding structured product buyers motivations",
    ],
  },
  {
    id: 4, 
    dates:"Dec 2020 - Jan 2021",
    role:"Ski Instructor",
    company:"Swiss Ski School",
    description: [
      "Worked as a part time ski instructor during the winters for beginner to intermediate level skiers",
    ],
  },
];