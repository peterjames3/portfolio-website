import React from 'react'
import ProjectCard from './ProjectCard'
import {
joblisting,
ecommerce,
cal,
productPage
} from "../tech";
const Project = () => {
  const projects = [
    {
      image: joblisting,
      title: 'Job Listing/ Filtering',
      description: 'Transforming education with AI, our School UI Design project revolutionizes the learning experience...',
      stack: ['React', 'Zustand', 'Tailwindcss',"Vite" ],
      demoLink: 'https://github.com/peterjames3/Job-filtering'
    },
    {
      image: ecommerce,
      title: 'E-Commerce Application',
      description: 'hance your online shopping experience with our E-Commerce Application UI design project. Seamlessly blending aesthetics with functionality, our intuitive interface offers easy navigation, ',
      stack: ['ReactJs', 'Contenxt API', 'Tailwindcss', 'React-Route'],
      demoLink: 'https://6642861b275d19323f162770--zingy-dieffenbachia-3fdb05.netlify.app/'
    },
    {
      image:  productPage,
      title: 'Product page ',
      description: 'Enhance your online shopping experience with our E-Commerce Application UI design project...',
      stack: ['Vite', 'Html', 'Tailwindcss', 'Javascript'],
      demoLink: 'https://6683aed48bf2fd00894961ed--whimsical-palmier-4b0b37.netlify.app/'
    },
    {
      image:  cal,
      title: 'Calculator ',
      description: 'This calculator app  tested my CSS and JS skills especially. If you are wanting to practice using Grid, this challenge will be perfect for you',
      stack: ['Vite', 'Html', 'Css','Javascript'],
      demoLink: 'https://github.com/peterjames3/calculator/tree/main/vite-project'
    }
  ];

  return (
    <section id="projects" className="max-w-[1400px] py-20 my-0  mx-auto px-4">
    <h2 data-aos="fade-left" data-aos-delay='300' className="text-5xl text-center text-gradient-2 font-bold font-poppins py-6">Projects</h2>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-3 ss:px-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              stack={project.stack}
              demoLink={project.demoLink}
            />
          ))}
        </div>
     
      
    </section>
  )
}

export default Project
