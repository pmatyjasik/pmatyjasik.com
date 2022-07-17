import React from "react";

const Footer = () => {
  return (
    <footer className="p-2 text-center text-white bg-primary">
      <p>
        &copy; {new Date().getFullYear()} -{" "}
        <a href="https://www.linkedin.com/in/piotr-matyjasik/" rel="noopener noreferrer" target="_blank">
          Piotr Matyjasik
        </a>
      </p>
    </footer>
  );
}

export default Footer;