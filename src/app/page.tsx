import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/layout/navigation";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ProjectArchive } from "@/components/sections/project-archive";
import { HackathonsAchievements } from "@/components/sections/hackathons-achievements";
import { Certifications } from "@/components/sections/certifications";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <FeaturedProjects />
        <div className="divider" />
        <ProjectArchive />
        <div className="divider" />
        <HackathonsAchievements />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
