import React from "react";
import { SkillsInfo } from "../assets/constant";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-8 bg-gradient-to-b from-[#0a0a0f] via-[#111827] to-[#0a0a0f] text-white font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]">
          My Skills
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Technologies and tools I’ve worked with across different projects.
        </p>
      </div>

      {/* Skills Box */}
      <div
        className="max-w-5xl mx-auto bg-[#111827] border border-[#2a3142]
                   rounded-2xl shadow-[0_0_20px_rgba(96,165,250,0.15)]
                   hover:shadow-[0_0_25px_rgba(96,165,250,0.4)]
                   transition-all duration-500 ease-in-out p-10"
      >
        {/* Grid for all logos */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center">
          {SkillsInfo.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain opacity-90 hover:opacity-100 transition-all duration-300"
              />
              <p className="text-sm text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
