import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Welcome from "@/components/Welcome";
import Contact from "@/components/Contact";
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}