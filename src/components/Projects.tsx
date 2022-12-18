import React from "react";
import SectionHeading from "components/SectionHeading";
import ProjectItem from "components/ProjectItem";
import ProjectsData from "data/projects.json";

const Projects = () => {
  return (
    <section id="portfolio" className="px-2 py-10 mt-10">
      <SectionHeading
        inverted={true}
        subheading="PORTFOLIO"
        heading="Last Projects"
      />
      {ProjectsData.data.map((project, index) => (
        <ProjectItem
          imageSrc={project.imageSrc}
          projectTitle={project.projectTitle}
          projectDescription={project.projectDescription}
          projectLink={project.projectLink}
          githubLink={project.githubLink}
          disabled={project.disabled}
          githubDisabled={project?.githubDisabled}
          key={`${index}-${project.projectTitle}`}
        />
      ))}
    </section>
  );
};

export default Projects;
