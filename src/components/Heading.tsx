import React from "react";

interface Props{
    heading: string;
}


const Heading = ({heading}:Props) => {
  return (
      <span className='text-4xl font-semibold sm:text-6xl text-heading'>{heading}</span>
  );
}


export default Heading;