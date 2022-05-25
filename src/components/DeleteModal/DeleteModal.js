import React from "react";
import interceptors from "../../utils/interceptors";

const DeleteModal = ({ product, blog, refetch }) => {
  const deleteItem = () => {
    if (product) {
      interceptors.delete(`/products/${product._id}`).then((res) => {
        refetch();
      });
    } else if (blog) {
      interceptors.delete(`/blogs/${blog._id}`).then((res) => {
        refetch();
      });
    }
  };
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <p className="py-4">
            Confirm to delete {product?.name || blog?.title}
          </p>
          <div className="modal-action">
            <label htmlFor="delete-modal" className="btn btn-success">
              Cancel
            </label>
            <label
              htmlFor="delete-modal"
              onClick={deleteItem}
              className="btn btn-error"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
