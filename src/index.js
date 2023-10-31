import React from "react";
import ReactDOM from "react-dom/client";

import Nav from "./nav";
import Header from "./header";
import "./styles/index.css";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
