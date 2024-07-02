import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easeing: "ease-i-sine,",
    });
  }, []);

  return (
    <section className=" flex flex-col">
      <Navbar />
      <Hero />
      <AboutUs />
      <Skills />
      <Education />
      <Project />

      <Contact />

      <div className="mb-0">
        <Footer />
      </div>
    </section>
  );
}

export default App;
