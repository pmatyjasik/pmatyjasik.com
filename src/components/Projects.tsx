import React from "react";
import SectionHeading from "components/SectionHeading";
import EmployeeIMG from "assets/employee-pulse.png";
import QuizationIMG from "assets/quization.png";
import BookingIMG from "assets/booking.png";
import ProjectItem from "components/ProjectItem";

const Projects = () => {
  return (
    <section id="portfolio" className="px-2 py-10 mt-10">
      <SectionHeading
        inverted={true}
        subheading="PORTFOLIO"
        heading="Last Projects"
      />
      <ProjectItem
        imageSrc={EmployeeIMG}
        projectTitle="Employee Pulse"
        projectDescription="Project carried out at the University in a group of 4 people. React.js, Typescript, TailwindCSS, Git, Firebase were used to complete the project. In the final phase made migrations from React.js to Next.js"
        projectLink="https://employee-pulse.vercel.app/"
        githubLink="https://github.com/pmatyjasik/Employee-pulse"
      />
      <ProjectItem
        imageSrc={QuizationIMG}
        projectTitle="Quization"
        projectDescription="Project carried out at the University in a group of 4 people. Next.js, Typescript, TailwindCSS, Git, Firebase were used to complete the project."
        projectLink="https://quization.vercel.app/"
        githubLink="https://github.com/pmatyjasik/quization"
      />
      <ProjectItem
        imageSrc={BookingIMG}
        projectTitle="Booking"
        projectDescription="One of several projects I did at the beginning of my education. The project was done in HTML and CSS."
        projectLink="https://pmatyjasik.github.io/Booking/"
        githubLink="https://github.com/pmatyjasik/Booking"
      />
    </section>
  );
};

export default Projects;
