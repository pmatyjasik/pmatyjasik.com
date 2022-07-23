import React from "react";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";
import WideSection from "components/WideSection";
import Icon from "components/Icon";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <WideSection
      subheading="GET IN TOUCH"
      heading="Contact"
      id="contact"
      contact={true}
    >
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        href="https://github.com/pmatyjasik"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon Icon={<SiGithub />} className="mb-4 md:mb-0" contact={true} />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        href="https://www.linkedin.com/in/piotr-matyjasik/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon
          Icon={<SiLinkedin />}
          className="mb-4 rounded md:mb-0"
          contact={true}
        />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        href="mailto:pmatyjasik@icloud.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon Icon={<SiMaildotru />} className="mb-4 md:mb-0" contact={true} />
      </motion.a>
    </WideSection>
  );
};

export default Contact;
