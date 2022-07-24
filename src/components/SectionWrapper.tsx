import React from "react";

interface Props {
  children: React.ReactNode;
}

const SectionWrapper = ({ children }: Props) => {
  return (
    <div className="container max-w-full px-10 mx-auto overflow-x-hidden 2xl:mt-16">
      {children}
    </div>
  );
};

export default SectionWrapper;
