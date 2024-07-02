import React from "react";

const Education = () => {
  return (
    <section id='education' className="max-w-4xl my-6 mx-auto py-20 text-white px-4">
      <h1 data-aos="fade-left" data-aos-delay='300'  className="text-6xl text-gradient-2 font-bold text-center mb-8 ">
        Education
      </h1>
      <div className="border-l-2 border-gray-300 ml-8">
        <div className="mb-8">
          <h2 data-aos="fade-right" data-aos-delay='300' className="text-xl pl-8  text-primary-accent font-semibold">
            Education
          </h2>
          <div className="mt-6 relative flex items-start">
            <div className="absolute -left-8 top-2 w-8 h-8 rounded-full bg-black border-4 border-white -ml-2 md:-ml-10"></div>
            <div className="ml-8">
              <h3 className="text-lg font-bold">Bachelor's Degree</h3>
              <p className="text-sm text-gray-500">Sept 2020 - Dec (2024)</p>
              <p className="mt-1 font-semibold">JKUAT</p>
              <p className="mt-1 text-gray-600">
                A current student studying for a Degree of Bachelor of Science
                in Infomation Technology.
              </p>
            </div>
          </div>
          <div className="mt-6 relative flex items-start">
            <div className="absolute -left-8 top-2 w-8 h-8 rounded-full bg-black border-4 border-white -ml-2 md:-ml-10"></div>
            <div className="ml-8">
              <h3 data-aos="fade-left" data-aos-delay='300' className="text-lg font-bold text-primary-accent">Certificate</h3>
              <p className="text-sm text-gray-500">Jan 2024 - June (2024)</p>
              <p className="mt-1 font-semibold">Cyber Shujaa</p>
              <p className="mt-1 text-gray-600">
                Completed my short course on Ethical Hacking; Python
                Programming, Web Application Testing, and API testing.
              </p>
            </div>
          </div>
          <div className="mt-6 relative flex items-start">
            <div className="absolute -left-8 top-2 w-8 h-8 rounded-full bg-black border-4 border-white -ml-2 md:-ml-10"></div>
            <div className="ml-8">
              <h3 className="text-lg font-bold">High School</h3>
              <p className="text-sm text-gray-500">2016 - 2019</p>
              <p className="mt-1 font-semibold">Njumbi High School</p>
              <p className="mt-1 text-gray-600">
                Completed my High schooling at Njumbi High - Murang'a.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 data-aos="fade-left" data-aos-delay='300' className="text-xl pl-8 text-primary-accent font-semibold">
            Communities
          </h2>
          <div className="mt-6 relative flex items-start">
            <div className="absolute -left-8 top-2 w-8 h-8 rounded-full bg-black border-4 border-white -ml-2 md:-ml-10"></div>
            <div className="ml-8">
              <h3 className="text-lg font-bold">Data Science Africa</h3>
              <p className="text-sm text-gray-500">6 May 2023 - 14 May 2023</p>
              <p className="mt-1 font-semibold">University of Rwanda</p>
              <p className="mt-1 text-gray-600">
                Attended the annual DSA conference and workshop and participated
                in a summercamp in The University of Rwanda - Kigali, Rwanda.
              </p>
            </div>
          </div>

          <div className="mt-6 relative flex items-start">
            <div className="absolute -left-8 top-2 w-8 h-8 rounded-full bg-black border-4 border-white -ml-2 md:-ml-10"></div>
            <div className="ml-8">
              <h3 className="text-lg font-bold">Zindi Africa</h3>
              <p className="text-sm text-gray-500">2022</p>
              <p className="mt-1 font-semibold">University of Nairobi</p>
              <p className="mt-1 text-gray-600">
                Competed for a prize on a Sign language classification hackathon
                with other countries at the University of Nairobi - Nairobi,
                Kenya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
