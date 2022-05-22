import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-5">
        <h2 className="my-5 text-center text-3xl font-semibold">Signup</h2>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Repeate Password</span>
            </label>
            <input
              type="password"
              placeholder="Repeat password"
              className="input input-bordered"
            />
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already Have an Account?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Signup</button>
          </div>
          <div class="divider">OR</div>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
