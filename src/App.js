
import React, { Fragment } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonialst from "./components/testimonials/Testimonials";

function App() {
  return (
    <Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonialst />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
