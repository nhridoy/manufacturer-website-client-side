import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import interceptors from "../../utils/interceptors";

const MyProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { data, isLoading, isError, isSuccess, refetch } = useQuery(
    "user",
    () => interceptors.get("users/me")
  );

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    setValue("name", data?.data?.name);
    setValue("email", data?.data?.email);
    setValue("phone", data?.data?.phone);
    setValue("country", data?.data?.country);
  }

  const onSubmit = (data) => {
    console.log(data);
    interceptors.patch("users/me", data).then((res) => {
      refetch();
      toast.success("Profile updated successfully");
    });
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            disabled
            className="input input-bordered"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            disabled
            className="input input-bordered"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">phone</span>
          </label>
          <input
            type="text"
            placeholder="phone"
            className="input input-bordered"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">country</span>
          </label>
          <input
            type="text"
            placeholder="country"
            className="input input-bordered"
            {...register("country", { required: true })}
          />
          {errors.country && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
export default MyProfile;
