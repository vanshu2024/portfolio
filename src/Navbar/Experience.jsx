import React from "react";
import { experiences } from "../assets/constant.js";

const Experience = () => {
  

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-linear-to-b from-[#0a0a0f] via-[#111827] to-[#0a0a0f]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A COLLECTION OF MY WORK EXPERIENCE AND ROLES I HAVE TAKEN IN VARIOUS ORGANIZATIONS
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 w-1 bg-purple-500 h-full"></div>

        {/* Experience Cards */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-purple-500 border-4 border-white w-8 h-8 rounded-full shadow-lg"></div>

            {/* Experience Card */}
            <div
              className={`relative bg-gray-900 border border-purple-500/30 shadow-[0_0_20px_rgba(130,69,236,0.3)] rounded-2xl p-6 md:p-8 w-full sm:max-w-md ${
                index % 2 === 0
                  ? "sm:mr-[calc(50%+2rem)]"
                  : "sm:ml-[calc(50%+2rem)]"
              } transition-transform duration-300 hover:scale-[1.03]`}
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-white rounded-md overflow-hidden shadow-md">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400">
                    {experience.role}
                  </h3>
                  <p className="text-gray-300">{experience.company}</p>
                  <p className="text-gray-500 text-sm mt-1">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-4">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-3 flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#8245ec]/20 border border-[#8245ec]/40 text-[#c9b6ff] px-3 py-1 rounded-full text-xs tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
