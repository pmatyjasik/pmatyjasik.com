import React from "react";
import Header from "components/Header";
import SectionWrapper from "components/SectionWrapper";
import About from "components/About";
import Technologies from "components/Technologies";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Projects from "components/Projects";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Piotr Matyjasik</title>
        <meta
          name="description"
          content="Hi, my name is Piotr Matyjasik. Welcome to my portfolio."
        />
        <meta
          property="og:site_name"
          content="Piotr Matyjasik"
          key="ogsitename"
        />
        <meta property="og:url" content="pmatyjasik.com" key="ogurl" />
        <meta
          property="og:image"
          content="https://pmatyjasik.com/static/media/pmatyjasik.df88e34060b25324076d.png"
          key="ogimage"
        />
        <meta property="og:title" content={`Piotr Matyjasik`} key="ogtitle" />
        <meta
          property="og:description"
          content="Hi, my name is Piotr Matyjasik. Welcome to my portfolio."
          key="ogdesc"
        />
      </Helmet>
      <Header />
      <SectionWrapper>
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </SectionWrapper>
      <Footer />
    </>
  );
}

export default App;
