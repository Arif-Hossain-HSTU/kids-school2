import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 4)));
  }, []);
  return (
    <div className="container">
      <h1 className="heading text-center my-5">OUR SERVICES</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
      <div className="text-center my-5">
        <button className="regular-btn border-0 btn btn-primary py-3 px-4 rounded-pill">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
