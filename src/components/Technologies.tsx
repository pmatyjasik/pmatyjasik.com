import React from "react";
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiGit,
  SiPhp,
} from "react-icons/si";
import WideSection from "components/WideSection";
import Icon from "components/Icon";

const Technologies = () => {
  return (
    <WideSection
      subheading="TECHNOLOGIES MASTERED"
      heading="Technologies"
      id="technologies"
    >
      <Icon Icon={<SiJavascript />} className="mb-4 rounded md:mb-0" />
      <Icon Icon={<SiTypescript />} className="mb-4 md:mb-0" />
      <Icon Icon={<SiPhp />} className="mb-4 md:mb-0" />
      <Icon Icon={<SiReact />} className="mb-4 md:mb-0" />
      <Icon Icon={<SiTailwindcss />} className="mb-4 md:mb-0" />
      <Icon Icon={<SiGit />} className="mb-4 md:mb-0" />
    </WideSection>
  );
};

export default Technologies;
