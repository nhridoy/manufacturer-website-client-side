import React from "react";

const MyOrders = () => {
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
              <th>Image</th>
              <th>Name</th>
              <th>Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=3174" />
                  </div>
                </div>
              </td>
              <td>Name</td>
              <td>5000</td>
              <td>
                <button className="btn btn-primary btn-success">Pay</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyOrders;
