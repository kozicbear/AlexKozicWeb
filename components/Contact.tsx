const Contact = () => {
  return (
    <section className='relative flexCenter flex-col padding-container 
    py-16 bg-stone-100 px-38 text-gray-600 regular-20'>
      <div className="pb-2 bold-52 text-gray-600">
        Contact
      </div>
      <div className="pb-2">
        Kozic.alexander@gmail.com
      </div>
      <div className="pb-2">
        507-400-5029
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/alexander-kozic-83a7871b4/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-stone-200 bg-stone-200 hover:bg-stone-50 rounded-lg px-1.5 py-1"
        >
         LinkedIn
        </a>
        <a
          href="https://github.com/kozicbear"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-stone-200 bg-stone-200 hover:bg-stone-50 rounded-lg px-1.5 py-1"
        >
         Github
        </a>
      </div>
    </section>
  )
}

export default Contact;