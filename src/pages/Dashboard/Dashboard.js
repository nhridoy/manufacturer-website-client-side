import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  // useEffect(() => {
  //   console.log(admin);
  //   if (!adminLoading) {
  //     if (!admin) {
  //       navigate("/dashboard/myorders");
  //     } else {
  //       navigate("/dashboard/allorders");
  //     }
  //   }
  // }, [admin, adminLoading]);

  if (adminLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {admin ? (
        <>
          <h1>Hello Admin</h1>
        </>
      ) : (
        <>
          <h1>Hello User</h1>
        </>
      )}
    </div>
  );
};
export default Dashboard;
