import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="testimonial">
        <h1 className="heading text-center">TESTIMONIALS</h1>
        <div class="d-flex align-items-center py-5 mh-100">
          {" "}
          <a
            class="carousel-control-prev text-decoration-none "
            href="#mycarousel"
            role="button"
            data-bs-slide="prev"
          >
            <div class="d-flex flex-column justify-content-center me-2 ms-auto left text-primary">
              PREV<span class="fas fa-arrow-left"></span>{" "}
            </div>{" "}
            <span class="sr-only">Previous</span>
          </a>
          <div class="container">
            <div id="mycarousel" class="carousel slide" data-bs-ride="carousel">
              <ol class="carousel-indicators">
                <li
                  data-bs-target="#mycarousel"
                  data-bs-slide-to="0"
                  class="active"
                ></li>
                <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-lg-6 ">
                      {" "}
                      <img
                        src="https://images.pexels.com/photos/8052808/pexels-photo-8052808.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        class="d-block w-100"
                        alt="..."
                      />{" "}
                    </div>
                    <div class="col-lg-6 ">
                      <div class=" d-flex flex-column justify-content-center my-5 px-3">
                        <p class="review text-center">
                          "Incredible services and amazing customer support"
                        </p>
                        <div class="name d-flex align-items-center justify-content-center">
                          {" "}
                          <span class="fas fa-minus pe-1"></span>
                          <p class="m-0">Joy Smith</p>
                        </div>
                        <p class="job text-center">Project Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-lg-6 ">
                      {" "}
                      <img
                        src="https://images.pexels.com/photos/8052808/pexels-photo-8052808.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        class="d-block w-100"
                        alt="..."
                      />{" "}
                    </div>
                    <div class="col-lg-6 ">
                      <div class=" d-flex flex-column justify-content-center my-5 px-3">
                        <p class="review text-center">
                          "Incredible services and amazing customer support"
                        </p>
                        <div class="name d-flex align-items-center justify-content-center">
                          {" "}
                          <span class="fas fa-minus pe-1"></span>
                          <p class="m-0">Joy Smith</p>
                        </div>
                        <p class="job text-center">Project Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-lg-6 ">
                      {" "}
                      <img
                        src="https://images.pexels.com/photos/8052808/pexels-photo-8052808.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        class="d-block w-100"
                        alt="..."
                      />{" "}
                    </div>
                    <div class="col-lg-6 ">
                      <div class=" d-flex flex-column justify-content-center my-5 px-3">
                        <p class="review text-center">
                          "Incredible services and amazing customer support"
                        </p>
                        <div class="name d-flex align-items-center justify-content-center">
                          {" "}
                          <span class="fas fa-minus pe-1"></span>
                          <p class="m-0">Joy Smith</p>
                        </div>
                        <p class="job text-center">Project Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <a
            class="carousel-control-next text-decoration-none "
            href="#mycarousel"
            role="button"
            data-bs-slide="next"
          >
            <div class="d-flex flex-column justify-content-center right ms-2 me-auto text-primary">
              {" "}
              NEXT <span class="fas fa-arrow-right"></span>{" "}
            </div>{" "}
            <span class="sr-only text-primary">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
