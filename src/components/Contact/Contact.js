import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">Get In Touch</h1>
      <div className="row">
        <div className="col-md-8">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Comment
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Leave Your Message"
            ></textarea>
          </div>
          <button className="btn regular-btn rounded-pill">SEND</button>
        </div>
        <div className="col-md-4 ps-4">
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
      </div>
    </div>
  );
};

export default Contact;
