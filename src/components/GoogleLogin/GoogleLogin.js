import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import jwtToken from "../../utils/jwtToken";

const GoogleLogin = () => {
  const [signInWithGoogle, guser, loading, error] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  // const navigate = useNavigate();
  // let location = useLocation();

  // let from = location.state?.from?.pathname || "/";
  if (user || guser) {
    // navigate(from, { replace: true });
    jwtToken(user?.email || guser?.email);
  }
  return (
    <div className="form-control mt-6">
      <button className="btn btn-primary" onClick={() => signInWithGoogle()}>
        Signup With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
