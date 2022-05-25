import React, { useEffect } from "react";
import interceptors from "../../utils/interceptors";

const ClientFeedback = () => {
  const [feedbacks, setFeedbacks] = React.useState([]);
  useEffect(() => {
    interceptors.get("/reviews").then((res) => {
      setFeedbacks(res.data);
    });
  }, []);
  return (
    <section className="text-gray-600 body-font ">
      <div className="container lg:px-5 py-24 mx-auto">
        <h1 className="text-3xl text-center font-medium title-font text-gray-100 mb-12 ">
          What Client say About Us
        </h1>
        <p></p>

        {/* ClientFeedback */}

        <div className="grid lg:grid-cols-3  gap-5   ">
          {feedbacks.map((feedback, index) => (
            <div
              key={feedback?._id}
              className="lg:col-span-1 w-5/6 mx-auto redShadow"
            >
              <div
                className="bg-white w-full border-2 border-red-600 rounded-lg px-6 py-16 mb-6 shadow sm:inline-block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:drop-shadow-lg duration-300
"
              >
                <div className=" text-center">
                  <div className="">
                    <p className="flex justify-center items-center">
                      <span className="text-gray-900">
                        {feedback?.user?.name}
                      </span>
                    </p>
                    <p className="flex justify-center items-center">
                      <span className="text-gray-900">
                        {feedback?.user?.email}
                      </span>
                    </p>
                    <div className="flex items-center justify-center mt-1">
                      <div className="rating">
                        {[...Array(parseInt(feedback?.rating))].map((_, i) => (
                          <input
                            key={i}
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className=" text-center font-bold">
                  <span className="text-gray-900">{feedback?.title}</span>
                </h2>
                <div className="mt-3">
                  <div className=" h-6 text-4xl  text-left text-black">“</div>

                  <p className="max-w-xs font-light text-gray-900 text-center">
                    {feedback?.description}
                  </p>
                  <div className="h-7 text-4xl text-right text-black ">“</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
