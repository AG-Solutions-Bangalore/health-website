import React from "react";
import shapeImg1 from "../../assets/img/choose/shape-1-7.png";
import shapeImg2 from "../../assets/img/choose/shape-1-8.png";
import shapeImg3 from "../../assets/img/choose/shape-1-9.png";
import shapeImg4 from "../../assets/img/choose/shape-1-10.png";
import AnimatedOnScroll from "./AnimatedOnScroll";

const RealTimeData = () => {
  return (
    <div className="it-choose-area it-choose-style-2 z-index fix p-relative grey-bg pt-110 pb-110">
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

        <div class="container">
          <AnimatedOnScroll animation="zoomIn" delay={300}>
            <div class="row justify-content-center ed-about-5-content">
              <div class="col-12 col-sm-6 col-lg-4 mb-4 ">
                <div class="it-about-5-list">
                  <ul>
                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i> Post-Hospital
                      Discharge
                    </li>

                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i> Chronic Disease
                      Management
                    </li>
                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i>COVID-19
                    </li>
                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i>Worksite Emergency Care
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-4 mb-4">
                <div class="it-about-5-list">
                  <ul>
                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i> Home Healthcare
                    </li>
                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i> Government Healthcare
                    </li>
                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i> Telehealth Services
                    </li>
                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i> Health Screenings
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-4 mb-4">
                <div class="it-about-5-list ">
                  <ul>
                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i> Corrections Facilities
                    </li>
                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i> Transportation &
                      Entertainment
                    </li>
                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i> Industries
                    </li>
                    <li style={{ width: "100%", paddingBottom: "8px" }}>
                      <i class="fa-regular fa-check"></i> Geographically Remote
                      Locations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </div>
  );
};
export default RealTimeData;
