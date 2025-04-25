import React from "react";
import shapeImg1 from "../../assets/img/about/about-3-shap-1.png";
import SectionTitle from "../../components/SectionTitle";
import titleImg from "../../assets/img/category/title.svg";
import Pulse from "../../assets/img/vital/rate-icon.png";
import Measure from "../../assets/img/vital/glucose-icon.png";
import Temperature from "../../assets/img/vital/temperatute-icon.png";
import Oxygen from "../../assets/img/vital/bloodspo2.png";
import Blood from "../../assets/img/vital/pressure-icon.png";
const VitalsMonitor = () => {
  const items = [
    {
      image: Pulse,
      title: "Detect, Measure Pulse Rate",
      description: "Heart Rate Monitor",
    },
    {
      image: Oxygen,

      icon: "flaticon-puzzle",
      title: "Blood Oxygen Levels",
      description: "Blood Oxygen Monitor",
    },
    {
      image: Temperature,

      icon: "flaticon-puzzle",
      title: "Measure Body Temperature",
      description: "Temperature Monitor",
    },
    {
      image: Blood,

      icon: "flaticon-puzzle",
      title: "Blood Pressure Readings",
      description: "Blood Pressure Monitor",
    },
    {
      image: Pulse,

      icon: "flaticon-puzzle",
      title: "Record Heart Rhythm, Rate and Electrical Activity",
      description: "ECG Heart Monitor",
    },
    {
      image: Measure,

      icon: "flaticon-puzzle",
      title: "Measure High Blood Sugar",
      description: "Glucose Monitor (Not available in the USA)",
    },
  ];
  return (
    <div className="it-about-3-area it-about-4-style p-relative grey-bg pt-120 pb-120">
      <div className="ed-about-3-shape-2">
        <img src={shapeImg1} alt="" />
      </div>
      <div
        className="container  wow animate__fadeInUp"
        data-wow-duration=".9s"
        data-wow-delay=".5s"
      >
        <div className="row g-4">
          <div
            className="col-md-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <SectionTitle
              itemClass="it-about-3-title-box"
              subTitleClass="it-section-subtitle-5 purple-2"
              subTitle="6 Key Vital Signs Monitor"
              titleClass="it-section-title-3 pb-30"
              title="Professional Grade Mobile Vital Signs Monitor"
              titleImage={titleImg}
              description="This FDA cleared Six Key Vital Signs Monitor measures Heart Rate, Blood Oxygen Saturation, Temperature, Blood Pressure, ECG Heart Rhythms, and Glucose (Not available in the USA). The VoCare Vitals V360 solves your “tele” problems – all of them… The Vitals360® vital signs monitor is designed to support remote health and skilled nurse care with simple access to patient records and treatment programs. A low cost remote patient monitor mobile device that easy to operate, manage and maintain."
              description1="A critical tool to leverage in delivering Remote Patient Monitoring (RPM), Tele-health, or Point of Care solutions in your respective markets. With Cellular, Wi-Fi and Bluetooth capability, healthcare providers can remotely capture key clinical vital sign measurements from a single device that is self-contained and can directly upload the data by way of the cloud into the providers clinical information system."
            />
          </div>

          <div
            className="col-md-6 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-about-3-mv-box">
              <div className="row">
                {items.map((item, index) => (
                  <div key={index} className="col-xl-12">
                    <div className="it-about-4-list-wrap d-flex align-items-start">
                      <div
                        style={{ width: "50px", height: "50px" }}
                        className="me-4"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      <div className="it-about-3-mv-item">
                        <span className="it-about-3-mv-title">
                          {item.title}
                        </span>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitalsMonitor;
