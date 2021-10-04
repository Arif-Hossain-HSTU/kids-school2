import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container">
      <h1 className="heading text-center my-5">OUR COURSES</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <Course course={course}></Course>
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

export default Courses;
