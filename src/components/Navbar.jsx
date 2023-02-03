import React, {useState} from'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo1.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handelClick = () => setNav(!nav)


  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-[black-300] ">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to= "home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        
        <li>
          <Link to="tech skills" smooth={true} duration={500}>
            Tech Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handelClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#ff7dc2] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handelClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handelClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handelClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        
        <li className="py-6 text-4xl">
          <Link
            onClick={handelClick}
            to="tech skills"
            smooth={true}
            duration={500}
          >
            Tech skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handelClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar
