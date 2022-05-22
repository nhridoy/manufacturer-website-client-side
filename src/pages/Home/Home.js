import React from "react";
import ClientFeedback from "./ClientFeedback";
import Counter from "./Counter";
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
      <Counter />
      <ClientFeedback />
    </main>
  );
};

export default Home;
