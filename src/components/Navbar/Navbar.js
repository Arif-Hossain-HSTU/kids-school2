import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="container-fluid px-5 nav-top text-white d-none d-md-block">
        {/* ----------top nav--------- */}
        <div className="d-flex justify-content-between">
          <address>
            12 New Eskaton Road, Dhaka-1000{" "}
            <span className="ms-2">
              <i class="fas fa-phone-alt"></i> +880-XXXXXXXX
            </span>
          </address>
          {/* social media icon */}
          <p>
            <i className="fab fa-facebook-square px-3"></i>
            <i className="fab fa-twitter-square px-3"></i>
            <i className="fab fa-instagram px-3"></i>
          </p>
        </div>
      </div>
      <nav className="px-5 navbar navbar-expand-lg bg-white">
        {/* logo */}
        <div className="container-fluid">
          <NavLink style={{ textDecoration: "none" }} to="/">
            <div className="logo fs-sm-5">
              <span style={{ color: "#1F97D4" }}>Happy</span>
              <span style={{ color: "#ED078B" }}> Learn</span>
              <span style={{ color: "#12D9DF" }}> Kindergarten</span>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i class="fas fa-bars"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            {/* navbar link */}
            <div className="navbar-nav fs-5">
              <NavLink className="link" activeClassName="selected" to="/">
                Home
              </NavLink>
              <NavLink
                className="link"
                activeClassName="selected"
                to="/service-detail"
              >
                Services
              </NavLink>
              <NavLink
                className="link"
                activeClassName="selected"
                to="/courses"
              >
                Courses
              </NavLink>
              <NavLink className="link" activeClassName="selected" to="/about">
                About Us
              </NavLink>
              <NavLink
                className="link"
                activeClassName="selected"
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className="link"
                activeClassName="selected"
                to="/testimonial"
              >
                Testimonial
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
