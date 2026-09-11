import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import LocationMap from "@/components/LocationMap";
import MyStack from "@/components/MyStack";
import PentesterTools from "@/components/PentesterTools";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className="bg-grid" />

      <main className="max-w-[1240px] mx-auto px-[20px]">
        <Hero />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10" id="about">
          <About />
          <MyStack />
        </div>

        <PentesterTools />
        <FeaturedProjects />

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10"
          id="experience"
        >
          <Experience />
          <Education />
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-5 my-10 items-stretch"
          id="skills"
        >
          <Skills />
          <Languages />
          <LocationMap />
        </div>

        <Contact />
      </main>
    </>
  );
}