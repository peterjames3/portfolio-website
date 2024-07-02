import React from "react";
import Achievements from "./Achievements";
import { Link } from "react-scroll";
import hero from "../assets/kim.png";

const Hero = () => {
  const styles = {
    color: 'white',
    fontWeight: 'bold',

  };
  return (
    <section id="home" className="w-full py-20 mt-20">
      <div className="max-w-[1400px]  mt-0 mx-auto  px-3 ss:px-4">
        <div className="flex flex-col sm:flex-row items-center gap-5  md:gap-3">
          <div className="w-full sm:w-1/2 space-y-3 text-center sm:text-start px-2  sm:px-0">
            <h1 className="text-[min(12vw,3rem)] text-white font-semibold">
               <span className="text-primary">Hello</span>
            </h1>
            <h1 data-aos="fade-up" className=" text-[min(12vw,3.5rem)]  font-bold text-white"> This is <span className="text-gradient-2">James Kamau, </span>
              I'm a professional <span className="text-primary-accent">software  </span>
               Developer
            </h1>
        

            <div   className="flex gap-5 *:rounded-md *:py-3 *:px-6 py-7 items-center justify-center sm:justify-start">
              <Link data-aos="fade-left" data-aos-delay='1200' data-aos-offset='50'
                to="about"
                smooth={true}
                className="text-xl text-white font-medium rounded-md py-3 px-6 bg-gradient-1 cursor-pointer transition-all delay-300"
              >
                Learn more
              </Link>
              <Link data-aos="fade-left "  data-aos-delay='1700'data-aos-offset='50'
                to="contact"
                smooth={true}
                className="text-xl text-white font-medium rounded-md py-3 px-6 bg-glow cursor-pointer transition-all delay-300"
              >
                {" "}
                Get started
              </Link>
            </div>
          </div>
          <div data-aos="fade-left "  data-aos-delay='200' className="w-full sm:w-1/2 sm:flex-shrink-0">
            <img
              src={hero}
              alt="hero img"
                className="w-full h-full object-cover flex-shrink-0"
            />
          </div>
        </div>
         <div className="py-10">
          <Achievements />
         </div>
      </div>
    </section>
  );
};

export default Hero;
