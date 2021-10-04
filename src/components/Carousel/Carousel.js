import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    // <div>
    //   <div
    //     id="carouselExampleCaptions"
    //     classNameName="carousel slide"
    //     data-bs-ride="carousel"
    //   >
    //     <div className="carousel-indicators">
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="0"
    //         className="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 2"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 3"
    //       ></button>
    //     </div>
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img
    //           src="https://images.unsplash.com/photo-1580810840991-82be8fc466f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMGluJTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    //           className="d-block w-100 h-400"
    //           alt="..."
    //         />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5>First slide label</h5>
    //           <p>
    //             Some representative placeholder content for the first slide.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img
    //           src="https://images.pexels.com/photos/8364020/pexels-photo-8364020.jpeg?auto=compress&cs=tinysrgb&dpr=1"
    //           className="d-block w-100"
    //           alt="..."
    //         />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5>Second slide label</h5>
    //           <p>
    //             Some representative placeholder content for the second slide.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img
    //           src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGluJTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    //           className="d-block w-100"
    //           alt="..."
    //         />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5>Third slide label</h5>
    //           <p>
    //             Some representative placeholder content for the third slide.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGluJTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGluJTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGluJTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 img-fluid"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
