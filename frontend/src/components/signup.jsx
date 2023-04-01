import React from "react";
import searchImage from "../assets/icons/search.png";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpg";
import img6 from "../assets/images/img6.jpg";
import { useAuth } from "../context/auth";
import "../css/signin.css";
import "../css/style.css";
import "../css/util.css";
import Navbar from "./navbar";

function Signup() {
  const auth = useAuth();

  return (
    <section id="login-page">
      <Navbar />
      <div className="d-flex justify-content-between p-5 container">
        <div className="fb-48 d-flex justify-content-center mt-5">
          {/* The carousel part */}
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item active">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img6} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="vertical-line" />
        <div className="fb-48 d-flex justify-content-center">
          {/* The Form Part */}
          <div className="input-container d-flex dir-col mt-5 align-items-center g-3">
            <h3 className="text-center primary-font larger p-0 m-0 dark-purple">
              Sign in
            </h3>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn btn-primary">Sign in</button>
            <p className="large primary-font">---------- or ----------</p>
            {/* or signin with google */}
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-google d-flex align-items-center g-2"
                onClick={auth.login}
              >
                <span>Sign in with Google</span>
                <img src={searchImage} width="30px" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
