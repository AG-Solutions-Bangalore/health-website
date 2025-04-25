import React from "react";
import SectionTitle from "../../components/SectionTitle";
import testimonialBG from "../../assets/img/product/bg-overview.jpg";
import AnimatedOnScroll from "./AnimatedOnScroll";

const VitalSignMonitor = () => {
  return (
    <div
      className="it-testimonial-area ed-testimonial-ptb fix p-relative"
      style={{
        backgroundImage: `url(${testimonialBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div
        className="row align-items-center "
        style={{
          paddingRight: "4rem",
          paddingLeft: "4rem",
        }}
      > */}
      <div className="row align-items-center px-3 px-md-5">
        <div
          className="col-xl-4 col-lg-4 wow animate__fadeInLeft"
          data-wow-duration=".9s"
          data-wow-delay=".5s"
        >
          <div></div>
        </div>
        <div
          className="container col-xl-8 col-lg-8 wow animate__fadeInLeft"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            padding: "2rem",

            borderRadius: "12px",
          }}
        >
          <AnimatedOnScroll animation="fadeInUp" delay={300}>

          <SectionTitle
            itemClass="it-team-title-box "
            subTitle="The Vitals360®"
            title="Vital Signs Monitor Overview"
          />
          <div className="it-team-text">
            <p
              style={{
                fontSize: "13px",
                textAlign: "justify",
              }}
            >
              The Vitals360® vital signs monitor device is designed to support
              remote patient healthcare needs surrounding easy access to
              patient’s care team, including easy to manage and low cost remote
              patient monitoring. Automatic alert notification capability for
              messaging to the care team, when patient vitals being monitored
              fall outside of expected ranges; this available functionality
              provides families peace of mind regarding their loved one’s care.
            </p>
          </div>
          <div className="it-team-text">
            <p
              style={{
                fontSize: "13px",
                textAlign: "justify",
              }}
            >
              VoCare’s Vitals360® is the world’s first vital signs device to
              provide mobile tele-health remote patient monitoring capability in
              ONE advanced professional vital signs monitoring device. The
              Vitals V360 can acts as its own stand-alone wireless hub (thus
              eliminating the need for an additional external device such as a
              tablet or phone).
            </p>
          </div>
          <div className="it-team-text">
            <p
              style={{
                fontSize: "13px",
                textAlign: "justify",
              }}
            >
              The Vitals360® device can be connected to all major wireless
              carriers worldwide. Wi-Fi and Bluetooth capabilities allow for
              easy connectivity utilizing a cloud based tele-medicine platform
              solution to collaboratively manage a patient’s healthcare
              information. For providers with an existing EMR/EHR system, VoCare
              offers integration services to load captured patient data coming
              from the Vitals360® Device.
            </p>
          </div>
          <div className="it-team-text">
            <p
              style={{
                fontSize: "13px",
                textAlign: "justify",
              }}
            >
              The Vitals360® device combines 6 medical peripherals into a single
              hub that is small enough to fit in the palm of your hand. Vitals
              measured are Blood Pressure Monitor, Temperature Monitor, ECG
              Monitor, Weight, Blood Glucose Levels (not yet available in the
              USA), and Blood Oxygen Monitor.
            </p>
          </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </div>
  );
};

export default VitalSignMonitor;
