import React from 'react';
import Header from 'components/Header';
import SectionWrapper from 'components/SectionWrapper';
import About from 'components/About';
import Technologies from 'components/Technologies';
import Contact from 'components/Contact';
import Footer from 'components/Footer';


function App() {
  return (
    <>
      <Header/>
      <SectionWrapper>
        <About/>
        <Technologies/>
        <Contact/>
      </SectionWrapper>
      <Footer/>
    </>
  );
}

export default App;
