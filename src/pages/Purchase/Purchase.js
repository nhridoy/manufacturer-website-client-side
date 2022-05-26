import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import interceptors from "../../utils/interceptors";

const Purchase = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    interceptors
      .post("/purchase", data)
      .then((res) => {
        toast.success("Product added successfully");
        reset();
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };

  React.useEffect(() => {
    interceptors.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <section className="text-gray-700 body-font overflow-hidden text-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product?.name}
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className=" text-3xl text-white font-medium mb-1">
              {product?.name}
            </h1>

            <p className="text-white">{product?.description}</p>

            <p className="text-white font-medium text-2xl ">
              Unit Price: ${product?.price}
            </p>
            <p className="text-white font-medium text-2xl ">
              Minimum Order: {product?.minimum}
            </p>
            <p className="text-white font-medium text-2xl ">
              Available: {product?.quantity}
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  disabled
                  className="input input-bordered w-full max-w-xs text-white"
                  {...register("name", {
                    required: true,
                    value: user?.displayName,
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  disabled
                  className="input input-bordered w-full max-w-xs text-white"
                  {...register("email", {
                    required: true,
                    value: user?.email,
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Enter Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Item Id"
                  disabled
                  className="input input-bordered w-full max-w-xs text-white"
                  {...register("item_id", {
                    required: true,
                    value: id,
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Enter Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered w-full max-w-xs text-white"
                  {...register("quantity", {
                    required: true,
                    min: product?.minimum,
                    max: product?.quantity,
                  })}
                />
                {errors.quantity?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
                {errors.quantity?.type === "min" && (
                  <span className="text-red-600">
                    Minimum Quantity is: {product?.minimum}
                  </span>
                )}
                {errors.quantity?.type === "max" && (
                  <span className="text-red-600">
                    Maximum Quantity is: {product?.quantity}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                Button
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
