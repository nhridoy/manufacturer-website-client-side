import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import interceptors from "../../utils/interceptors";

const NewBlog = () => {
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
          .post("/blogs", {
            ...data,
            image: res.data.data.image.url,
            date: new Date().toLocaleDateString(),
          })
          .then((res) => {
            reset();
            toast.success("Blog added successfully");
          });
      });
  };
  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="details"
            {...register("details", { required: true })}
          ></textarea>

          {errors.details && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control w-full">
          <button type="submit" className="btn btn-primary">
            <span className="btn-text">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
