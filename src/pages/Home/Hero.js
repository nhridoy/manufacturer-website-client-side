import React from "react";

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.nicepng.com/png/detail/145-1452311_construction-tools-png-hardware-store.png"
          className="w-sm h-80 object-cover rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">ToolKit</h1>
          <p className="py-6">
            We Are the Best Toolkit manufacturar. We are the best in the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
