import React from 'react';
import Heading from "components/Heading";
import Programming from 'assets/programming.gif';

const About = () => {
  return (
    <div id="about">
      <div className='flex flex-col items-center justify-center md:flex-row'>
        <div className='md:w-1/2 md:flex md:flex-col'>
          <Heading heading='Front-end Developer'/>
          <p className='mt-10 leading-relaxed sm:leading-loose text-content md:w-5/6 lg:w-4/5 xl:w-3/4'>
          Hello, my name is Piotr Matyjasik I am from Poland 🇵🇱.
          <br/>
          I am a student of Computer Science at the West Pomeranian University of Technology.
          <br/>
          I am interested in modern technologies. I am involved in creating websites. In general, I am interested in everything about Frontend Development.
          <br/>
          My free time is devoted to studying, physical activity and meeting with friends.
          </p>
        </div>
        <div className='justify-center hidden mt-10 md:mt-0 md:flex md:justify-center'>
          <img className='md:h-64 lg:h-96'src={Programming} alt="" />
        </div>
      </div>
    </div>
  );
};
export default About;