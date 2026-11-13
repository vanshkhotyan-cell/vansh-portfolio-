import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import BeyondCode from "@/components/BeyondCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-[#E6EDF7]">
      {/* 1. Cinematic Sticky Scrollytelling Section (500vh) */}
      <ScrollyCanvas />

      {/* 2. Selected Work / Projects Bento Grid */}
      <Projects />

      {/* 3. About Section with Bio & Real Achievement Tiles */}
      <About />

      {/* 4. Three-Tiered Competency & Skills Matrix */}
      <Skills />

      {/* 5. Career & Education Timeline */}
      <Experience />

      {/* 6. Beyond the Terminal (ISRO, Hardware, NCC, Quizzing, Chess) */}
      <BeyondCode />

      {/* 7. Conversion-focused Contact Section */}
      <Contact />

      {/* 8. Global Minimal Footer */}
      <Footer />
    </main>
  );
}
