import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/menu.svg";
import { tabs } from "../tabs"; 
import { FaLaptopCode } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleNav = () => setNav(!nav);
  const closeMenu = () => {
    setNav(false);
    setIsDropdownOpen(false); 
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full border-b-2 border-border-primary py-3 px-4 z-50 bg-bg-primary">
      <div className="w-full md:max-w-[1400px] mx-auto flex items-center justify-between">
        {nav && <div className="fixed top-0 left-0 z-50 w-full h-full min-h-screen bg-black bg-opacity-70"></div>}

        <nav className="flex items-center gap-3">
          <ScrollLink
            to="home"
            smooth={true}
            className="text-3xl flex items-center gap-2 font-bold hover:cursor-pointer"
            onClick={closeMenu}
          >
            <FaLaptopCode className="text-5xl size-10  text-primary"/>
            <h1 className="hidden ss:flex text-foreground ">Portfolio</h1>
          </ScrollLink>
        </nav>

        {/* Desktop Navigation */}
        <nav className={`hidden sm:flex items-center gap-7`}>
          {tabs.map((tab, index) => (
            <ScrollLink
              key={index}
              to={tab.id}
              smooth={true}
              spy={true}
              activeClass="active"
              className="text-slate-400 font-medium cursor-pointer text-xl hover:text-white transition-all delay-300 ease-out"
              onClick={closeMenu}
            >
              {tab.name}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            className="text-xl text-white font-medium rounded-md py-3 px-6 bg-gradient-1 cursor-pointer transition-all delay-300"
            onClick={closeMenu}
          >
            Hire me
          </ScrollLink>
        </nav>

        {/* Mobile Nav Toggle */}
        <div onClick={handleNav} className="sm:hidden text-white hover:text-green-700 cursor-pointer transition-all delay-300">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Navigation */}
        {nav && (
          <nav className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 z-50">
            <ScrollLink
              to="home"
              smooth={true}
              className="flex gap-2 items-center text-2xl text-[#00df9a] font-medium hover:cursor-pointer transition-all delay-300 ease-out pt-7 px-4"
              onClick={closeMenu}
            >
             <FaLaptopCode className="text-5xl size-10  text-primary"/>
            </ScrollLink>
            <ul className="flex flex-col space-y-10 font-normal pt-10 px-4">
              {tabs.map((tab, index) => (
                <ScrollLink
                  key={index}
                  to={tab.id}
                  smooth={true}
                  spy={true}
                  className="text-slate-500 font-medium cursor-pointer hover:text-white transition-all delay-300 ease-out"
                  onClick={closeMenu}
                >
                  {tab.name}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                smooth={true}
             className="text-xl text-white font-medium cursor-pointer transition-all delay-300"
                onClick={closeMenu}
              >
                Hire me
              </ScrollLink>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
