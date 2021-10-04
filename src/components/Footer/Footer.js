import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="row py-5 px-5 text-white">
        <div className="col-md-6">
          <div className="logo">
            <span style={{ color: "#1F97D4" }}>Happy</span>
            <span style={{ color: "#ED078B" }}> Learn</span>
            <span style={{ color: "#12D9DF" }}> Kindergarten</span>
          </div>
          <p>Our passion is to teach your kid.</p>
          {/* address */}
          <div className="mt-4">
            <address>
              <i class="fas fa-map-marker-alt"></i> 12 New Eskaton Road,
              Dhaka-1000
            </address>
            <p>
              <i class="fas fa-phone-alt"></i> +880-XXXXXXXX
            </p>
            <p>
              <i class="fas fa-phone-alt"></i> +880-XXXXXXXX
            </p>
            <p>info@happy-learn.com</p>
            <p>
              <i className="fab fa-facebook-square px-3"></i>
              <i className="fab fa-twitter-square px-3"></i>
              <i className="fab fa-instagram px-3"></i>
            </p>
          </div>
        </div>
        {/*Navigation link */}
        <div className="col-md-3">
          <h2>Quick Links</h2>
          <div className="link d-block mt-4">
            <a href="/services">Services</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
        {/* about us  */}
        <div className="col-md-3">
          <h2>About Us</h2>
          <div className="link d-block mt-4">
            <a href="/services">Our Team</a>
            <a href="/about">Privacy Policy</a>
            <a href="/contact">Testimonial</a>
            <a href="/blog">Our Stories</a>
          </div>
        </div>
      </div>
      {/* copyright section */}
      <div>
        <p className="text-white text-center pb-3">
          Copyright &copy;2021 All rights reserved by Happy Learn Kindergarten
        </p>
      </div>
    </footer>
  );
};

export default Footer;
