import React from "react";

const Members = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Members</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered w-full text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>email</td>
              <td>Admin</td>
              <td>
                <button className="btn btn-primary">Make Admin</button>
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>email</td>
              <td>Admin</td>
              <td>
                <button className="btn btn-primary">Make Admin</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Members;
