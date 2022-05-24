import React from "react";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import jwtToken from "../../utils/jwtToken";
import useUser from "../../hooks/useUser";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const [signInWithEmailAndPassword, signUser, signLoading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [token] = useUser(user);

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    jwtToken(data.email);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-5">
        <h2 className="my-5 text-center text-3xl font-semibold">Login</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}

              {error && (
                <span className="text-red-600">
                  Email or Password Does not Match
                </span>
              )}

              <div className="flex justify-between">
                <label className="label">
                  <Link
                    to="/reset-password"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Don't Have an Account?
                  </Link>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div className="divider">OR</div>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
