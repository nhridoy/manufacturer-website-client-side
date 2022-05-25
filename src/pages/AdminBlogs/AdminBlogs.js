import React from "react";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import interceptors from "../../utils/interceptors";

const AdminBlogs = () => {
  const path = window.location.pathname.split("/");
  const [blog, setBlog] = React.useState(null);
  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery("blogs", () => interceptors.get("/blogs"));

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
              <th>No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.data?.map((blog, index) => (
              <tr key={blog._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={blog?.image} alt={blog?.title} />
                    </div>
                  </div>
                </td>
                <td>{blog?.title}</td>
                <td>{blog?.date}</td>
                <td>
                  <label
                    htmlFor="delete-modal"
                    onClick={() => setBlog(blog)}
                    className="btn btn-primary modal-button"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteModal blog={blog} refetch={refetch} />
    </div>
  );
};

export default AdminBlogs;
