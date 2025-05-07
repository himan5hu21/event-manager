import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../store/auth/authSlice";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogout = async () => {
    const response = await axios.post("/api/auth/logout");
    if (response.data.success) {
      dispatch(logout());
      console.log("Logout successful");
    }
  };

  const onClickLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand bg-transparent" to="/">
            Book<span className="text-color">Event</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav  nav-left">
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive && "active"}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive && "active"}`}
                  to="/events"
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive && "active"}`}
                  to="/features"
                >
                  Features
                </NavLink>
              </li>
            </ul>

            {user ? (
              <button
                type="button"
                className="btn btn-log"
                onClick={onClickLogout}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-log"
                onClick={onClickLogin}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Outlet */}
      <Outlet />
    </div>
  );
}
