import React from 'react'
import Basics from '../assets/Basics.png'
import she from '../assets/she.png'


function Education() {
  return (
    <div name="education" className="w-full h-screen text-black">
      {/* Container */}
      <div class="container">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="mb-2 text-4xl text-center font-300px">Education</p>
        </div>

        <div className="m-10 mb-5 grid sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <img
            className="w-400 mx-auto hover:scale-110 duration-500"
            src={Basics}
            alt="Basics"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education