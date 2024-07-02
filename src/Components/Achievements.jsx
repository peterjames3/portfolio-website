import React, { useState, useEffect } from "react";
import Odometer from "react-odometerjs";

const Achievements = () => {
  const [experience, setExperience] = useState(0);
  const [client, setClient] = useState(0)
  const [projects, setProjects] = useState(0)

  useEffect(()=>{
    const timeOutId = setTimeout(()=>{
      setClient(20);
      setExperience(4);
      setProjects(10)
    }, 30000)

    return ()=>clearTimeout(timeOutId)
  }, [])
  return (
    <section className=" w-full flex flex-col spay-y-6 sm:space-y-0  ss:flex-row justify-between px-5 sm:px-0 ">
      <div className="  rounded-[1.5rem] bg-glow py-8 xs:px-9 ss:px-10 sm:px-16 md:px-24 hover:cursor-pointer hover:bg-bg-secondary hover:transition-transform hover:scale-105 ease-in-out duration-300">
        <div className="flex gap-3 text-white font-bold text-[min(12vw,3rem)] items-center justify-center">
          {" "}
          <Odometer value={experience} />
          <h3>+</h3>
        </div>
        <div className=" text-[min(12vw,1.87rem )] text-slate-300 text-center">Years Experience</div>
      </div>
      <div className="  rounded-xl bg-glow py-8 xs:px-9 ss:px-10 sm:px-16 md:px-24 hover:bg-bg-secondary hover:cursor-pointer hover:transition-transform hover:scale-105 ease-in-out duration-300">
        <div className="flex gap-3 text-white font-bold text-[min(12vw,3rem)] items-center justify-center">
          {" "}
          <Odometer value={client} />
          <h3>+</h3>
        </div>
        <div className="text-[min(12vw,1.87rem )] text-slate-300 text-center">Clients Worldwide</div>
      </div>

      <div className="  rounded-xl bg-glow py-8 xs:px-9 ss:px-10 sm:px-16 md:px-24 hover:bg-bg-secondary hover:cursor-pointer hover:transition-transform hover:scale-105 ease-in-out duration-300">
        <div className="flex gap-3 text-white font-bold items-center text-[min(12vw,3rem)] justify-center">
          {" "}
          <Odometer value={projects} />
          <h3>+</h3>
        </div>
        <div className="text-[min(12vw,1.87rem )] text-slate-300 text-center">Completed Projects</div>
      </div>
    </section>
  );
};

export default Achievements;
