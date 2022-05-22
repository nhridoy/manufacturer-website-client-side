import React from "react";

const AddProducts = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Add Products</h1>
      </div>
      <form action="">
        <div className="form-control">
          <label htmlFor="">Name</label>
          <input type="text" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label htmlFor="">Price</label>
          <input type="number" className="input input-bordered" />
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
          <label htmlFor="">Image</label>
          <input type="file" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label htmlFor="">Quantity</label>
          <input type="number" className="input input-bordered" />
        </div>

        <button className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
