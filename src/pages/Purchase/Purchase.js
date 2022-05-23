import React from "react";
import { useForm } from "react-hook-form";

const Purchase = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};

  return (
    <section className="text-gray-700 body-font overflow-hidden text-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className=" text-3xl text-white font-medium mb-1">
              The Catcher in the Rye
            </h1>

            <p className="text-white">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>

            <p className="text-white font-medium text-2xl ">
              Unit Price: $58.00
            </p>
            <p className="text-white font-medium text-2xl ">
              Minimum Order: 500
            </p>
            <p className="text-white font-medium text-2xl ">Available: 90000</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Enter Quantity?</span>
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered w-full max-w-xs text-white"
                  {...register("quantity", {
                    required: true,
                    min: 18,
                    max: 99,
                  })}
                />
                {errors.quantity?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
                {errors.quantity?.type === "min" && (
                  <span className="text-red-600">Minimum Quantity is: </span>
                )}
                {errors.quantity?.type === "max" && (
                  <span className="text-red-600">Maximum Quantity is: </span>
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
