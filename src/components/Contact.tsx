import React from "react";
import { SiGithub,SiLinkedin, SiMaildotru  } from "react-icons/si";
import WideSection from "components/WideSection";
import Icon from "components/Icon";

const Contact = () => {
  return (
    <WideSection subheading="Get in touch" heading="Contact" id="contact">
        <a href="https://github.com/pmatyjasik" rel="noopener noreferrer" target="_blank"><Icon Icon={<SiGithub/>} className="mb-4 md:mb-0" /></a>
        <a href="https://www.linkedin.com/in/piotr-matyjasik/" rel="noopener noreferrer" target="_blank"><Icon Icon={<SiLinkedin/>} className="mb-4 rounded md:mb-0" /></a>
        <a href="mailto:pmatyjasik@icloud.com" rel="noopener noreferrer" target="_blank"><Icon Icon={<SiMaildotru/>} className='mb-4 md:mb-0'/></a>
    </WideSection>
  );
};

export default Contact;