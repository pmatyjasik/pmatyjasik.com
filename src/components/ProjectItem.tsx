import React from "react";
import { SiGithub } from "react-icons/si";

interface Props {
  imageSrc: string;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  githubLink: string;
}

const ProjectItem = ({
  imageSrc,
  projectTitle,
  projectDescription,
  projectLink,
  githubLink,
}: Props) => {
  return (
    <div className="flex flex-row justify-center mt-7">
      <img
        className="hidden shadow-lg rounded-xl md:block md:h-52 lg:h-72"
        src={imageSrc}
        alt={projectTitle}
      />
      <div className="flex flex-col justify-center ml-8">
        <span className="mb-2 text-3xl font-semibold text-secondary">
          {projectTitle}
        </span>
        <p className="text-base text-secondary w-auto md:max-w-[400px]">
          {projectDescription}
        </p>
        <div className="flex flex-row items-end">
          <a href={projectLink} rel="noopener noreferrer" target="_blank">
            <button className="px-4 py-2 mt-4 text-sm text-white shadow-xl bg-primary rounded-2xl hover:opacity-90">
              Go to page
            </button>
          </a>
          <a href={githubLink} rel="noopener noreferrer" target="_blank">
            <SiGithub className="w-10 h-10 ml-2 hover:opacity-90" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
