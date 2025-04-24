import React from "react";

import shapeImg1 from "../../assets/img/about/ed-shape-2-1.png";
import shapeImg2 from "../../assets/img/about/ed-shape-2-2.png";
import aboutImg3 from "../../assets/img/product/point-of-care.png";
import aboutImg4 from "../../assets/img/product/vocare-device.png";

const PointofCare = () => {
  return (
    <div id="it-about" className="it-about-3-area fix pt-120 pb-120 p-relative">
      <div className="container  mb-30">
        <div className="flex justify-center">
          <h2 className="text-center it-section-title-3 pb-30">
            VoCare solves your <span>“tele”</span> problems all of them…
          </h2>
        </div>

        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="ed-about-2-left p-relative text-end">
              <div className="ed-about-2-left-box d-inline-flex align-items-end">
                <div className="ed-about-2-thumb-one pb-110 mr-20">
                  {/* <img src={aboutImg1} alt="" /> */}
                </div>
                <div className="ed-about-2-thumb-two text-start">
                  {/* <img className="mb-20 inner-top-img" src={aboutImg2} alt="" /> */}
                  <img src={aboutImg3} alt="" />
                </div>
              </div>
              <div className="ed-about-2-thumb-shape-1 d-none lg-block">
                <img src={shapeImg1} alt="" />
              </div>
              <div className="ed-about-2-thumb-shape-2 d-none d-xxl-block">
                <img src={shapeImg2} alt="" />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-about-3-title-box">
              <div className="it-choose-content">
                <h2 className="it-section-title-3 pb-30">Point of Care</h2>{" "}
                <h5>
                  <i className="fa-solid fa-circle-check"></i>This mode can be
                  used by clinicians caring for multiple patients. In this mode,
                  the Vitals360 vital signs monitor replaces a number of
                  separate medical devices, making it ideal for care both inside
                  and outside of an office or facility.
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>Unlike other
                  medical devices that require manual entry of data, the
                  Vitals360 patient monitors can be linked directly to the
                  HIPAA-compliant VoCare Cloud via 4G LTE cellular and Wi-Fi
                  connectivity to allow patient monitor data to be automatically
                  uploaded after every use.
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>Additionally, the
                  Vitals360’s GPS location and time-stamping provide a superior
                  audit trail for Medicare reimbursement.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            {" "}
            <div className="it-about-3-title-box  mb-30">
              <div className="it-choose-content">
                <h2 className="it-section-title-3 pb-30">
                  Remote Health Monitoring
                </h2>{" "}
                <h5>
                  <i className="fa-solid fa-circle-check"></i>On-device software
                  maintained by VoCare
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>What we monitor:
                  Pulse, Oximetry, Blood Pressure, EKG,
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>Temperature, and
                  Weight (device also measures blood glucose-not yet available
                  in the United States).
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>In Remote Mode,
                  patients can use the Vitals360’s® video feature to conduct
                  convenient tele-health visits right on the device.
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>Lone worker
                  monitoring with GPS and WiFi tracking capability..
                </h5>
              </div>
            </div>
            <div className="it-about-3-title-box">
              <div className="it-choose-content">
                <h2 className="it-section-title-3 pb-30">Deployment</h2>{" "}
                <h5>
                  <i className="fa-solid fa-circle-check"></i>One Vital Signs
                  Device
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>User training –
                  See videos
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>Connected,
                  activated and ready to use
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>User friendly
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>Reliable
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>Secure
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>Scalable (1 to 1
                  M, Cloud infrastructure) (AWS).
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            {" "}
            <div className="it-about-3-title-box  mb-30">
              <div className="it-choose-content">
                <h2 className="it-section-title-3 pb-30">
                  Tele-health Solution
                </h2>{" "}
                <h5>
                  <i className="fa-solid fa-circle-check"></i>Nothing to
                  download
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>One-click
                  connection
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>Supports all major
                  video conference services.
                </h5>
              </div>
            </div>
            <div className="it-about-3-title-box">
              <div className="it-choose-content">
                <h2 className="it-section-title-3 pb-30">Connection</h2>{" "}
                <h5>
                  <i className="fa-solid fa-circle-check"></i>LTE (Global
                  Coverage Map) T-Mobile, World Wide
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>WiFi (when LTE is
                  not available)
                </h5>
                <h5>
                  <i className="fa-solid fa-circle-check"></i>Cloud Integration
                  services through partners, including Application Programming
                  Interfaces (API), an FDA listed Class I Medical Device Data
                  System (880.6310) as well as custom solutions to provide a
                  device and platform that allows our customers to define and
                  deliver solutions for their respective space of influence.
                </h5>
              </div>
            </div>
            <div className="ed-about-2-thumb-two text-start">
              <img src={aboutImg4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PointofCare;
