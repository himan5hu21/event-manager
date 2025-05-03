import React from "react";

export default function Signup() {
  return (
    <div className="container mt-5">
      <div className="card-box p-5">
        <h1 className="text-center text-color">Signup</h1>
        <form className="mt-3">
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-4 col-form-label">
              Name
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-4 col-form-label">
              Email
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className=" col-sm-4 col-form-label">
              Password
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                id="password"
                className="form-control"
                aria-describedby="passwordHelpInline"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="mb-3 row align-items-center">
            <label
              htmlFor="confirmPassword"
              className="col-sm-4 col-form-label"
            >
              Confirm Password
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                aria-describedby="passwordHelpInline"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <input type="submit" className="btn btn-submit" value="Signup" />
          </div>
        </form>
      </div>
    </div>
  );
}
