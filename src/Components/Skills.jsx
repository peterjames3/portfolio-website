import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MongoDb,
  html,
  css,
  javascript,
  materialUI,
  Msql,
  react,
  tailwind,
} from "../tech";

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const skillsData = [
    { img: Msql, title: "MySQL" },
    { img: css, title: "CSS" },
    { img: html, title: "HTML" },
    { img: javascript, title: "JavaScript" },
    { img: MongoDb, title: "MongoDB" },
    { img: materialUI, title: "Material UI" },
    { img: react, title: "React" },
    { img: tailwind, title: "Tailwind" },
  ];

  return (
    <section id="skill" className="py-4 text-white max-w-[1400px] my-5 mx-auto px-7 overflow-hidden">
      <div className="shadow-lg shadow-bg-secondary py-4 cursor-default text-center max-w-[300px] uppercase font-bold my-10 mx-auto rounded-md text-5xl">
        <h3 data-aos="fade-left" data-aos-delay='300' className="text-gradient-2">My Skills</h3>
      </div>
      <Slider {...settings} className=" grid gap-7 max-w-[500px] sm:max-w-[1400px] bg-bg-secondary">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="  p-4 rounded-lg  grid place-content-center hover:cursor-pointer "
          >
            <img src={skill.img} alt={skill.title} className="size-12 mb-2 " />
            <p className="font-semibold text-1xl font-poppins">{skill.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Skills;
