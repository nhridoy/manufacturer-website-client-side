import React from "react";

const ClientFeedback = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container lg:px-5 py-24 mx-auto">
        <h1 className="text-3xl text-center font-medium title-font text-gray-100 mb-12 ">
          What Client say About Us
        </h1>
        <p></p>

        {/* ClientFeedback */}

        <div className="grid lg:grid-cols-3  gap-5   ">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((feedback, index) => (
            <div key={index} className="lg:col-span-1 w-5/6 mx-auto redShadow">
              <div
                className="bg-white w-full border-2 border-red-600 rounded-lg px-6 py-16 mb-6 shadow sm:inline-block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:drop-shadow-lg duration-300
"
              >
                <div className=" text-center">
                  <div className="flex-shrink-0">
                    <div className="inline-block relative">
                      <a href="#" className="block relative">
                        <div className="mx-auto object-cover rounded-full h-16 w-16 ">
                          <img
                            src="https://api.lorem.space/image/face?hash=33791"
                            layout=""
                            className=""
                            alt="profil"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="">
                    <p className="flex justify-center items-center">
                      <span className="text-gray-900">Charlie Rabiller</span>
                    </p>
                    <div className="flex items-center justify-center mt-1">
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className=" h-6 text-4xl  text-left text-black">“</div>

                  <p className="max-w-xs font-light text-gray-900 text-center">
                    My first job of scanning photos at the Memories 2 Digital
                    Photo Scanning was fantastic. She completed the work quickly
                    while I was waiting. Thanks for a great service..
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
