import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container my-5">
      <div>
        <h2>Welcome to "Happy Learn Kindergarten"</h2>
        <p>
          Since our founding in 2000, 'Happy Learn Kindergarten' has become one
          of the leading early childhood programs on the Upper West Side and in
          Manhattan. We take great pride in our diverse and devoted community of
          teachers, administrators, and families. Tucked away in a beautiful
          landmark building, our students enjoy our exceptional facility which
          offers two gyms, a climbing wall, a rooftop play-space, an art studio,
          and a library.
        </p>
        <p>
          'Happy Learn' delivers a balanced approach to curriculum; a thoughtful
          combination of Teacher-Guided and Child-Centered learning
          opportunities, focusing on the social-emotional, physical, and
          intellectual growth of the whole child. Our program is enriched with
          field trips, music, movement, yoga, art, library, and even filmmaking
          for our 4s!
        </p>
      </div>
      <h1 className="heading text-center my-5">Experts Teachers</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div>
          <div class="card" style={{ maxWidth: "300px" }}>
            <img
              src="https://img.freepik.com/free-photo/beautiful-teacher-woman-holding-book-grey-background_33799-169.jpg?size=626&ext=jpg"
              class="card-img-top"
              alt="..."
              className="teacher-img"
            />
            <div class="card-body">
              <h5 class="card-title">Mrs. Smith</h5>
              <p class="card-text">Mathmatics Teacher</p>
              <p className="text-center">
                <i className="fab fa-facebook-square px-3"></i>
                <i className="fab fa-twitter-square px-3"></i>
                <i className="fab fa-instagram px-3"></i>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card" style={{ maxWidth: "300px" }}>
            <img
              src="https://musicindustryhowtoimages.s3.amazonaws.com/wp-content/uploads/2018/04/23200023/private-music-teacher.jpg"
              class="card-img-top"
              alt="..."
              className="teacher-img"
            />
            <div class="card-body">
              <h5 class="card-title">Mrs. Anjelina</h5>
              <p class="card-text">Music Teacher</p>
              <p className="text-center">
                <i className="fab fa-facebook-square px-3"></i>
                <i className="fab fa-twitter-square px-3"></i>
                <i className="fab fa-instagram px-3"></i>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card" style={{ maxWidth: "300px" }}>
            <img
              src="https://media.sciencephoto.com/f0/30/10/20/f0301020-800px-wm.jpg"
              class="card-img-top"
              alt="..."
              className="teacher-img"
            />
            <div class="card-body">
              <h5 class="card-title">Mr. Jhon</h5>
              <p class="card-text">Science Teacher & Principal</p>
              <p className="text-center">
                <i className="fab fa-facebook-square px-3"></i>
                <i className="fab fa-twitter-square px-3"></i>
                <i className="fab fa-instagram px-3"></i>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card" style={{ maxWidth: "300px" }}>
            <img
              src="https://pbs.twimg.com/profile_images/3748213265/3208f69865b9aecd1d97a62feef79a18_400x400.jpeg"
              class="card-img-top"
              alt="..."
              className="teacher-img"
            />
            <div class="card-body">
              <h5 class="card-title">Mr. Jason</h5>
              <p class="card-text">Sports Teacher</p>
              <p className="text-center">
                <i className="fab fa-facebook-square px-3"></i>
                <i className="fab fa-twitter-square px-3"></i>
                <i className="fab fa-instagram px-3"></i>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card" style={{ maxWidth: "300px" }}>
            <img
              src="https://py85w2btoav31wg6h1sirl0l-wpengine.netdna-ssl.com/wp-content/uploads/consider-these-common-mistakes-all-new-dance-teachers-make-and-how-to-av_1798_40092671_0_14116046_500-640x427.jpg"
              class="card-img-top"
              alt="..."
              className="teacher-img"
            />
            <div class="card-body">
              <h5 class="card-title">Mrs. Rokujju</h5>
              <p class="card-text">Dance Teacher</p>
              <p className="text-center">
                <i className="fab fa-facebook-square px-3"></i>
                <i className="fab fa-twitter-square px-3"></i>
                <i className="fab fa-instagram px-3"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
