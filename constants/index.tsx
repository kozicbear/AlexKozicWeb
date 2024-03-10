// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'about_me', label: 'About Me' },
  { href: '/', key: 'projects ', label: 'Projects' },
  { href: '/', key: 'experience', label: 'Experience' },
  { href: '/', key: 'resume', label: 'Resume' },
];

export const PROJECTS = [
  {
    id: 1, 
    src:"/NOTAMWeb.png", 
    alt:"NOTAM Web Viewer", 
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
    alt:"MUSESLAM",
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
    alt:"Alex Website",
    name:"Alex's Website",
    type:"Personal Project | 2024",
    skills:"React, Typescript, Next.js, Tailwind CSS",
    description:`Website providing insight into my professional,
    academic, and recreational pursuits`
  },
];