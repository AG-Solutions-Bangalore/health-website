import React from "react";
import About from "./AboutSection";
import Blog from "./BlogSection";
import Career from "./CareerSection";
import Category from "./CategorySection";
import Contact from "./ContactSection";
import Course from "./CourseSection";
import Event from "./EventSection";
import FunFact from "./FunFactSection";
import Banner from "./HomeThreeBanner";
import Testimonial from "./TestimonialSection";
import Video from "./VideoSection";
import Work from "./WorkSection";
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








      <Category />
      <About />
      <FunFact />
      <Course />
      <Video />
      <Work />
      <Career />
      <Testimonial />
      <Contact />
      <Event />
      <Blog />
    </main>
  );
};
export default HomeThreeMain;
