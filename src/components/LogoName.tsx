import React from "react";

interface Props{
    heading: string;
}


const LogoName = ({heading}:Props) => {
  return (
      <span className='text-xl font-semibold cursor-pointer text-primary'>{heading}</span>
  );
}


export default LogoName;