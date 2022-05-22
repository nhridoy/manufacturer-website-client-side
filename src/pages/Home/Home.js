import React from "react";
import Hero from "./Hero";
import Tools from "./Tools";
import ToolsSection from "./ToolsSection";
import VideoSection from "./VideoSection";

const Home = () => {
  return (
    <main className="mx-6">
      <Hero />
      <Tools />
      <ToolsSection />
      <VideoSection />
    </main>
  );
};

export default Home;
