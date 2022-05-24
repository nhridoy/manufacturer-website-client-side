import React from "react";

const NewBlog = () => {
  return (
    <div className="container mx-auto px-4">
      <form action="">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="label-text-alt">Alt label</span>
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image?</span>
          </label>
          <input type="file" className="input input-bordered w-full" />
          <label className="label">
            <span className="label-text-alt">Alt label</span>
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title?</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
          <label className="label">
            <span className="label-text-alt">Alt label</span>
          </label>
        </div>
        <div className="form-control w-full">
          <button className="btn btn-primary">
            <span className="btn-text">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
