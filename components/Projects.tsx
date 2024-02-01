interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Project = ({ backgroundImage, title, subtitle, peopleJoined} :
  CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}`}>
      Project 1
    </div>
  )
}

const Projects = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 
    lg:mb-10 lg:py-20 xl:mb-20 bg-stone-100'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start
      justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <Project 
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <Project 
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
      </div>
    </section>
  )
}

export default Projects