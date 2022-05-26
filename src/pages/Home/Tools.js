import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Tool from "../../components/Tool/Tool";
import interceptors from "../../utils/interceptors";

const Tools = () => {
  const { data, isLoading, isError, isSuccess, refetch } = useQuery(
    "tools",
    () => interceptors.get("products")
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-semibold">Our Latest Tools</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {data?.data?.map((tool) => (
          <div key={tool._id}>
            <Tool tool={tool} />
          </div>
        ))}
      </div>
      {/* <Link to="all" className="btn btn-primary btn-sm my-5">
        All Items
      </Link> */}
    </section>
  );
};

export default Tools;
