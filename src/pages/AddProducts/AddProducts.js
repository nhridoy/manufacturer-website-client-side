import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import interceptors from "../../utils/interceptors";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    axios
      .postForm(
        "https://api.imgbb.com/1/upload?key=d86d757a8d2a74357b53b53626040470",
        {
          image: data.image[0],
        }
      )
      .then((res) => {
        interceptors
          .post("/products", {
            ...data,
            image: res.data.data.image.url,
          })
          .then((res) => {
            reset();
          });
      });
    console.log(data);
  };
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Add Products</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="input input-bordered"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Price</label>
          <input
            type="number"
            className="input input-bordered"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="input input-bordered"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Image</label>
          <input
            type="file"
            className="input input-bordered"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="">Quantity</label>
          <input
            type="number"
            className="input input-bordered"
            {...register("quantity", { required: true })}
          />
          {errors.quantity && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
