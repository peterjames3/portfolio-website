import React from "react";
import { whyChooseMe, icons } from "./whychooseme";
import profile from "../assets/profile.jpeg";

const About = () => {
  return (
    <section id='about' className="w-full py-20 ">
      <div className="max-w-[1300px] my-5 mx-auto space-y-7 px-3 ss:px-4">
        <div className="flex flex-col  sm:flex-row w-full  gap-5">
          <div data-aos="fade-right" data-aos-delay="400" className="w-full sm:w-1/2 space-y-3 text-center px-3 ss:px-2 sm:text-start">
            <h4 className="text-6xl font-bold text-gradient-2">ABOUT ME</h4>
            <p data-aos="fade-right" data-aos-delay='1000' className=" text-slate-500  text-[min(12vw,1.3rem)]">
              I am a professional and enthusiastic programmer in my daily life.
              I am a quick learner with a self-learning attitude. I love to
              learn and explore new technologies and am passionate about
              problem-solving. I love almost all the stacks of web application
              development and love to make the web more open to the world. My
              core skill is based on JavaScript and I love to do most of the
              things using JavaScript. I am available for any kind of job
              opportunity that suits my skills and interests.
            </p>
          </div>
          <div className="w-full sm:w-1/2 rounded-lg">
            <img
              src={profile}
              alt="Profile"
              className="rounded-lg w-full max-h-[450px] object-contain mix-blend-difference "
            />
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay='300' className="max-w-[1400px]  p-8  my-10 mx-auto grid grid-cols-1 grid-rows-4 ss:grid-cols-2 ss:grid-rows-2 gap-6  text-slate-500 bg-[#091807] rounded-xl  *:px-7 *:py-9 *:rounded-xl">
        {whyChooseMe.map((list, index) => {
          const IconComponent = icons[list.icon];
          return (
            <div
              key={index}
              className=" bg-bg-secondary hover:bg-bg-muted gap-5 flex items-center place-content-center ss:place-content-start hover:cursor-pointer hover:transition-transform hover:scale-105 hover:ease-in-out duration-300"
            >
              <div className="rounded-full size-14 text-3xl bg-bg-muted hover:bg-[#091807] flex justify-center items-center">
                <IconComponent />
              </div>

              <div>
                <h4>{list.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
