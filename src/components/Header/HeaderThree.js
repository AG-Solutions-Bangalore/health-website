import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuItemsOnePage from "./MenuItemsOnePage";
import Logo from "../../assets/img/logo/logo-white-3.png";

const HeaderThree = (props) => {
  const { headerClass, headerLogo, onePage, parentMenu } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  useEffect(() => {
    // Sticky Header is displayed after scrolling for 400 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <header className={headerClass ? headerClass : ""}>
        <div
          id="header-sticky"
          className={`${
            isVisible
              ? " ed-header-transparent ed-header-3-style mt-20 z-index-11 header-sticky"
              : " ed-header-transparent ed-header-3-style mt-20 z-index-11"
          }
           
          `}
        >
          <div className="ed-header-3-area ">
            <div className="container">
              <div className="ed-header-3-wrapper">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                    <div className="ed-header-3-logo">
                      <Link to="/">
                        <img
                          src={headerLogo ? headerLogo : Logo}
                          alt=""
                          style={{ width: "237px", height: "54px" }}
                        />
                      </Link>
                    </div>
                  </div>
                  
                  <div
                    className="col-xl-6 d-none d-xl-block"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div
                      className="ed-header-2-main-menu it-main-menu"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <nav className="it-menu-content">
                        <MenuItemsOnePage
                          parentMenu={parentMenu}
                          onePageStyle="onePage3"
                        />
                      </nav>
                    </div>
                  </div>
                 
                  <div className="col-xl-2 col-lg-5 col-md-5 col-5">
                    <div className="ed-header-3-right d-flex justify-content-end align-items-center">
                      <div className="ed-header-3-bar">
                        <button
                          className="it-menu-bar"
                          onClick={() => setIsOffCanvasOpen(true)}
                        >
                          <svg
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 18.3333C10 17.4128 10.7462 16.6667 11.6667 16.6667H21.6667C22.5872 16.6667 23.3333 17.4128 23.3333 18.3333C23.3333 19.2538 22.5872 20 21.6667 20H11.6667C10.7462 20 10 19.2538 10 18.3333ZM0 1.66667C0 0.746183 0.746183 0 1.66667 0H21.6667C22.5872 0 23.3333 0.746183 23.3333 1.66667C23.3333 2.58713 22.5872 3.33333 21.6667 3.33333H1.66667C0.746183 3.33333 0 2.58713 0 1.66667ZM0 10C0 9.07953 0.746183 8.33333 1.66667 8.33333H21.6667C22.5872 8.33333 23.3333 9.07953 23.3333 10C23.3333 10.9205 22.5872 11.6667 21.6667 11.6667H1.66667C0.746183 11.6667 0 10.9205 0 10Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="it-offcanvas-area">
        <div className={isOffCanvasOpen ? "itoffcanvas opened" : "itoffcanvas"}>
          <div className="it-offcanva-bottom-shape d-none d-xxl-block"></div>
          <div className="itoffcanvas__close-btn">
            <button
              className="close-btn"
              onClick={() => setIsOffCanvasOpen(false)}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <Link to="/">
              <img
                src={Logo}
                alt=""
                style={{ width: "250px", height: "auto" }}
              />
            </Link>
          </div>
          <div className="itoffcanvas__text">
            <p style={{ textAlign: "justify" }}>
              The Vitals360 vital signs monitor device is designed to support
              remote patient healthcare needs surrounding easy access to
              patient’s care team, including easy to manage and low cost remote
              patient monitoring.
            </p>
          </div>
          <div className="it-menu-mobile d-xl-none">
            <MenuItemsOnePage
              parentMenu={parentMenu}
              onePageStyle="onePage3"
              mobileMenu="show"
            />
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="maito:sales@vocare.com">sales@vocare.com</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:+918557566766">(+91) 8557566766</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
                <a
                  href="htits://www.google.com/maps/@37.4801311,22.8928877,3z"
                  target="_blank"
                >
                  {/* Riverside 255, San Francisco. */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOffCanvasOpen ? (
        <div
          className="body-overlay apply"
          onClick={() => setIsOffCanvasOpen(false)}
        ></div>
      ) : (
        <div className="body-overlay"></div>
      )}
    </>
  );
};
export default HeaderThree;
