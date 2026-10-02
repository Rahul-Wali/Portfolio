import { AIBackground } from "@/components/3d";
import { Navigation } from "@/components/navigation/Navigation";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { EngineeringPipeline } from "@/components/about/EngineeringPipeline";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import { Education } from "@/components/education/Education";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <AIBackground />
      <Navigation />

      <main id="main-content" className="relative z-10 flex-1">
        <Hero />
        <About />
        <EngineeringPipeline />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
