import React from "react";
import { Link } from "react-router-dom";

const Tool = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://api.lorem.space/image/movie?w=160&h=200"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-2xl font-bold">Name</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
          <p>Min Order: 50</p>
          <p>Available: 500</p>
          <p>Unit Price: 5000</p>
          <Link to="/purchase" className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
