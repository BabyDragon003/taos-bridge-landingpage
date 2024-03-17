import React from "react";
import Hero from "./Hero";
import About from "./About";
import Scaling from "./Scaling";
import Involved from "./Involved";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="mt-[120px] lg:mt-[500px]"></div>

      <About />
      <Scaling />
      <Involved />
    </>
  );
};

export default Home;
