import React from "react";
import { SiGithub,SiLinkedin, SiMaildotru  } from "react-icons/si";
import WideSection from "components/WideSection";

const Contact = () => {
  return (
    <WideSection subheading="Get in touch" heading="Contact" id="contact">
        <a href="https://github.com/pmatyjasik" rel="noopener noreferrer" target="_blank"><SiGithub className="w-24 h-24 mb-4 text-white rounded md:mb-0"/></a>
        <a href="https://www.linkedin.com/in/piotr-matyjasik/" rel="noopener noreferrer" target="_blank"><SiLinkedin className="w-24 h-24 mb-4 text-white rounded "/></a>
        <a href="mailto:pmatyjasik@icloud.com" rel="noopener noreferrer" target="_blank"><SiMaildotru className="w-24 h-24 mb-4 text-white"/></a>
    </WideSection>
  );
};

export default Contact;