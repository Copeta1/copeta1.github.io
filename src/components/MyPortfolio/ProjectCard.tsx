import React from "react";
import { type Project } from "../../data/projects";
import { FaGlobe, FaCode } from "react-icons/fa";

const ButtonGroup: React.FC<{ liveUrl: string; githubUrl: string }> = ({
  liveUrl,
  githubUrl,
}) => (
  <div className="flex space-x-3 mb-4 mt-auto">
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-4 py-2 text-white bg-green-600 rounded-md font-semibold text-sm transition duration-300 hover:bg-green-700"
    >
      <FaGlobe className="mr-2" /> Demo
    </a>
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-md font-semibold text-sm transition duration-300 hover:bg-gray-700 border border-gray-600"
    >
      <FaCode className="mr-2" /> Kod
    </a>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-4 flex flex-col grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 grow">{project.description}</p>

        <ButtonGroup liveUrl={project.liveUrl} githubUrl={project.githubUrl} />

        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
