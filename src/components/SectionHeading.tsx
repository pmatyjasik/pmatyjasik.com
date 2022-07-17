import React from "react";

interface Props{
    subheading: string;
    heading: string;
}


const SectionHeading = ({subheading, heading}:Props) => {
  return (
    <div>
        <span className='block text-sm font-semibold text-center text-white opacity-60'>{subheading}</span>
        <span className='block text-3xl font-semibold text-center text-white'>{heading}</span>
    </div>
  );
}


export default SectionHeading;