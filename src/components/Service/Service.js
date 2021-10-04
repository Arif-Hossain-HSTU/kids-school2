import React from "react";
import "./Service.css";

const Service = (props) => {
  const { title, body, img } = props.service;
  return (
    <div class="col">
      <div class="card">
        <img
          src={img}
          class="card-img-top img-fluid"
          style={{ height: "300px" }}
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
