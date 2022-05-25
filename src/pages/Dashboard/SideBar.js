import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const SideBar = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  React.useEffect(() => {
    console.log(admin, adminLoading);
  }, [admin, adminLoading]);

  if (adminLoading) {
    return <p>sidebar Loading....</p>;
  }

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">Dashboards</Link>
          </li>
          {admin ? (
            <>
              <li>
                <Link to="allorders">All Orders</Link>
              </li>
              <li>
                <Link to="addproducts">Add Products</Link>
              </li>
              <li>
                <Link to="allproducts">All Products</Link>
              </li>
              <li>
                <Link to="members">Members</Link>
              </li>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="myorders">My Orders</Link>
              </li>
              <li>
                <Link to="addreview">Add Review</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
