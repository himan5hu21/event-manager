import React from "react";

export default function Login() {
  return (
    <div className="container mt-5">
      <div className="card-box p-5">
        <h1 className="text-center text-color">Login</h1>
        <form className="mt-3">
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row g-3 align-items-center">
            <div className="col-sm-2">
              <label htmlFor="password" className="col-form-label">
                Password
              </label>
            </div>
            <div className="col-sm-10">
              <input
                type="password"
                id="password"
                className="form-control"
                aria-describedby="passwordHelpInline"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <input type="submit" className="btn btn-submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}
