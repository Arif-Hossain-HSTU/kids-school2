import React from "react";
import "./Course.css";

const Course = (props) => {
  const { title, age, img, body, price } = props.course;
  return (
    <div className="col">
      <div class="card">
        <img
          src={img}
          className="card-img-top img-fluid"
          style={{ height: "300px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title card-heading">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
        <div className="d-flex justify-content-around border-top">
          <p className="age">{age} y/o</p>
          <p className="price">${price} p/month</p>
        </div>
        <div className="text-center mb-2">
          <button className="regular-btn border-0 btn btn-primary py-2 px-3 rounded-pill">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
