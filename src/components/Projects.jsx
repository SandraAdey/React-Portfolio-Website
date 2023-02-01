import React from "react";
import clone from '../assets/clone.png'
import pink from '../assets/pink.png'
import weather from '../assets/weather.png'
import netflix from '../assets/netflix.png'
import landing from '../assets/landing.png'
import musictap from '../assets/musictap.png'
import wapp from '../assets/wapp.png'

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-black bg-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="mb-9 text-4xl font-300px text-center">Projects</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          {/* gird item */}
          <div
            style={{ backgroundImage: `url(${clone})` }}
            className="shadow-lg shadow-[#929495] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 duration-500"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Twitter Clone
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-sm px-4 py-3 m- bg-white text-black font-bold text-lg">
                    View Project
                  </button>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-sm  px-4 py-3 m-4 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${wapp})` }}
            className="shadow-lg shadow-[#929495] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 duration-500"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                JS Weather App
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-sm px-4 py-3 m- bg-white text-black font-bold text-lg">
                    View Project
                  </button>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-sm  px-4 py-3 m-4 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${musictap})` }}
            className="shadow-lg shadow-[#929495] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 duration-500"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Music Website
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://rainbow-souffle-7f64c2.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-sm px-4 py-3 m- bg-white text-black font-bold text-lg">
                    View Project
                  </button>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-sm  px-4 py-3 m-4 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${pink})` }}
            className="shadow-lg shadow-[#929495] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 duration-500"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Digital Piano
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://sandradigitalpiano.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-sm px-4 py-3 m- bg-white text-black font-bold text-lg">
                    View Project
                  </button>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-sm  px-4 py-3 m-4 bg-white text-black font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
