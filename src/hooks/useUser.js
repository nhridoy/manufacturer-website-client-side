import React from "react";
import interceptors from "../utils/interceptors";

const useUser = (user) => {
  const [token, setToken] = React.useState("");
  React.useEffect(() => {
    console.log(user);
    const email = user?.email;
    if (email) {
      interceptors
        .put("/user", {
          email,
        })
        .then((res) => {
          // setToken(res.data.token);
          console.log(res);
        });
    }
  }, [user]);
  return [token];
};

export default useUser;
