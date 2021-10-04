import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const [seviceDetail, setServiceDetail] = useState([]);
  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setServiceDetail(data));
  }, []);

  return (
    <div className="container">
      <h1 className="heading text-center my-5">OUR SERVICES</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {seviceDetail.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
