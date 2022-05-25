import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import interceptors from "../../utils/interceptors";

const CreateReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    interceptors.post("/reviews", data).then((res) => {
      reset();
      toast.success("Review added successfully");
    });
  };
  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="input input-bordered"
            {...register("title", { required: true })}
          />
          {errors.title && (
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
          <label htmlFor="">Rating</label>
          <input
            type="number"
            className="input input-bordered"
            {...register("rating", { required: true, min: 1, max: 5 })}
          />
          {errors.rating && errors.rating.type === "required" && (
            <span className="text-red-600">This field is required</span>
          )}
          {errors.rating && errors.rating.type === "max" && (
            <span className="text-red-600">Max length exceeded</span>
          )}
          {errors.rating && errors.rating.type === "min" && (
            <span className="text-red-600">Min length not reached</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Add Review
        </button>
      </form>
    </div>
  );
};
export default CreateReview;
