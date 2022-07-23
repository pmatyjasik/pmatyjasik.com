import React from "react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

interface Props {
  imageSrc: string;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  githubLink: string;
  disabled?: boolean;
}

const ProjectItem = ({
  imageSrc,
  projectTitle,
  projectDescription,
  projectLink,
  githubLink,
  disabled = false,
}: Props) => {
  return (
    <motion.div
      className="flex flex-row justify-center mt-7"
      initial={{ opacity: 0.5, scale: 0.5, x: -200 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img
        className="hidden shadow-lg rounded-xl md:block md:h-52 lg:h-72"
        src={imageSrc}
        alt={projectTitle}
      />
      <div className="flex flex-col justify-center ml-8">
        <span className="mb-2 text-3xl font-semibold text-secondary">
          {projectTitle}
        </span>
        <p className="text-sm text-secondary w-auto md:max-w-[400px]">
          {projectDescription}
        </p>
        <div className="flex flex-row items-end">
          <a
            className="cursor-not-allowed"
            href={projectLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button
              className={`px-4 py-2 mt-4 text-sm font-medium text-white ${
                disabled
                  ? ""
                  : "transition-all hover:shadow-2xl hover:-translate-y-1"
              } bg-primary rounded-2xl shadow-xl  disabled:bg-secondary disabled:opacity-70`}
              disabled={disabled}
            >
              Go to page
            </button>
          </a>
          <a href={githubLink} rel="noopener noreferrer" target="_blank">
            <SiGithub className="w-10 h-10 ml-2 transition-all hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
