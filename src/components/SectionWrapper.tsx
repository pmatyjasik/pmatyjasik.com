import React from "react";

interface Props{
    children:React.ReactNode;
}

const SectionWrapper = ({children}:Props) => {
    return (
        <div className="container flex items-center justify-center mx-auto mt-[200px] px-10">
            {children}
        </div>
    );
}

export default SectionWrapper