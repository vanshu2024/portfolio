import React from "react";
import { projects } from "../assets/constant.js";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-[8vw] md:px-[12vw] font-sans bg-linear-to-b from-[#0a0a0f] via-[#111827] to-[#0a0a0f] text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-wide">PROJECTS</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          A showcase of the projects I have worked on, highlighting my
          experience in various technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full max-w-sm min-h-[500px] bg-[#111827] border border-gray-700 rounded-3xl overflow-hidden 
                       shadow-[0_0_15px_rgba(130,69,236,0.3)] transition-transform duration-300 
                       hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(130,69,236,0.5)] flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={project.img}
                alt={project.title || "Project image"}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#8245ec]/20 border border-[#8245ec]/40 text-[#c9b6ff] px-3 py-1 rounded-full text-xs tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-center text-sm bg-[#8245ec] hover:bg-[#6b3fd1] transition-colors duration-300 text-white font-semibold py-2 px-5 rounded-full"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
