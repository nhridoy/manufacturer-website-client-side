import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 bg-base-200">
      <div className="w-full h-full relative">
        <img
          src={tool.image}
          className="absolute w-full h-full object-cover rounded-lg shadow-2xl"
          alt={tool.name}
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">
          <Link to={`/purchase/${tool._id}`}>{tool.name}</Link>
        </h1>
        <p className="py-6">{tool.description.substring(0, 100)}...s</p>
        <p>Min Order: {tool.minimum}</p>
        <p>Available: {tool.quantity}</p>
        <p>Unit Price: {tool.price}</p>
        <Link to={`/purchase/${tool._id}`} className="btn btn-primary">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default Tool;
