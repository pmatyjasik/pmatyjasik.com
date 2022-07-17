import React from "react";

interface Props {
  children: React.ReactNode;
}

const SectionWrapper = ({ children }: Props) => {
  return <div className="container px-10 mx-auto mt-24">{children}</div>;
};

export default SectionWrapper;
