import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}