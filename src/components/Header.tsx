import React from "react";
import Heading from "components/Heading";
import NavMenu from "components/NavMenu";
import Bubble from "components/Bubble";


const Header = () => {
  return (
    <header className="fixed top-0 w-full px-4 py-5">
        <div className="container flex items-center justify-between mx-auto">
            <Heading heading='Piotr Matyjasik' />
            <NavMenu/>
        </div>
        <Bubble/>
    </header>
  );
}


export default Header;