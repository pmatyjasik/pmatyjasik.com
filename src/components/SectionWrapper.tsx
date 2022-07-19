import React from "react";

interface Props {
  children: React.ReactNode;
}

const SectionWrapper = ({ children }: Props) => {
  return (
    <div className="container max-w-full px-10 mx-auto mt-16 overflow-x-hidden">
      {children}
    </div>
  );
};

export default SectionWrapper;
