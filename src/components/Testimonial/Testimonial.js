import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div>
      <div className="testimonial">
        <h1 className="heading text-center">TESTIMONIALS</h1>
        <div class="d-flex align-items-center py-5 mh-50">
          {" "}
          <a
            class="carousel-control-prev text-decoration-none"
            href="#mycarousel"
            role="button"
            data-bs-slide="prev"
          >
            <div class="d-flex flex-column justify-content-center me-2 ms-auto left text-dark">
              <span class="fas fa-arrow-left"></span>{" "}
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
                        src="https://images.indianexpress.com/2020/03/homeschool1.jpg"
                        class="d-block carousel-img w-100"
                        alt="..."
                      />{" "}
                    </div>
                    <div class="col-lg-6 ">
                      <div class=" d-flex flex-column justify-content-center my-5 px-3">
                        <p class="review text-center">
                          "You have been doing such a wonderful job of keeping
                          activities consistent and coordinating schedules every
                          week. I have been telling all my family and friends
                          what a blessing this school has been during this
                          crisis to keep our home calm. Thank you."
                        </p>
                        <div class="name d-flex align-items-center justify-content-center">
                          {" "}
                          <span class="fas fa-minus pe-1"></span>
                          <p class="m-0">Angela</p>
                        </div>
                        <p class="job text-center">Parent</p>
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
                        class="d-block carousel-img w-100"
                        alt="..."
                      />{" "}
                    </div>
                    <div class="col-lg-6 ">
                      <div class=" d-flex flex-column justify-content-center my-5 px-3">
                        <p class="review text-center">
                          "Sophia is so lucky to have had such enriching
                          experiences with you and all her teachers at The
                          Preschool Place this year. Thanks for inviting us for
                          another wonderful event [Kinder Plus Author’s Day]. We
                          loved all the stories!"
                        </p>
                        <div class="name d-flex align-items-center justify-content-center">
                          {" "}
                          <span class="fas fa-minus pe-1"></span>
                          <p class="m-0">Joy Smith</p>
                        </div>
                        <p class="job text-center">
                          Parent of Kinder Plus student
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-lg-6 ">
                      {" "}
                      <img
                        src="https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/d7_images/cover_media/davis-169hero-resources-shutterstock.jpg"
                        class="d-block carousel-img w-100"
                        alt="..."
                      />{" "}
                    </div>
                    <div class="col-lg-6 ">
                      <div class=" d-flex flex-column justify-content-center my-5 px-3">
                        <p class="review text-center">
                          "Carol, When Puran started in school, this day seemed
                          far away. But through your encouragement and guidance,
                          I feel I am ready for tomorrow’s challenges. You play
                          such an important role in shaping and guiding. Thank
                          you for caring so much."
                        </p>
                        <div class="name d-flex align-items-center justify-content-center">
                          {" "}
                          <span class="fas fa-minus pe-1"></span>
                          <p class="m-0">Louise T</p>
                        </div>
                        <p class="job text-center">Parent</p>
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
              <span class="fas fa-arrow-right"></span>{" "}
            </div>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
