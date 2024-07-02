import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from 'react-scroll'
import { FaInstagram, FaXTwitter} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {

  return (
    <footer data-aos="fade-up" data-aos-delay='1300' className="w-full text-slate-500 bg-bg-accent py-5">
      <div className="max-w-[1400px]  py-6 px-3 ss:px-4 mx-auto grid grid-cols-2  ss:grid-cols-2  sm:grid-cols-4  gap-10">
        <div >
          <nav className="flex items-center gap-3">
            <FaLaptopCode className="text-primary-accent text-5xl" />
            <Link
            data-aos="fade-left" data-aos-delay='300'
              to="home"
              smooth={true}
              className="text-3xl text-white font-semibold font-poppins"
            >
              Portfolio
            </Link>
          </nav>
          <div className="flex items-center gap-5 py-5 ">
           <nav className="rounded-full bg-bg-muted p-3 hover:bg-transparent transition-all delay-300">
            <a href="https://www.instagram.com/peter_kamau" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:transition-transform hover:scale-110 hover:ease-in-out duration-300" />
            </a>
           </nav>
           <nav className="rounded-full bg-bg-muted p-3 hover:bg-transparent transition-all delay-300">
            <a href="https://x.com/peterka99082091" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-3xl text-3xl hover:transition-transform hover:scale-110 hover:ease-in-out duration-300" />
            </a>
           </nav>
           <nav className="rounded-full bg-bg-muted p-3 hover:bg-transparent transition-all delay-300 ">
            <a href="https://web.facebook.com/profile.php?id=61558193372032" target="_blank" rel="noopener noreferrer" className="hover:transition-transform hover:scale-105 hover:ease-in-out duration-300">
            <FaFacebookSquare className="text-3xl hover:transition-transform hover:scale-110 hover:ease-in-out duration-300" />
            </a>
           </nav>
          </div>
        </div>
        <div className="flex flex-col space-y-4 text-xl">
          <h4>Explore</h4>
          <Link smooth={true} to="about" className="text-slate-300 hover:cursor-pointer hover:text-primary transition-all delay-300  font-Kumbh">About Me</Link>
          <Link smooth={true} to='skill' className="text-slate-300 hover:cursor-pointer hover:text-primary transition-all delay-300  font-Kumbh">Skill</Link>
        </div>
        <div className="flex flex-col space-y-4 text-xl">
          <h4>Trusted</h4>
          <Link smooth={true} to="services" className="text-slate-300 hover:cursor-pointer hover:text-primary transition-all delay-300  font-Kumbh">Services</Link>
          <Link smooth={true} to='project' className="text-slate-300 hover:cursor-pointer hover:text-primary transition-all delay-300  font-Kumbh">Projects</Link>
        </div>
        <div className="flex flex-col space-y-4 ">
          <h4 className="text-xl">Others</h4>
          <ul className="flex flex-col outline-none ">
          <li className="text-slate-300 hover:cursor-pointer hover:text-primary transition-all delay-300  font-Kumbh">Privacy</li>
          <li className="text-slate-300 hover:cursor-pointer hover:text-primary transition-all delay-300  font-Kumbh">Terms and Conditions</li>
          <li className="text-slate-300 hover:cursor-pointer hover:text-primary transition-all delay-300 font-Kumbh">Cookie Policy</li>
          </ul>
        </div>
        
      </div>
      <div className="w-full text-center">
         <h6 className="text-xl font-semibold text-foreground">Copyright © All right reserved -| 2024</h6>
         <p className="text-slate-400">Built with love by James Kamau A.K.A Hanzo</p>
        </div>
    </footer>
  );
};

export default Footer;
