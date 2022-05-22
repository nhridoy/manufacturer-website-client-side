import React from "react";

const SingleTools = ({ icon }) => {
  return (
    <>
      {icon ? (
        <div className=" border border-primary hover:bg-primary hover:text-white text-primary transition-all duration-300 flex justify-center items-center">
          <p className="text-5xl p-24">{icon}</p>
        </div>
      ) : (
        <div className="hidden md:block"></div>
      )}
    </>
  );
};

export default SingleTools;
