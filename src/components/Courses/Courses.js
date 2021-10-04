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
    <div className="container my-5">
      <h1 className="heading text-center my-5">OUR COURSES</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <Course course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
