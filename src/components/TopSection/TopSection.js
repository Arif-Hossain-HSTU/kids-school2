import React from "react";
import "./TopSection.css";
const TopSection = () => {
  return (
    <div className="top-section p-5 text-center">
      <h1>
        Welcome to
        <div className="logo">
          <span style={{ color: "#1F97D4" }}>Happy</span>
          <span style={{ color: "#ED078B" }}> Learn</span>
          <span style={{ color: "#12D9DF" }}> Kindergarten</span>
        </div>
      </h1>
      <p className="desc lh-lg text-white p-5">
        It's the best Kindergarten school in Dhaka city. We offer you the best
        atmosphere with Qualified Teachers and Environment. We also offer
        challenging and rewarding academic programs for pre-school,
        kindergarten, elementary and junior high school students ages 2 – 14.
      </p>
      <button className="regular-btn border-0 btn btn-primary py-3 px-4 rounded-pill">
        Explore Courses
      </button>
    </div>
  );
};

export default TopSection;
