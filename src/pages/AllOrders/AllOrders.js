import React from "react";
import { useQuery } from "react-query";
import interceptors from "../../utils/interceptors";

const AllOrders = () => {
  const { data, isLoading, isError, isSuccess, refetch } = useQuery(
    "orders",
    () => interceptors.get("orders")
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleShip = (id) => {
    interceptors
      .patch(`updateOrders/${id}`, {
        shipped: true,
      })
      .then(() => refetch());
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">All Orders</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered w-full text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Item</th>
              <th>Order ID</th>
              <th>User</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((order, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{order?.item}</td>
                <td>{order?._id}</td>
                <td>{order?.name}</td>
                <td>{order?.quantity}</td>
                <td>
                  {order?.paid ? (
                    order?.status === "shipped" ? (
                      order?.status
                    ) : (
                      <>
                        <p>{order?.status}</p>
                        <button
                          onClick={() => handleShip(order?._id)}
                          className="btn btn-success btn-sm"
                        >
                          Ship
                        </button>
                      </>
                    )
                  ) : (
                    "UnPaid"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllOrders;
