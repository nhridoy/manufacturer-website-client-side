import React from "react";
import { useQuery } from "react-query";
import interceptors from "../../utils/interceptors";

const AllProducts = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    interceptors.get("/products")
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">All Products</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered w-full text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.data?.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={product.image} />
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button className="btn btn-primary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllProducts;
