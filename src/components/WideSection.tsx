import React from "react";
import SectionHeading from "components/SectionHeading";

interface Props {
  subheading: string;
  heading: string;
  children: React.ReactNode;
  id: string;
  contact?: boolean;
}

const WideSection = ({
  subheading,
  heading,
  id,
  children,
  contact = false,
}: Props) => {
  return (
    <section id={id} className="px-2 py-10 mt-10 bg-secondary full-width">
      <SectionHeading subheading={subheading} heading={heading} />
      <div
        className={`container flex ${
          contact
            ? "flex-row items-center justify-around"
            : "flex-col items-center justify-center"
        } px-10 mx-auto mt-10 md:justify-evenly md:flex-row`}
      >
        {children}
      </div>
    </section>
  );
};

export default WideSection;
