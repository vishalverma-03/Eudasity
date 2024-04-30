import React from "react";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/hero/Hero";
import Program from "./Components/Program/Program";
import Title from "./Components/Tittle/Tittle";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" Title="What We Offer" />
        <Program /> 
        <About />
        <Title subTitle="Gallery" Title="Campus Photos"/> 
        <Campus/>
        <Title subTitle="Testimonials" Title="What Student Says" />
         <Testimonial/>
         <Title subTitle="Contact Us" Title="Get in Touch"/> 
         <Contact></Contact>
         <Footer></Footer>
      </div> 
    </div>
  );
}

export default App;
