import React, { useEffect } from "react";
import { CountUp } from "use-count-up";
import { BsTools, BsFillPeopleFill } from "react-icons/bs";
import { GiEarthAfricaEurope } from "react-icons/gi";

const Counter = () => {
  return (
    <section className="">
      <h2 className="my-5 font-bold text-center text-3xl">Business Summery</h2>
      <div className="bg-[url('https://www.nicepng.com/png/detail/145-1452311_construction-tools-png-hardware-store.png')] bg-no-repeat bg-cover bg-center sepia p-10">
        <div className="bg-black opacity-80 p-10 text-white font-light md:text-3xl grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center justify-center">
            <BsTools className="text-5xl" />
            <CountUp
              thousandsSeparator=","
              isCounting
              end={5000}
              duration={5}
            />
            <p>Tools</p>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <BsFillPeopleFill className="text-5xl" />
            <CountUp
              thousandsSeparator=","
              isCounting
              end={96000}
              duration={5}
            />
            <p>Happy Customers</p>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <GiEarthAfricaEurope className="text-5xl" />
            <CountUp thousandsSeparator="," isCounting end={120} duration={5} />
            <p>Serving Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
