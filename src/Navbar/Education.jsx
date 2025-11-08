import React from "react";
import { education } from "../assets/constant.js";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] md:px-[12vw] font-sans bg-linear-to-b from-[#0a0a0f] via-[#111827] to-[#0a0a0f] text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-wide">EDUCATION</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          My education has been a journey of continuous learning and development.
          Here are the details of my academic background.
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-stretch">
        {education.map((edu, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col justify-between bg-[#111827] border border-gray-700 rounded-3xl overflow-hidden shadow-[0_0_15px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(130,69,236,0.5)] p-6 min-h-[340px]"
          >
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{edu.degree}</h3>
              <p className="text-gray-300 font-medium">{edu.institution}</p>
              <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
            </div>

            <p className="text-gray-400 text-sm mt-3 leading-relaxed flex-1">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
