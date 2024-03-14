const SkillBox = ({ skills }: any) => {
  const skillList = skills.split(',').map((skill: string) => skill.trim());
  
  return (
    <ul className="flex flex-wrap">
      {skillList.map((skill: string, index: number) => (
        <li className="text-gray-600 bold-18 bg-stone-100 rounded-md pt-1 pb-1 pl-2 pr-2 mr-2 mb-2" key={index}>{skill}</li>
      ))}
    </ul>
  )
}

export default SkillBox