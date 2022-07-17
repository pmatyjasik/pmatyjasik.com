import React from "react";
import SectionHeading from "components/SectionHeading";

interface Props{
    subheading: string;
    heading: string;
    children:React.ReactNode;
    id:string;
}


const WideSection = ({subheading, heading, id, children}:Props) => {
  return (
    <div id={id} className='px-2 py-10 mt-10 bg-secondary full-width'>
        <SectionHeading subheading={subheading} heading={heading}/>
        <div className="container flex flex-col items-center justify-center px-10 mx-auto mt-10 md:justify-evenly md:flex-row">
            {children}
        </div>
    </div>
  );
};

export default WideSection;