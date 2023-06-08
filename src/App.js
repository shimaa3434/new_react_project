import React from "react";
import Navbar from "./compontes/navbar/Navbar";
import Home from "./compontes/home/Home";
import Services from "./compontes/services/Services";
import Banner from "./compontes/banner/Banner";
import Price from "./compontes/price/Price";
import Team from "./compontes/team/Team"
import Blog from "./compontes/blog/Blog";
import Contact from "./compontes/contact/Contact";
import Footer from './compontes/footer/Footer'


function App() {
  return (
      <>
        <Navbar />
        <Home />
        <Services />
        <Banner />
        <Price />
        <Team />
        <Blog />
        <Contact />
        <Footer />
      </>
  );
}

export default App;
