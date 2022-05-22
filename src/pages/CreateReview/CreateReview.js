import React from "react";

const CreateReview = () => {
  return (
    <div className="container mx-auto px-4">
      <form action="">
        <div className="form-control">
          <label htmlFor="">Title</label>
          <input type="text" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="input input-bordered"
          ></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="">Rating</label>
          <input type="number" className="input input-bordered" />
        </div>
        <button className="btn btn-primary mt-4">Add Review</button>
      </form>
    </div>
  );
};
export default CreateReview;
