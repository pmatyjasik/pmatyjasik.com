import React from "react";

interface Props{
    heading: string;
}


const LogoName = ({heading}:Props) => (
    <a href="/"> <span className='text-xl font-semibold cursor-pointer text-primary'>{heading}</span></a>
);


export default LogoName;