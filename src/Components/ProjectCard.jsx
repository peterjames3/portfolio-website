import React from 'react';

const ProjectCard = ({ image, title, description, stack, demoLink }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 text-white">
      <img className="w-full  hover:cursor-pointer hover:transition-transform hover:scale-105 duration-300 hover:ease-in-out" src={image} alt="Project screenshot" />
      <div className="px-6 py-4">
        <h2 data-aos="fade-left" data-aos-delay='900' className="font-bold text-xl mb-2">{title}</h2>
        <p data-aos="fade-left" data-aos-delay='900' className="text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <h3 className="font-bold mb-2">Stack</h3>
        <div className="flex flex-wrap">
          {stack.map((tech, index) => (
            <span key={index} className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <a href={demoLink} target='target_black' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Demo</a>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 12a3 3 0 100-6 3 3 0 000 6zm-6 0a3 3 0 100-6 3 3 0 000 6zm-3 9a3 3 0 013-3h8a3 3 0 013 3H6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
