import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/auth/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login data submitted:", data);
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="container mt-5">
      <div className="card-box p-5 pb-1">
        <h1 className="text-center text-color">Login</h1>
        <form className="mt-3" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-4 col-form-label">
              Email
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="email@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
          </div>

          <div className="mb-3 row g-3 align-items-center">
            <div className="col-sm-4">
              <label htmlFor="password" className="col-form-label">
                Password
              </label>
            </div>
            <div className="col-sm-8">
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-8 offset-sm-4">
              <input type="submit" className="btn btn-submit" value="Login" />
            </div>
          </div>
        </form>

        <p className="mt-5 text-center">
          Don't have an account with BookEvent?{" "}
          <NavLink
            to="/signup"
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}
