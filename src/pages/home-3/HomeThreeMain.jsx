import React from "react";
import Contact from "./ContactSection";
import FunFact from "./FunFactSection";
import Banner from "./HomeThreeBanner";
import Testimonial from "./TestimonialSection";
import VitalsMonitor from "./VitalsMonitor";
import PointofCare from "./PointofCare";
import VitalSignMonitor from "./VitalSignMonitor";
import FaqDropDown from "./FaqDropDown";
import RealTimeData from "./RealTimeData";

const HomeThreeMain = () => {
  return (
    <main>
      <Banner />
      <FunFact />
      <VitalsMonitor />
      <PointofCare />
      <VitalSignMonitor />
      <FaqDropDown />
      <RealTimeData />
      <Testimonial />
      <Contact />
    </main>
  );
};
export default HomeThreeMain;
