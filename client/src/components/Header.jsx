import React from "react";
import { NavLink, Outlet } from "react-router";

export default function Dashboard() {
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
                  to="/tickets"
                >
                  Tickets
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

            <button type="button" className="btn btn-warning">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Outlet */}
      <Outlet />
    </div>
  );
}
