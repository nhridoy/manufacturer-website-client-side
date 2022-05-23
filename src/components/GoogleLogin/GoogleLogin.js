import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="form-control mt-6">
      <button className="btn btn-primary" onClick={() => signInWithGoogle()}>
        Signup With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
