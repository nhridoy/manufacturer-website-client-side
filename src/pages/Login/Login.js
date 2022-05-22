import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-5">
        <h2 className="my-5 text-center text-3xl font-semibold">Login</h2>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <div className="flex justify-between">
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Don't Have an Account?
                </Link>
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div class="divider">OR</div>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
