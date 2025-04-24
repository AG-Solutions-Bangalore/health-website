import React from "react";
import { Link } from "react-router-dom";

import footerBG from "../../assets/img/footer/bg-1-1.jpg";
import Logo from "../../assets/img/logo/logo-white-3.png";

const FooterTwo = (props) => {
  const { footerClass, footerLogo, btnClass, copyrightTextClass } = props;

  return (
    <footer>
      <div
        className={
          footerClass
            ? footerClass
            : "it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-2 black-bg pb-70"
        }
        style={{ backgroundImage: `url(${footerBG})` }}
      >
        <div className="it-footer-border">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-footer-top-info d-flex align-items-center it-footer-top-col-1">
                  <div className="it-footer-top-icon">
                    <span>
                      <i className="fa-light fa-location-dot"></i>
                    </span>
                  </div>
                  <div className="it-footer-top-text">
                    <span>Address:</span>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/@25.1314121,87.0325089,8.83z?entry=ttu"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-footer-top-info d-flex align-items-center it-footer-top-col-2">
                  <div className="it-footer-top-icon">
                    <span>
                      <i className="fa-light fa-phone phone"></i>
                    </span>
                  </div>
                  <div className="it-footer-top-text">
                    <span>Phone: </span>
                    <a href="tel:+918557566766">(+91) 85575 66766</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-footer-top-info d-flex align-items-center justify-content-md-end border-none it-footer-top-col-3">
                  <div className="it-footer-top-icon">
                    <span>
                      <i className="fa-light fa-envelope"></i>
                    </span>
                  </div>
                  <div className="it-footer-top-text">
                    <span>Email:</span>
                    <a href="mailto:sales@vocare.com">sales@vocare.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="it-footer-wrap pt-120">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="it-footer-widget footer-col-5">
                  <div className="it-footer-logo pb-25">
                    <Link to="/">
                      <img
                        src={footerLogo ? footerLogo : Logo}
                        alt=""
                        style={{ width: "250px", height: "auto" }}
                      />
                    </Link>
                  </div>
                  <div className="it-footer-text pb-5">
                    <p>
                      FDA 510k 6 in 1 Multi <br></br> Vital Monitoring Device
                    </p>
                  </div>
                  <div className="it-footer-social">
                    <a href="https://www.facebook.com/MyVoCare">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/vocare-inc">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="it-footer-widget footer-col-6">
                  <h4 className="it-footer-title">NEED HELP? </h4>
                  <div className="it-footer-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>
                          Support
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>Get
                          Started
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>
                          Terms of Use
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>Privacy
                          Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="it-footer-widget footer-col-6">
                  <h4 className="it-footer-title">LEARN MORE ? </h4>
                  <div className="it-footer-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>
                          Certifications
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>Product
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>
                          Demo Videos
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-8 mb-50 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="it-footer-widget footer-col-8">
                  <h4 className="it-footer-title">Subscribe</h4>
                  <div className="it-footer-input-box p-relative">
                    <input
                      className="mb-20"
                      type="email"
                      placeholder="Enter your email:"
                    />
                    <button
                      className={btnClass ? btnClass : "it-btn-white sky-bg"}
                    >
                      <span>SUBSCRIBE NOW</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div
                className={
                  copyrightTextClass
                    ? copyrightTextClass
                    : "it-copyright-text style-2 text-center"
                }
              >
                <p>
                  Copyright &copy; 2025{" "}
                  <a href="#">VoCare Vital Signs Monitor</a> || All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterTwo;
