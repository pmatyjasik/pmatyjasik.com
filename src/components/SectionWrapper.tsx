import React from "react";

interface Props{
    children:React.ReactNode;
}

const SectionWrapper = ({children}:Props) => {
    return (
        <div className="container mx-auto mt-[100px] px-10">
            {children}
        </div>
    );
}

export default SectionWrapper