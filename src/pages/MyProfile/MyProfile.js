import React from "react";

const MyProfile = () => {
  return (
    <div className="container mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/album?w=400&h=400"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name:</h2>
          <p>Email:</p>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
