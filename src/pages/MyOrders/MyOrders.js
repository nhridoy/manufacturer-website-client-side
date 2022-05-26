import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import interceptors from "../../utils/interceptors";

const MyOrders = () => {
  const [order, setOrder] = React.useState(null);
  const { data, isLoading, isError, isSuccess, refetch } = useQuery(
    "orders",
    () => interceptors.get("orders/me")
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">My Orders</h1>
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
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order?.item}</td>
                <td>{order?._id}</td>
                <td>{order?.name}</td>
                <td>{order?.quantity}</td>
                <td>
                  {order?.paid || (
                    <>
                      <Link
                        to={`/payment/${order?._id}`}
                        className="btn btn-success btn-sm"
                      >
                        Pay
                      </Link>
                      <label
                        onClick={() => setOrder(order)}
                        htmlFor="delete-modal"
                        className="btn btn-error btn-sm modal-button"
                      >
                        Cancel
                      </label>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteModal order={order} refetch={refetch} />
    </div>
  );
};
export default MyOrders;
