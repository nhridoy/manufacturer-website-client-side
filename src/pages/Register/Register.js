import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import useUser from "../../hooks/useUser";
import jwtToken from "../../utils/jwtToken";

const Register = () => {
  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, SignUpUser, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();
  let location = useLocation();

  const [token] = useUser(user);

  const [passwordError, setPasswordError] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
    jwtToken(user.email);
  }
  const onSubmit = async (data) => {
    setPasswordError(null);
    if (data.password !== data.confirmPassword) {
      setPasswordError("Password and Confirm Password must be same");
    } else {
      await createUserWithEmailAndPassword(data.email, data.password);

      await updateProfile({
        displayName: data.name,
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-5">
        <h2 className="my-5 text-center text-3xl font-semibold">Signup</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <span className="text-red-600">This field is required</span>
              )}
              {error && <span className="text-red-600">{error.message}</span>}
              {passwordError && (
                <span className="text-red-600">{passwordError}</span>
              )}
              {SignUpUser && !error && (
                <span className="text-green-600">
                  User created successfully. Please verify your email.
                </span>
              )}
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already Have an Account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Signup
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

export default Register;
