import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Netlify from '../assets/netlify.svg';


const Skills = () => {
  return (
    <div name="tech skills" className="w-full h-screen text-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="mt-10 mb-3 text-center text-4xl font-300px ">Tech Skills</p>
        </div>

        <div className="mt-9 w-full grid grid-cols-2 sm:grid-cols-3 gap-5 text-center py-8">
          <div className="shadow-md shadow-[#929495] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md  shadow-[#929495] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md  shadow-[#929495] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md  shadow-[#929495] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md  shadow-[#929495] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md  shadow-[#929495] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Netlify} alt="HTML icon" />
            <p className="my-4">NETLIFY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills