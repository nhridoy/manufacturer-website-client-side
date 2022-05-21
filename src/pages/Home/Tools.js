import React from "react";
import Tool from "../../components/Tool/Tool";

const Tools = () => {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-semibold">Our Latest Tools</h2>
      <div className="grid grid-cols-3 gap-4">
        <Tool />
        <Tool />
        <Tool />
        <Tool />
        <Tool />
        <Tool />
      </div>
    </section>
  );
};

export default Tools;
