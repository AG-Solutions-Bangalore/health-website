import React from "react";
import SectionTitle from "../../components/SectionTitle";

import shapeImg1 from "../../assets/img/choose/shape-1-7.png";
import shapeImg2 from "../../assets/img/choose/shape-1-8.png";
import shapeImg3 from "../../assets/img/choose/shape-1-9.png";
import shapeImg4 from "../../assets/img/choose/shape-1-10.png";
import shapeImg5 from "../../assets/img/choose/shape-1-5.png";
import shapeImg6 from "../../assets/img/choose/shape-1-6.png";
import chooseImg from "../../assets/img/choose/choose-2-2.jpg";

const RealTimeData = () => {
  return (
    <div className="it-choose-area it-choose-style-2 z-index fix p-relative grey-bg pt-180 pb-110">
      <div className="it-choose-shape-5 d-none d-xl-block">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="it-choose-shape-6 d-none d-xl-block">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="it-choose-shape-7 d-none d-xl-block">
        <img src={shapeImg3} alt="" />
      </div>
      <div className="it-choose-shape-8 d-none d-xl-block">
        <img src={shapeImg4} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <h2 className="text-center it-section-title-3 pb-30">
            Real time data transfer and instant
            <br></br>
            <span>accessibility</span>
          </h2>
        </div>

        <div
          className="ed-about-5-content mx-auto  align-items-center"
          style={{
            maxWidth: "896px",
            padding: "1rem",
            // display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="it-about-5-list mb-10">
            <ul>
              <li>
                <i className="fa-regular fa-check"></i>Best Teaching
              </li>
              <li>
                <i className="fa-regular fa-check"></i>Quality Educators
              </li>
              <li>
                <i className="fa-regular fa-check"></i>Quality Educators
              </li>
            </ul>
          </div>
          <div className="it-about-5-list mb-40">
            <ul>
              <li>
                <i className="fa-regular fa-check"></i>Expert Tutor
              </li>
              <li>
                <i className="fa-regular fa-check"></i>Affordable
              </li>
              <li>
                <i className="fa-regular fa-check"></i>Affordable
              </li>
            </ul>
          </div>
          <div className="it-about-5-list mb-40">
            <ul>
              <li>
                <i className="fa-regular fa-check"></i>Expert Tutor
              </li>
              <li>
                <i className="fa-regular fa-check"></i>Affordable
              </li>
              <li>
                <i className="fa-regular fa-check"></i>Affordable
              </li>
            </ul>
          </div>
          <div className="it-about-5-list mb-40">
            <ul>
              <li>
                <i className="fa-regular fa-check"></i>Expert Tutor
              </li>
              <li>
                <i className="fa-regular fa-check"></i>Affordable
              </li>
              <li>
                <i className="fa-regular fa-check"></i>Affordable
              </li>
            </ul>
          </div>
   
        </div>
      </div>
    </div>
  );
};
export default RealTimeData;
