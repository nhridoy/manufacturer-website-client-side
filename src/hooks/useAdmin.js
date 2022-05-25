import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import interceptors from "../utils/interceptors";

const useAdmin = (user) => {
  //   const [admin, setAdmin] = React.useState(false);

  //   const [adminLoading, setAdminLoading] = React.useState(true);
  //   React.useEffect(() => {
  const email = user?.email;
  const { data: admin, isLoading: adminLoading } = useQuery(
    ["checkAdmin", email],
    () => {
      return axios.get("http://localhost:5000/user/admin", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    }
  );
  if (email) {
    // axios
    //   .get("http://localhost:5000/user/admin", {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     setAdmin(res.data);
    //     setAdminLoading(false);
    //   })
    //   .catch((err) => {
    //     setAdminLoading(false);
    //   });
  }
  //   }, [user]);
  return [admin.data, adminLoading];
};

export default useAdmin;
