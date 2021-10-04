import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="container-fluid px-5 nav-top text-white d-none d-md-block">
        <div className="d-flex justify-content-between">
          <address>
            12 New Eskaton Road, Dhaka-1000{" "}
            <span className="ms-2">
              <i class="fas fa-phone-alt"></i> +880-XXXXXXXX
            </span>
          </address>
          <p>
            <i className="fab fa-facebook-square px-3"></i>
            <i className="fab fa-twitter-square px-3"></i>
            <i className="fab fa-instagram px-3"></i>
          </p>
        </div>
      </div>
      <nav className="px-5 navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="logo fs-sm-5">
              <span style={{ color: "#1F97D4" }}>Happy</span>
              <span style={{ color: "#ED078B" }}> Learn</span>
              <span style={{ color: "#12D9DF" }}> Kindergarten</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav fs-5">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Services
              </a>
              <a className="nav-link" href="#">
                Courses
              </a>
              <a className="nav-link" href="#">
                About Us
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
              <a className="nav-link" href="#">
                Testimonial
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
