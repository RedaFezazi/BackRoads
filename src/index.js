import React from "react";
import ReactDOM from "react-dom/client";

import Nav from "./component/Nav";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";
import Footer from "./component/Footer";
import Tours from "./component/Tours";

import "./styles/index.css";

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Tours></Tours>
      <Footer></Footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
