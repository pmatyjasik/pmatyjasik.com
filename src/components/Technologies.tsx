import React from "react";
import { SiTypescript, SiTailwindcss, SiJavascript, SiReact, SiGit, SiPhp  } from "react-icons/si";
import WideSection from "components/WideSection";

const Technologies = () => {
  return (
    <WideSection subheading="What I am using" heading="Technologies" id="technologies">
        <SiJavascript className="w-24 h-24 mb-4 text-white rounded md:mb-0"/>
        <SiTypescript className="w-24 h-24 text-white"/>
        <SiPhp className="w-24 h-24 text-white"/>
        <SiReact className="w-24 h-24 text-white"/>
        <SiTailwindcss className="w-24 h-24 text-white"/>
        <SiGit className="w-24 h-24 text-white"/>
    </WideSection>
  );
};

export default Technologies;