import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clearSignupSuccess, signupUser } from "../store/auth/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signup() {
  const dispatch = useDispatch();
  const { user, signupSuccess } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    delete data.confirmPassword;
    console.log(data);
    dispatch(signupUser(data));
  };

  const password = watch("password");

  useEffect(() => {
    if (signupSuccess) {
      dispatch(clearSignupSuccess());
      navigate("/login", { replace: true });
    } else if (user) {
      navigate("/", { replace: true });
    }
  }, [user, signupSuccess, dispatch, navigate]);

  return (
    <div className="container mt-5">
      <div className="card-box p-5 pb-1">
        <h1 className="text-center text-color">Signup</h1>
        <form className="mt-3" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-4 col-form-label">
              Name
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>
          </div>

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
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-4 col-form-label">
              Password
            </label>
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
            <label
              htmlFor="confirmPassword"
              className="col-sm-4 col-form-label"
            >
              Confirm Password
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                id="confirmPassword"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-8 offset-sm-4">
              <input type="submit" className="btn btn-submit" value="Signup" />
            </div>
          </div>
        </form>

        <p className="mt-5 text-center">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}
