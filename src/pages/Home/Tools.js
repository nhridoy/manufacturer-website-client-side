import React from "react";
import { Link } from "react-router-dom";
import Tool from "../../components/Tool/Tool";

const Tools = () => {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-semibold">Our Latest Tools</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <Tool />
        <Tool />
        <Tool />
        <Tool />
        <Tool />
        <Tool />
      </div>
      <Link to="all" className="btn btn-primary btn-sm my-5">
        All Items
      </Link>
    </section>
  );
};

export default Tools;
