import React from "react";
import Project from "./Project/Project";
import Stacks from "./Stacks/Stacks";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";

function Pages() {
  return (
    <div>
      <Home />
      <Project />
      <Stacks />
      <Contact />
    </div>
  );
}

export default Pages;
