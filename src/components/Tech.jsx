/* import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, ""); */

import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className='w-28 h-28 overflow-hidden relative group'
        >
          {/* Render the technology icon directly */}
          <img
            src={technology.icon} // Assuming `icon` is the source URL of the image
            alt={technology.name}
            className='w-full h-full object-cover rounded-full transform origin-center transition-transform duration-300 group-hover:rotate-12'
          />

          {/* Background animation on hover */}
          <div
            className='absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md'
          >
            {/* Additional overlay or content can be added here */}
          </div>

          {/* Text content - initially hidden, appears on hover */}
          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
            <h3 className='text-white text-center'>{technology.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
