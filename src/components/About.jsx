import React from 'react'
import Cute from "../assets/Cute.jpg";



const About = () => {
  return (
    
    <div class="container">
    <div name="about" className="w-full h-screen bg-white text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] max-h-[500px] mt-10 w-full grid grid-cols-2 pt-40 gap-1">
          <div className="pb-8 font-center">
            <p className="mb-9 text-center text-4xl font-300px">About Me</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8">
          <div className="px-8 py-2 sm:text-right text-4xl font-bold">
            <p>
              <div className="px-10 max-w-[1000px] w-full grid grid-cols gap-4">
                <img src={Cute} alt=" Cute" style={{ width: "400px" }} />
              </div>
            </p>
          </div>
          <div>
            <p>
              I’m Sandra, a Software developer based in Essex. I began learning
              to code at the beginning of 2022 and found the process of learning
              new technologies and creating solutions to difficult problems both
              exciting and rewarding. My long-term goal is to be able to
              efficiently turn great ideas into functioning products thorough
              absorbing as much as I can from those my senior and become the
              best developer I can be. In my spare time I like to swim and watch
              TV and movies.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About