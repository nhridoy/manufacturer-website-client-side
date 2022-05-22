import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminBlogs = () => {
  const path = window.location.pathname.split("/");

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Blogs</h1>
        <Link to="new" className="btn btn-primary">
          Add Blog
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered w-full text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blog 1</td>
              <td>Author 1</td>
              <td>2020-01-01</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-primary">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Blog 2</td>
              <td>Author 2</td>
              <td>2020-01-01</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-primary">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlogs;
