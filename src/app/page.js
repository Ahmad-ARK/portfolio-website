import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Slider />
      <Expertise />
      <Projects />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}